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

            </div>
        )
    }
}

export default TopChartRight