import React, { Component } from 'react'

class TopChartRight extends Component {
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
                hoverClass: 'right-side',
                isCardHovered: true
            }
        })
        console.log(this.state)
    }

    deanimate(){
        this.setState((state,props) => {
            return {
                hoverClass: null,
                isCardHovered: false
            }
        })
        console.log(this.state)
    }

    render() {
        return (
            <div 
                className={`right-card center-image ${this.state.hoverClass} linear`} 
                // className='right-card center-image'
                onMouseEnter={() => this.animate()}
                onMouseLeave={() => this.deanimate()}
            >
                 <div className={`card-info ${this.state.isCardHovered ? 'card-info-expanded' : ''}`}>
                        <div className='test-border'>
                            <div className='icon'>
                                <img  src={require('../../images/championIcon.png')}/>
                            </div>
                        </div>
                        <p className={`title lol-theme`}>Site News</p>
                        <p className={`description lol-theme2`}>Check out what i'm working on!</p>
                        <div className={` explore-base ${this.state.isCardHovered ?  'explore-expanded' : ''}`}>
                            <button className={`button-test ${this.state.isCardHovered ? 'button-test-expanded' : ''}`} >EXPLORE</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default TopChartRight