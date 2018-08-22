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
  TouchableHighlight
} from "react-native";
import { userType } from "../types";
import { Login as styles } from "./styles";

type Props = {
  login: (username: string, password: string) => void,
  fetchSession: () => void,
  history: {
    push: (path: string, state?: {}) => void
  }
};

export default class Login extends Component<Props> {
  
  // constructor(props) {
  //   super(props);
  //   state = {
  //     username: "",
  //     password: ""
  //   };
  
  //   this.login = this.login.bind(this);
  // }

  // componentWillMount() {
  //   const { fetchSession, user } = this.props;

  //   fetchSession();
  // }

  // login() {
  //   const { login } = this.props;

  //   login(this.state.username, this.state.password);
  // }

  render() {
    const { history } = this.props;

    return (
      <View style={{ height: "100%" }}>
        <Image
          style={{
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center'
          }}
          source={{ uri: "https://i1.wp.com/diariodigitaldominicano.com/site/wp-content/uploads/2015/03/BPD3.jpg" }}
        />
        <View style={{ width: "100%", height: "45%", flexDirection: 'row' }}>
          <View style={{ width: "100%", height: 120 }} >
            <Image
              style={{

                position: 'absolute',
                width: '70%',
                height: '60%',
                justifyContent: 'center',
                marginTop: 20,
                marginLeft: 40

              }}
              source={{ uri: "http://www.cdd.org.do/assets/inter_logos/banco_popular.png" }}
            />
          </View>
        </View>
        <Text style={styles.text}>Usuario</Text>
        <TextInput
          placeholder="Usuario"
          onChangeText={TextInputValue =>
            this.setState({ username: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.input}
        />
        <Text style={styles.text}>Contraseña</Text>
        <TextInput
          placeholder="Contraseña"
          onChangeText={TextInputValue =>
            this.setState({ password: TextInputValue })
          }
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={{ width: "100%", flexDirection: 'row', paddingTop: 15, paddingBottom: 15 }}>
          <View style={{ marginLeft: 40, width: "25%", height: 20 }}>
            <TouchableHighlight
              onPress={() => history.push("/Register")}
              style={styles.register}
              underlayColor='#fff'>
              <Text style={styles.registerText}>Registrate  |</Text>
            </TouchableHighlight>
          </View>
          <View style={{ marginRight: 40, width: "55%", height: 20 }} >
            <TouchableHighlight
              onPress={() => history.push("/")}
              style={styles.recover}
              underlayColor='#fff'>
              <Text style={styles.recoverText}>Restablece tu contraseña</Text>
            </TouchableHighlight>
          </View>
        </View>
        <TouchableOpacity onPress={this.register}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Registrar </Text>
          </View>
        </TouchableOpacity>
        <View style={{ width: "100%", flexDirection: 'row', paddingTop: 45, paddingBottom: 15 }}>
          <View style={{ marginLeft: 15, width: "100%", height: 20 }}>
            <Text style={{fontSize:15,color: "#FFFFFF"}}>
              AFP POPULAR ©  2018 | Todos los derechos reservados
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
