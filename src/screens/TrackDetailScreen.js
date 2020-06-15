import React, { useContext} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline, Circle } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {

    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const tracks = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return(
        <View>
            <Text style={{ fontSize: 48}}>
                {tracks.name}
            </Text>
            <MapView
                style={styles.map}

                initialRegion={{
                    longitudeDelta:0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
            >
                <Polyline coordinates={tracks.locations.map(loc => loc.coords)} />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({

    map: {
        height: 300
    }

});


export default TrackDetailScreen;