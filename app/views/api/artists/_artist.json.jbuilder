json.(artist, :id, :name)
json.image do |json|
  json.(artist.image, :url)
end
