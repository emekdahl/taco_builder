class CreateTacos < ActiveRecord::Migration[6.0]
  def change
    create_table :tacos do |t|
      t.string :title
      t.string :base
      t.string :filling
      t.string :sauce
      t.string :garnish
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
