import React from 'react';
import {assets} from '../../react-native.config';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Facebook</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder="Email or Phone" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder="Password" />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          Alert.alert('You Clicked to Login!');
        }}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.signContainer}>
        <View style={styles.signTextContainer}>
          <Text style={styles.signText}>Sign Up for Facebook</Text>
        </View>
        <View style={styles.signQue}>
          <Text style={styles.signQueText}>?</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#325288',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  logoContainer: {
    // fontFamily: ,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 110,
  },
  logo: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '900',
    letterSpacing: 0.3,
  },
  inputContainer: {
    flexDirection: 'row',
    borderColor: '#325288',
    borderWidth: 1,
    backgroundColor: '#fff',
    width: '80%',
    height: 40,
    borderRadius: 5,
    marginVertical: 12,
  },
  inputText: {
    alignSelf: 'center',
    margin: 10,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginVertical: 12,
    borderWidth: 1,
    backgroundColor: '#0C1E7F',
    borderColor: '#0C1E7F',
    borderRadius: 5,
    height: 40,
  },
  btnText: {
    // borderWidth: 2,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
    color: '#fff',
    textAlign: 'center',
  },
  signContainer: {
    justifyContent: 'center',
    bottom: 0,
    flexDirection: 'row',
    marginTop: 240,
    marginVertical: 20,
    alignSelf: 'center',
  },
  signTextContainer: {
    alignSelf: 'center',
    // borderWidth: 2,
  },
  signText: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 20,
    letterSpacing: 0.5,
    marginHorizontal: 60,
  },
  signQue: {
    backgroundColor: '#0C1E7F',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  signQueText: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
  },
});
