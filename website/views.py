from flask import Blueprint

views = Blueprint("views", __name__)

@views.route('/')
def home():
    return "<h1>Hello there</h1>"

@views.route('/hello')
def sayHello():
    return "<h1>Hello sritam</h1>"