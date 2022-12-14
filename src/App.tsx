import Money from "views/Money";
import Tags from "views/Tags";
import Statistics from "views/Statistics";
import NoMatch from "views/NoMatch";
import styled from "styled-components";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Tag } from "views/Tag";

const AppWrapper = styled.div`
  color:#333;
`;
//路由，通往所有页面的接口

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/tags/:id">
            <Tag />
          </Route>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router >
    </AppWrapper>
  );
}


export default App;