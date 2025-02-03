// src/screens/MainScreen.jsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/styles';

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}> {/* Use the common style */}
      <View style={styles.content}>
        <Image source={require('../../assets/nsango_logo.png')} style={styles.logo} /> {/* Use the common style */}

        <Text style={styles.subtitle}>
          The free, fun, and effective{'\n'}way to learn a language!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.getStartedButton} 
          onPress={() => navigation.navigate('GetStartedScreen')}
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.alreadyAccountButton} 
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.alreadyAccountText}>I ALREADY HAVE AN ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;
