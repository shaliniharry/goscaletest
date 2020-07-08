import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

import { Getcountry } from '../provider/httpServices';


const Home = ({ navigation }) => {

    const [countryname, setcountryname] = useState("");

    const getcountrylist = () => {

        Getcountry(countryname).then(data => {

            if (data.message == "Not Found") {
                alert("Data not exists")
            }
            else {
                navigation.navigate("countrylist", { "list": data })
            }



        }).catch((error) => {
            alert("something went wrong")
        })
    }

    return <View>
        <TextInput placeholder="Enter country"
            style={styles.inputstyle}
            onChangeText={(text) => setcountryname(text)}
        ></TextInput>
        <TouchableOpacity
            style={styles.buttonstyle}
            disabled={countryname.length == 0 ? true : false}
            onPress={getcountrylist}
        >
            <Text>Submit</Text>
        </TouchableOpacity>

    </View>
}

export default Home;

const styles = StyleSheet.create({

    buttonstyle:
    {
        backgroundColor: "grey",
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    inputstyle: {
        borderColor: "black",
        borderWidth: 1,


    },

})