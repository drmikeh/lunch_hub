#!/bin/bash
curl -v --cookie-jar cookies.dat \
     -H "Content-Type: application/json" \
     -d '{ "user": { "name": "Mike Hopper", "email": "drmikeh@gmail.com"  , "password": "abcd1234" } }' \
     http://localhost:3000/api/users
