import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity} from "react-native";
import { useFonts } from 'expo-font';
import { useSelector } from "react-redux";

const noti_type = {
  0 : "TIỀN THUÊ NHÀ",
  1: "SỰ KIỆN",
  2: "THUÊ NHÀ"
}

const DATA = [
  {
    title: "YESTERDAY",
    data: ["[Tiền nhà] tháng 12 - 12.000.000", 
         "[Người thuê mới] Đỗ Quốc Khánh - phòng 3", 
         "[Người thuê mới] Phạm Quốc Bảo - phòng 3", ]
  },
  {
    title: "13/12/2022",
    data: ["[Tiền nhà] tháng 10 -Phạm Quốc Bảo chưa đóng tiền", 
         "[Người thuê mới] Lương Quốc Bảo - phòng 4", ]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const list2view = (notifications) => {
  let data = {}
  for (let i = 0; i < notifications.length; ++i){
    let title = notifications[i].time_start;
    if (!(title in data)) {
      data[title] = []

    }
    data[title].push(
      `[${noti_type[notifications[i].type]}] ${notifications[i].content}`
    )
  }

  const result = Object.entries(data).map(([k, v]) => {
    return {
      title: k,
      data: v
    };
  });

  return result;
}

export default function Notification({navigation, route}) {
    console.log("Notification screen")
    const notifications = useSelector((state) => state.noti.noti);
    const userinfo = useSelector((state) => state.user.userinfo);
    
    console.log(userinfo)

    // Get notifications of user
    let select_notifications = []
    let receivers = []
    for (let i = 0; i < notifications.length; ++i) {
      receivers = notifications[i].receivers;
      for (let j = 0; j < receivers.length; ++j) {
          if (userinfo.phonenumber.localeCompare(receivers[j]) == 0) {
            select_notifications.push(notifications[i]);
            break;
          }
      }
    }
    console.log(userinfo)
    console.log(select_notifications)

    select_notifications = list2view(select_notifications);

    // Mapp notifications to view list

    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
            sections={select_notifications}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}
            stickySectionHeadersEnabled={false}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    fontFamily:'Montserrat'
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    fontSize: 16,
    padding: 15,
    backgroundColor: "#D5D5E1",
    color: '#000000',
    height: 50,
  },
  title: {
    fontSize: 14,
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
    icon: {
        position:"absolute",
        marginStart:8
    }
})