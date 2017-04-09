class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
    render "api/albums/index"
  end
end
