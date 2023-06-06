import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { mock } from "../mock/tinder-mock";
import TextContainer from "../components/modal/TextContainer";
import { useNavigation } from "@react-navigation/native";

const ModalScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 items-center pt-1 bg-white`}>
      <Image
        style={[tw`w-full h-32`, { resizeMode: "contain" }]}
        source={{ uri: mock.assets.modalLogo }}
      />
      <Text style={tw`text-xl text-gray-500 p-2 font-bold`}>
        Welcome {mock.user.displayName}
      </Text>
      <TextContainer
        title={"Step 1: 프로필 사진"}
        placeholder={"프로필 url을 입력해 주세요"}
      />
      <TextContainer
        title={"Step 2: 직업"}
        placeholder={"직업을 입력해 주세요"}
      />
      <TextContainer
        title={"Step 3: 나이"}
        placeholder={"나이를 입력해 주세요"}
      />
      <View style={tw`mt-10`}>
        <TouchableOpacity
          style={tw`w-64 p-3 rounded-xl bg-red-400`}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={tw`text-center text-white text-xl`}>
            프로필 업데이트
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalScreen;
