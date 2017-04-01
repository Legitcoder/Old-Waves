class Artist < ApplicationRecord

  has many :albums, dependent: :delete_all
  has many :songs, through: :albums
  validates :name, presence: true
  has_attached_file :image, styles: { medium: "300x300>" },
                        default_url: "missingdefault.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_attachment_size :image, less_than: 2.megabyte

end
