import React, {useEffect} from 'react';
import CategorySet from '../componentes/CategorySet'
function Category() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return(
        <div>
          <div style={{height: '8vh'}}></div>
          <CategorySet></CategorySet>
        </div>);
}

export default Category;


