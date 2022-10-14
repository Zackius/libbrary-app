class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
review = Review.all
render json: review
    end
    def show
        review = Review.find(params[:id])
        render json: review 
    end

    def create
        review =Review.create(review_params)
        render json: review, status: :created
            end


    private

    def review_params
params.permit(:comments,  :username)
    end
end
