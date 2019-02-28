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
        this.setState((state,props) => {
            return {
                hoverClass: 'red',
                isCardHovered: true
            }
        })
        // console.log(this.state)
    }

    deanimate(){
        this.setState((state,props) => {
            return {
                hoverClass: null,
                isCardHovered: false
            }
        })
        // console.log(this.state)
    }
    
    
    render(){
        // console.log(this.props);
        // if(!this.state.cardId) this.setState({cardId: Math.random(100)})
        return (
            // <div className={`${this.props.side}`}>    
                <div 
                    className={`${this.props.styles} ${this.state.hoverClass} linear ${this.props.side}`} 
                    key={this.state.cardId} 
                    onMouseEnter={() => this.animate()}
                    onMouseLeave={() => this.deanimate()}
                >
                    <div className={`card-info ${this.state.isCardHovered ? 'card-info-expanded' : ''}`}>
                        <div className='test-border'>
                            <div className='icon'>
                                <img  src={require('../../images/championIcon.png')}/>
                            </div>
                        </div>
                        <p className={`title lol-theme`}>{this.props.text}</p>
                        <p className={`description lol-theme2`}>dnsja dhskja dskjan </p>
                        <div className={` explore-base ${this.state.isCardHovered ?  'explore-expanded' : ''}`}>
                            <button className={`button-test ${this.state.isCardHovered ? 'button-test-expanded' : ''}`} >EXPLORE</button>
                        </div>
                    </div>
                </div>
            // </div>
        )
    }
}


export default TopChartsLeftCard