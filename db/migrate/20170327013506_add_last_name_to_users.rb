class AddLastNameToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :lastName, :string
  end
end
