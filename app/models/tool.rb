class Tool < ApplicationRecord
  validates :name, presence: true
  validates :icon, presence: true
  validates :color, presence: true
  validates :title, presence: true
  validates :text, presence: true
  validates :content, presence: true
end
