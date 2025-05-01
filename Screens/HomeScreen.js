import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Button from './Button'; 
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


function HomeScreen({ navigation }) {
  const goToButtons = () => {
    navigation.navigate('Buttons');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Button Component Showcase</Text>
          <View style={styles.card}>
            <Text style={styles.description}>
              This app demonstrates a variety of button components implemented in React Native,
              following the Figma design specifications with pixel-perfect accuracy.
            </Text>
            <View style={styles.features}>
              <Text style={styles.featuresTitle}>Features:</Text>
              <View style={styles.featureItem}>
                <View style={styles.bullet} />
                <Text style={styles.featureText}>Multiple button styles and states</Text>
              </View>
              <View style={styles.featureItem}>
                <View style={styles.bullet} />
                <Text style={styles.featureText}>Action buttons with icon support</Text>
              </View>
              <View style={styles.featureItem}>
                <View style={styles.bullet} />
                <Text style={styles.featureText}>Glow effects and hover states</Text>
              </View>
              <View style={styles.featureItem}>
                <View style={styles.bullet} />
                <Text style={styles.featureText}>Modular, reusable components</Text>
              </View>
            </View>
          </View>
          <Button 
            title="VIEW ALL BUTTONS" 
            onPress={goToButtons}
            variant="glow" 
            style={styles.exploreButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// Styles for the HomeScreen
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A205C',
  },
  container: {
    flex: 1,
    padding: scale(20),
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    marginBottom: verticalScale(24),
    textAlign: 'center',
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    borderRadius: scale(12),
    padding: scale(24),
    width: '100%',
    marginBottom: verticalScale(32),
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  description: {
    fontSize: moderateScale(16),
    lineHeight: verticalScale(24),
    textAlign: 'center',
    color: '#D1D5DB',
    marginBottom: verticalScale(24),
  },
  features: {
    width: '100%',
  },
  featuresTitle: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: verticalScale(12),
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(8),
  },
  bullet: {
    width: scale(6),
    height: scale(6),
    borderRadius: scale(3),
    backgroundColor: '#3B82F6',
    marginRight: scale(10),
  },
  featureText: {
    fontSize: moderateScale(14),
    color: '#D1D5DB',
  },
  exploreButton: {
    paddingHorizontal: scale(32),
    paddingVertical: verticalScale(12),
    minWidth: scale(200),
  },
  footer: {
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
});

export default HomeScreen;