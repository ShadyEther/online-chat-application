from flask import Blueprint

auth = Blueprint("auth", __name__)

@auth.route('/login')
def logIn():
    return "<h1>login here</h1>"

@auth.route('/logout')
def logOut():
    return "<h1>logout here</h1>"

@auth.route('/sign-up')
def signUp():
    return "<h1>sign-up here</h1>"