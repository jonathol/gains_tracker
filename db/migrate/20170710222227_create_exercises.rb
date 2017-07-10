class CreateExercises < ActiveRecord::Migration[5.0]
  def change
    create_table :exercises do |t|
      t.
      t.string :name
      t.integer :sets
      t.integer :reps
      t.text :notes
      t.timestamps
    end

    add_index :
  end
end
