
from flask import Blueprint, render_template



views = Blueprint("views", __name__)

@views.route('/home')
def home():
    return "<h1>This is your home page</h1>"

@views.route('/hello')
def sayHello():
    return "<h1>Hello sritam</h1>"


@views.route('/')
def favicon():
    return render_template('favicon.html')


