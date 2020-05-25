import React, { useContext} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = () => {

    const { state, signin, clearErrorMessage } = useContext(Context);

    return(
        <View style={styles.container}>
            <NavigationEvents 
                onWillBlur={clearErrorMessage}   
            />
            <AuthForm 
                headerText="Sign in for tracker"
                submitButtonText="Sign in"
                onSubmit={signin}
                errorMessage={state.errorMessage}           
            />
            <NavLink 
                text="Don't have an account ? Signup now"
                routeName="Signup"
            />
        </View>
    );
}



SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

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


export default SigninScreen;