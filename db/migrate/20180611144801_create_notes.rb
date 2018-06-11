class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.string :body
      t.integer :notebook_id

      t.timestamps
    end
    add_index :notes, :notebook_id
  end
end
