import { Switch, Route } from 'react-router-dom';
import './App.css';
import Courses from './components/course/courses';
import Header from './components/header/header';
import PageNotFoud from './pages/404';
import Home from './pages/home';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="*" component={PageNotFoud} />
      </Switch>
    </>
  );
}

export default App;
