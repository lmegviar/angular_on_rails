class Article < ApplicationRecord
	has_many :details

	def as_json(options = {})
		super(options.merge(include: :details))
	end
end
