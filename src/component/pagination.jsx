import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';


const Pagination = (props) => {
    const {length,size,currentPage}=props;
    let NumPage=Math.ceil((length/size)+1);
    if(NumPage===1) return null;
    const page=_.range(1,NumPage);
    

    return ( <React.Fragment>
        <div className="container" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
        <nav aria-label="Page navigation example">
  <ul className="pagination">
    {page.map(e=> (<li key={e} style={{cursor:'pointer'}}  className={e===currentPage? "page-item active": "page-item"}><Link to="/"  className="page-link" onClick={()=>props.handlePageChange(e)}>{e}</Link></li>))}
  </ul>
</nav>
</div>
    </React.Fragment> );

}
export default Pagination;
