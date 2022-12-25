import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Cleaning from "../assets/Cleaning.png";
import Wifi from "../assets/Wifi.png";
import Parking from "../assets/Parking.png";
import CleaningServiceModal from "../Components/CleaningModal";
import WifiServiceModal from "../Components/WifiModal";
import ParkingServiceModal from "../Components/ParkingModal";

const ServiceRenter = ({ navigation, route }) => {
  const [modalCleaning, setModalCleaning] = useState(false);
  const [modalWifi, setModalWifi] = useState(false);
  const [modalParking, setModalParking] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
        Service
        </Text>
      </View>
      <View style={[styles.box, styles.card, styles.shadowProp]}>
        <TouchableOpacity
          // onPress={() => setModalCleaning(true)}
          style={styles.item}
        >
          <Image source={Cleaning}></Image>
          <Text>Cleaning</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          // onPress={() => setModalWifi(true)}
        >
          <Image source={Wifi}></Image>
          <Text>Wifi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          // onPress={() => setModalParking(true)}
        >
          <Image source={Parking}></Image>
          <Text>Parking</Text>
        </TouchableOpacity>
      </View>
      <CleaningServiceModal
        isVisible={modalCleaning}
        onCancel={() => {
          // setModalCleaning(false);
        }}
      />
      <WifiServiceModal
        isVisible={modalWifi}
        onCancel={() => {
          // setModalWifi(false);
        }}
      />
      <ParkingServiceModal
        isVisible={modalParking}
        onCancel={() => {
          // setModalParking(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText:{
    fontSize:24,
    fontFamily:"Montserrat",
    color:"#2F2D51",
    marginTop:50,

  },
  header:{
    backgroundColor:"#fff",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",

  },
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor:"white"
  },
  box: {
    display: "flex",
    flexDirection: "row",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: "90%",
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default ServiceRenter;
