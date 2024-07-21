from flask import Flask, jsonify, request, g, current_app
from flask_restful import Resource, Api
from flasgger import Swagger
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
import sqlite3
import click

app = Flask(__name__)
app.config['DATABASE'] = '../database/database.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'  # Add this line
swagger = Swagger(app)
cors = CORS(app)
api = Api(app)
print('swagger at http://127.0.0.1:5000/apidocs')

db = SQLAlchemy(app)

def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row
    return g.db

@app.teardown_appcontext
def close_db(exception):
    db = g.pop('db', None)
    if db is not None:
        db.close()

@click.command('init-db')
def init_db_command():
    db = get_db()
    with current_app.open_resource('../database/schema.sql') as f:
        db.executescript(f.read().decode('utf-8'))
    click.echo('You successfully initialized the database!')

def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)

# Initialize the app
init_app(app)

class Hello(Resource):
    @cross_origin()
    def get(self):
        """
        talking with backend
        ---
        responses:
            200:
                description: A sucessful response
                examples:
                    application/json: "hello from backend"
        """
        
        with sqlite3.connect('database/database.db') as conn:
            cur = conn.cursor()
            cur.execute('SELECT * FROM text_message WHERE commentId = ?', (1,))
            data = cur.fetchone()
        if data:
            message = [{'commentId': data[0], 'message': data[1]}]
            print(message)
            return jsonify(message)
        else:
            return jsonify([{'commentId': 1,'string': 'error couldnt get from backend!'}])

# Add the Hello resource to the API
api.add_resource(Hello, '/helloworld')

if __name__ == '__main__':
    app.run(debug=True)