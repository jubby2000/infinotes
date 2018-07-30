# == Schema Information
#
# Table name: tags
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Tag < ApplicationRecord
  validates :name, length: {minimum: 1}, uniqueness: true
  validates :user_id, presence: true
  has_many :taggings, dependent: :destroy

  has_many :notes,
  through: :taggings,
  source: :note

  belongs_to :user
end
