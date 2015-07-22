#!/usr/bin/env python

from __future__ import print_function

from delete_user import delete_user
from get_users import get_users


def delete_all_users():
    users = get_users()
    for user in users:
        delete_user(user['_id'])

    users = get_users()
    if len(users) == 0:
        print('deleted all users')
    else:
        print("can't delete all users")

if __name__ == "__main__":
    yn = raw_input('Are you sure? (y/N)')
    if yn == 'y':
        delete_all_users()
    else:
        print('cancelled')
