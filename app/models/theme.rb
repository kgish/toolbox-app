class Theme < ApplicationRecord
  mount_uploader :logo, ImageUploader

  validates :name, presence: true, uniqueness: true
  validates :description, presence: true, allow_blank: true
end
