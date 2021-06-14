import React from 'react';
import AddCoin from '../components/AddCoin';
import CoinList from '../components/CoinList';
import TableHeader from '../components/tableheader';

const CoinSummaryPage = () =>{
    return (
        <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
            <AddCoin/>
            <TableHeader/>
            <CoinList/>
        </div>
    )
};

export default CoinSummaryPage;