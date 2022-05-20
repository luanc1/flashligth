import React, {useState,useEffect} from 'react';
import {TouchableOpacity,Alert,SafeAreaView, ScrollView,StatusBar,Image,StyleSheet,Text,useColorScheme, View,
} from 'react-native';
//import { useEffect } from 'react/cjs/react.production.min';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
 const [toggle, setToggle] = useState(false); //flse
 const handleChangeToggle = ()=> setToggle(oldToggle=> !oldToggle);

 useEffect(()=>{
   //liga flash do celular
  // Alert.alert("Atualizou componente " + toggle);
  Torch.switchState(toggle);
  //console.log('Trocou o estado do flash');
 },[toggle]);

 useEffect(()=>{
    const subscription = RNShake.addListener(()=>{
     setToggle(oldToggle=> !oldToggle);
     });
     return () => subscription.remove();
},[]);

  return (
    <View style={toggle ? style.containerLigth : style.container}>
      <TouchableOpacity 
      onPress={handleChangeToggle}>
      <Image  style={toggle ? style.lightingOn :style.lightingOff}  
      source={
      toggle 
      ? require('./assets/icons/eco-light.png')
      : require('./assets/icons/eco-light-off.png')
      } />

<Image  style={style.dioLogo}  
      source={
      toggle 
      ? require('./assets/icons/logo-dio.png')
      : require('./assets/icons/logo-dio-white.png')
      } />
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
  },
  containerLigth:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    //tintColor: 'white',
     width: 150,
     height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
     width: 150,
     height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});
export default App;
