class User < ApplicationRecord

  has_secure_password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  has_attached_file :image, styles: { medium: "300x300>" }, default_url: "missingdefault.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_attachment_size :image, less_than: 2.megabyte
  validates :firstName, :lastName, :username, :email, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :email, format: {with: VALID_EMAIL_REGEX}

  after_initialize :reset_session_token
  before_validation :ensure_session_token_uniqueness

  def reset_session_token
    self.session_token = nil if self.session_token
    self.session_token = User.generate_session_token
    self.save
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token_uniqueness
    if User.find_by(session_token: self.session_token)
      self.session_token = User.generate_session_token
      self.save
    end
  end

end
