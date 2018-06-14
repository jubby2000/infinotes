# == Schema Information
#
# Table name: tags
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :name, length: {minimum: 1}, uniqueness: true
  has_many :taggings

  has_many :notes,
  through: :taggings,
  source: :note
end
