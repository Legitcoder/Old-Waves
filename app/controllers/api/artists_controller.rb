class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def show
    #@artist = Artist.find(1)
  end
end
