class Album < ApplicationRecord
  validates :title, :artist, presence: true
  belongs_to :artist
  has_many :songs
  has_attached_file :image, styles: { small: "200x200!" },
                        default_url: "missingalbumart.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_attachment_size :image, less_than: 2.megabyte

  def small_image
    self.image.url(:small)
  end
end
