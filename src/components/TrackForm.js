import React, { useContext } from 'react';
import { TextInput, Button } from 'react-native';
import Spacer from './Spacer';
import { Context as LocationContext} from '../context/LocationContext';

const TrackForm = () => {

    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
      } = useContext(LocationContext);

    // console.log(location.length)

    return(
        <>
            
            <Spacer>
                <TextInput 
                    value={name}
                    placeholder="Enter Track Name"
                    onChangeText={changeName}
                />
            </Spacer>
            {recording ? (
            <Button  title=" Stop" onPress={stopRecording} /> 
            ): (
            <Button title="Start Recording" onPress={startRecording} />
            )}

        </>
    );
}

export default TrackForm;