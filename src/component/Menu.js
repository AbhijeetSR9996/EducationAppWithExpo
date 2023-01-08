import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
           <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Course')}>
              <Image style={styles.iconStyle} source={{uri:"https://img.icons8.com/stickers/90/000000/courses.png",}}/>
           </TouchableOpacity>

           <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('UserData')}>
              <Image style={styles.iconStyle} source={{uri:"https://img.icons8.com/stickers/90/000000/conference.png"}}/>
           </TouchableOpacity>

           <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('About')}>
               {/* <Text>about</Text> */}
              <Image style={styles.iconStyle} source={{uri:"https://img.icons8.com/stickers/90/000000/about.png",}}/>
           </TouchableOpacity>

           <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Contact')}>
              <Image style={styles.iconStyle} source={{uri:"https://img.icons8.com/stickers/90/000000/phone-office.png"}}/>
           </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    textStyle: {
        textTransform:'uppercase',
        marginBottom:50
    },
    iconStyle:{
        height:30,
        width:30
    },
    
});

export default Menu;