import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';

import { getWeatherinfo } from '../provider/httpServices';


const Countrylist = ({ route, navigation }) => {


    var list = route.params.list;


    const _renderlist = ({ item, index }) => {

        return <View>
            <Image source={{ uri: item.flag }} style={{ height: 20 }}></Image>
            <Text>capital:{item.capital}</Text>
            <Text>population:{item.population}</Text>
            <Text>latlang:{(item.latlng).toString()}</Text>

            <TouchableOpacity style={styles.capitalbutton}
                onPress={() => Weatherinfo(item.capital)}
            >
                <Text>CapitalWeather</Text>
            </TouchableOpacity>
        </View>
    }

    const _seprator = () => {
        return <View style={styles.drawborder}></View>
    }

    const Weatherinfo = (capitalname) => {

        getWeatherinfo(capitalname).then(data => {
            console.log(data)
            if (data.success == false) {
                alert("something went wrong")
            }
            else {
                navigation.navigate("weather", { "wdata": data })
            }

        }).catch(error => {
            alert(error)
        })
    }

    return <View>
        <FlatList
            data={list}
            ItemSeparatorComponent={_seprator}
            renderItem={_renderlist}
            keyExtractor={(item, index) => index.toString()}
        >

        </FlatList>
    </View>



}

export default Countrylist;

const styles = StyleSheet.create({
    drawborder: {
        height: 1
    },
    capitalbutton: {
        backgroundColor: "blue",
        padding: 10,
        width: 500
    }
})