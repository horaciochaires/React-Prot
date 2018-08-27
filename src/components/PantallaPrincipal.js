// @flow

import React, { Component } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { PantallaPrincipal as styles } from "./styles/PantallaPrincipal"
import {
  View,
  Image,
  Text,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  TextView,
  Button,
  TextInput,
  TouchableHighlight
} from "react-native";
type Props = {
  logout: () => void
};

export default class PantallaPrincipal extends Component<Props> {
  constructor(props) {
    super(props);

    this.exit = this.exit.bind(this);
  }
  exit() {
    const { logout } = this.props;
    logout();
  }
  render() {
    const { user } = this.props;

    return (
      <View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
        }}>
          {/* Logo */}
          <View style={{ width: "100%", height: 100, backgroundColor: '#002d71' }}>

          </View>
          {/* Perfil */}
          <View style={{ width: "100%", height: 80, backgroundColor: '#01bdc9', alignItems: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row',justifyContent: 'center', alignItems: 'center' }}>
              {/* Imagen Usuario */}
              <View style={{ alignItems: 'center', width: "23%", height: 72 }}>
                <TouchableHighlight
                  style={{
                    marginLeft: 8,
                    height: 70,
                    width: 70,
                    borderRadius: 40,
                  }}
                >
                  <Image source={{ uri: "https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png" }} style={{
                    height: 70,
                    width: 70,
                    borderRadius: 40,
                  }} />
                </TouchableHighlight>
              </View>
              {/* DATOS DEL USUARIO */}
              <View style={{ width: "50%", height: 72, marginLeft: "1%" }}>
                <View style={{
                  flex: 1,
                  flexDirection: 'column',

                }}>
                  {/* NOMBRES */}
                  <View style={{ width: "100%", height: 26.5 }}>
                    <Text style={{ color: "#ffff", fontWeight: "bold", fontSize: 16, paddingTop: 10 }}>
                      Horacio
                  </Text>
                  </View>
                  {/* APELLIDOS */}
                  <View style={{ width: "100%", height: 26.5 }}>
                    <Text style={{ color: "#ffff", fontWeight: "bold", fontSize: 16 }}>
                      Chairez Rodriguez
                  </Text>
                  </View>
                  {/* PERFIL */}
                  <View style={{ width: "100%", height: 20 }}>
                    <Text style={{
                      color: "#1c3c71", textDecorationLine: "underline",
                      textDecorationStyle: "solid",
                      textDecorationColor: "#000", fontSize: 14,
                    }}>
                      Ir a perfil
                  </Text>
                  </View>
                </View>
              </View>
              {/* ICONO MENSAJES */}
              <View style={{ width: "15%", height: 72,justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome style={{  marginLeft: 20 }} name="envelope" size={30} color="#ffff" />
              </View>
            </View>
          </View>
          {/* Contenido */}
          <View style={{ width: "100%", height: 300 }}>

            <View style={{
              flex: 1,
              flexDirection: 'column',

              alignItems: 'center',
            }}>
              {/* Saldo fecha */}
              <View style={{ width: "100%", height: 50, alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ width: "30%", height: 50, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: "#002d71", textAlign: "left", fontWeight: "bold" }}>
                      Saldo al
        </Text>
                  </View>

                  <View style={{ width: "43%", height: 50, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: "#01bdc9", textAlign: "center", fontWeight: "bold" }}>
                      31/Marzo/2018
        </Text>
                  </View>

                </View>
              </View>
              {/* Saldo */}
              <View style={{ width: "100%", height: 50, alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ width: "30%", height: 50, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", backgroundColor: "#002d71", color: "#ffff", textAlign: "center", borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: "80%", marginLeft: "35%" }}>
                      RD $
        </Text>
                  </View>

                  <View style={{ width: "60%", height: 50, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: "#002d71", textAlign: "center", backgroundColor: "#f5f2ed", fontWeight: "bold", borderTopRightRadius: 20, borderBottomRightRadius: 20, width: "80%" }}>
                      93,855.50
        </Text>
                  </View>

                </View>
              </View>
              {/* Meses afiliado */}
              <View style={{ width: "100%", height: 50, alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ width: "40%", height: 50, justifyContent: 'center', }}>
                    <Text style={{ fontSize: 20, color: "#002d71", textAlign: "left", fontWeight: "bold", borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: "100%" }}>
                      Meses afiliado:
        </Text>
                  </View>

                  <View style={{ width: "33%", height: 50, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontSize: 20, color: "#002d71", textAlign: "right", backgroundColor: "#ffff", fontWeight: "bold", borderRadius: 40, width: "60%", paddingRight: "10%", borderWidth: 2, borderColor: '#f5f2ed' }}>
                      130
        </Text>
                  </View>

                </View>
              </View>
              {/*Meses cotizados */}
              <View style={{ width: "100%", height: 50, alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ width: "40%", height: 50, justifyContent: 'center', }}>
                    <Text style={{ fontSize: 20, color: "#002d71", textAlign: "left", fontWeight: "bold", borderTopLeftRadius: 20, borderBottomLeftRadius: 20, width: "100%" }}>
                      Meses cotizados:
        </Text>
                  </View>

                  <View style={{ width: "33%", height: 50, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontSize: 20, color: "#002d71", textAlign: "right", backgroundColor: "#ffff", fontWeight: "bold", borderRadius: 40, width: "60%", paddingRight: "10%", borderWidth: 2, borderColor: '#f5f2ed' }}>
                      130
        </Text>
                  </View>

                </View>
              </View>
              <View style={{ width: "100%", height: 50, alignItems: 'center' }}>
              <View style={{ borderBottomColor: '#EBEAE8', borderBottomWidth: 2.5, width: "80%", marginTop: "5%" }}>
         
        </View>
              </View>
            </View>

          </View>
        </View>

      </View>
    );
  }
}

