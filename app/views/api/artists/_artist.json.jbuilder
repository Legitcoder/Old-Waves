json.(artist, :id, :name)
json.image { |json| json.(artist.image, :url)}
json.albums artist.albums, :id, :title, :year, :image, :small_image, :artist, :songs
