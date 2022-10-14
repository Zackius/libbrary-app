class ReviewsSerializer < ActiveModel::Serializer
  attributes :id,  :comments, :username
end
