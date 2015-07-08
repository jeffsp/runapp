#!/usr/bin/env python

import requests

uid = raw_input('Enter user id: ')
first = raw_input('Enter new first name: ')
last = raw_input('Enter new last name: ')
payload = {
    "firstName" : "%s" % first,
    "lastName" : "%s" % last,
    "email" : "%s.%s@example.com" % (first, last),
    "username" : "%s%s" % (first, last),
    "password" : "password"}
r = requests.put("http://localhost:3000/users/%s" % uid, data=payload)
print(r.text)
