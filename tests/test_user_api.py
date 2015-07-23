#!/usr/bin/env python


from __future__ import print_function
from utils import random_user_list
from add_user import add_user
from delete_user import delete_user
from update_user import update_user
from get_users import get_users
import unittest

prefix = 'runapp_test_'


class TestUserApi(unittest.TestCase):

    def test_1(self):
        """
        unit test
        """
        user_list = random_user_list(prefix)
        users = get_users()
        length = len(users)
        print (length, 'original users')
        print ('adding', len(user_list), 'users')
        for user in user_list:
            add_user(user)
        users = get_users()
        print(len(users), 'users')
        self.assertTrue(len(users) == length + len(user_list))
        print ('deleting', len(user_list), 'users')
        for user in users:
            if user['name'].startswith('runapp_test_'):
                delete_user(user['_id'])
        users = get_users()
        print(len(users), 'users')
        self.assertTrue(len(users) == length)

    def func2a(self):
        """
        test_2 support
        """
        user_list = random_user_list(prefix)
        print ('adding', len(user_list), 'users')
        for user in user_list:
            print(user)
            add_user(user)

    def func2b(self):
        """
        test_2 support
        """
        users = get_users()
        n = 0
        for user in users:
            if user['name'].startswith(prefix):
                n += 1
                uid = user['_id']
                user['email'] = 'new_' + user['email']
                text = update_user(uid, user)
                print(text)
        print('updated %d users' % n)

    def func2c(self):
        """
        test_2 support
        """
        users = get_users()
        n = 0
        for user in users:
            if user['name'].startswith(prefix):
                n += 1
                uid = user['_id']
                print('deleting', uid)
                delete_user(uid)
        users = get_users()
        print('deleted %d users' % n)
        print(len(users), 'remaining users')

    def test_2(self):
        """
        unit test
        """
        self.func2a()
        self.func2b()
        self.func2c()

if __name__ == '__main__':
    unittest.main()
