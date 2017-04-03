# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#User.create!(firstName: "guest", lastName: "guest", username: "guest", email: "guest@guest.com", password: "password")

araabmuzik = Artist.create(name: "Araabmuzik", image: "http://primarytalent.com/artists/araabmuzik/images/x310/1.jpg")
electronicDream = Album.create(title: "Electoric Dream", year: 2011, artist: araabmuzik, image: "https://s3.amazonaws.com/tidal-clone-dev/Araab_Muzik_Electronic_Dream-front-large.jpg")
goldenTouch = Song.create(title: "Golden Touch", album_id: electronicDream.id,
 audio: "https://s3.amazonaws.com/tidal-clone-dev/03+-+-+Araabmuzik+-+Golden+Touch.mp3",
 image: "https://s3.amazonaws.com/tidal-clone-dev/Araab_Muzik_Electronic_Dream-front-large.jpg")
