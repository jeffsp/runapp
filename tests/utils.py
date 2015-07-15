#!/usr/bin/env python

from __future__ import print_function
import random
import string


def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
    '''
    Generate a random id
    '''
    return ''.join(random.choice(chars) for _ in range(size))


def random_user_list(prefix, n = 100, cities = ['austin', 'boston', 'chicago']):
    '''
    Generate a deterministic list of 'n' users.
    '''
    random.seed(123)
    users = []
    done = False
    while not done:
        for city in cities:
            if len(users) == n:
                done = True
                break
            name = prefix + id_generator()
            email = name + '@example.com'
            users.append((name, email, city))
    return users
