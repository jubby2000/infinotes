# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Notebook.destroy_all
demo = User.create({username: "hgranger", password: "leviosa"})
Notebook.create({title: "Notebook1", user_id: demo.id})
Notebook.create({title: "Notebook2", user_id: demo.id})
Notebook.create({title: "Notebook3", user_id: demo.id})
Notebook.create({title: "Notebook4", user_id: demo.id})
Notebook.create({title: "Notebook5", user_id: demo.id})