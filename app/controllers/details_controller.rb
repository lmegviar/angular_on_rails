class DetailsController < ApplicationController

	def create
		article = Article.find(params[:article_id])
		comment = article.details.create(detail_params)
		respond_with article, detail
	end

	private
	def comment_params
		params.require(:detail).permit(:body)
	end
end
