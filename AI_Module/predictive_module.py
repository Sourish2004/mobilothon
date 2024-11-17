from flask import Flask, request, jsonify
import numpy as np
from sklearn.linear_model import LinearRegression

app = Flask(__name__)

# Simple predictive model (Dummy example: Predict maintenance costs)
model = LinearRegression()
X = np.array([[1000], [2000], [3000], [4000], [5000]])  # Mileage
y = np.array([100, 200, 300, 400, 500])  # Maintenance cost
model.fit(X, y)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    mileage = np.array([[data['mileage']]])
    prediction = model.predict(mileage)[0]
    return jsonify({'maintenance_cost': prediction})

if __name__ == '__main__':
    app.run(port=5001)
