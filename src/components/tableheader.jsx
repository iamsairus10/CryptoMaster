import React from 'react'

const TableHeader = () =>{
    return (
    
    <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
    <span className="font-weight-bold">Coin</span>
    <span className="font-weight-bold">Price</span>
    <span className="font-weight-bold">24 Hour % Change</span>
    
  </li>
    )
}

export default TableHeader;