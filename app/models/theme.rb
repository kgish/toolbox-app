class Theme < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true, allow_blank: true
end
