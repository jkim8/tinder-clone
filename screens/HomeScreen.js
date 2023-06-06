import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";
import Header from "../components/home/Header";
import Body from "../components/home/Body";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header />
      <Body />
    </SafeAreaView>
  );
};

export default HomeScreen;
