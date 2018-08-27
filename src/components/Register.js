import React, { Component } from "react";

import {
  View,
  Image,
  Text,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  CheckBox

} from "react-native";
import { userType } from "../types";
import { Register as styles } from "./styles";

type Props = {
  // registeruser: (username: string, password: string) => void,
  // history: {
  //   push: (path: string, state?: {}) => void
  // }
};

export default class Register extends Component<Props> {
  constructor(props) {
    super(props);
    
    this.register = this.register.bind(this);
    this.state = {
      check: false
    };
  }
  checkBoxTest(){
    this.setState({
      check:!this.state.check
    })
  }

  register() {
    

    
  }

  render() {
    const { history } = this.props;
    return (
      <View style={{ height: "100%", backgroundColor: "#0FBBC7" }}>
        <View style={{ width: "100%", height: 120 }} >
          <Image
            style={{

              position: 'absolute',
              width: '50%',
              height: '40%',
              justifyContent: 'center',
              marginTop: 30,
              marginLeft: 20

            }}
            source={{ uri: "http://www.cdd.org.do/assets/inter_logos/banco_popular.png" }}
          />
        </View>
        <View style={{ borderBottomColor: '#0D3371', borderBottomWidth: 2.5, width: "80%", marginLeft: "10%", marginBottom: 20 }}>
          <Text style={styles.registerTop}>Registro</Text>
        </View>

        <Text style={styles.text}>cédula</Text>
        <TextInput
          placeholder="000 000000000"
          onChangeText={TextInputValue =>
            this.setState({ username: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.input}
        />
        <Text style={styles.text}>nombres</Text>
        <TextInput
          placeholder="nombres"
          onChangeText={TextInputValue =>
            this.setState({ username: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.input}
        />
        <Text style={styles.text}>apellidos</Text>
        <TextInput
          placeholder="apellidos"
          onChangeText={TextInputValue =>
            this.setState({ username: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.input}
        />
        <Text style={styles.text}>No. De telefono</Text>
        <TextInput
          placeholder="000 000000000"
          onChangeText={TextInputValue =>
            this.setState({ username: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.input}
        />
          <View style={{flex: 1, flexDirection: 'row', paddingTop:0}}>
        <View style={{width: 29, height: 29,marginLeft:50}}>
        <CheckBox 
        
          value={this.state.check}
          onChange={()=>this.checkBoxTest()}
        />
        </View>
        <View style={{width: 285, height: 50,paddingTop:5,paddingLeft:5}}>
        <Text style={{fontSize:16, color:"#ffffff",textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",}}>
            Acepto los terminos y condiciones
        </Text>
        </View>
        </View>
        <TouchableOpacity onPress={() => history.push("/Home")}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Enviar </Text>
          </View>
        </TouchableOpacity>
        <View style={{ width: "100%", flexDirection: 'row', paddingTop: 45, paddingBottom: 15 }}>
          <View style={{ marginLeft: 19, width: "100%", height: 20 }}>
            <Text style={{fontSize:14,color: "#FFFFFF"}}>
              AFP POPULAR ©  2018 | Todos los derechos reservados
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
