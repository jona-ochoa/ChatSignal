import * as React from 'react';

import { Text, Image, View, StyleSheet, FlatList, Pressable } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import { Auth } from 'aws-amplify';
import chatRoomsData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {


  const logOut = () => {
    Auth.signOut();
  } 

  return (
    <View style={styles.page}>
       <FlatList 
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
      {/* <Pressable 
        onPress={logOut}
        style={{ 
        backgroundColor: '#2f2', height: 50, margin: 10, borderRadius: 15, 
        alignItems: 'center', justifyContent: 'center' }}>
        <Text>Logout</Text>
      </Pressable> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  }
});