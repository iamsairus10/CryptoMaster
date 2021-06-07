import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import Header from './components/Header';
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import "./App.css";
import { WatchListContextProvider } from './context/WatchListContext';
import Footer from './components/Footer';

const App = () =>{
    return<div className="container">
        <React.StrictMode>

        <WatchListContextProvider>
        <BrowserRouter>
        <Header/>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={CoinSummaryPage} />
        
          
        </BrowserRouter>
        
        </WatchListContextProvider>
        <Footer/>
        </React.StrictMode>
    </div>;
};

export default App;