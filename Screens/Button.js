import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

function Button({ 
  title, 
  onPress, 
  variant = 'default', 
  style, 
  textStyle 
}) {
  const containerStyles = [
    styles.container,
    variant === 'glow' && styles.glowContainer,
    style
  ];

  const textStyles = [
    styles.text,
    textStyle
  ];

  return (
    <TouchableOpacity
      style={containerStyles}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B82F6',
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(20),
    borderRadius: scale(4),
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: scale(120),
  },
  glowContainer: {
    backgroundColor: '#2563EB',
    shadowColor: '#60A5FA',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: scale(10),
    elevation: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Button;
