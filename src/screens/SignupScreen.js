import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Button, Text, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {


    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    console.log(state)

    return(
        <View style={styles.container}>  
            <NavigationEvents 
                onWillBlur={clearErrorMessage}   
            />
            <AuthForm 
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}       
            />
            <NavLink 
                routeName="Signin"
                text="Already have an account ? sign in instead"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        marginBottom: 250
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    link: {
        color: 'blue'
    }
});

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};


export default SignupScreen;