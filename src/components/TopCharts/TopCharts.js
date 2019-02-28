import React, { Component } from 'react'
import './styles.css'
import TopChartsLeftCard from '../topChartsLeftCard'
import TopChartRight from '../TopChartsRight';
import PaddingBlock from '../PaddingBlock';

class TopCharts extends Component{

    render(){
        return (
            //wrapper for everything else 
            <div className='wrapper'>
                {/* icon and the Champions text will go in this div, 
                    this div will also have a background*/}
                <PaddingBlock 
                    paddingImage={'trending-background'}
                    text={'Champions and News'}
                />
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
                    <TopChartRight />
                </div>
            </div>
        )
    }
}



export default TopCharts
