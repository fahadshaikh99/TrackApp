import React, { useContext} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext} from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';

const AccountScreen = () => {

    const { signout } = useContext(AuthContext);

    return(
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text style={{ fontSize: 48}}>
                Account Screen 
            </Text>
            <Button   
                onPress={signout}
                title="Sign out"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default AccountScreen;