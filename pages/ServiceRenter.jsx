import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Cleaning from "../assets/Cleaning.png";
import Wifi from "../assets/Wifi.png";
import Parking from "../assets/Parking.png";
import CleaningServiceModal from "../Components/CleaningModal";
import WifiServiceModal from "../Components/WifiModal";
import ParkingServiceModal from "../Components/ParkingModal";

const ServiceRenter = () => {
  const [modalCleaning, setModalCleaning] = useState(false);
  const [modalWifi, setModalWifi] = useState(false);
  const [modalParking, setModalParking] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.card, styles.shadowProp]}>
        <TouchableOpacity
          onPress={() => setModalCleaning(true)}
          style={styles.item}
        >
          <Image source={Cleaning}></Image>
          <Text>Cleaning</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => setModalWifi(true)}
        >
          <Image source={Wifi}></Image>
          <Text>Wifi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => setModalParking(true)}
        >
          <Image source={Parking}></Image>
          <Text>Parking</Text>
        </TouchableOpacity>
      </View>
      <CleaningServiceModal
        isVisible={modalCleaning}
        onCancel={() => {
          setModalCleaning(false);
        }}
      />
      <WifiServiceModal
        isVisible={modalWifi}
        onCancel={() => {
          setModalWifi(false);
        }}
      />
      <ParkingServiceModal
        isVisible={modalParking}
        onCancel={() => {
          setModalParking(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
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
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "90%",
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default ServiceRenter;
