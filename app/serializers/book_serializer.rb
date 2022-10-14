class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :author, :description, :price
end
