# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# PREFER rails db:setup
demo = User.create({username: "hgranger", password: "leviosa"})
potions = Notebook.create({title: "Potions", user_id: demo.id})
todos = Notebook.create({title: "Todos", user_id: demo.id})
inspiration = Notebook.create({title: "Inspiration", user_id: demo.id})

tag1 = Tag.create({name: "unfinished"})
tag2 = Tag.create({name: "private"})
tag3 = Tag.create({name: "hogwarts"})
tag4 = Tag.create({name: "voldy stuff"})

note1 = Note.create({title: "Basic Sleeping Draft", body: "<p><strong><u>Use/Effect:</u></strong></p><p>The basic sleeping draft is to be used before bedtime in order to aid in sleeping. However, it should not be used longer than a week or two or one may start falling asleep at odd times of the day.</p><p><br></p><p><strong><u>Ingredients:</u></strong></p><ul><li>water (500mL)</li><li>lavender (a pinch; crushed)</li><li>chamomile (a handful; crushed)</li><li>for nightmares: purslane (a pinch)</li><li>for more powerful brew: ginger (a pinch)</li></ul><p><br></p><p><strong><u>Instructions:</u></strong></p><ul><li>Bring water to a slow boil.</li><li>Add lavender and stir 21 times, counter-clockwise.</li><li>Add chamomile and let simmer for 20 minutes (potion should be pale, clear, purple with a tint of green, though the green may not always be observable)</li><li>For nightmares: add a pinch of purslane and stir 5 times, counter-clockwise</li><li>For a more powerful brew: add a pinch of ginger and stir 5 times, counter-clockwise</li></ul><p><br></p><p><strong><u>Notes:</u></strong></p><p>Potion can be stored for up to a month, though it is advisable to brew a fresh batch weekly.</p>", notebook_id: potions.id})
note2 = Note.create({title: "Polyjuice Potion", body: "<p>Independent of its actual brewing process, the Polyjuice Potion requires a good deal of preparation prior to making it. For example, the&nbsp;lacewing flies&nbsp;must be stewed for twenty-one days prior to making the potion, and only&nbsp;fluxweed&nbsp;picked at the full moon is acceptable. The total process takes approximately one month to complete.</p><p><br></p><h4>Part 1, step one</h4><ol><li>Add 3 measures of fluxweed to the cauldron (must have been picked on a full moon).</li><li>Add 2 bundles of&nbsp;knotgrass&nbsp;to the cauldron.</li><li>Stir 4 times, clockwise.</li><li>Wave your wand then let potion brew for 80 minutes (for a&nbsp;Pewter Cauldron. A&nbsp;Brass Cauldron&nbsp;will only require 68, and a&nbsp;copper one&nbsp;only 60.)</li></ol><h4>Part 1, step two</h4><ol><li>Add 4&nbsp;leeches&nbsp;to the cauldron.</li><li>Add 2 scoops of lacewing flies to the mortar, crush to a fine paste, then add 2 measures of the crushed lacewings to the cauldron.</li><li>Heat for 30 seconds on a low heat.</li><li>Wave your wand to complete this stage of the potion.</li></ol><h4>Part 2, step one</h4><ol><li>Add 3 measures of&nbsp;boomslang skin&nbsp;to the cauldron.</li><li>Add 1 measure of&nbsp;bicorn horn&nbsp;to the mortar, crush to a fine powder, then add one measure of the crushed horn to the cauldron.</li><li>Heat for 20 seconds at a high temperature.</li><li>Wave your wand then let potion brew for 24 hours (for a Pewter Cauldron. A Brass Cauldron will only require 1224 minutes, and a copper one only 18 hours.)</li></ol><h4>Part 2, step two</h4><ol><li>Add 1 additional scoop of lacewings to the cauldron.</li><li>Stir 3 times, counter-clockwise.</li><li>Split potion into multiple doses, if desired, then add the pieces of the person you wish to become.</li><li>Wave your wand to complete the potion.</li></ol><p><br></p>", notebook_id: potions.id})
note3 = Note.create({title: "Draught of Living Death", body: "<p>The following recipe can be followed to brew this potion: </p><p><br></p><ol><li>Add the&nbsp;Infusion of Wormwood.</li><li>Add the powdered root of&nbsp;asphodel.</li><li>Stir twice clockwise.</li><li>Add the sloth brain.</li><li>Add the&nbsp;Sopophorous bean's&nbsp;juice.</li><li>Stir seven times anti-clockwise.</li></ol><p><br></p><h3>From Harry's book that I told him to get rid of but he won't:</h3><ul><li>The Sopophorous bean should be crushed with a&nbsp;silver&nbsp;dagger, not cut, releases juices more efficiently.</li><li>The juice from 13 Sopophorous beans should be used, rather than 12.</li><li>Stir anticlockwise seven times and clockwise once instead.</li></ul><p><br></p>", notebook_id: potions.id})

note4 = Note.create({title: "Summer Reading List", body: "<ul><li><s>The Standard Book of Spells (Grade 1)&nbsp;by Miranda Goshawk</s></li><li><s>Magical Theory&nbsp;by Adalbert Waffling</s></li><li>Quidditch Through the Ages (... ugh. No thanks)</li><li><s>A Beginners’ Guide to Transfiguration&nbsp;by Emeric Switch</s></li><li><s>One Thousand Magical Herbs and Fungi&nbsp;by Phyllida Spore</s></li><li><s>Magical Drafts and Potions&nbsp;by Arsenius Jigger</s></li><li><s>Fantastic Beasts and Where to Find Them&nbsp;by&nbsp;Newt Scamander</s></li><li>The Dark Forces: A Guide to Self-Protection&nbsp;by Quentin Trimble</li></ul>", notebook_id: todos.id})
note5 = Note.create({title: "Weekly", body: "<ul><li>Write Harry (again)</li><li>Write Ron (again)</li><li>Do a bit of light reading</li><li>Wipe my parents' memories so they won't be sad when I'm gone : (</li></ul>", notebook_id: todos.id})
note6 = Note.create({title: "Horcruxes Destroyed", body: "<ol><li><s>Tom Riddle's diary</s> nice one Harry</li><li><s>Marvolo Gaunt's Ring</s> RIP Dumbledore</li><li>Salazar Slytherin's Locket</li><li>Something from Hufflepuff&nbsp;</li><li>Something of Ravenclaw's&nbsp;</li><li>?</li><li>Maybe Nagini?</li></ol><p><br></p><p><span class=\"ql-size-large\">WHERE IS THAT LOCKET?!</span></p>", notebook_id: todos.id})

note7 = Note.create({title: "Stuff Dumblesore says", body: "<p><br></p><blockquote><span class=\"ql-size-large\">It does not do to dwell on dreams and forget to live.</span></blockquote><h3><br></h3><blockquote><span class=\"ql-size-large\">It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.</span></blockquote><p><br></p><blockquote><span class=\"ql-size-large\">It is our choices, Harry, that show what we truly are, far more than our abilities.</span></blockquote><p><br></p><blockquote><span class=\"ql-size-large\">Have you any idea how much tyrants fear the people they oppress? All of them realize that, one day, amongst their many victims, there is sure to be one that rises against them and strikes back!</span></blockquote>", notebook_id: inspiration.id})
note8 = Note.create({title: "Stuff Ron says <3", body: "<blockquote><span class=\"ql-size-huge\">Accio Brain!</span></blockquote><p>&nbsp;&nbsp;</p><blockquote><span class=\"ql-size-large\">Percy wouldn’t recognize a joke if it danced naked in front of him wearing Dobby’s tea cozy.</span></blockquote><p>&nbsp;</p><blockquote><span class=\"ql-size-large\">Yeah, I’ve seen those things they think are gnomes, like fat little Santa Clauses with fishing rods…</span></blockquote><p><br></p><blockquote><span class=\"ql-size-large\">I’ll fix it up with Mum and Dad, then I’ll call you. I know how to use a fellytone now.</span></blockquote><p>lolololololol</p>", notebook_id: inspiration.id})

years1 = ((rand*10).to_int).years.ago
years2 = ((rand*10).to_int).years.ago
years3 = ((rand*10).to_int).years.ago
years4 = ((rand*10).to_int).years.ago
years5 = ((rand*10).to_int).years.ago
years6 = ((rand*10).to_int).years.ago
years7 = ((rand*10).to_int).years.ago
years8 = ((rand*10).to_int).years.ago
note1.updated_at = years1
note2.updated_at = years2
note3.updated_at = years3
note4.updated_at = years4
note5.updated_at = years5
note6.updated_at = years6
note7.updated_at = years7
note8.updated_at = years8
note1.created_at = years1
note2.created_at = years2
note3.created_at = years3
note4.created_at = years4
note5.created_at = years5
note6.created_at = years6
note7.created_at = years7
note8.created_at = years8
note1.save
note2.save
note3.save
note4.save
note5.save
note6.save
note7.save
note8.save

Tagging.create!({ note_id: note1.id, tag_id: tag3.id })
Tagging.create!({ note_id: note2.id, tag_id: tag2.id })
Tagging.create!({ note_id: note2.id, tag_id: tag1.id })
Tagging.create!({ note_id: note3.id, tag_id: tag1.id })
Tagging.create!({ note_id: note3.id, tag_id: tag2.id })
Tagging.create!({ note_id: note3.id, tag_id: tag3.id })
Tagging.create!({ note_id: note3.id, tag_id: tag4.id })
Tagging.create!({ note_id: note4.id, tag_id: tag1.id })
Tagging.create!({ note_id: note4.id, tag_id: tag3.id })
Tagging.create!({ note_id: note5.id, tag_id: tag1.id })
Tagging.create!({ note_id: note6.id, tag_id: tag4.id })
Tagging.create!({ note_id: note6.id, tag_id: tag2.id })
Tagging.create!({ note_id: note7.id, tag_id: tag3.id })
Tagging.create!({ note_id: note7.id, tag_id: tag4.id })
Tagging.create!({ note_id: note8.id, tag_id: tag2.id })
