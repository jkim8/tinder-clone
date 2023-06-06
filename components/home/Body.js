import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import Swiper from "react-native-deck-swiper";
import Card from "./Card";
import tw from "twrnc";
import { mock } from "../../mock/tinder-mock";
import { Entypo, AntDesign } from "@expo/vector-icons";

const Body = () => {
  const swiperRef = useRef();

  return (
    <>
      <View style={tw`flex-1`}>
        <Swiper
          ref={swiperRef}
          cards={mock.users}
          renderCard={(userInfo) => {
            return <Card {...userInfo} />;
          }}
          cardIndex={0}
          backgroundColor={"#4FD0E9"}
          stackSize={3}
          containerStyle={{ backgroundColor: "transparent" }}
          verticalSwipe={false}
          onSwipedLeft={() => {
            console.log("매칭");
          }}
          onSwipedRight={() => {
            console.log("매칭 실패");
          }}
        ></Swiper>
      </View>
      <View style={tw`flex-row justify-evenly`}>
        <TouchableOpacity
          onPress={() => swiperRef.current.swipeLeft()}
          style={tw`items-center justify-center rounded-full h-16 w-16 bg-red-200`}
        >
          <Entypo name="cross" size={25} color={"red"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swiperRef.current.swipeRight()}
          style={tw`items-center justify-center rounded-full h-16 w-16 bg-green-200`}
        >
          <AntDesign name="heart" size={25} color={"green"} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Body;
