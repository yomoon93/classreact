import React from 'react'
import {NavBarData} from './navBarData'


export const NavBarList = () => {
    return (
        <div className='nav'>
            <ul className="navbarlist">
                {NavBarData.map((val,key)=>{
                    //console.log(key)
                    return(
                        <li key={key} className='row'>
                          
                            {" "}
                            <div id="title">{val.title}</div>



                        </li>
                    )
                })}
            
            </ul>

        </div>
    )
}
export default NavBarList

// can add for active 
//className='row' onClick={()=>{window.location.pathname = val.link ? "active" : ""}}