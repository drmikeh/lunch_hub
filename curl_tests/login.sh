#!/bin/bash
curl -v --cookie-jar - -H "Content-Type: application/json" -d '{"email":"joehacker@gmail.com","password":"abcd1234"}' http://localhost:3000/api/sessions
