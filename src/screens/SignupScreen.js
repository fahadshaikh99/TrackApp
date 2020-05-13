import React, { useState, useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import { Button, Text, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {state, signup} = useContext(AuthContext);

    console.log(state)

    return(
        <View style={styles.container}>  
            <Spacer>
                <Text h3> Sign Up for Tracker</Text>
            </Spacer>
            <Input 
                label="Email" 
                value={email} 
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                />
            <Spacer />
            <Input 
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer>

                {state.errorMessage ? 
                <Text style={styles.errorMessage}>{state.errorMessage}</Text> 
                : null}

                <Button 
                onPress={() => signup({ email, password})}
                title="Sign Up" />
            </Spacer>
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
    }
});

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};


export default SignupScreen;