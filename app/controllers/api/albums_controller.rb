class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.includes(:songs, :artist)
  end

  def show
    @album = Album.find(params[:id])
  end
end
