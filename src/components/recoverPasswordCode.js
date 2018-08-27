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
import { recoverPasswordCode as styles } from "./styles";



export default class recoverPasswordCode extends Component<Props> {
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
        <View style={{width:"65%",marginLeft:"15%", flexDirection: 'column', alignItems: "center", marginTop:16}}>
         <Text style={{fontSize:21,color:"#000",textAlign:"center"}}>
          Caputur el codigo que fue 
          enviado
         </Text>
        </View>
        {/* <View style={{width:"65%",marginLeft:"15%", flexDirection: 'column', alignItems: "center"}}> */}
        <TextInput
          placeholder="Usuario"
          onChangeText={TextInputValue =>
            this.setState({ username: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.input}
        />
        {/* </View> */}
        <TouchableHighlight
         onPress={() => history.push("/newPassword")}
          style={styles.submit}
          underlayColor='#fff'>
          <Text style={ styles.submitText}>Enviar</Text>
        </TouchableHighlight>
        
      </ScrollView >
    );
  }
}
