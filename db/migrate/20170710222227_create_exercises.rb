class CreateExercises < ActiveRecord::Migration[5.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.integer :sets
      t.integer :reps
      t.text :notes
      t.references :workout, index: true
      t.timestamps
    end

  
  end
end
