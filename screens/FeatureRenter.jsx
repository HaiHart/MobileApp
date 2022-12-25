import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Analyst from '../assets/Analytic.png'
import SentReportModal from '../Components/SentReportModal'
import AnalyticModal from '../Components/AnalyticModal'
import ProfielIcon from "../assets/Profile.png";
import { Octicons } from "@expo/vector-icons";


const ServiceManager = () => {
  const [modalSentReport, setModalSentReport] = useState(false);
  const [modalAnalytic, setModalAnalytic] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.HeaderIcon}>
        <TouchableOpacity 
          // onPress={() => navigation.navigate("Profile")} 
          style={styles.avatar}>
          <Image source={ProfielIcon}></Image>
        </TouchableOpacity>
        <TouchableOpacity 
        // onPress={() => navigation.navigate("Notification")} 
        style={styles.bell}>
          <Octicons name="bell-fill" size={30} color="#2F2D51" />
        </TouchableOpacity>
      </View>
      <View style={[styles.box, styles.card, styles.shadowProp]}>
        <TouchableOpacity
          // onPress={() => setModalSentReport(true)}
          style={styles.item}
        >
          <Image source={Analyst}></Image>
          <Text>Sent Report</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          // onPress={() => setModalAnalytic(true)}
        >
          <Image source={Analyst}></Image>
          <Text>Analytic</Text>
        </TouchableOpacity>
      </View>
      <SentReportModal
        isVisible={modalSentReport}
        onCancel={() => {
          // setModalSentReport(false);
        }}
      />
      <AnalyticModal
        isVisible={modalAnalytic}
        onCancel={() => {
          // setModalAnalytic(false);
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
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    paddingTop: 30,
    backgroundColor: "white",
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