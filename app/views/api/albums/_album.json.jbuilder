json.(album, :id, :title, :year, :artist, :image, :songs)
json.image { |json| json.(album.image, :url)}
