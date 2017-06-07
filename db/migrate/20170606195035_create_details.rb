class CreateDetails < ActiveRecord::Migration[5.1]
  def change
    create_table :details do |t|
      t.string :body
      t.references :article, foreign_key: true

      t.timestamps
    end
  end
end
