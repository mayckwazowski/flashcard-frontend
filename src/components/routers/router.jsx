import React from "react";
import { Route, Switch } from "react-router";
import Home from "../../pages/home"
import PageNotFoud from "../../pages/404"
import Courses from "../../components/course/courses"
import FormColecao from "../../components/course/form_colecao"
import Routers from "./routers";

const RouterComponent = () => (
    <Switch>
        <Route exact path={Routers.HOME} component={Home} />
        <Route path={Routers.COURSE} component={Courses} />
        <Route path={Routers.CREATE_COURSE} component={FormColecao} />
        <Route path="*" component={PageNotFoud} />
    </Switch>
)

export default RouterComponent;