class Song < ApplicationRecord
  belongs_to :album
  has_attached_file :audio
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
end
