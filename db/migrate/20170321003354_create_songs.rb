class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.references :album, null: false
      t.timestamps
    end
  end
end
