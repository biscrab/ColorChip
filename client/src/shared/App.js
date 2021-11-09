import { useEffect, useState } from 'react';
import List from '../Color.json'
import { useHistory, useLocation, useParams, Route, Switch} from 'react-router-dom'
import * as P from '../pages'
import Header from '../contents/Header';
import axios from 'axios';

function App() {

  function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
    start += cName.length;
    var end = cookieData.indexOf(';', start);
    if(end == -1)end = cookieData.length;
    cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
}
  axios.defaults.headers['Access-Control-Allow-Origin'] = "*"
  axios.defaults.headers['Authorization'] = "Bearer " + getCookie('c-token');

  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/upload" component={P.Upload}></Route>
      <Route path="/" component={P.Main}></Route>
    </Switch>
    </>
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