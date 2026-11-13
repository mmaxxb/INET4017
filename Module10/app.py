from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Welcome to the Home Page!"

@app.route("/about")
def about():
    return "This is the About Page!"

@app.route("/user/<name>").
def user(name):
    return "Hello, " + name

@app.route("/contact")
def payment():
    return "Email 12345@gmail.com for assistance"

if __name__ == "__main__":
    app.run(debug=True)