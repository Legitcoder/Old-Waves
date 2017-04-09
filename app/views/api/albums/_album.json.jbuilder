json.(album, :id, :title, :year, :artist, :image)
json.image { |json| json.(album.image, :url)}
