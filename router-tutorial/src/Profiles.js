import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
// import RouterHookSample from './RouterHookSample';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
  return (
    <div>
      <h3>유저목록</h3>
      <ul>
        <li>
          <NavLink
          to="/profiles/velopert"
          activeStyle={{backgroundColor:'#000', color:'#fff'}}
          >
          velopert
          </NavLink>
        </li>
        <li>
          <NavLink
          to="/profiles/gildong"
          activeStyle={{backgroundColor:'#000', color:'#fff'}}
          >
          gildong
          </NavLink>
        </li>
      </ul>

      <Route path="/profiles" exact render={() => <div>유저를 선택해주세요.</div>}/>
      <Route path="/profiles/:username" component={Profile}/>
      <WithRouterSample/>
      {/* <RouterHookSample/> */}
    </div>
  );
};

export default Profiles;