import { useEffect, useState } from 'react';
import List from '../Color.json'
import { useHistory, useLocation, useParams, Route, Switch} from 'react-router-dom'
import Page from '../Page'

function App() {
  return (
    <Switch>
      <Route path="/" component={Page}></Route>
    </Switch>
  );
}

export default App;
