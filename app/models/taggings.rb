# == Schema Information
#
# Table name: taggings
#
#  id      :bigint(8)        not null, primary key
#  note_id :integer          not null
#  tag_id  :integer          not null
#

class Taggings < ApplicationRecord
  validates :note_id, uniqueness: {scope: :tag_id, message: "cannot have duplicate tags"}
  belongs_to :notes
  belongs_to :tags
end
