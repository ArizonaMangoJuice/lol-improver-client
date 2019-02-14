import React, { Component } from 'react'
import './styles.css'

class TopChartsLeftCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            isCardHovered: false,
            cardId: null,
            hoverClass: null
        }
    }

    animate(){
        console.log(this.state.cardId)
        this.setState({hoverClass: 'red'})
    }

    deanimate(){
        this.setState({hoverClass: null})
    }
    
    
    render(){
        console.log(this.props);
        if(!this.state.cardId) this.setState({cardId: Math.random(100)})
        return (
            // <div className={`${this.props.side}`}>    
                <div 
                    className={`${this.props.styles} ${this.state.hoverClass} linear ${this.props.side}`} 
                    key={this.state.cardId} 
                    onMouseEnter={() => this.animate()}
                    onMouseLeave={() => this.deanimate()}
                >
                    <div className={`card-info`}>
                        <div className='test-border'>
                        <div className='icon'>
                            <img  src={require('../../images/championIcon.png')}/>
                        </div>
                        </div>
                        <p className={`title lol-theme`}>{this.props.text}</p>
                        <p className={`description lol-theme2`}>dnsja dhskja dskjan asjkdn kjasdn sadasa njk njk</p>
                        <button className={`hidden`}>Explore</button>
                    </div>
                </div>
            // </div>
        )
    }
}


export default TopChartsLeftCard