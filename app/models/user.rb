class User < ApplicationRecord
    has_secure_password
    has_many  :reviews

    validates :username,  presence:  true
    validates  :email,  presence:  true, uniqueness:  true
    validates :password,  length:  {minimum: 6}

end
