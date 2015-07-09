#!/usr/bin/env python

import requests

name = raw_input('Enter name: ')
email = raw_input('Enter email: ')
city = raw_input('Enter city: ')
payload = {
    "name" : "%s" % name,
    "email" : "%s" % email,
    "city" : "%s" % city,
    }
r = requests.post("http://localhost:3001/users", data=payload)
print(r.text)
