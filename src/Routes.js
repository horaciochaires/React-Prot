import React from "react";
import { View, Platform, AsyncStorage } from "react-native";
import { NativeRouter, Route, AndroidBackButton } from "react-router-native";
import { Login, PantallaPrincipal, Register, StartPage, AboutUs} from "./containers";
import type { userType } from "./types";
import { logger } from "./config/validations";


type Props = {
  user: userType
};

export default ({ user }: Props) => {
  if (user.token) {
    //AsyncStorage.setItem("@Session:token", user.token);
    logger(user.token);
  }

  const routes = (
    <View>
      <Route
        exact
        path="/"
        // component={user.logged ? PantallaPrincipal : Login}
           component={user.logged ? PantallaPrincipal : StartPage}
      />
      <Route
        path="/PantallaPrincipal"
        component={user.logged ? PantallaPrincipal : Register}
      />
       <Route
        path="/Register"
        component={Register}
      />
      <Route
        path="/Login"
        component={Login}
      />
      <Route path="/AboutUs" component={AboutUs} />
    </View>
  );

  if (Platform.OS === "ios") {
    return <NativeRouter>{routes}</NativeRouter>;
  }

  return (
    <NativeRouter>
      <AndroidBackButton>{routes}</AndroidBackButton>
    </NativeRouter>
  );
};
