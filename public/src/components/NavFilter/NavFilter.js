import React, {useState} from "react";
import Filter from './Filter/Filter';
import Search from './Search/Search';
import AddCard from './AddCard/AddCard'

function NavFilter({ dispatch, ideas, res, setRes }) {
  const [show, setShow] = useState(false);
  const visibleModal = () => {
    setShow(true)
}
  return (
    <div>
      <Search dispatch={dispatch} ideas={ideas} res={res} setRes={setRes}/>
      <Filter dispatch={dispatch} ideas={ideas} res={res} setRes={setRes}/>
      <AddCard setShow={setShow} show={show} onClick={visibleModal}/>

    </div>
  );
}

export default NavFilter;
