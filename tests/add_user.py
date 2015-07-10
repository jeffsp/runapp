#!/usr/bin/env python

import requests
import json

name = raw_input('Enter name: ')
email = raw_input('Enter email: ')
city = raw_input('Enter city: ')
payload = {
    "name" : "%s" % name,
    "email" : "%s" % email,
    "city" : "%s" % city,
    }
headers = {'content-type': 'application/json'}
data=json.dumps(payload)

r = requests.post("http://localhost:3001/users", headers=headers, data=data)
print(r.text)
