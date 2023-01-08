import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Courses from '../api/Courses';
import { useNavigation } from '@react-navigation/native';

const Course = () => {
  const navigation = useNavigation();
  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image style={styles.cardImage}
              source={require('../../assets/books.jpg')}
              resizeMode="contain" />
          </View>
          <View >
          <Text style={styles.mainHeader}>
            {item.title}
          </Text>
          <Text style={styles.description}>
            {item.description}
          </Text>
          <Text style={styles.coursename}>
            {item.course1}
          </Text>
          <Text style={styles.coursename}>
            {item.course2}
          </Text>
          <Text style={styles.coursename}>
            {item.course3}
          </Text>
          <Text style={styles.coursename}>
            {item.price}
          </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return <FlatList
    keyExtractor={(item) => item.id}
    data={Courses}
    renderItem={courseCard} />
};

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    paddingTop: 0,
    padding: 50,
    backgroundColor: "rgba(255,255,255,0.9)",
    textAlign: 'center',
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 20
  },
  mainHeader: {
    fontSize: 22,
    color: '#000000',
    textTransform: 'uppercase',
    paddingBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Nunito_700Bold'
  },
  description: {
    color: '#000000',
    textAlign: 'left',
    fontSize: 18,
    textAlign: 'justify',
    fontWeight: '400',
    bottom:5,
    fontFamily: 'Nunito_600SemiBold'
  },
  coursename: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    top: '2%'
  },
  buttonStyle: {
    backgroundColor: '#809fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#eee',
    textTransform: 'capitalize',
    fontFamily: 'Nunito_700Bold'
  }
});

export default Course;

