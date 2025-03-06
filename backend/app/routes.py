from flask import Blueprint, jsonify, request

main = Blueprint('main', __name__)

@main.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

@main.route('/api/calculate_calories', methods=['POST'])
def calculate_calories():
    data = request.json
    # 假设 data 包含图像 URI 或其他信息
    # 这里可以添加实际的图像处理和卡路里计算逻辑
    # 目前返回一个模拟的卡路里值
    return jsonify({"calories": 336}), 200 