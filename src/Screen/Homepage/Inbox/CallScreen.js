import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { SpeakerHigh, VideoCamera, X } from "phosphor-react-native";

const CallScreen = ({ route }) => {
    const { item } = route.params;
    console.log(item)
  return (
    <View style={{flex:1, backgroundColor:"#fff", justifyContent:"center", alignItems:"center",}}>
      <View style={{gap:5,  alignItems:"center",justifyContent:"center"}}>
        <View style={{width:200, height:200, backgroundColor:"#f3f3f3", borderRadius:200, alignItems:"center",justifyContent:"center"}}>
          <Image style={{width:"100%", height:"100%", borderRadius:200}} source={item.chatImageUrl} resizeMode="contain" />
        </View>
        <Text style={{textAlign:"center", fontSize:30, fontWeight:"bold"}}>{item.chatName}</Text>
        <Text style={{textAlign:"center", fontSize:15, marginTop:10,}}>01:25 minutes</Text>
      </View>
      <View style={{ flex:0.6, flexDirection: "row",gap:10,  alignItems:"center",justifyContent:"center", }}>
        <TouchableOpacity>
          <View
            style={{
              width: 70,
              height: 70,
              backgroundColor: "#000",
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={30} color="#FFF" weight="bold" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: 70,
              height: 70,
              alignItems: "center",
              backgroundColor: "#000",
              borderRadius: 100,
              justifyContent: "center",
            }}
          >
            <VideoCamera size={30} color="#FFF" weight="bold" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: 70,
              height: 70,
              alignItems: "center",
              backgroundColor: "#000",
              borderRadius: 100,
              justifyContent: "center",
            }}
          >
            <SpeakerHigh size={30} color="#FFF" weight="bold" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({});
