#!/usr/bin/env python

import requests

uid = raw_input('Enter user id: ')
r = requests.delete("http://localhost:3000/users/%s" % uid)
print(r.text)
