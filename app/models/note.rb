# == Schema Information
#
# Table name: notes
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  body        :string
#  notebook_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
  validates :title, length: {minimum: 1}
  
  belongs_to :notebook
  
  has_many :taggings
  
  has_many :tags,
  through: :taggings,
  source: :tag
end
