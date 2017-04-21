class Tool < ApplicationRecord
  validate :name, :icon, :color, :title, :text, presence: true
end
