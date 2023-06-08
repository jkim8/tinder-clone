import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/chat/Header";
import ChatList from "../components/chat/ChatList";
import tw from "twrnc";

const ChatScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Header />
      <ChatList />
    </SafeAreaView>
  );
};

export default ChatScreen;
