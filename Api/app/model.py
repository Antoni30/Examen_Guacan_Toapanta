import joblib
import numpy as np
import os

def load_model():
    model_path = os.path.join('instance', 'arbolModel.joblib')
    return joblib.load(model_path)

model = load_model()
def predict(features):
    features = np.array(features).reshape(1, -1)
    return model.predict(features).tolist()
