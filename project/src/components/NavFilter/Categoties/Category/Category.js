import React from 'react';
import { Link } from 'react-router-dom';

function Category({tag}) {
  // console.log(obj);
  return (
    <div>
        <Link to={`/categories/${tag}`}>{tag}</Link>
      {/* <span >{tag}</span> */}
    </div>
  );
}

export default Category;
