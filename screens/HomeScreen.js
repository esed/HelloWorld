import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Linking,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  {
    return (
      <View style={{ marginLeft: 5, marginRight: 5 }}>
        <Text style={styles.textHeader}>Hello World from Group 2:</Text>
        <Text style={styles.textHeader}>Edgars Sedovs!</Text>
        <Text style={styles.textInput}>
          This is my, Edgars Sedovs, first React Native application!
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            style={{ width: 200, height: 200, borderRadius: 20 }}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/477184768388259840/1_HGkiQ6_400x400.jpeg',
            }}
          />
        </View>
        <Button
          style={{ marginTop: 10 }}
          mode="contained"
          color="#008b8b"
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Ionicons name="ios-contact" size={20} color="white" />
        </Button>
        <View style={styles.textAlign}>
        
          <Button
            style={{ marginTop: 10, width: 150 }}
            mode="contained"
            color="#008b8b"
            onPress={() => {
              Linking.openURL('https://www.linkedin.com/in/edgarssedovs');
            }}>
            <Ionicons name="logo-linkedin" size={20} color="white" />
          </Button>
          <Button
            style={{ marginTop: 10, width: 150 }}
            mode="contained"
            color="#008b8b"
            onPress={() => {
              Linking.openURL('https://www.facebook.com/edgars.sedovs');
            }}>
            <Ionicons name="logo-facebook" size={20} color="white" />
          </Button>
        </View>
        <View style={styles.textAlign}>
          <Button
            style={{ marginTop: 10, width: 150 }}
            mode="contained"
            color="#008b8b"
            onPress={() => {
              Linking.openURL('https://twitter.com/EdgarsSD');
            }}>
            <Ionicons name="logo-twitter" size={20} color="white" />
          </Button>
          <Button
            style={{ marginTop: 10, width: 150 }}
            mode="contained"
            color="#008b8b"
            onPress={() => {
              Linking.openURL('https://www.instagram.com/edgars_sedovs');
            }}>
            <Ionicons name="logo-instagram" size={20} color="white" />
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'stretch',
  },
  textAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'stretch',
  },
});
