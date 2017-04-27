class Admin::Dashboard::Theme < ApplicationRecord
  validates :name, presence: true
end
