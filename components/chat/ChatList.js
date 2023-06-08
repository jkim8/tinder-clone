import { View, Text, FlatList } from "react-native";
import React from "react";
import tw from "twrnc";
import { mock } from "../../mock/tinder-mock";
import ChatRow from "./ChatRow";

const ChatList = () => {
  return (
    <View>
      <FlatList
        style={tw`h-full`}
        data={mock.chat}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => {
          return <ChatRow {...item} />;
        }}
      />
    </View>
  );
};

export default ChatList;
