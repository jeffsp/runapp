#!/usr/bin/env python

import requests
import json
import utils


def update_user(uid, payload):
    headers = {'content-type': 'application/json'}
    data = json.dumps(payload)

    r = requests.put("http://localhost:1987/users/%s" % uid,
                     headers=headers,
                     data=data)
    return r.text


if __name__ == '__main__':

    uid = raw_input('Enter user id: ')

    payload = utils.user_dict

    for key in payload.keys():
        data = raw_input('Enter %s: ' % key)
        payload[key] = data

    text = update_user(uid, payload)
    print(text)
