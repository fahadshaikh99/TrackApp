import React, { useState} from 'react';
import { StyleSheet} from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
             <Spacer>
                <Text h3>{headerText}</Text>
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

                {errorMessage ? 
                <Text style={styles.errorMessage}>{errorMessage}</Text> 
                : null}

                <Button 
                    onPress={() => onSubmit({ email, password})}
                    title={submitButtonText}
                />
            </Spacer>
        </>
    );
}

const styles = StyleSheet.create({


    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default AuthForm;