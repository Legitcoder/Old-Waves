class Song < ApplicationRecord
  belongs_to :album
  #delegate :artist, to: :album, allow_nil: true
  has_one :artist, through: :album
  has_attached_file :audio
  before_save :extract_metadata
  has_attached_file :image
  has_attached_file :image, styles: { small: "100x100>" },
                        default_url: "missingalbumart.jpeg"
  validates_attachment_content_type :audio,
  :content_type => ['audio/mpeg',
                     'audio/x-mpeg',
                     'audio/mp3',
                     'audio/x-mp3',
                     'audio/mpeg3',
                     'audio/x-mpeg3',
                     'audio/mpg',
                     'audio/x-mpg',
                     'audio/x-mpegaudio']
  def length
    seconds = self.duration
    minutes = (seconds/60).floor
    sec = (seconds % 60).floor
    sec < 10 ? sec = "0#{sec}" : sec
    "#{minutes}:#{sec}"
  end

  def small_image
    self.image.url(:small)
  end

private

  def extract_metadata
    path = audio.queued_for_write[:original].path
    open_opts = { :encoding => 'utf-8' }
    Mp3Info.open(path, open_opts) do |mp3info|
      self.duration = mp3info.length.to_i
    end
  end

end
