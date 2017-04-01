class Album < ApplicationRecord
  validates :title, :artist, presence: true
  has_many :songs
  has_attached_file :image, styles: { medium: "300x300>" },
                        default_url: "missingalbumart.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_attachment_size :image, less_than: 2.megabyte
end
