class AddDateToWorkouts < ActiveRecord::Migration[5.0]
  def change
    add_column :workouts, :date, :string
  end
end
