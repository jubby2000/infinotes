class AddTagIndex < ActiveRecord::Migration[5.1]
  def change
    add_index :tags, :name, unique: true
  end
end
