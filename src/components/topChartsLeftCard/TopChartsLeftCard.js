import React, { Component } from 'react'
import './styles.css'

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
                    <p className={`title lol-theme`}>{this.props.text}</p>
                    <p className={`description lol-theme2`}>dnsja dhskja dskjan asjkdn kjasdn sadasa njk njk</p>
                </div>
            </div>
        )
    }
}


export default TopChartsLeftCard