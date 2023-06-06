import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";

const TextContainer = ({ title, placeholder }) => {
  return (
    <View>
      <Text style={tw`text-center p-4 font-bold text-red-400`}>{title}</Text>
      <TextInput style={tw`text-center pb-2`} placeholder={placeholder} />
    </View>
  );
};

export default TextContainer;
