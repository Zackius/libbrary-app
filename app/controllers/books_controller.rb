class BooksController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action  :authorize
    skip_before_action :authorize, only:  [:index]
   
     
    def show
book = Book.find(params[:id])
render json: book
    end
 def create 
    book = Book.create(book_params)
    render json:  book,   status: :created
 end 
    def index
        book = Book.all 
        render json: book
    end
    def destroy
book = Book.find(params[:id])
book.destroy
head :no_content
    end
    def update
        book = Book.find_by(id:  params[:id])
        if book
            book.update(book_params)
            render json: book
            else
                render_not_found_response
        end

    end

    private

    def book_params
params.permit(:title,  :image,  :author,  :description,  :price)
    end
    def render_not_found_response
        render json: {error: "Book not found"},  status: :not_found
    end

    def authorize
return render json: {error:  "Not authorized"}, status:  :unauthorized
    end
end