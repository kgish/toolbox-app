require 'faker'

User.delete_all

User.create!(
  email: 'kiffin.gish@planet.nl',
  password: 'adm1n-t00lb0x-01',
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
    title: 'Annotate'
  },
  {
    name: 'planner',
    icon: 'calendar',
    title: 'Planner'
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
    color: index,
    text: Faker::Lorem.sentence,
    content: Faker::Lorem.paragraph
  )
end
