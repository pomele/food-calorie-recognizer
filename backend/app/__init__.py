from flask import Flask
from flask_cors import CORS

def create_app():

    app = Flask(__name__)
    CORS(app)  # 允许所有来源的跨域请求

    from .routes import main
    app.register_blueprint(main)

    return app 