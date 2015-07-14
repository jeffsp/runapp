#!/usr/bin/env python

from __future__ import print_function

from delete_user import delete_user
from get_users import get_users

prefix = 'runapp_test_'
users = get_users()

n = 0
for user in users:
    if user['name'].startswith(prefix):
        n += 1
        delete_user(user['_id'])

users = get_users()

print('deleted %d users' % n)
print(len(users), 'remaining users')
