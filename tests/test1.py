#!/usr/bin/env python

from __future__ import print_function
import requests
import json
import random
import string

from add_user import add_user
from delete_user import delete_user
from get_users import get_users

def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))

entries = []
for _ in range(100):
    for city in ['austin', 'boston', 'chicago']:
        name = 'runapp_test_' + id_generator()
        email = name + '@example.com'
        entries.append((name, email, city))

users = get_users()
length = len(users)

print (length, 'original users')

print ('adding', len(entries), 'users')

for entry in entries:
    add_user(entry[0], entry[1], entry[2])

users = get_users()

print(len(users), 'users')
assert len(users) == length + len(entries)

print ('deleting', len(entries), 'users')

for user in users:
    if user['name'].startswith('runapp_test_'):
        delete_user(user['_id'])

users = get_users()

print(len(users), 'users')
assert len(users) == length
