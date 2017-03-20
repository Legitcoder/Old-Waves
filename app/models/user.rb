class User < ApplicationRecord

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true

  has_secure_password

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  def reset_session_token
    self.session_token.destroy if self.session_token
    self.create(session_token: User.generate_session_token)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.ensure_session_token_uniqueness
    if User.find_by(session_token: self.session_token)
      self.session_token = User.generate_session_token
      self.save
    end
  end

end
