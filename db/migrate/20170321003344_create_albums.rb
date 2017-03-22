class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|

      t.timestamps
    end
  end
end
