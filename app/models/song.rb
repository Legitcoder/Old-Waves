class Song < ApplicationRecord
  belongs_to :album
  has_attached_file :audio
  before_save :extract_metadata
  serialize :metadata
  has_attached_file :image
  has_attached_file :image, styles: { medium: "300x300>" },
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
  validates_attachment_size :audio, less_than: 10.megabyte


private

# Retrieves metadata for MP3s
def extract_metadata
  path = audio.queued_for_write[:original].path
  open_opts = { :encoding => 'utf-8' }
  Mp3Info.open(path, open_opts) do |mp3info|
    self.duration = mp3info.tag
  end
end

end
