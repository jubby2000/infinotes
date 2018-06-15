# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# PREFER rails db:setup
demo = User.create({username: "hgranger", password: "leviosa"})
notebook = Notebook.create({title: "Notebook1", user_id: demo.id})
Notebook.create({title: "Notebook2", user_id: demo.id})
Notebook.create({title: "Notebook3", user_id: demo.id})
Notebook.create({title: "Notebook4", user_id: demo.id})
Notebook.create({title: "Notebook5", user_id: demo.id})

tag1 = Tag.create({name: "Tag1"})
tag2 = Tag.create({name: "Tag2"})
tag3 = Tag.create({name: "Tag3"})
tag4 = Tag.create({name: "Tag4"})

note1 = Note.create({title: "Note1", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, maiores, consequatur sapiente esse vitae dolor quo laborum tempora reprehenderit molestiae expedita in eveniet sequi magni atque eos ipsa nostrum corporis.", notebook_id: notebook.id})
note2 = Note.create({title: "Note2", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, maiores, consequatur sapiente esse vitae dolor quo laborum tempora reprehenderit molestiae expedita in eveniet sequi magni atque eos ipsa nostrum corporis.", notebook_id: notebook.id})
note3 = Note.create({title: "Note3", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, maiores, consequatur sapiente esse vitae dolor quo laborum tempora reprehenderit molestiae expedita in eveniet sequi magni atque eos ipsa nostrum corporis.", notebook_id: notebook.id})
note4 = Note.create({title: "Note4", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, maiores, consequatur sapiente esse vitae dolor quo laborum tempora reprehenderit molestiae expedita in eveniet sequi magni atque eos ipsa nostrum corporis.", notebook_id: notebook.id})

note1.updated_at = (rand*10).days.ago
note2.updated_at = (rand*10).days.ago
note3.updated_at = (rand*10).days.ago
note4.updated_at = (rand*10).days.ago
note1.save
note2.save
note3.save
note4.save

Tagging.create!({ note_id: note1.id, tag_id: tag1.id })
Tagging.create!({ note_id: note2.id, tag_id: tag2.id })
Tagging.create!({ note_id: note3.id, tag_id: tag3.id })
Tagging.create!({ note_id: note4.id, tag_id: tag4.id })