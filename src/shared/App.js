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


    /*
    {"name": "봄", "color":[]},
    {"name": "여름", "color":[]},
    {"name": "가을", "color":[]},
    {"name": "겨울", "color":[]},
    {"name": "공룡", "color":[]},
    {"name": "빛", "color":[]},
    {"name": "연구실", "color":[]},
    {"name": "숲", "color":[]},
    {"name": "동굴", "color":[]},
    {"name": "도시", "color":[]}*/