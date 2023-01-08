import { StyleSheet, Text, View, TouchableOpacity, Image, Linking, ScrollView} from 'react-native'
import React from 'react'

const About = () => {
  return (
  <ScrollView>
    <View style={styles.aboutContainer}>
     <Text style={styles.mainHeader}>Abhijeet Singh</Text>
     <Text style={styles.paraStyle}> I am a Frontend Developer 🙂 </Text>
     <View style={styles.aboutContainer}>
       <Image style={styles.imgStyle} source={{uri:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs-tinysrgb&dpr=2&h=650&w=940"}}/>
     </View>
     <View style={styles.aboutLayout}>
     <Text style={styles.aboutSubHeader}>About Me</Text>
     <Text style={styles.paraStyle2}> 
     Lorem ipsum dolor sit amet, consectuttir airisfcing elicit. Aemen ommodo ligqui eget dolor. 
     Lorem ipsum dolor sit amet, consectuttir airisfcing elicit. Aemen ommodo ligqui eget dolor.
     </Text>
    </View>
    <Text style={styles.mainHeader}>Follow me on Social Network</Text>
      <View style={styles.menuContainer}>
       
       <TouchableOpacity style={styles.buttonStyle} onPress={() => 
        Linking.openURL("https://www.linkedin.com/in/abhijeet-singh-rathour-746958173")}>
        <Image style={styles.iconStyle} source={require('../../assets/linkedin.png')} />
       </TouchableOpacity>
       <View><Text> | </Text></View>
       <TouchableOpacity style={styles.buttonStyle} onPress={() => 
        Linking.openURL("https://www.github.com/AbhijeetSR9996")}>
        <Image style={styles.iconStyle} source={require('../../assets/github.png')} />
       </TouchableOpacity>
      
      </View>
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgStyle:{
    width:150,
    height:150,
    borderRadius:100
  },
  aboutContainer:{
    display:'flex',
    alignItems:'center'
  },
  mainHeader:{
    fontSize:18,
    color:'#344055',
    textTransform:'uppercase',
    fontWeight:'500',
    marginTop:30,
    marginBottom:30,
    lineHeight:30,
    fontFamily:'Nunito_700Bold' 
  },
  paraStyle:{
    fontSize:18,
    color:'#7d7d7d',
    paddingBottom:30
  },
  aboutLayout:{
    backgroundColor:'#4c5dab',
    paddingHorizontal:30,
    marginVertical:30
  },
  aboutSubHeader:{
    fontSize:18,
    color:'#fff',
    textTransform:'uppercase',
    fontWeight:'500',
    marginVertical:15,
    lineHeight:30,
    alignSelf:'center',
    fontFamily:'Nunito_600SemiBold'
  },
  paraStyle2:{
    color:'#fff',
    paddingBottom:20
  },
  iconStyle:{
    width:'100%',
    height:50,
    aspectRatio:1,
  },
  menuContainer:{
    //marginHorizontal:'300',
    //backgroundColor:'grey',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }

});

export default About;

