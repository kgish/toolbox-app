class Tool < ApplicationRecord
  validate :name, :icon, :color, :title, :text, :content, presence: true
end
