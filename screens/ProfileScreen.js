import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Linking,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  {
    return (
      <View style={{ marginLeft: 5, marginRight: 5 }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: 10,
            backgroundColor: '#008b8b',
          }}>
          <Image
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              marginTop: 10,
              marginBottom: 10,
            }}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/477184768388259840/1_HGkiQ6_400x400.jpeg',
            }}
          />
          <Text style={styles.textHeader}>Edgars Sedovs</Text>
          <View style={styles.textAlign}>
          <Ionicons name="ios-flag" size={27} color="white" />
          <Text style={styles.textInput}> Riga, Latvia</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            marginLeft: 30,
          }}>
          <Text style={styles.textInputDetails}>
            E-mail: edgars.sedovs@va.lv
          </Text>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.textInputDetails}>
              College/University: Vidzeme University of Applied Sciences
            </Text>
            <Text style={styles.textInputDetails}>Year: 1</Text>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.textInputDetails}>
              Concentration: Information technology
            </Text>
            <Text style={styles.textInputDetails}>
              Specialization: Cybersecurity and software development
            </Text>
          </View>
          <Text style={styles.textInputDetails}>
            Interests: Financial markets, banking, statistics, econometrics and
            data science
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 25,
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'stretch',
    },
  textAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'stretch',
  },
  
  textInputDetails: {
    fontSize: 20,
    marginTop: 2,
    color: 'black',
    alignSelf: 'stretch',
  },
});
