from flask import Blueprint, request, jsonify
from .model import predict

main = Blueprint('main', __name__)

@main.route('/predict', methods=['POST'])
def predict_route():
    data = request.json
    #features = data['features']
    #prediction = predict(features)
    #return jsonify({'prediction': prediction})
    return jsonify({'age':data['age']})

@main.route('/hello', methods=['GET'])
def hello():
    return "Hola, Mundo"