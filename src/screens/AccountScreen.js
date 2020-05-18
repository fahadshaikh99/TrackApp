import React, { useContext} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {

    const { signout } = useContext(AuthContext);

    return(
        <View>
            <Text style={{ fontSize: 48}}>
                Account Screen 
            </Text>
            <Button 
            
            onPress={signout}
            title="Sign out"
            />
        </View>
    );
}

const styles = StyleSheet.create({});


export default AccountScreen;