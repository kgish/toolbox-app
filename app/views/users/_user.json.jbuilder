json.extract! user, :id, :username, :email, :firstname, :lastname, :admin, :company, :photo, :created_at, :updated_at
json.url user_url(user, format: :json)
