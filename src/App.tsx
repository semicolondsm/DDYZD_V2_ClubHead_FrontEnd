import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Callback, { onSilentRefresh } from './components/Auth/Callback/Callback';
import Login from './components/Auth/Login/Login';
import Header from './components/Header/Header';

function App() {
  useEffect(()=>{
    onSilentRefresh();
  },[])
  return (
    <Router>
      <Route exact path="/" component={Header}></Route>
      <Route exact path="/callback" component={Callback}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Router>
  );
}

export default App;
