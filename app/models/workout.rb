class Workout < ApplicationRecord
  has_many :exercises
  belongs_to :user

  def as_json(options = {})
    super(options.merge(include: [:user, :exercises]))
  end
end
