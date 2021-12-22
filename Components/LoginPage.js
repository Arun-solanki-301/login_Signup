import React, { useState } from "react";
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { FormValidation  , emailValidation , validPassword } from '../formFunctions/LoginFunction'


function Login({navigation}){
    const [userEmail , setuserEmail] = useState("");
    const [userPassword , setuserPassword] = useState("");
    const [Submit , setSubmit] = useState(true);
    const [emailValid , setEmailValid] = useState(true)
    const [passValidation , setpassValidation] = useState(true)
   
    function formValidate(){
    const getValid = FormValidation(userEmail , userPassword);
    if(getValid){
        if(emailValidation(userEmail)){
            setEmailValid(true)
        }else{
            setEmailValid(false)
        }
        if (validPassword.test(userPassword)) {
            setpassValidation(true)
          }
          else{
            setpassValidation(false)
          }
    }else{
        setSubmit(false)
        setpassValidation(false)
        setEmailValid(false)

    }
    // setEmailValid(isEmailValid);
    // const Pass = PasswordValidate(userPassword);
    // console.log(Pass)
    // setuserEmail("")
    // setuserPassword("")
    }


    return(
        <View style={styles.FormBody}> 
        {/* {Submit?null:<Text style={styles.formTextError}>something went wrong !!!!</Text>} */}
        <View >
        <Text style={{fontSize : 32 , fontWeight : "bold" , color :"#1a73e8" , textAlign : "center" , marginBottom : 25}}>Polling App</Text>
        </View>
        <TextInput placeholder="Email" style={(Submit || emailValid)  ? styles.formInputs :styles.formInputsFalse } value={userEmail} onChangeText={(e)=>{setuserEmail(e)}}/>
        <TextInput placeholder="Password" style={(Submit || passValidation)  ? styles.formInputs :styles.formInputsFalse } value={userPassword}  onChangeText={(e)=>{setuserPassword(e)}} />
        <View style={{display : "flex", alignItems : "center"}}>
        <TouchableOpacity style={styles.submitForm} onPress={()=>formValidate()}><Text style={styles.submitText} >Log In</Text></TouchableOpacity>
        <TouchableOpacity style={styles.signUpOnLogin} onPress={() =>
        navigation.navigate('Register')} ><Text style={styles.signUpOnLoginText} > new user? sign up instead</Text></TouchableOpacity>

        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    FormBody : {
        backgroundColor : "#fff",
        padding : 15,
        width:'100%',
        height : '100%'
    },
    formInputs:{
        borderColor : "#cccccc",
        borderWidth : 2,
        backgroundColor : "#ffffff",
        paddingHorizontal : 15,
        paddingVertical : 5,
        marginTop : 10,
        borderRadius : 5
    },
    formInputsFalse :{
        borderColor : "red",
        borderWidth : 2,
        backgroundColor : "#ffffff",
        paddingHorizontal : 15,
        paddingVertical : 5,
        marginTop : 10,
        borderRadius : 5
    },
    submitForm:{
        backgroundColor : "#1a73e8",
        padding : 10,
        marginTop : 30,
        borderRadius : 5,
        width : 120,
        textAlign : "center"
    },
    submitText :{
        fontSize : 20,
        textAlign : "center",
        color : "#ffffff"
    },
    signUpOnLogin :{
        marginTop:15
    },
    signUpOnLoginText :{
        fontSize : 15,
        color : "red"
    },
    formTextError : {
        color : "red"
    }

})

export default Login;