#!/usr/bin/env python

import requests
import json


def update_user(uid, name, email, city):
    payload = {
        "name": "%s" % name,
        "email": "%s" % email,
        "city": "%s" % city,
        }
    headers = {'content-type': 'application/json'}
    data = json.dumps(payload)

    r = requests.put("http://localhost:3001/users/%s" % uid, headers=headers, data=data)
    return r.text


if __name__ == '__main__':
    uid = raw_input('Enter user id: ')
    name = raw_input('Enter name: ')
    email = raw_input('Enter email: ')
    city = raw_input('Enter city: ')
    text = update_user(uid, name, email, city)
    print(text)
