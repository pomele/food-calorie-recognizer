import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from '../../styles/styles';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
    <Text style={buttonStyles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton; 