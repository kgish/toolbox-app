# Toolbox App

This is the future famous toolbox-app which exposes a simple interface for collections of tools, kinda like a portal.

## Introduction


## Installation


## User guide

    $ cap production deploy
    $ cap production invoke:rake TASK=db:seed

## Other stuff

@Kiffin: I made some changes to the nginx config:

the config is in `/etc/nginx/sites-available/demo.participation.tools`
with a symlink in `/etc/nginx/sites-enabled/`

http automatically redirects to https

@Kiffin: I had to add these headers again to the apache2 configuration

```
Header always set Access-Control-Max-Age "1000"
Header always set Access-Control-Allow-Headers "X-Requested-With, Content-Type, Authorization, Accept, Client-Security-Token, Accept-Encoding"
Header always set Access-Control-Allow-Methods "POST, GET, OPTIONS, DELETE, PUT"  
```

## Author

Kiffin Gish \< kiffin.gish@planet.nl \>

[Gishtech](http://gishtech.com)
Advanced Software Development for the Web

"You're never too old to learn new stuff..."
