import React, { Component } from 'react'
import './styles.css'


class PaddingBlock extends Component {
    constructor(props){
        super(props)


    }

    render(){
        let paddingImage = this.props.paddingImage;
        
        console.log(paddingImage)
        return (
            <div className='padding-block'>
                <div className={`${paddingImage} padding-image`}> 
                </div>
                <div className='padding-text'>
                    {/* icon will go here */}
                    <h2 className='lol-theme2 text-settings'>{this.props.text}</h2>
                </div>
                <div className='padding-shadow'>
                </div>
            </div>

        )
    }
}

export default PaddingBlock