class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.timestamps
    end
    add_index :users, :username
  end
end
