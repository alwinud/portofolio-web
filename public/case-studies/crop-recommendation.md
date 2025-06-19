# Crop Recommendation System Using Machine Learning 🌱

## Introduction

Modern agriculture faces the challenge of selecting the right crop for specific environmental conditions. Farmers often rely on experience and guesswork. To make this process more data-driven, I built a **Crop Recommendation System** using machine learning, based on soil and climate parameters.

The project also includes a fully working web app powered by Flask.

---

## Tools & Technologies Used

- **Python** (Pandas, NumPy)
- **Scikit-learn** for ML modeling
- **Flask** for building the web app
- **HTML/CSS** for frontend
- **Render** for deployment
- **GitHub** for version control

---

## Dataset

- 📊 Source: [Insert dataset source or say “Open source dataset”]
- 📁 Size: 2,200+ rows
- 🧾 Features:
  - Nitrogen (N), Phosphorus (P), Potassium (K)
  - Temperature
  - Humidity
  - pH
  - Rainfall

Example row:

| N | P | K | temp | humidity | ph | rainfall |
|---|---|---|------|----------|----|----------|
| 90 | 42 | 43 | 22.5 | 80 | 6.5 | 200 |

---

## Data Preprocessing

- Handled missing/null values
- Normalized using `StandardScaler`
- Encoded labels using `LabelEncoder`
- Split into training/test (80/20)

---

## Model Training

Tested 3 algorithms:

| Model             | Accuracy |
|------------------|----------|
| Logistic Regression | 78%     |
| Random Forest       | 92% ✅  |
| SVM                 | 85%     |

Random Forest gave the best results and was selected.

---

## Web App Overview

![App Screenshot](https://your-screenshot-url.com) <!-- Replace with actual image -->

- Built using **Flask**
- User inputs 7 features
- Displays best crop to plant
- Clean, mobile-friendly UI

🌐 **Live Demo:** [https://crop-recommend.onrender.com](https://crop-recommend.onrender.com)

---

## Project Flowchart

```mermaid
flowchart TD
    A[User Input] --> B[Model Prediction]
    B --> C[Recommended Crop]
    C --> D[Display Result]
