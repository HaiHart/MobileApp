import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import PostRoom from '../assets/Image.png'
import Document from '../assets/Document.png'
import PostRoomServiceModal from '../Components/PostRoomModal'
import InvoiceServiceModal from '../Components/InvoiceModal'

const ServiceManager = () => {
  const [modalPostRoom, setModalPostRoom] = useState(false);
  const [modalInvoice, setModalInvoice] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
        Service
        </Text>
      </View>
      <View style={[styles.box, styles.card, styles.shadowProp]}>
        <TouchableOpacity
          onPress={() => setModalPostRoom(true)}
          style={styles.item}
        >
          <Image source={PostRoom}></Image>
          <Text>Post Room</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => setModalInvoice(true)}
        >
          <Image source={Document}></Image>
          <Text>Create Invoice</Text>
        </TouchableOpacity>

      </View>
      <PostRoomServiceModal
        isVisible={modalPostRoom}
        onCancel={() => {
          setModalPostRoom(false);
        }}
      />
      <InvoiceServiceModal
        isVisible={modalInvoice}
        onCancel={() => {
          setModalInvoice(false);
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

export default ServiceManager;
