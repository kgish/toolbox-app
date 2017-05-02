class User < ApplicationRecord
  mount_uploader :photo, ImageUploader

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :trackable, :validatable
  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :company, presence: true
end
