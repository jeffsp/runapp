#!/usr/bin/env python

from __future__ import print_function

from test_utils import random_user_list
from add_user import add_user
from delete_user import delete_user
from get_users import get_users

prefix = 'runapp_test_'
user_list = random_user_list(prefix)
print ('adding', len(user_list), 'users')
for user in user_list:
    add_user(user[0], user[1], user[2])
