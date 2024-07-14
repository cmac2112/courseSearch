from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flasgger import Swagger
from flask_cors import CORS, cross_origin

app = Flask(__name__)
swagger = Swagger(app)
cors = CORS(app)
api = Api(app)
print('swagger at http://127.0.0.1:5000/apidocs')


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
        return jsonify({'message': 'hello from backend'})
    
    def post(self):
        data = request.get_json()
        return jsonify({'data': data})
        
api.add_resource(Hello, '/helloworld')

if __name__ == '__main__':
    app.run(debug=True)