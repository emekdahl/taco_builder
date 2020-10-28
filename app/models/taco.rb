class Taco < ApplicationRecord
  default_scope { order(created_at: :desc) }
  
  belongs_to :user

  validates :title, presence: true
  validates :base, presence: true
  validates :filling, presence: true
  validates :sauce, presence: true
  validates :garnish, presence: true
end
