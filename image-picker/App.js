import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Platform, 
  Image, 
  TouchableOpacity 
} from 'react-native';
// Image Picker
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    console.log('pick image')
    console.log(result);
    
    if (!result.cancelled) {
      setImage(result.uri);
    };
  };

  return (
    <View style={styles.container}>

      {(image !== null) 
      ? <Image source={{uri: image}} style={styles.image} />
      : <Image source={require('./avatar-profil.jpeg')} style={styles.image} />
      }

      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Pick a picture</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    marginTop: 200,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 999,
  },
  button: {
    backgroundColor: 'purple',
    width: 150,
    height: 20,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  }
});