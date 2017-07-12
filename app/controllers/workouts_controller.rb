class WorkoutsController < ApplicationController
  def index
    respond_with Workout.all
  end

  def show
    respond_with Workout.find(params[:id])
  end

  def create
    respond_with Workout.create(workout_params)
  end

  def update
    respond_with Workout.update(params[:id], workout_params)
  end

  def destroy
    respond_with Workout.destroy(params[:id])
  end

  private

  def workout_params
    params.require(:workout).permit(:date, :workout, :notes, :length)
  end

  def find_workout
  end
end
