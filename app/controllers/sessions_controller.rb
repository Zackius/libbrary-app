class SessionsController < ApplicationController
    def login
user = User.find_by(username:  user_login_params[:username])

if user &&  user.authenticate(user_login_params[:password])
session[user_id] = user.id 
render json: user, status: :created
else
render json: {error: "Invalid username or password"}, status: :unauthorized
end
    end
 
    def register 
user = User.create(user_register_params); 
if user.valid? 
    render json: {user: UserSerializer.new(user)}, status: :created;
else 
render json: {error: "User was not created"}, status: :unprocessable_entity
end
    end

    private
    def user_register_params
params.permit(:username, :email, :password)
    end

    def user_login_params
params.permit(:username, password)
    end


end