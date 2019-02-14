import React, { Component } from 'react'
import './styles.css'
import TopChartsLeftCard from '../topChartsLeftCard'

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
                        <TopChartsLeftCard 
                            styles={`left-cards sylas center-image`} 
                            text={'Test'}
                            side={'top-left'}    
                        />
                        <TopChartsLeftCard 
                            styles={`left-cards lux center-image`} 
                            text={'Test'}
                            side={'top-right'}
                            />
                        <TopChartsLeftCard 
                            styles={`left-cards garen center-image`} 
                            text={'Test'}
                            side={'bottom-left'}
                            />
                        <TopChartsLeftCard 
                            styles={`left-cards garen center-image`} 
                            text={'Test'}
                            side={'bottom-right'}
                            />
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
