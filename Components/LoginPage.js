import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import axios from "axios";

const Login = ({ navigation }) => {
  const [userName, setuserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [DataStatus, setDataStatus] = useState(false);
  const [count, setCount] = useState(0);


  const formValidate = () => {
    LoginData()
    };

  const LoginData = () => {
    const Url =
      `https://secure-refuge-14993.herokuapp.com/login?username=${userName}&password=${userPassword}`;
    axios
      .post(Url)
      .then(
        (res) => {
      // navigation.navigate("Output")
      console.log(res)

          if (res.error === 0)  {
            console.log("asbjasknaskasnf ,trueeee")
            setDataStatus(true);
          }
          else{
            console.log("asbjasknaskasnf ,false")
          }
        },
      );
  };

  return (
    <View style={styles.FormBody}>
      
      <View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#1a73e8",
            textAlign: "center",
            marginBottom: 25,
          }}
        >
          Polling App
        </Text>
      </View>
      <TextInput
        placeholder="user Name"
        style={styles.formInputs}
        value={userName}
        onChangeText={(e) => {
          setuserName(e);
        }}
      />

      <TextInput
        placeholder="Password"
        style={styles.formInputs}
        value={userPassword}
        onChangeText={(e) => {
          setuserPassword(e);
        }}
      />
      <View style={{ display: "flex", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.submitForm}
          onPress={() => formValidate()}
        >
          <Text style={styles.submitText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpOnLogin}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.signUpOnLoginText}>
            new user? sign up instead
          </Text>
        </TouchableOpacity>
      </View>
      {/* {DataStatus && <Text>Fail login </Text>} */}

    </View>
  );
};

const styles = StyleSheet.create({
  FormBody: {
    backgroundColor: "#fff",
    padding: 15,
    width: "100%",
    height: "100%",
  },
  formInputs: {
    borderColor: "#cccccc",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  formInputsFalse: {
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  submitForm: {
    backgroundColor: "#1a73e8",
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
    width: 120,
    textAlign: "center",
  },
  submitText: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
  },
  signUpOnLogin: {
    marginTop: 15,
  },
  signUpOnLoginText: {
    fontSize: 15,
    color: "red",
  },
  formTextError: {
    color: "red",
  },
});

export default Login;
