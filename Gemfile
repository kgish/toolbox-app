source 'https://rubygems.org'

ruby '2.4.1'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.1'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

gem 'jquery-rails'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'

# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
#gem 'bcrypt', '~> 3.1.7'

gem 'rack-cors', :require => 'rack/cors'

gem 'bootstrap-sass'

gem 'font-awesome-rails'

gem 'simple_form'
# gem 'simple_form', github: 'elsurudo/simple_form', branch: 'rails-5.1.0'

gem 'devise'
# gem 'devise', git: 'https://github.com/gogovan/devise.git', branch: 'rails-5.1'
# gem 'erubis'

# gem 'pundit', '~> 0.3.0'

gem 'will_paginate', '~> 3.0.6'
gem 'will_paginate-bootstrap'

gem 'carrierwave'
gem 'mini_magick'

gem 'bootsy'
gem 'data-confirm-modal'
gem 'gon'
gem 'dotenv-rails'

group :development, :test do
  gem 'awesome_print'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'byebug', platform: :mri
  gem 'pry-rails'
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :development do
  gem 'capistrano',         require: false
  gem 'capistrano-bundler', require: false
  gem 'capistrano-rails',   require: false
  gem 'capistrano-rails-console', require: false
  gem 'capistrano-rake',    require: false
  gem 'capistrano-rvm',     require: false
  gem 'capistrano3-puma',   require: false
  gem 'capistrano-dotenv-tasks', require: false
end
