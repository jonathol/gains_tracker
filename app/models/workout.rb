class Workout < ApplicationRecord
  has_many :exercises

  def as_json(options = {})
    super(options.merge(include: :exercises))
  end
end
