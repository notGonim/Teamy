import './App.css';
import styled from 'styled-components'
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route exact path="/"  >  {/* chat components*/} </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display:flex;
  height:100vh;
`
