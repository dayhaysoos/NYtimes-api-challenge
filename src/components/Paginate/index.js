import React from 'react';
import { Link } from 'react-router-dom';

const renderPagination = (pages, pageState, pageFunc) => {
    return pages.map((page, k) => {
        return k == pageState ? <li className="page-num" key={k}>{k}</li> : <li className="page-num" key={k}><a name="page" href="" onClick={pageFunc}>{k}</a></li>
    });
}

const Paginate = ({data, pageState, pageFunc}) => (
    <ul className="paginate-container">
        {renderPagination(data, pageState, pageFunc)}
    </ul>
)

export default Paginate;