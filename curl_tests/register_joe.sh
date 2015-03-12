#!/bin/bash
curl -v --cookie-jar cookies.dat \
     -H "Content-Type: application/json" \
     -d '{ "user": { "name": "Joe Hacker" , "email": "joehacker@gmail.com", "password": "abcd1234" } }' \
     http://localhost:3000/api/users
