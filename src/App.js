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

      <Route>
        <>
          <Header />
          <Sidebar />
          <AppBody>
            <Switch>
              <Route exact path="/" />
            </Switch>
          </AppBody>
        </>

      </Route>



    </div>
  );
}

export default App;


const AppBody = styled.div`

`
