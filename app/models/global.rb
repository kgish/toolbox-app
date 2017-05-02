class Global < ApplicationRecord
  validates :key, presence: true, uniqueness: true
  validates :value, presence: true
  validates :description, presence: true, allow_blank: true
end
