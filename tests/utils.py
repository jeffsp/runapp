#!/usr/bin/env python

from __future__ import print_function
import random
import string


user_dict = {
    'name': '',
    'email': '',
    'username': '',
    'password': '',
    'provider': ''
    }


def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
    '''
    Generate a random id
    '''
    return ''.join(random.choice(chars) for _ in range(size))


def random_user_list(prefix, n=100):
    '''
    Generate a deterministic list of 'n' users.
    '''
    random.seed(123)
    users = []
    for index in range(n):
        user = dict(user_dict)
        uid = id_generator()
        user['name'] = prefix + uid
        user['username'] = prefix + 'user_' + uid
        user['email'] = uid + '@example.com'
        user['password'] = uid
        users.append(user)
    return users
