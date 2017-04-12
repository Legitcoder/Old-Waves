# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(firstName: "guest", lastName: "guest", username: "guest", email: "guest@guest.com", password: "password")

araabmuzik = Artist.create(
name: "Araabmuzik",
image: "http://primarytalent.com/artists/araabmuzik/images/x310/1.jpg")

electronicDream = Album.create(
title: "Electronic Dream",
year: 2011,
artist: araabmuzik,
image: "https://s3.amazonaws.com/tidal-clone-dev/Araab_Muzik_Electronic_Dream-front-large.jpg")

forProfessionalUseOnly = Album.create(
title: "For Professional Use Only",
year: 2011,
artist: araabmuzik,
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

goldenTouch = Song.create(
title: "Golden Touch",
album: electronicDream,
audio: "https://s3.amazonaws.com/tidal-clone-dev/03+-+-+Araabmuzik+-+Golden+Touch.mp3",
image: "https://s3.amazonaws.com/tidal-clone-dev/Araab_Muzik_Electronic_Dream-front-large.jpg")

thisForTheOnesWhoCare = Song.create(
title: "This For The Ones Who Care",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/01+This+For+The+Ones+Who+Care.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

thePrinceIsComing = Song.create(
title: "The Prince Is Coming",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/02+The+Prince+Is+Coming.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

getting2ThePoint = Song.create(
title: "Getting 2 The Point",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/03+Getting+2+The+Point.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

neverHaveToWorry = Song.create(
title: "Never Have To Worry",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/04+Never+Have+To+Worry.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

hammerDance = Song.create(
title: "Hammer Dance",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/05+Hammer+Dance.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

turnThaTide = Song.create(
title: "Turn Tha Tide",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/06+Turn+Tha+Tide.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

runWayBass = Song.create(
title: "Runway Bass",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/07+Runway+Bass.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

iCanShowYou = Song.create(
title: "I Can Show You",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/08+I+Can+Show+You.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

beauty = Song.create(
title: "Beauty",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/07+Runway+Bass.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

streetKnock = Song.create(
title: "Street Knock",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/10+Street+Knock.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

gRiding = Song.create(
title: "G Riding",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/11+G+Riding.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

soGood = Song.create(
title: "So Good",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/12+So+Good.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

araabStyles = Song.create(
title: "Araab Styles",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/13+AraabStyles.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

heaven = Song.create(
title: "Heaven",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/14+Heaven.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

yrne = Song.create(
title: "Y.N.R.E",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/15+Y.N.R.E.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

succubi = Song.create(
title: "SUCCUBI",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/16+SUCCUBI.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")


drugs = Song.create(
title: "D.R.U.G.S",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/17+D.R.U.G.S.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

worldIsLost = Song.create(
title: "World is Lost",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/15+Y.N.R.E.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")


astroDust = Song.create(
title: "Astro Dust",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/19+Astro+Dust.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")


wordsOfAChameleon = Song.create(
title: "Words Of A Chameleon",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/20+Words+Of+A+Chameleon.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")
