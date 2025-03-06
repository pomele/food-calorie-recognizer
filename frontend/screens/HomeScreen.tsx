import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from '../components/common/CustomButton';
import { appStyles } from '../styles/styles';
import { fetchCalories } from '../utils/api';

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
        setImage(result.assets[0].uri);
        console.log('Image URI:', result.assets[0].uri);
        const data = await fetchCalories(result.assets[0].uri);
        setCalories(data.calories);
      }
    } catch (error) {
      console.error('Error during image pick:', error);
      // Alert.alert('错误', '无法打开摄像头或相册，请检查权限设置或设备支持');
    }
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