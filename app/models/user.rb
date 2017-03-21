class User < ApplicationRecord

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :email, format: {with: VALID_EMAIL_REGEX}


  has_secure_password

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
