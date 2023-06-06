import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { mock } from "../../mock/tinder-mock";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={tw`flex-row justify-between items-center px-5`}>
      <TouchableOpacity onPress={handleLogout}>
        <Image
          style={tw`w-10 h-10 rounded-full`}
          source={require("../../assets/profile.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
        <Image
          style={[tw`w-14 h-14 rounded-full`, { resizeMode: "contain" }]}
          source={{ uri: mock.etc.logo }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="chatbubbles-sharp" size={30} color="#ff6864" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
