class RemoveWorkoutFromWorkouts < ActiveRecord::Migration[5.0]
  def change
    remove_column :workouts, :workout, :string
  end
end
