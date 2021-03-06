$(function() {

    var gantt_planner = $('.gantt-planner');
    if (gantt_planner.length) {

        var tasks = {
            "data": [
                { "id": 11, "text": "Project #1", "start_date": "", "duration": "", "progress": 0.6, "open": true },
                { "id": 12, "text": "Task #1",    "start_date": "03-04-2017", "duration": "5", "parent": "11", "progress": 1, "open": true },
                { "id": 13, "text": "Task #2",    "start_date": "", "duration": "", "parent": "11", "progress": 0.5, "open": true },
                { "id": 14, "text": "Task #3",    "start_date": "02-04-2017", "duration": "6", "parent": "11", "progress": 0.8, "open": true },
                { "id": 15, "text": "Task #4",    "start_date": "", "duration": "", "parent": "11", "progress": 0.2, "open": true },
                { "id": 16, "text": "Task #5",    "start_date": "02-04-2017", "duration": "7", "parent": "11", "progress": 0, "open": true },
                { "id": 17, "text": "Task #2.1",  "start_date": "03-04-2017", "duration": "2", "parent": "13", "progress": 1, "open": true },
                { "id": 18, "text": "Task #2.2",  "start_date": "06-04-2017", "duration": "3", "parent": "13", "progress": 0.8, "open": true },
                { "id": 19, "text": "Task #2.3",  "start_date": "10-04-2017", "duration": "4", "parent": "13", "progress": 0.2, "open": true },
                { "id": 20, "text": "Task #2.4",  "start_date": "10-04-2017", "duration": "4", "parent": "13", "progress": 0, "open": true },
                { "id": 21, "text": "Task #4.1",  "start_date": "03-04-2017", "duration": "4", "parent": "15", "progress": 0.5, "open": true },
                { "id": 22, "text": "Task #4.2",  "start_date": "03-04-2017", "duration": "4", "parent": "15", "progress": 0.1, "open": true },
                { "id": 23, "text": "Task #4.3",  "start_date": "03-04-2017", "duration": "5", "parent": "15", "progress": 0, "open": true }
            ],
            "links": [
                {"id": "10", "source": "11", "target": "12", "type": "1"},
                {"id": "11", "source": "11", "target": "13", "type": "1"},
                {"id": "12", "source": "11", "target": "14", "type": "1"},
                {"id": "13", "source": "11", "target": "15", "type": "1"},
                {"id": "14", "source": "11", "target": "16", "type": "1"},
                {"id": "15", "source": "13", "target": "17", "type": "1"},
                {"id": "16", "source": "17", "target": "18", "type": "0"},
                {"id": "17", "source": "18", "target": "19", "type": "0"},
                {"id": "18", "source": "19", "target": "20", "type": "0"},
                {"id": "19", "source": "15", "target": "21", "type": "2"},
                {"id": "20", "source": "15", "target": "22", "type": "2"},
                {"id": "21", "source": "15", "target": "23", "type": "2"}
            ]
        };

        gantt_planner.html('');
        gantt_planner.css({ height: '500px'});
        gantt_planner.append('<div id="gantt_here" style="width:100%;height:100%"></div>');
        gantt.init('gantt_here');
        // gantt.init('gantt_here', new Date(2017, 3, 1), new Date(2017, 3, 15));
        gantt.parse(tasks);
    }

    var elem_annotate = $('.annotate');
    if (elem_annotate.length) {

        var windowLocationURI = function() {
            // We want to pass the uri to the store server, however we first need to strip off the
            // query string (?) and/or the fragment (#) as well as the reply_id if present,
            // e.g. /path/to/.../11/2 => /path/to/.../11
            var uri = encodeURI(window.location.href.split('?')[0]);
            uri = uri.split('#')[0];
            if (/\/\d+\/\d+$/.test(uri)) {
                uri = uri.replace(/\/\d+$/,'');
            }
            return uri;
        };

        var getTopicId = function() {
            return 1000 + parseInt(current_user.id);
        };

        var getTopicTitle = function() {
            return 'Participation Tool - Annotate - ' + getTopicId();
        };

        var annotator = elem_annotate.annotator({
            readOnly: !current_user || current_user.id === ''
        });

        annotator.annotator('addPlugin', 'Unsupported');
        annotator.annotator('addPlugin', 'Tags');
        annotator.annotator('addPlugin', 'Filter');
        // annotator.annotator('addPlugin', 'Markdown');

        annotator.annotator('addPlugin', 'Store', {
            prefix: annotator_store_url,
            urls: {
                // These are the default URLs.
                create: '/annotations',
                update: '/annotations/:id',
                destroy: '/annotations/:id',
                search: '/annotations/search'
            },
            annotationData: {
                topic_id: getTopicId(),
                topic_title: getTopicTitle()
                // checksum: topic_checksum
            },
            loadFromSearch: {
                topic_id: getTopicId(),
                uri: windowLocationURI()
            }
        }); // add plugin Store

        annotator.annotator('addPlugin', 'Permissions', {
            user: current_user ? { id: current_user.id, name: current_user.username } : undefined,
            permissions: {
                'read': [], // Anyone can read the annotation
                // But only the author may update or delete it.
                'update': current_user ? [current_user.id] : [],
                'delete': current_user ? [current_user.id]: [],
                'admin': current_user ? [current_user.id] : []
            },
            showViewPermissionsCheckbox: true,
            showEditPermissionsCheckbox: true,
            userId: function (user) {
                if (user && user.id) {
                    return user.id;
                }

                return user;
            },
            userString: function (user) {
                if (user && user.name) {
                    return user.name;
                }

                return user;
            }
        }); // add plugin Permissions

        // Move the filter toolbat at the top of the window to the top of the content.
        var annotator_filter = $('.annotator-filter');
        if (annotator_filter.length) {
            var el = annotator_filter.detach();
            el.css({
                position: 'relative',
                boxShadow: 'none',
                backgroundImage: 'none'
            });
            el.appendTo('.main-heading');
        }
    }
});
