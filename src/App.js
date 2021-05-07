import React from 'react'
import './App.css';
import Analysis from './components/Analysis/analysis';
import Average from './components/AverageRating/average';
import Counter from './components/counter/counter';
import NavBarList from './components/navBar/navBar'
import Reviews from './components/Reviews/reviews'
import Vistors from './components/Vistors/vistors';




function App() {
  return (
  <div className="App">
    <div className="container">

      <div className = "navbar">
      <NavBarList />
     
      </div>
        <div className ="reviews">
          <Reviews reviews = '1,281' />
        </div>
        <div className="average">
        <Average average= '4.6'/>
        </div>
        <div className="analysis">
          <Analysis analysis1="960" analysis2="122" analysis3="321"/>

        </div>
        <div className="visitors">
          <Vistors visitors="821"/>
        
        </div>
    </div>

  </div>
  )
}

export default App;
