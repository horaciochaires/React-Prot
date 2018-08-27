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
import { AboutUs as styles } from "./styles";



export default class AboutUs extends Component<Props> {
  constructor(props) {
    super(props);

  }



  render() {
    const { history } = this.props;

    return (
      <ScrollView  style={styles.view}>
        <View style={{ flexDirection: 'column', alignItems: "flex-start" }}>
          <View style={{ width: "100%", flexDirection: 'row' }}>
            <View style={{ width: "60%", height: 70, backgroundColor: 'powderblue' }} />
            <View style={{ width: "40%", height: 70 }}>
              <TouchableOpacity onPress={() => history.push("/Login")}>
                <View style={styles.button}>
                  <Text style={styles.textButton}> Acceso</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: "100%", flexDirection: 'row' }}>
            <View style={{ width: "60%", height: 50, }}>
              <TouchableHighlight
                style={styles.submit}
                underlayColor='#fff'>
                <Text style={styles.submitText}>Sobre Nosotros</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={{ width: "100%", flexDirection: 'row' }}>
            <View style={{ width: "85%",marginLeft:20, paddingTop:30,}}>
              <Text style={styles.TextAbout}>
              Somo una empresa  filial del Grupo Popular,
              pionera del mercado previsional y lider en la 
              administracion de fondos de pensiones. Con el
              objetivo de diseñar y administrar Planes de 
              Pensiones bajo el esquema de Cuentas de
              Capitalizacion Individual (CCI) acorde a la ley
               87-01.
                </Text>
                <Text style={styles.TextAbout}>
                Actualmente mantenemos el liderazo en el 
                mercado previsional al gestionar el mayor fondo 
                de pensiones administrado. La trayetoria de AFP
                Popular fue consolidada con la confianza 
                depositada por sus  afiliados, llenado a  alcanzar 
                el liderazgo del mercado previsional al recibir el
                mayot número de afiliados cotizantes al nuevo
                sistema
                </Text>
            </View>
          </View>
          <View style={{ width: "100%", flexDirection: 'row' }}>
            <View style={styles.mision}>
                <Text style={styles.misionText}>
                  Mision
                </Text>
                <Text style={styles.misionContentText}>
                  Somos un equipo de Profesionales comprometido
                  con la rentabilidad de los fondos y la capacidad
                  de planificar el bienestar presente y futuro de
                  nuestros clientes
                </Text>
               
            </View>
          </View>
          <View style={{ width: "100%", flexDirection: 'row' }}>
            <View style={styles.vision}>
                <Text style={styles.misionText}>
                  Vision
                </Text>
                <Text style={styles.misionContentText}>
                  Ser socios estrátegicos del presente y futuro de 
                  nuestro país contribuyendo al bienestar de todas
                  las personas.
                </Text>
               
            </View>
          </View>
          
        </View>
      </ScrollView >
    );
  }
}
