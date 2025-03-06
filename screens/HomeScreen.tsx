import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from '../components/common/CustomButton';
import { appStyles } from '../styles/styles';

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [calories, setCalories] = useState<number | null>(null);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('权限不足', '需要摄像头权限才能拍照');
    }
  };

  const handleImagePick = async (launchFunction: () => Promise<ImagePicker.ImagePickerResult>) => {
    try {
      const result = await launchFunction();
      if (!result.canceled) {
        setImage(result.uri);
        mockRecognizeCalories();
      }
    } catch (error) {
      Alert.alert('错误', '无法打开摄像头或相册，请检查权限设置或设备支持');
    }
  };

  const mockRecognizeCalories = () => {
    const mockCalories = Math.floor(Math.random() * 500) + 100;
    setCalories(mockCalories);
    Alert.alert('识别结果', `识别到的食物热量为: ${mockCalories} 卡路里`);
  };

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>选择一种方式获取食物照片</Text>
      <View style={appStyles.buttonContainer}>
        <CustomButton title="拍照" onPress={() => handleImagePick(ImagePicker.launchCameraAsync)} />
        <CustomButton title="从相册中选择" onPress={() => handleImagePick(ImagePicker.launchImageLibraryAsync)} />
      </View>
      {image && <Image source={{ uri: image }} style={appStyles.image} />}
      {calories !== null && <Text style={appStyles.caloriesText}>识别到的热量: {calories} 卡路里</Text>}
    </View>
  );
} 