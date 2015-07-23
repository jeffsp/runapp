#!/usr/bin/env python

from __future__ import print_function
import requests
import json


def get_users():
    """
    Get a list of dictionaries of users
    """
    headers = {'content-type': 'application/json'}
    data = None

    r = requests.get("http://localhost:1987/users", headers=headers, data=data)
    return json.loads(r.text)


if __name__ == '__main__':

    for entry in get_users():
        print('')
        for key in entry.keys():
            print('%s: %s' % (key, entry[key]))
