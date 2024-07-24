from flask import Blueprint, request, jsonify
from .model import predict

main = Blueprint('main', __name__)

columns = [
    "age", "workclass", "final_weight", "education", "education_num",
    "marital_status", "occupation", "relationship", "race", "sex",
    "capital_gain", "capital_loss", "hours_per_week", "country", "salary"
]

workclass_map = {
    'public': 0,
    'private': 1,
    'self_employed': 2,
    'without_pay': 3
}

education_map = {
    'Higher_Education': 3,
    'College': 2,
    'School': 1
}

marital_status_map = {
    "Single": 0,
    "Couple": 1
}

occupation_map = {
    'Professional': 1,
    'Service': 2,
    'Manual': 3,
    'Technical': 4,
    'Sales': 5,
    'Military': 6
}

relationship_map = {
    'Unmarried': 0,
    'Wife': 1,
    'Husband': 2,
    'Not-in-family': 3,
    'Own-child': 4, 'Other-relative': 5
}

race_map = {
    'White': 0,
    'Amer-Indian-Eskimo': 1,
    'Asian-Pac-Islander': 2,
    'Black': 3,
    'Other': 4
}

sex_map = {
    'Male': 1,
    'Female': 0
}

country_map = {
    "North-America": 0,
    "Central-America-Caribbean": 1,
    "Europe": 2,
    "Asia": 3,
    "South-America": 4,
}


@main.route('/predict', methods=['POST'])
def predict_route():
    data = request.json
    features = [
        data["age"],
        workclass_map[data["workclass"]],
        data["final_weight"],
        education_map[data["education"]],
        data["education_num"],
        marital_status_map[data["marital_status"]],
        occupation_map[data["occupation"]],
        relationship_map[data["relationship"]],
        race_map[data["race"]],
        sex_map[data["sex"]],
        data["capital_gain"],
        data["capital_loss"],
        data["hours_per_week"],
        country_map[data["country"]],
    ]
    prediction = predict(features)
    return jsonify({'prediction': prediction})


@main.route('/hello', methods=['GET'])
def hello():
    return "Hola, Mundo"
