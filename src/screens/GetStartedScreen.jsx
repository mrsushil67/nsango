import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/styles';

const GetStartedScreen = () => {
  const navigation = useNavigation();
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [message, setMessage] = useState("Hi there! I'm Nsango!");
  
  useEffect(() => {
    const blinkAnimation = setInterval(() => {
      setMessage(prevMessage => prevMessage);
    }, 3000);

    return () => clearInterval(blinkAnimation);
  }, []);

  const handleContinue = () => {
    if (isFirstMessage) {
      setMessage("Just 7 quick questions before we start your first lesson!");
    } else {
      setMessage("Hi there! I'm Nsango!");
      navigation.navigate('QuestionScreen');
    }
    setIsFirstMessage(!isFirstMessage);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.centerContainer}>
      
        <View style={styles.speechBubble}>
          <Text style={styles.textMessage}>{message}</Text>
          <View style={styles.speechBubbleTail} />
        </View>
        <Image source={require('../../assets/nsango_logo.png')} style={styles.logo} />
      </View>

      
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};
export default GetStartedScreen;
