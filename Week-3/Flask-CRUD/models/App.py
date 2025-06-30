from flask import Flask
from routes.user_routes import user_bp

app = Flask(__name__)
app.register_blueprint(user_bp, url_prefix="/users")

@app.route("/")
def index():
    return {"message": "Welcome to Flask CRUD API!"}

if __name__ == "__main__":
    app.run(debug=True)
from flask import Flask
from routes.user_routes import user_bp

app = Flask(__name__)
app.register_blueprint(user_bp, url_prefix="/users")

@app.route("/")
def index():
    return {"message": "Welcome to Flask CRUD API!"}

if __name__ == "__main__":
    app.run(debug=True)
