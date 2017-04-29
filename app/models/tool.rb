class Tool < ApplicationRecord
  include Bootsy::Container

  validates :name, presence: true, uniqueness: true
  validates :icon, presence: true
  validates :color, presence: true
  validates :title, presence: true
  validates :text, presence: true
  validates :content, presence: true
end
