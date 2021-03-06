require 'faker'

User.delete_all

User.create!(
  email: 'kiffin.gish@planet.nl',
  password: 'kiffin',
  username: 'kiffin',
  firstname: 'Kiffin',
  lastname: 'Gish',
  company: 'Gishtech',
  admin: true
)

User.create!(
  email: 'raoul@socioneers.com',
  password: 'adm1n-t00lb0x-02',
  username: 'raoul',
  firstname: 'Raoul',
  lastname: 'Kramer',
  company: 'Socioneers',
  admin: true
)

User.create!(
  email: 'info@michaelnieuwenweg.nl',
  password: 'adm1n-t00lb0x-03',
  username: 'michael',
  firstname: 'Michael',
  lastname: 'Nieuwenweg',
  company: 'Socioneers',
  admin: true
)

User.create!(
  email: 'demo@socioneers.com',
  password: 'demo123',
  username: 'demo',
  firstname: 'Day',
  lastname: 'Mo',
  company: 'Socioneers',
  admin: false
)

Tool.delete_all

[
  {
    name: 'personalization',
    icon: 'user-circle',
    title: 'Personalization'
  },
  {
    name: 'search',
    icon: 'search',
    title: 'Search'
  },
  {
    name: 'forum',
    icon: 'forumbee',
    title: 'Forum'
  },
  {
    name: 'proposal',
    icon: 'pencil-square',
    title: 'Proposal'
  },
  {
    name: 'vote',
    icon: 'thumbs-o-up',
    title: 'Vote'
  },
  {
    name: 'annotate',
    icon: 'paperclip',
    title: 'Annotate',
    text: 'Select text below to create annotations',
    content: "<p>#{Faker::Lorem.paragraphs(10, 10).join('</p><p>')}</p>"
  },
  {
    name: 'gantt-planner',
    icon: 'th-list',
    title: 'Planner',
    text: 'Advanced Gantt Chart',
    content: '...'
  },
  {
    name: 'budget',
    icon: 'euro',
    title: 'Budget'
  },
  {
    name: 'archive',
    icon: 'archive',
    title: 'Archive'
  },
  {
    name: 'secure-cloud',
    icon: 'cloud',
    title: 'Secure cloud'
  },
  {
    name: 'single-sign-on',
    icon: 'sign-in',
    title: 'Single sign-on'
  },
  {
    name: 'open-source',
    icon: 'github',
    title: 'Open source'
  }
].each_with_index do |tool, index|
  Tool.create!(
    name: tool[:name],
    icon: tool[:icon],
    title: tool[:title],
    color: index % 20,
    text: tool[:text] || Faker::Lorem.sentence,
    content: tool[:content] || Faker::Lorem.paragraph
  )
end

Theme.delete_all

Theme.create!(
       name: 'socioneers'
)

Global.delete_all

[
  {
    key: 'app-name',
    value: 'Participation-tools'
  },
  {
    key: 'annotator-store-url',
    value: Rails.env === 'production' ? 'https://annotatorjs-server-dev.herokuapp.com' : 'http://localhost:3001'
  }
].each do |item|
  Global.create!(item)
end
