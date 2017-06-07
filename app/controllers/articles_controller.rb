class ArticlesController < ApplicationController

	def index
		respond_with Article.all
	end

	def create
		respond_with Article.create(article_params)
	end

	def show
		respond_with Article.find(params[:id])
	end

	def destroy
		respond_with Article.find(params[:id]).destroy
	end

	private
	def article_params
		params.require(:article).permit(:title, :url, :level)
	end
end
