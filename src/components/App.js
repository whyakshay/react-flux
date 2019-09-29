import React from 'react';
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import NotFound from "./NotFound";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import ManageCoursePage from "./ManageCoursePage";
import { Route, Switch } from 'react-router-dom';

 
function App(){

  return(
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App;
