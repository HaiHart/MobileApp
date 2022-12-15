import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import PostRoom from '../assets/Image.png'
import Document from '../assets/Document.png'
import PostRoomServiceModal from '../Components/PostRoomModal'
import InvoiceServiceModal from '../Components/InvoiceModal';
import ProfielIcon from "../assets/Profile.png";
import { Octicons } from "@expo/vector-icons";
import AnalyticIcon from '../assets/Analytic.png'
import AnalyticModal from "../Components/AnalyticModal";
import SentNotificationModal from '../Components/SentNotificationModal'

const ServiceManager = () => {
  const [modalAnalytic, setModalAnalytic] = useState(false);
  const [modalSentNoti, setModalSentNoti] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.HeaderIcon}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.avatar}>
          <Image source={ProfielIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")} style={styles.bell}>
          <Octicons name="bell-fill" size={30} color="#2F2D51" />
        </TouchableOpacity>
      </View>
      <View style={[styles.box, styles.card, styles.shadowProp]}>
        <TouchableOpacity
          onPress={() => setModalAnalytic(true)}
          style={styles.item}
        >
          <Image source={AnalyticIcon}></Image>
          <Text>Analytic</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => setModalSentNoti(true)}
        >
          <Image source={Document}></Image>
          <Text>Sent Notification</Text>
        </TouchableOpacity>

      </View>
      <AnalyticModal
        isVisible={modalAnalytic}
        onCancel={() => {
          setModalAnalytic(false);
        }}
      />
      <SentNotificationModal
        isVisible={modalSentNoti}
        onCancel={() => {
          setModalSentNoti(false);
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
  HeaderIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width:"100%",
    marginHorizontal:5,
    marginVertical:10,
    marginTop:50,
  },
  avatar:{
    marginLeft:20
  },
  bell:{
    marginRight:40
  }
});

export default ServiceManager;
