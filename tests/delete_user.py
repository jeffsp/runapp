#!/usr/bin/env python

import requests


def delete_user(uid):
    r = requests.delete("http://localhost:1987/users/%s" % uid)
    return r.text

if __name__ == '__main__':
    uid = raw_input('Enter user id: ')
    text = delete_user(uid)
    print(text)
