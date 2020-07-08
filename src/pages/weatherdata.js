import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,

} from 'react-native';

const Weatherdata = ({ route }) => {
    var wdata = route.params.wdata
    return (
        <View>
            <Text>temperature:{wdata.current.temperature}</Text>
            <Text>windspeed:{wdata.current.wind_speed}</Text>
            <Text>perc:{wdata.current.precip}</Text>
            {wdata.current.weather_icons.map((ele, index) => {
                return <Image source={{ uri: ele }} style={styles.weatherimage} key={index.toString()} />
            })
            }

        </View>
    )
}

export default Weatherdata;

const styles = StyleSheet.create({
    weatherimage: {
        height: 50,
        width: 50
    }
})