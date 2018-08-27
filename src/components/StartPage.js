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
import { StartPage as styles } from "./styles";



export default class StartPage extends Component<Props> {
  constructor(props) {
    super(props);

  }



  render() {
    const { history } = this.props;

    return (
      <View style={styles.view}>
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
        {/* <TextInput
          placeholder="FIERRRO 0 MIEDO"
          onChangeText={TextInputValue =>
            this.setState({ username: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter password"
          onChangeText={TextInputValue =>
            this.setState({ password: TextInputValue })
          }
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          style={styles.input}
        /> */}

        <View style={styles.loginButtonSection}>
          {/* <TouchableOpacity onPress={this.login}> */}
          <TouchableOpacity onPress={() => history.push("/Login")}>
            <View style={styles.button}>
              <Text style={styles.textButton}> Acceso</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{
          flex: 1, flexDirection: 'column', alignItems: 'center',
        }}>
          <View style={{
            width: 70, height: 70,
            alignItems: 'center'
          }}>
            <TouchableHighlight
              onPress={() => history.push("/AboutUs")}
              style={{
                marginLeft: 1,
                backgroundColor: "#113070",
                height: 100,
                width: 100,
                borderRadius: 50
              }}>
              <Text style={styles.submitText}>Sobre Nosotros</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
