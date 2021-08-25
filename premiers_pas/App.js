import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Image, Alert, Button, ActivityIndicator } from 'react-native';
// Image
import img from './img/konexio-logo_1.png';

const URL = 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png';

export default function App() {
  const [showLoading, setShowLoading] = useState(false);

  const handlerPress = () => {
    setShowLoading(!showLoading)
    Alert.alert('You clicked !');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.firstText}>Text 1</Text>
        <Text style={styles.secondText}>Text 2</Text>
        <Text style={styles.thirdText}>Text 3</Text>
        <Image source={img} style={styles.image} />
        <Image source={{uri: URL}} style={styles.image} />
        <Button title={"Press me"} onPress={handlerPress} />
          {(showLoading) 
          ? <ActivityIndicator size='small' color='#87CEEB' />
          : null }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
  },
  textContainer: {
    backgroundColor: 'white',
  },
  firstText: {
    margin: 80,
    fontSize: 30,
    textAlign: 'center',
  },
  secondText: {
    margin: 80,
    textAlign: 'center',
  },
  thirdText: {
    margin: 80,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 30, 
  },
});
