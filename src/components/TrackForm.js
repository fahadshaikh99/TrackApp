import React from 'react';
import { TextInput, Button } from 'react-native';
import Spacer from './Spacer';


const TrackForm = () => {
    return(
        <>
            
            <Spacer>
                <TextInput 
                    placeholder="Enter Track Name"
                />
            </Spacer>

            <Button  title=" Start Recording" />
        </>
    );
}

export default TrackForm;