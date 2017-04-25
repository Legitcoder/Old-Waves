
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
image: "http://www.dopehood.se/wp-content/uploads/2016/05/AraabMuzik-Center-Of-Attraction-Download-01.jpg")

slaughterhouse = Artist.create(
name: "Slaughterhouse",
image: "https://s-media-cache-ak0.pinimg.com/736x/79/21/0c/79210c60ac61fd978eaa6f371398e375.jpg")

slaughterhouse = Artist.create(
name: "Slaughterhouse",
image: "https://s-media-cache-ak0.pinimg.com/736x/79/21/0c/79210c60ac61fd978eaa6f371398e375.jpg")

slaughterhouse = Artist.create(
name: "Slaughterhouse",
image: "https://s-media-cache-ak0.pinimg.com/736x/79/21/0c/79210c60ac61fd978eaa6f371398e375.jpg")

slaughterhouse = Artist.create(
name: "Slaughterhouse",
image: "https://s-media-cache-ak0.pinimg.com/736x/79/21/0c/79210c60ac61fd978eaa6f371398e375.jpg")

slaughterhouse = Artist.create(
name: "Slaughterhouse",
image: "https://s-media-cache-ak0.pinimg.com/736x/79/21/0c/79210c60ac61fd978eaa6f371398e375.jpg")

slaughterhouse = Artist.create(
name: "Slaughterhouse",
image: "https://s-media-cache-ak0.pinimg.com/736x/79/21/0c/79210c60ac61fd978eaa6f371398e375.jpg")

slaughterhouse = Artist.create(
name: "Slaughterhouse",
image: "https://s-media-cache-ak0.pinimg.com/736x/79/21/0c/79210c60ac61fd978eaa6f371398e375.jpg")

electronicDream = Album.create(
title: "Electronic Dream",
year: 2011,
artist: araabmuzik,
image: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+Electronic+Dream+/Araab_Muzik_Electronic_Dream-front-large.jpg")

goldenTouch = Song.create(
title: "Golden Touch",
album: electronicDream,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+Electronic+Dream+/03+-+-+Araabmuzik+-+Golden+Touch.mp3",
image: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+Electronic+Dream+/Araab_Muzik_Electronic_Dream-front-large.jpg")

forProfessionalUseOnly = Album.create(
title: "For Professional Use Only",
year: 2011,
artist: araabmuzik,
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

thisForTheOnesWhoCare = Song.create(
title: "This For The Ones Who Care",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/01+This+For+The+Ones+Who+Care.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

thePrinceIsComing = Song.create(
title: "The Prince Is Coming",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/02+The+Prince+Is+Coming.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

getting2ThePoint = Song.create(
title: "Getting 2 The Point",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/03+Getting+2+The+Point.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

neverHaveToWorry = Song.create(
title: "Never Have To Worry",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/04+Never+Have+To+Worry.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

hammerDance = Song.create(
title: "Hammer Dance",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/05+Hammer+Dance.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

turnThaTide = Song.create(
title: "Turn Tha Tide",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/06+Turn+Tha+Tide.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

runWayBass = Song.create(
title: "Runway Bass",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/07+Runway+Bass.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

iCanShowYou = Song.create(
title: "I Can Show You",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/08+I+Can+Show+You.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

beauty = Song.create(
title: "Beauty",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/09+Beauty.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

streetKnock = Song.create(
title: "Street Knock",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/10+Street+Knock.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

gRiding = Song.create(
title: "G Riding",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/11+G+Riding.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

soGood = Song.create(
title: "So Good",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/12+So+Good.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

araabStyles = Song.create(
title: "Araab Styles",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/13+AraabStyles.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

heaven = Song.create(
title: "Heaven",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/14+Heaven.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

yrne = Song.create(
title: "Y.N.R.E",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/15+Y.N.R.E.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

succubi = Song.create(
title: "SUCCUBI",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/16+SUCCUBI.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")


drugs = Song.create(
title: "D.R.U.G.S",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/17+D.R.U.G.S.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

worldIsLost = Song.create(
title: "World is Lost",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/18+World+Is+Lost.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")


astroDust = Song.create(
title: "Astro Dust",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/19+Astro+Dust.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")


wordsOfAChameleon = Song.create(
title: "Words Of A Chameleon",
album: forProfessionalUseOnly,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+For+Professional+Use+Only+/20+Words+Of+A+Chameleon.mp3",
image: "http://static.djbooth.net/pics-albums/araab-forprouseonly.jpg")

theSlaugterhouseEP = Album.create!(
title: "The Slaughterhouse EP",
year: 2011,
artist: slaughterhouse,
image: %Q{https://s3.amazonaws.com/tidal-clone-dev/Slaughterhouse+-+The+Slaughterhouse+EP/AlbumArt_{E3437288-7AF6-4B5A-8AD1-2CCC61087831}_Large.jpg})
#
#
backOnTheScene = Song.create(
title: "Back On The Scene",
album: theSlaugterhouseEP,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Slaughterhouse+-+The+Slaughterhouse+EP/01-slaughterhouse-back_on_the_scene.mp3",
image: %Q{https://s3.amazonaws.com/tidal-clone-dev/Slaughterhouse+-+The+Slaughterhouse+EP/AlbumArt_{E3437288-7AF6-4B5A-8AD1-2CCC61087831}_Large.jpg})

sunDoobie = Song.create(
title: "Sun Doobie",
album: theSlaugterhouseEP,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Slaughterhouse+-+The+Slaughterhouse+EP/02-slaughterhouse-sun_doobie.mp3",
image: %Q{https://s3.amazonaws.com/tidal-clone-dev/Slaughterhouse+-+The+Slaughterhouse+EP/AlbumArt_{E3437288-7AF6-4B5A-8AD1-2CCC61087831}_Large.jpg})

everybodyDown = Song.create(
title: "Everybody Down",
album: theSlaugterhouseEP,
audio: "https://s3.amazonaws.com/tidal-clone-dev/Slaughterhouse+-+The+Slaughterhouse+EP/03-slaughterhouse-everybody_down.mp3",
image: %Q{https://s3.amazonaws.com/tidal-clone-dev/Slaughterhouse+-+The+Slaughterhouse+EP/AlbumArt_{E3437288-7AF6-4B5A-8AD1-2CCC61087831}_Large.jpg})

putSomeMoneyOnIt = Song.create(
title: "Put Some Money On It",
album: theSlaugterhouseEP,
audio: %Q{https://s3.amazonaws.com/tidal-clone-dev/Slaughterhouse+-+The+Slaughterhouse+EP/04-slaughterhouse-put_some_money_on_it_(remix)_ft._sheek_louch_jadakiss_and_styles_p.mp3},
image: %Q{https://s3.amazonaws.com/tidal-clone-dev/Slaughterhouse+-+The+Slaughterhouse+EP/AlbumArt_{E3437288-7AF6-4B5A-8AD1-2CCC61087831}_Large.jpg})

fightClub = Song.create(
title: "Fight Club",
album: theSlaugterhouseEP,
audio: %Q{https://s3.amazonaws.com/tidal-clone-dev/Slaughterhouse+-+The+Slaughterhouse+EP/05-slaughterhouse-fight_club_(remix).mp3},
image: %Q{https://s3.amazonaws.com/tidal-clone-dev/Slaughterhouse+-+The+Slaughterhouse+EP/AlbumArt_{E3437288-7AF6-4B5A-8AD1-2CCC61087831}_Large.jpg})

moveOn = Song.create(
title: "Move On",
album: theSlaugterhouseEP,
audio: %Q{https://s3.amazonaws.com/tidal-clone-dev/Slaughterhouse+-+The+Slaughterhouse+EP/06-slaughterhouse-move_on_(remix).mp3},
image: %Q{https://s3.amazonaws.com/tidal-clone-dev/Slaughterhouse+-+The+Slaughterhouse+EP/AlbumArt_{E3437288-7AF6-4B5A-8AD1-2CCC61087831}_Large.jpg})

# lloydBanks = Artist.create(
# name: "Lloyd Banks",
# image: "http://www.crazyhood.com/wp-content/uploads/2015/04/lloydbanks2.jpg")
#
# theColdCorner2 = Album.create(
# title: "The Cold Corner 2",
# year: 2011,
# artist: lloydBanks,
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")

# grind = Song.create!(
# title: "1 2 3 Grind",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/01+-+1+2+3+Grind.mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")

# superCrack = Song.create!(
# title: "Super Crack",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Araabmuzik+-+Electronic+Dream+/03+-+-+Araabmuzik+-+Golden+Touch.mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# shockTheWorld = Song.create!(
# title: "Shock The World",
# album: theColdCorner2,
# audio: %Q{https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+Halloween+Havoc+3/08+Shooting+Star+(Prod.+by+Ty+James).mp3},
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# predator = Song.create(
# title: "Predator",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/04+-+Predator+(feat+Styles+P)+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# thePulse = Song.create(
# title: "The Pulse",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/05+-+The+Pulse+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# makeItStack = Song.create(
# title: "Make It Stack",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/06+-+Make+It+Stack+(feat+AAP+Rocky)+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# score = Song.create(
# title: "Score",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/07+-+Score+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# weFuckin = Song.create(
# title: "We F***in",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/08+-+We+Fuckin+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# jokesOnYou = Song.create(
# title: "Love Shots",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/10+-+Jokes+On+You+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# younFlyFlashy = Song.create(
# title: "Young Fly Flashy",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/11+-+Young+Fly+Flashy+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# iceBoxPt2 = Song.create(
# title: "Ice Box Pt2",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/12+-+Ice+Box+Pt2+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# noLove = Song.create(
# title: "No Love",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/13+-+No+Love+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# cashinIn = Song.create(
# title: "Cashin In",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/14+-+Cashin+In+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# coldCorner2 = Song.create(
# title: "Cold Corner 2",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/15+-+Cold+Corner+2+(Eyes+Wide)+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# keepYourCool = Song.create(
# title: "Keep Your Cool",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/16+-+Keep+Your+Cool+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# getItHowILive = Song.create(
# title: "Get It How I Live",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/17+-+Get+It+How+I+Live+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
#
# comeUp = Song.create(
# title: "Come Up",
# album: theColdCorner2,
# audio: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/18+-+Come+Up+(DatPiff+Exclusive).mp3",
# image: "https://s3.amazonaws.com/tidal-clone-dev/Lloyd+Banks+-+The+Cold+Corner+2/Lloyd_Banks_The_Cold_Corner_2-front-large.jpg")
