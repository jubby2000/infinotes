class CreateNotebooks < ActiveRecord::Migration[5.1]
  def change
    create_table :notebooks do |t|
      t.string :title, null: false, unique: true
      t.integer :user_id

      t.timestamps
    end
    add_index :notebooks, :user_id
  end
end
