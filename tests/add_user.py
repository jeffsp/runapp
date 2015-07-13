#!/usr/bin/env python

import requests
import json


def add_user(name, email, city):
    """
    Add a user to the db
    """
    payload = {
        "name" : "%s" % name,
        "email" : "%s" % email,
        "city" : "%s" % city,
        }
    headers = {'content-type': 'application/json'}
    data=json.dumps(payload)

    r = requests.post("http://localhost:3001/users", headers=headers, data=data)

    return r.text

if __name__ == '__main__':
    name = raw_input('Enter name: ')
    email = raw_input('Enter email: ')
    city = raw_input('Enter city: ')
    text = add_user(name, email, city)
    print(text)
