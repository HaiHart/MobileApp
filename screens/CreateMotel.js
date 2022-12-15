import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View, Text, TextInput } from "react-native";
// import { Header, } from "react-native-elements";
import Svg, { Path } from 'react-native-svg';

export default function CreateMotel({ navigation, route }) {
    const backIcon = () => {
        return (
            <Svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                <Path d="M9 1L1 9L9 17" stroke="#2F2D51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
        )
    }

    return (
        <View style={styles.background}>
            {/* <Header
                leftComponent={backIcon}
                centerComponent={{ text: 'Create Motel'}}
                containerStyle={{
                    // backgroundColor: "green",
                    // justifyContent: "center",
                    // alignItems: "center",
                }}
            /> */}
            <ScrollView horizontal={false}>
                <Text style={styles.text}>Motel Name *</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='Type here...'
                    placeholderTextColor='#D5D5E1'
                    cursorColor={'#FF97B5'}
                ></TextInput>
                <Text style={styles.text}>Image*</Text>
                <TouchableOpacity style={styles.inputImage}>
                    {/* insert image */}
                </TouchableOpacity>
                <Text style={styles.text}>Location *</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='Type here...'
                    placeholderTextColor='#D5D5E1'
                    cursorColor={'#FF97B5'}
                ></TextInput>
                <Text style={styles.text}>Number Of Floor *</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='Type here...'
                    placeholderTextColor='#D5D5E1'
                    cursorColor={'#FF97B5'}
                ></TextInput>
                <Text style={styles.text}>Electricity Price *</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='Type here...'
                    placeholderTextColor='#D5D5E1'
                    cursorColor={'#FF97B5'}
                ></TextInput>
                <Text style={styles.text}>Water Price *</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='Type here...'
                    placeholderTextColor='#D5D5E1'
                    cursorColor={'#FF97B5'}
                ></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text>CREATE MOTEL</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    text: {
        paddingLeft: 15,
    },
    inputText: {
        height: 48,
        margin: 15,
        borderWidth: 1,
        borderColor: '#D5D5E1',
        borderRadius: 10,
        padding: 10,
    },
    inputImage: {
        width: Dimensions.get('window').width - 30,
        height: 150,
        margin: 15,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        borderColor: '#D5D5E1',
    },
    button: {
        width: Dimensions.get('window').width - 30,
        height: 60,
        margin: 15,
        backgroundColor: '#FF97B5',
        borderRadius: 10,

        justifyContent: 'center',
        alignItems: 'center',
    }
})