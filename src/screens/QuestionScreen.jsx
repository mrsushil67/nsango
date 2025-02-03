import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ToastAndroid } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import styles from '../../styles/styles';
import { useNavigation } from '@react-navigation/native';

const QuestionScreen = () => {
const navigation = useNavigation();

  const questions = [
    "What would you like to learn?",
    "How did you hear about Nsango?",
    "How much English do you know?",
    "Why are you learning English?",
    "What's your daily learning goal?",
    "Customize your settings to make learning fun"
  ];

  const options = [
    ["English", "French", "Fulfulde", "Ewondo", "Bamileke", "Duala", "Bassa", "Bakweri", "Maka", "Tikar", "Kom", "Beti"],
    ["Friends/Family", "News/Article/Blog", "TV", "Facebook/Instagram", "App Store"],
    ["I'm new to English", "I know some common words", "I can have basic conversations", "I can discuss most topics"],
    ["Prepare for travel", "Boost my career", "Support my education", "Connect with people", "Spend time productively", "Just for fun"],
    ["5 min/day", "10 min/day", "15 min/day", "20 min/day"],
    ["Notifications", "Contacts", "Widget"]
  ];

  const flagImages = [
    require('../../assets/usa.jpeg'),
    require('../../assets/french.png'),
    require('../../assets/cameroon.jpeg'),
    require('../../assets/cameroon.jpeg'),
    require('../../assets/cameroon.jpeg'),
    require('../../assets/cameroon.jpeg'),
    require('../../assets/cameroon.jpeg'),
    require('../../assets/cameroon.jpeg'),
    require('../../assets/cameroon.jpeg'),
    require('../../assets/cameroon.jpeg'),
    require('../../assets/cameroon.jpeg'),
    require('../../assets/cameroon.jpeg')
  ];

  const hearaboutImages = [
    require('../../assets/friends.png'),
    require('../../assets/news.png'),
    require('../../assets/tv.jpeg'),
    require('../../assets/insta.jpeg'),
    require('../../assets/appstore.jpeg')
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelected = (index) => {
    setSelectedOption(index);
  };

  const handleContinueClicked = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      ToastAndroid.show('Questionnaire Completed', ToastAndroid.SHORT);
      navigation.navigate('HomeScreen');
    }
  };

  const progress = (currentQuestionIndex + 1) / questions.length;

  const renderOptions = () => {
    return options[currentQuestionIndex].map((option, index) => {
      let optionContent;
      if (currentQuestionIndex === 0) {
        optionContent = (
          <View style={styles.option}>
            <Image source={flagImages[index]} style={styles.flag} />
            <Text style={styles.optionText}>{option}</Text>
          </View>
        );
      } else if (currentQuestionIndex === 1) {
        optionContent = (
          <View style={styles.option}>
            <Image source={hearaboutImages[index]} style={styles.flag} />
            <Text style={styles.optionText}>{option}</Text>
          </View>
        );
      } else {
        optionContent = <Text style={styles.optionText}>{option}</Text>;
      }

      return (
        <TouchableOpacity
          key={index}
          onPress={() => handleOptionSelected(index)}
          style={[styles.optionContainer, selectedOption === index && styles.selectedOption]}>
          {optionContent}
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar at the Top */}
      <View style={styles.progressBarContainer}>
        <ProgressBar 
          progress={progress} 
          width={null} 
          height={15} 
          borderRadius={20}
          borderWidth={1}
          color="#00aaff" 
          unfilledColor="#e0e0e0"
          borderColor="transparent"
        />
      </View>

      <View style={styles.questionContainer}>
  <Image source={require('../../assets/nsango_logo.png')} style={styles.logo1} />
  <View style={styles.speechBubbleContainer}>
    <Text style={styles.questionText}>{questions[currentQuestionIndex]}</Text>
    <View style={styles.speechTail} />
  </View>
</View>

      {/* Scrollable Options */}
      <ScrollView style={styles.optionsContainer}>{renderOptions()}</ScrollView>

      {/* Sticky Continue Button */}
      <View style={styles.stickyButtonContainer}>
        <TouchableOpacity
          style={[styles.continueButton, { backgroundColor: selectedOption === null ? 'gray' : '#00aaff' }]}
          onPress={handleContinueClicked}
          disabled={selectedOption === null}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuestionScreen;
