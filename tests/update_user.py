#!/usr/bin/env python

import requests

uid = raw_input('Enter user id: ')
name = raw_input('Enter name: ')
email = raw_input('Enter email: ')
city = raw_input('Enter city: ')
payload = {
    "name" : "%s" % name,
    "email" : "%s" % email,
    "city" : "%s" % city,
    }
r = requests.put("http://localhost:3001/users/%s" % uid, data=payload)
print(r.text)
