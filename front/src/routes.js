import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { Context } from "./Context/AuthContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Location from "./pages/Location";
import Language from "./pages/Language";
import PositionGroups from "./pages/PositionGroups";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Initial from "./pages/Initial";
import Register from "./pages/Register";
import TreasuryMedia from "./pages/TreasuryMedia";
import Company from "./pages/Company";

function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated, loading } = useContext(Context);

  if (loading) {
    return <h1>Carregando...</h1>;
  }
  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Initial} />
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute exact path="/register" component={Register} />
      <CustomRoute exact path="/home" component={Home} isPrivate />
      <CustomRoute exact path="/personal/profile" component={Profile} />
      <CustomRoute exact path="/personal/location" component={Location} />
      <CustomRoute exact path="/personal/languages" component={Language} />
      <CustomRoute
        exact
        path="/personal/positiongroups"
        component={PositionGroups}
      />
      <CustomRoute exact path="/personal/skills" component={Skills} />
      <CustomRoute exact path="/personal/education" component={Education} />
      <CustomRoute
        exact
        path="/personal/treasurymedia"
        component={TreasuryMedia}
      />
      <CustomRoute exact path="/company" component={Company} />
    </Switch>
  );
}
