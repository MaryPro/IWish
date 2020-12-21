import React from 'react';
import Filter from './Filter/Filter';
import Search from './Search/Search';

function NavFilter({ dispatch, ideas, res, setRes }) {
  return (
    <div>
      <Search dispatch={dispatch} ideas={ideas} res={res} setRes={setRes}/>
      {/* <Filter dispatch={dispatch} ideas={ideas} res={res} setRes={setRes}/> */}
    </div>
  );
}

export default NavFilter;
