#!/usr/bin/env python

import requests
import json
import utils


def add_user(payload):
    """
    Add a user to the db
    """
    headers = {'content-type': 'application/json'}
    data = json.dumps(payload)

    r = requests.post("http://localhost:3001/users",
                      headers=headers,
                      data=data)

    return r.text

if __name__ == '__main__':

    payload = utils.user_dict

    for key in payload.keys():
        data = raw_input('Enter %s: ' % key)
        payload[key] = data

    text = add_user(payload)
    print(text)
