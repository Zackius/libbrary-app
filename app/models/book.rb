class Book < ApplicationRecord
    has_many  :reviews

    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    validates  :image, presence: true
    validates :author, presence: true, uniqueness: true
    validates :price, presence:  true
end
