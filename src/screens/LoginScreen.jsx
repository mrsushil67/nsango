import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleOtpRequest = () => {
    Alert.alert('OTP requested');
  };

  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign-in');
  };

  const handleFacebookSignIn = () => {
    Alert.alert('Facebook Sign-in');
  };

  const handleEmailSignIn = () => {
    Alert.alert('Email Sign-in');
  };

  const handleClose = () => {
    navigation.goBack(); // Go back to previous screen (MainActivity)
  };

  return (
    <View style={styles.container}>
      {/* Top Scrollable Content */}
      <View style={styles.scrollableContent}>
        {/* Close Icon */}
        <TouchableOpacity onPress={handleClose} style={styles.closeIcon}>
          <Icon name="close" size={30} color="#000" />  {/* Ensure the icon name is correct */}
        </TouchableOpacity>

        {/* Login Header */}
        <Text style={styles.loginTitle}>लॉग इन</Text>

        {/* Phone Number Field */}
        <View style={styles.phoneNumberField}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            style={styles.phoneNumberInput}
            placeholder="फ़ोन नंबर"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <TouchableOpacity onPress={handleOtpRequest}>
            <Text style={styles.otpButton}>कोड पाएं</Text>
          </TouchableOpacity>
        </View>

        {/* OTP Field */}
        <TextInput
          style={styles.otpField}
          placeholder="OTP कोड"
          keyboardType="numeric"
          value={otp}
          onChangeText={setOtp}
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>साइन इन करें</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Fixed Content */}
      <View style={styles.bottomContent}>
        {/* Google Sign-in Button */}
        <TouchableOpacity onPress={handleGoogleSignIn} style={styles.socialButton}>
       <FontAwesome name="google" size={24} color="#DB4437" /> {/* Changed to valid FontAwesome google icon */}
          <Text style={styles.socialButtonText}>GOOGLE से साइन इन करें</Text>
        </TouchableOpacity>

        {/* Facebook Sign-in Button */}
        <TouchableOpacity onPress={handleFacebookSignIn} style={styles.socialButton}>
        <FontAwesome name="facebook" size={24} color="#3b5998" />
          <Text style={styles.socialButtonText}>FACEBOOK से साइन इन करें</Text>
        </TouchableOpacity>

        {/* Email Sign-in Button */}
        <TouchableOpacity onPress={handleEmailSignIn} style={styles.socialButton}>
          <FontAwesome name="envelope" size={24} color="#000" />
          <Text style={styles.socialButtonText}>Email से साइन इन करें</Text>
        </TouchableOpacity>

        {/* Footer Text */}
        <Text style={styles.footerText}>
          लॉग इन करने के बाद आप नियमों और प्राइवेसी पॉलिसी से सहमति जताते हैं।
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F7',
  },
  scrollableContent: {
    flex: 1,
    padding: 16,
  },
  closeIcon: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  loginTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  phoneNumberField: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 4,
    marginBottom: 16,
    elevation: 4,
  },
  countryCode: {
    width: 50,
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  otpButton: {
    color: '#000',
    fontSize: 14,
    marginLeft: 12,
  },
  otpField: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 4,
    marginTop: 12,
    fontSize: 16,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#00AFFF',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bottomContent: {
    padding: 16,
    backgroundColor: '#fff',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E1E1E1',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 16,
    color: '#000',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#888888',
    marginTop: 16,
  },
});

export default LoginScreen;
