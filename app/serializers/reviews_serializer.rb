class ReviewsSerializer < ActiveModel::Serializer
  attributes :id,  :comments, :id 
  has_one  :user
  has_one :book
end
