class CreateArtists < ActiveRecord::Migration[5.0]
  def change
    create_table :artists do |t|
      t.name, null: false

      t.timestamps
    end
  end
end
