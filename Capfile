# Load DSL and Setup Up Stages
require 'capistrano/setup'

require 'capistrano/deploy'

require 'capistrano/rails'
require 'capistrano/passenger'

require 'capistrano/bundler'
require 'capistrano/rails/assets'
require 'capistrano/rails/migrations'

require 'capistrano/rvm'
set :rvm_type, :user
set :rvm_ruby_version, '2.4.0'

# Loads custom tasks from `lib/capistrano/tasks' if you have any defined.
Dir.glob('lib/capistrano/tasks/*.rake').each { |r| import r }

