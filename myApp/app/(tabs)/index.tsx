import { Button, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { Text, Image } from 'react-native';
const logo = require('../../assets/images/1.jpg');

export default function HomeScreen() {
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
          onPress={() => alert('Button Clicked!')}
          title="Click Me"
        />
      </ScrollView>
    </View>
  );
}
