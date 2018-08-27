// @flow

import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Button,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
 
} from "react-native";
import { userType } from "../types";
import { recoverPassword as styles } from "./styles";



export default class recoverPassword extends Component<Props> {
  constructor(props) {
    super(props);

  }



  render() {
    const { history } = this.props;

    return (
      <ScrollView  style={styles.view}>
        <View style={{width:"100%", flexDirection: 'column', alignItems: "center", marginTop:16}}>
         <Text style={{width:"100%",fontSize:28,color:"#000",textAlign:'center'}}>
           Restablecer Contraseña
         </Text>
        </View>
        <View style={{width:"100%", flexDirection: 'column', alignItems: "center", marginTop:16}}>
         <Text style={{width:"70%",fontSize:21,color:"#000",textAlign:"justify"}}>
           Se enviará un código
           generado aleatoriamente por 
           SMS a tu numero *********76
         </Text>
        </View>
        <View style={{width:"100%", flexDirection: 'column', alignItems: "center", marginTop:16}}>
         <Text style={{width:"70%",fontSize:21,color:"#000",textAlign:"justify"}}>
           Se enviará un código
           generado aleatoriamente a tu 
           bandeja de entrada a la 
           cuenta: *****al@gmail.com
         </Text>
        </View>
        <TouchableHighlight
         onPress={() => history.push("/recoverPasswordCode")}
          style={styles.submit}
          underlayColor='#fff'>
          <Text style={ styles.submitText}>Enviar</Text>
        </TouchableHighlight>
        
      </ScrollView >
    );
  }
}
