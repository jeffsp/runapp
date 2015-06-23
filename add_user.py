#!/usr/bin/env python

import requests

first = raw_input('Enter first name: ')
last = raw_input('Enter last name: ')
payload = {
    "firstName" : "%s" % first,
    "lastName" : "%s" % last,
    "email" : "%s.%s@example.com" % (first, last),
    "username" : "%s%s" % (first, last),
    "password" : "password"}
r = requests.post("http://localhost:3000/users", data=payload)
print(r.text)
