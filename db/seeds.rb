# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

articles = Article.create([
	{title: 'Great Article!', level: 245, url: 'something.com'},
	{title: 'Second Article!', level: 445, url: 'google.com'},
	{title: 'Third Article!', level: 705, url: 'third.com'},
	{title: 'Fourth Article!', url: 'yahoo.com'},
	{title: 'Fifth Article!', level: 90}
])
