# # SessionsController
# class SessionsController < ApplicationController
#   def create
#     user = User.find_by(email: params[:session][:email].downcase)
#     if user && user.authenticate(params[:session][:password])
#       sign_in user
#       render json: @user, status: 301
#     else
#       render json: { error: 'Invalid email/password combination' }, status: 500
#     end
#   end

#   def destroy
#     sign_out
#     render json: {}, status: 204
#   end
# end
