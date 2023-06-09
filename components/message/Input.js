import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import tw from "twrnc";

const Input = () => {
  return (
    <View
      style={tw`w-full flex-row items-center justify-between border-t border-gray-200 px-5 py-2`}
    >
      <TextInput
        placeholder="메세지를 입력 하세요"
        style={tw`flex-1 h-10 text-lg`}
      />
      <Button color={"#FF5864"} title="보내기" />
    </View>
  );
};

export default Input;
