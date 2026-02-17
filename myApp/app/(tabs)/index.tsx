import {
  ActivityIndicator,
  Button,
  Modal,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { Text, Image } from 'react-native';
const logo = require('../../assets/images/1.jpg');
import { useState } from 'react';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'plum',
      }}
    >
      <ScrollView>
        {isLoading && (
          <ActivityIndicator
            size="large"
            color="blue"
            style={{ marginTop: 50, marginBottom: 50 }}
          />
        )}
        <View style={{ height: 90 }} />
        <Button title="Start Loading" onPress={() => setIsLoading(true)} />
        <Button title="Stop Loading" onPress={() => setIsLoading(false)} />
        <Text
          style={{
            paddingTop: 50,
            fontSize: 50,
            color: 'black',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          Hello World
        </Text>
        <Image source={logo} style={{ width: 200, height: 200 }} />
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontStyle: 'italic',
            margin: 20,
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus doloremque quaerat, iure accusamus nihil reprehenderit
          earum labore pariatur quisquam odio laudantium incidunt inventore
          obcaecati laboriosam perspiciatis consectetur tempore voluptate quod
          eaque nobis exercitationem. Aliquam cum perspiciatis totam. Repellat
          placeat reiciendis magni eligendi nostrum ipsam, error architecto
          possimus quae in? Modi temporibus nisi nostrum nesciunt eius error
          praesentium illum! Dignissimos ipsum repellendus pariatur dolores
          perferendis maxime id. Optio dolorem voluptas sint iusto fuga ipsam
          sunt dolore, eligendi voluptatem nemo delectus nostrum, earum velit
          porro voluptate expedita veritatis pariatur nihil dicta omnis et
          dolores eum tenetur? Corporis obcaecati ipsa dolorum rem sit?
        </Text>
        <Image source={logo} style={{ width: 200, height: 200 }} />
        <Button
          color="blue"
          onPress={() => setModalVisible(true)}
          title="Open Modal"
        />
        <Modal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)} //when user presses back button on Android or taps outside the modal on iOS modal will be closed
          animationType="slide" //animation type for modal appearance
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'lightblue',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text>Modal Content</Text>
            <Button
              title="Close Modal"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </Modal>
        <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
      </ScrollView>
    </View>
  );
}
