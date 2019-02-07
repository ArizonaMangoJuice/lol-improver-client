import React, { Component } from 'react'
import './styles.css'

class TopCharts extends Component{

    render(){
        return (
            //wrapper for everything else 
            <div className='wrapper'>
                {/* icon and the Champions text will go in this div, 
                    this div will also have a background*/}
                <div> 
                    icon will go here
                    <h2>Champions and News</h2>
                </div>
                <div className='card-container'>
                    {/* this dive will be for the champions */}
                    <div className='left-side-card-container'>
                        <div className={`left-cards sylas center-image`} >
                            <div className={`card-info`}>

                            </div>
                        </div>
                        <div className={`left-cards lux center-image`}>
                            <div className={`card-info`}>

                            </div>
                        </div>
                        <div className={`left-cards garen center-image`}>
                            <div className={`card-info`}>

                            </div>
                        </div>
                        <div className={`left-cards sylas center-image`}>
                            <div className={`card-info`}>

                            </div>
                        </div>
                    </div>
                    {/* this div will be for any recent changes to the site */}
                    <div className={`right-card center-image`}>

                    </div>
                </div>
            </div>
        )
    }
}

export default TopCharts

let styles = {
    
}