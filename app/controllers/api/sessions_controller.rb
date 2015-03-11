# SessionsController
class Api::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      sign_in user
      render json: user, status: 200
    else
      render json: { error: 'Invalid email or password' }, status: 422
    end
  end

  def destroy
    sign_out
    render json: {}, status: 204
  end
end
