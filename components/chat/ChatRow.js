import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const ChatRow = ({ photoURL, displayName, message }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`flex-row items-center px-5 py-3 my-1 mx-3`}
      onPress={() => navigation.navigate("Message")}
    >
      <Image
        source={{ uri: photoURL }}
        style={tw`w-16 h-16 rounded-full mr-4`}
      />
      <View style={tw`flex-1 border-b border-gray-300 pb-4 `}>
        <Text style={tw`text-lg font-semibold`}>{displayName}</Text>
        <Text>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRow;
