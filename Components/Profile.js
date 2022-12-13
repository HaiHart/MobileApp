import { StyleSheet, Text, SafeAreaView, 
    SafeAreaSafeAreaView, StatusBar, View, Image} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { AntDesign, Ionicons, FontAwesome5} from '@expo/vector-icons';


export default function Profile() {
    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={header_styles.container}>
                <AntDesign 
                    name="left" size={24} color="black" 
                    style={header_styles.icon_back}/>
                <Text style={header_styles.title} >Profile</Text>
                <Ionicons 
                    name="pencil" size={24} color="black" 
                    style={header_styles.icon_edit}/>
            </View>
            <View style={logo_styles.container}>
                <Image
                    style={logo_styles.image}
                    source={{
                        uri: "https://picsum.photos/300/300"
                    }}
                />
                <View style={logo_styles.name_container}>
                    <Text
                        style={logo_styles.name}
                    >
                        Nguyễn Văn An
                    </Text>
                    <Text
                        style={logo_styles.nick_name}
                    >
                        An Nguyễn
                    </Text>
                </View>
            </View>
            <View style={info_row_styles.container}>
                <FontAwesome5 
                    style={info_row_styles.icon}
                    name="phone-alt" 
                    size={16} 
                    color="black" />
                <Text style={info_row_styles.text}>
                    0123456789
                </Text>
            </View>
            <View style={info_row_styles.container}>
                <Ionicons 
                    style={info_row_styles.icon}
                    name="mail" size={16} color="black" />
                <Text style={info_row_styles.text}>
                    0123456789
                </Text>
            </View>
            <View elevation={5} style={button_styles.container}>
                    <View style={button_styles.row_container}>
                        <View style={button_styles.icon}>
                            <Ionicons
                                name="md-settings-sharp" 
                                size={20} 
                                color="black"
                                />
                        </View>
                        <Text
                            style={button_styles.text}>
                            Setting</Text>
                        <AntDesign 
                            style={button_styles.next_icon}
                            name="right" 
                            size={20} 
                            color="black" />
                    </View>
                    <View style={button_styles.row_container}>
                        <View style={button_styles.icon}>
                            <FontAwesome5 
                                name="door-open"
                                size={20}
                                color="#F65759" />
                        </View>
                        <Text
                            style={button_styles.text}>
                            Sign Out
                        </Text>
                        <AntDesign 
                            style={button_styles.next_icon}
                            name="right" 
                            size={20} 
                            color="black" />
                    </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight,
      backgroundColor:'#ffffff',
      flex:1
    },
  });

const header_styles = StyleSheet.create({
    container: {
        marginVertical:15.5,
        width:'100%',
        height:30,
        alignItems:"center",
        flexDirection:"row"
    },
    title: {
        fontSize: 24,
        fontFamily:'Montserrat',
        position:"absolute",
        width:'100%',
        textAlign:"center"
    },
    icon_back: {
        position:"absolute",
        marginStart:24
    },
    icon_edit: {
        position:"absolute",
        marginEnd:24,
        end:0
    }
})

const logo_styles = StyleSheet.create({
    container: {
        width:'100%',
        height:150,
        flexDirection:"row",
        padding:24,
        backgroundColor:'#FFFFFF',
        alignItems:'center'
    },
    image: {
        flex:1,
        width: undefined,
        height: '100%',
        aspectRatio: 1,
        resizeMode:'contain',
        borderRadius:100
    },
    name_container: {
        flex: 2,
        height:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingStart:8
    },
    name: {
        fontSize:18,
        fontWeight:'600',
        fontFamily:'Montserrat',
        color:'#000000',
        fontStyle:'normal'
    },
    nick_name: {
        fontSize:12,
        fontWeight:'400',
        fontFamily:'Montserrat'
    }
})

const info_row_styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        paddingStart:24,
        paddingTop:8,
        alignItems:'center'
    },
    icon: {
        marginEnd: 14,
    },
    text: {
        fontFamily: 'Montserrat',
        fontSize:16,
        fontWeight:'400',
    }
})


const button_styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 1
        },
        margin:15,
        padding:30,
        backgroundColor:'#ffffff',
    },
    row_container: {
        flexDirection:'row',
        paddingTop:8,
        paddingBottom:8,
        paddingStart:15,
        paddingEnd:24,
        backgroundColor:'#ffffff',
        height:64,
        alignItems:'center'
    },
    icon: {
        marginEnd:12,
        backgroundColor: '#F3F3F8',
        width:48,
        height:48,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    text: {
        fontFamily: 'Montserrat',
        fontWeight:'600',
        fontSize:16,
        flex:10
    },
    next_icon: {
        flex:1
    }
})