// src/screens/SplashScreen.jsx
import React, { useEffect } from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../styles/styles'; 

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainScreen'); // Navigate to Main page after 6 seconds
    }, 6000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigation]);

  return (
    <LinearGradient 
      colors={['#1cb0f6', '#A2E9B7']} 
      style={styles.linearGradient} // Use the common style
    >
      <Image source={require('../../assets/nsango_logo.png')} style={styles.splashLogo} /> {/* Use the common style */}
    </LinearGradient>
  );
};

export default SplashScreen;
