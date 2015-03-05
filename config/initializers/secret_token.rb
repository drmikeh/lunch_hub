# Be sure to restart your server when you modify this file.

# Your secret key for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.

# Although this is not needed for an api-only application, rails4 
# requires secret_key_base or secret_token to be defined, otherwise an 
# error is raised.
# Using secret_token for rails3 compatibility. Change to secret_key_base
# to avoid deprecation warning.
# Can be safely removed in a rails3 api-only application.
LunchHub::Application.config.secret_token = 'd1c4928e85c834cb3209fbdc84b1b4fb80fa7c0a7dacfd662e341c927a3c7d9b5a162c8cbd3aadb4a2a4e2a7798fa912f7a9afb357d8ae6143a6b0f6a6d65e24'
