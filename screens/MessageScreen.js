import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import Header from "../components/chat/Header";
import { mock } from "../mock/tinder-mock";
import tw from "twrnc";
import SenderMessage from "../components/message/SenderMessage";
import ReciverMessage from "../components/message/ReciverMessage";
import Input from "../components/message/Input";

const user = mock.user;
const MessageScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Header callable title={mock.user.displayName} />
      <FlatList
        style={tw`flex-1 pl-4 w-full`}
        inverted
        data={mock.messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.uid === user.uid ? (
            <SenderMessage {...item} />
          ) : (
            <ReciverMessage {...item} />
          )
        }
      />
      <Input />
    </SafeAreaView>
  );
};

export default MessageScreen;
