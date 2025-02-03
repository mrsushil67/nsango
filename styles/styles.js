// src/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',  // Center content vertically
    alignItems: 'center',      // Center content horizontally
  },
  splashLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  // Main Screen Styles
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBar: {
    marginBottom: 20,
    height: 8,
    borderRadius: 5,
  },
  progressBarContainer: {
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#808080',
    marginBottom: 24,
  },
  buttonContainer: {
    marginBottom: 30,
  },
  getStartedButton: {
    backgroundColor: '#00aaff',
    paddingVertical: 16,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  alreadyAccountButton: {
    borderColor: '#00aaff',
    borderWidth: 2,
    paddingVertical: 16,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
  },
  alreadyAccountText: {
    color: '#00aaff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  // General Styles
  linearGradient: {
    flex: 1,
    justifyContent: 'center',  // Vertically center the content
    alignItems: 'center',      // Horizontally center the content
  },
  backArrow: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  messageContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  speechBubble: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 20,
    width: 280,
    borderWidth: 1,
    borderColor: '#00aaff',
    position: 'relative',
  },
  speechBubbleTail: {
    position: 'absolute',
    bottom: -20,
    left: 40, 
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#00aaff', 
  },
  speechBubbleContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 20,
    width: 200,
    borderWidth: 1,
    borderColor: '#00aaff',
    position: 'relative',
  },
  speechTail: {
    position: 'absolute',
    bottom: 10, 
    left: -10,  
    width: 0,
    height: 0,
    borderLeftWidth: 0,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#00aaff',  
  },
  textMessage: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  logo1: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  continueButton: {
    position: 'absolute', 
    bottom: 30,  
    alignSelf: 'center', 
    backgroundColor: '#00aaff',
    paddingVertical: 16,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
  },
  optionsContainer: {
    flex: 1,
    marginBottom: 80,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedOption: {
    backgroundColor: '#87CEFA',
    borderColor: '#00aaff',
  },
  optionText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 12,
  },
  flag: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
