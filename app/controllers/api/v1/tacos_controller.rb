class Api::V1::TacosController < ApplicationController
    before_action :authenticate_user!
    before_action :set_taco, only: [:show, :edit, :update, :destroy]
    def index
        @tacos = current_user.tacos.all
    end
    def show
        if authorized?
            respond_to do |format|
              format.json { render :show }
            end
        else
            handle_unauthorized
        end
    end
    def create
        @taco = current_user.tacos.build(taco_params)
        if authorized?
            respond_to do |format|
            if @taco.save
                format.json { render :show, status: :created, location: api_v1_taco_path(@taco) }
            else
                format.json { render json: @taco.errors, status: :unprocessable_entity }
            end
            end
        else
            handle_unauthorized
        end
    end
    def update
        if authorized?
            respond_to do |format|
              if @taco.update(taco_params)
                format.json { render :show, status: :ok, location: api_v1_taco_path(@taco) }
              else
                format.json { render json: @taco.errors, status: :unprocessable_entity }
              end
            end
        else
            handle_unauthorized
        end
    end
    def destroy
        if authorized?
            @taco.destroy
            respond_to do |format|
              format.json { head :no_content }
            end
        else
            handle_unauthorized
        end
    end
    private
        def set_taco
            @taco = Taco.find(params[:id])
        end

        def authorized?
            @taco.user == current_user
        end

        def handle_unauthorized
            unless authorized?
              respond_to do |format|
                format.json { render :unauthorized, status: 401 }
              end
            end
        end

        def taco_params
            params.require(:taco).permit(:title, :base, :filling, :sauce, :garnish)
        end
end
