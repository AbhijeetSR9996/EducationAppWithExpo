import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
import React,{useState} from 'react';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

const Contact = () => {
  const navigation = useNavigation();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [message,setMessage] = useState("");
  const [agree,setAgree] = useState(false);

  const submit = () => {
    if(!name && !email && !phone && !message) {
      Alert.alert("Please fill all the fields")
    } else {
      Alert.alert(`Thank You ${name}!!`);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.mainContainer}> 
      <Text style={styles.mainHeader}> Level up your knowledge </Text>
      <Text style={styles.description}> You can reach us anytime via </Text>  
      <Text style={styles.description2}> singh@abhi.com </Text>        
      
      <View style={styles.inputContainer}> 
       <Text style={styles.labels}> Enter your name </Text>
       <TextInput style={styles.inputStyle} placeholder={'Abhi Singh'} value={name} onChangeText={(name) => setName(name)} 
       />
      </View>

      <View style={styles.inputContainer}> 
       <Text style={styles.labels}> Enter your email </Text>
       <TextInput style={styles.inputStyle} placeholder={'demo@mail.com'} value={email} onChangeText={(email) => setEmail(email)} 
       />
      </View>

      <View style={styles.inputContainer}> 
       <Text style={styles.labels}> Enter your mobile number </Text>
       <TextInput style={styles.inputStyle} placeholder={'1234567890'} maxLength={10} keyboardType={'number-pad'} value={phone} onChangeText={(phone) => setPhone(phone)} 
       />
      </View>

      <View style={styles.inputContainer}> 
       <Text style={styles.labels}> How can we help you? </Text>
       <TextInput style={[styles.inputStyle,styles.multilineStyle]} placeholder={'Tell us about yourself'} value={message} onChangeText={(message) => setMessage(message)} 
        numberOfLines={5} multiline={true}
       />
      </View>

      <View style={styles.wrapper}> 
         <Checkbox value={agree} onValueChange={() => setAgree(!agree)} color={agree ? "#4630eb":undefined}
        />
         <Text style={styles.wrapperText}> I have read and agreed with Terms & Conditions </Text>
      </View>
      <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:agree ? "#4630EB":'grey',}]} onPress={submit}
      disabled={!agree} >
       <Text style={styles.buttonText}> Contact Us </Text> 
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  mainContainer:{
    height:'100%',
    paddingHorizontal:30,
    backgroundColor:'#fff',
  },
  mainHeader:{
    fontSize:20,
    color:'#344055',
    fontWeight:'500',
    paddingTop:20,
    paddingBottom:15,
    textTransform:'capitalize',
    fontFamily:'Nunito_600SemiBold'
  },
  description:{
    fontSize:20,
    color:'#7d7d7d',
    paddingBottom:20,
    lineHeight:25,
    fontFamily:'Nunito_700Bold'
  },
  description2:{
    fontSize:20,
    color:'#7d7d7d',
    marginTop:-20,
    paddingBottom:15,
    lineHeight:25,
    fontFamily:'Nunito_700Bold'
  },
  inputContainer:{
    marginTop:20
  },
  labels:{
    fontWeight:'bold',
    //color:'#7d7d7d',
    color:'#000000',
    paddingBottom:5,
    lineHeight:25,
    fontFamily:'Nunito_700Bold'
  },
  inputStyle:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.3)',
    paddingHorizontal:15,
    paddingVertical:6,
    borderRadius:2
  },
  multilineStyle:{
    paddingVertical:4
  },
  buttonStyle:{
    borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:30
  },
  buttonText:{
    color:'#fff'
  },
  wrapper:{
    display:'flex',
    flexDirection:'row',
    marginTop:20,
    fontFamily:'Nunito_700Bold'
  }
});

export default Contact;

