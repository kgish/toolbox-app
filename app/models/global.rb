class Admin::Dashboard::Tool < ApplicationRecord
  validates :key, presence: true, uniqueness: true
  validates :value, presence: true
end
