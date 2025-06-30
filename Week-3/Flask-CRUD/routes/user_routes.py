from flask import Blueprint, jsonify, request

user_bp = Blueprint("user_bp", __name__)

users = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"},
    {"id": 3, "name": "Charlie", "email": "charlie@example.com"},
    {"id": 4, "name": "Diana", "email": "diana@example.com"},
    {"id": 5, "name": "Ethan", "email": "ethan@example.com"},
    {"id": 6, "name": "Fatima", "email": "fatima@example.com"},
    {"id": 7, "name": "George", "email": "george@example.com"},
    {"id": 8, "name": "Hina", "email": "hina@example.com"},
    {"id": 9, "name": "Imran", "email": "imran@example.com"},
    {"id": 10, "name": "Jasmine", "email": "jasmine@example.com"},
    {"id": 11, "name": "Kashif", "email": "kashif@example.com"},
    {"id": 12, "name": "Lina", "email": "lina@example.com"},
    {"id": 13, "name": "Michael", "email": "michael@example.com"},
    {"id": 14, "name": "Nadia", "email": "nadia@example.com"},
    {"id": 15, "name": "Omar", "email": "omar@example.com"},
    {"id": 16, "name": "Priya", "email": "priya@example.com"},
    {"id": 17, "name": "Qasim", "email": "qasim@example.com"},
    {"id": 18, "name": "Rida", "email": "rida@example.com"},
    {"id": 19, "name": "Saad", "email": "saad@example.com"},
    {"id": 20, "name": "Tanya", "email": "tanya@example.com"}
]


@user_bp.route("/", methods=["GET"])
def get_users():
    return jsonify(users)

@user_bp.route("/<int:user_id>", methods=["GET"])
def get_user(user_id):
    for user in users:
        if user["id"] == user_id:
            return jsonify(user)
    return jsonify({"message": "User not found"}), 404

@user_bp.route("/", methods=["POST"])
def create_user():
    data = request.get_json()
    users.append(data)
    return jsonify(data), 201

@user_bp.route("/<int:user_id>", methods=["PUT"])
def update_user(user_id):
    data = request.get_json()
    for user in users:
        if user["id"] == user_id:
            user.update(data)
            return jsonify(user)
    return jsonify({"message": "User not found"}), 404

@user_bp.route("/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    for i, user in enumerate(users):
        if user["id"] == user_id:
            users.pop(i)
            return jsonify({"message": "User deleted"})
    return jsonify({"message": "User not found"}), 404
