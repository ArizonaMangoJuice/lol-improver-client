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
                        <TopChartsLeftCard styles={`left-cards sylas center-image`} text={'Test'}/>
                        <TopChartsLeftCard styles={`left-cards lux center-image`} text={'Test'}/>
                        <TopChartsLeftCard styles={`left-cards garen center-image`} text={'Test'}/>
                        <TopChartsLeftCard styles={`left-cards garen center-image`} text={'Test'}/>
                    </div>
                    {/* this div will be for any recent changes to the site */}
                    <div className={`right-card center-image`}>

                    </div>
                </div>
            </div>
        )
    }
}


//this is going into a seperate file
class TopChartsLeftCard extends Component {
    render(){
        console.log(this.props);

        return (
            <div className={this.props.styles}>
                <div className={`card-info`}>
                    <div className='test-border'>
                      <div className='icon'>
                        <img  src={require('../../images/championIcon.png')}/>
                      </div>
                    </div>
                    <p className={`title`}>{this.props.text}</p>
                    <p className={`description`}>dnsja dhskja dskjan asjkdn kjasdn sadasa njk njk</p>
                </div>
            </div>
        )
    }
}

export default TopCharts
