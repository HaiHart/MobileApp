import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";

export default function HomeRenter({ navigation, route }) {
  const { info } = route.params; //{name: 'hạ', phone: '+555', role: 'Renter'}

  const onPressSearch = () => {
    navigation.navigate("SearchResult");
  };

  return (
    <View style={styles.container}>
      <View style={styles.HeaderIcon}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.avatar}
        >
          <Svg width="42" height="43" viewBox="0 0 42 43" fill="none">
            <Path
              d="M37.1235 35.395C39.2777 32.8031 40.7759 29.7306 41.4915 26.4372C42.2071 23.1439 42.1189 19.7267 41.2345 16.4746C40.3501 13.2225 38.6954 10.2313 36.4105 7.75398C34.1255 5.27666 31.2775 3.3861 28.1074 2.24224C24.9373 1.09839 21.5383 0.734886 18.1979 1.18249C14.8576 1.63009 11.6742 2.87562 8.91706 4.81372C6.15991 6.75183 3.91011 9.32548 2.35797 12.317C0.805841 15.3085 -0.00295915 18.6298 -7.20732e-06 22C0.00112555 26.8992 1.72761 31.6416 4.87649 35.395L4.84649 35.4205C4.95149 35.5465 5.07149 35.6545 5.17949 35.779C5.31449 35.9335 5.45999 36.079 5.59949 36.229C6.01949 36.685 6.45149 37.123 6.90449 37.534C7.04249 37.66 7.18499 37.777 7.32449 37.897C7.80449 38.311 8.29799 38.704 8.80949 39.07C8.87549 39.115 8.93549 39.1735 9.00149 39.22V39.202C12.5146 41.6742 16.7056 43.001 21.0015 43.001C25.2973 43.001 29.4883 41.6742 33.0015 39.202V39.22C33.0675 39.1735 33.126 39.115 33.1935 39.07C33.7035 38.7025 34.1985 38.311 34.6785 37.897C34.818 37.777 34.9605 37.6585 35.0985 37.534C35.5515 37.1215 35.9835 36.685 36.4035 36.229C36.543 36.079 36.687 35.9335 36.8235 35.779C36.93 35.6545 37.0515 35.5465 37.1565 35.419L37.1235 35.395ZM21 9.99997C22.335 9.99997 23.6401 10.3958 24.7501 11.1375C25.8601 11.8792 26.7253 12.9335 27.2362 14.1669C27.7471 15.4003 27.8807 16.7575 27.6203 18.0668C27.3598 19.3762 26.717 20.5789 25.773 21.5229C24.829 22.4669 23.6262 23.1098 22.3169 23.3703C21.0075 23.6307 19.6503 23.497 18.4169 22.9862C17.1835 22.4753 16.1293 21.6101 15.3876 20.5001C14.6459 19.39 14.25 18.085 14.25 16.75C14.25 14.9598 14.9612 13.2429 16.227 11.977C17.4929 10.7111 19.2098 9.99997 21 9.99997ZM9.01049 35.395C9.03651 33.4254 9.83691 31.5453 11.2385 30.1614C12.6401 28.7774 14.5303 28.001 16.5 28H25.5C27.4697 28.001 29.3598 28.7774 30.7615 30.1614C32.1631 31.5453 32.9635 33.4254 32.9895 35.395C29.6998 38.3595 25.4284 40.0001 21 40.0001C16.5716 40.0001 12.3002 38.3595 9.01049 35.395Z"
              fill="#2F2D51"
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Notification")}
          style={styles.bell}
        >
          <Svg width="24" height="28" viewBox="0 0 24 28" fill="none">
            <Path
              d="M9.04845 24.1191C9.74833 23.971 14.013 23.971 14.7129 24.1191C15.3112 24.2573 15.9582 24.5802 15.9582 25.2852C15.9234 25.9563 15.5296 26.5514 14.9856 26.9293C14.2801 27.4792 13.4523 27.8274 12.5868 27.9529C12.1082 28.015 11.6379 28.0164 11.1759 27.9529C10.3091 27.8274 9.48118 27.4792 8.77713 26.9278C8.2317 26.5514 7.83793 25.9563 7.80314 25.2852C7.80314 24.5802 8.45015 24.2573 9.04845 24.1191ZM11.9633 0C14.8755 0 17.8503 1.38183 19.6174 3.67453C20.764 5.15083 21.2899 6.62572 21.2899 8.91842V9.51486C21.2899 11.2732 21.7546 12.3095 22.7773 13.5038C23.5523 14.3837 23.8 15.5131 23.8 16.7384C23.8 17.9623 23.3979 19.1242 22.5923 20.0675C21.5376 21.1983 20.0502 21.9203 18.5321 22.0458C16.3323 22.2333 14.1311 22.3912 11.9007 22.3912C9.66888 22.3912 7.46907 22.2968 5.26925 22.0458C3.74984 21.9203 2.26243 21.1983 1.20913 20.0675C0.403508 19.1242 0 17.9623 0 16.7384C0 15.5131 0.249062 14.3837 1.02268 13.5038C2.07737 12.3095 2.51149 11.2732 2.51149 9.51486V8.91842C2.51149 6.56368 3.09866 5.02393 4.30779 3.51661C6.10549 1.31838 8.98709 0 11.8381 0H11.9633Z"
              fill="#2F2D51"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView horizontal={false}>
          <View style={styles.searchbar}>
            <TouchableOpacity 
              style={styles.search}
              onPress={onPressSearch}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <Path
                    d="M15.7824 14.4094L12.6666 11.1643C12.5259 11.0178 12.3353 10.9364 12.1353 10.9364H11.6259C12.4884 9.78746 13.001 8.34228 13.001 6.77017C13.001 3.0303 10.0914 0 6.50048 0C2.90959 0 0 3.0303 0 6.77017C0 10.51 2.90959 13.5403 6.50048 13.5403C8.00996 13.5403 9.39756 13.0065 10.5008 12.1082V12.6387C10.5008 12.8471 10.5789 13.0456 10.7195 13.1921L13.8354 16.4372C14.1292 16.7432 14.6042 16.7432 14.8948 16.4372L15.7793 15.5161C16.0731 15.2101 16.0731 14.7154 15.7824 14.4094ZM6.50048 10.9364C4.29094 10.9364 2.50018 9.07463 2.50018 6.77017C2.50018 4.46896 4.28781 2.60391 6.50048 2.60391C8.71001 2.60391 10.5008 4.46571 10.5008 6.77017C10.5008 9.07138 8.71314 10.9364 6.50048 10.9364Z"
                    fill="black"
                    fill-opacity="0.5"
                  />
                </Svg>
              </View>
            </TouchableOpacity>
            <View style={styles.filter}>
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Svg width="25" height="23" viewBox="0 0 25 23" fill="none">
                  <Path
                    d="M20.7014 13.7762C23.0764 13.7762 25 15.6676 25 18.0013C25 20.3335 23.0764 22.225 20.7014 22.225C18.3278 22.225 16.4028 20.3335 16.4028 18.0013C16.4028 15.6676 18.3278 13.7762 20.7014 13.7762ZM10.1041 16.1995C11.1444 16.1995 11.9888 17.0292 11.9888 18.0514C11.9888 19.0721 11.1444 19.9032 10.1041 19.9032H1.88471C0.84444 19.9032 0 19.0721 0 18.0514C0 17.0292 0.84444 16.1995 1.88471 16.1995H10.1041ZM4.29859 0C6.67357 0 8.59717 1.89147 8.59717 4.22373C8.59717 6.55736 6.67357 8.44882 4.29859 8.44882C1.92499 8.44882 0 6.55736 0 4.22373C0 1.89147 1.92499 0 4.29859 0ZM23.1167 2.3732C24.1556 2.3732 25 3.20294 25 4.22373C25 5.24588 24.1556 6.07562 23.1167 6.07562H14.8973C13.857 6.07562 13.0126 5.24588 13.0126 4.22373C13.0126 3.20294 13.857 2.3732 14.8973 2.3732H23.1167Z"
                    fill="#2F2D51"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.text}>Monthly Payment</Text>
          <View style={styles.infoContainer}></View>
          <Text style={styles.text}>Your Room</Text>
          <View style={styles.infoContainer}></View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  searchbar: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 30,
    height: 50,
    margin: 15,
  },
  search: {
    justifyContent: "flex-start",
    width: Dimensions.get("window").width - 95,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  filter: {
    marginLeft: 15,
    justifyContent: "flex-end",
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    paddingLeft: 15,
  },
  infoContainer: {
    width: Dimensions.get("window").width - 30,
    height: 140,
    margin: 15,
    padding: 10,
    paddingLeft: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  background: {
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 30,
    backgroundColor: "#ffffff",
  },
  HeaderIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginHorizontal: 5,
    marginVertical: 10,
    marginTop: 50,
  },
  avatar: {
    marginLeft: 20,
  },
  bell: {
    marginRight: 40,
  },
});
