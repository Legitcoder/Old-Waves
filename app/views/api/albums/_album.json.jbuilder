json.(album, :id, :title, :year, :artist)
json.image { |json| json.(album.image, :url)}
json.songs album.songs, :id, :title, :audio
