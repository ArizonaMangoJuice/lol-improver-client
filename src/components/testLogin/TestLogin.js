import React, { Component } from 'react'

class TestLogin extends Component{

    constructor(props){
        super(props)
        this.state = {
            isClicked: false,
            leftClass: null,
            rightClass: null
        }
    }

    test(){
        // let styleSheet = document.styleSheets[0]
        this.setState((state) => {
            return {
            rightClass: 'move-login',
        }})

        // this.setState({rightClass: 'move-login'})

        // let moveLoginKeyframe = 
        // `
        // @keyframes movingLogin {
        //     from {right: 0}
        //     to {left: 0}
        // }
        // `
        // let moveLogin = 
        // `
        // .move-login{
        //     left: 0;
        //     z-index: 0;
        //     animation-duration: 6s;
        //   }
        // `
        // styleSheet.insertRule(moveLogin, styleSheet.cssRules.length)
        // styleSheet.insertRule(moveLoginKeyframe, styleSheet.cssRules.length)
    }

    render(){
        const isClicked = this.state.rightClass;

        return (
            <div className='landing-page-login-container' >
                <div className='left-cover'>
                    <h2>left cover</h2>
                </div>
                {isClicked 
                    ?  
                    <div className='move-login'   >
                        <div>
                            <h2>poop</h2>
                            <button onClick={() =>this.test()}>press</button>
                        </div>
                    </div>
                    : 
                    <div  className='login'>
                        <div>
                            <h2>login</h2>
                            <button onClick={() =>this.test()}>press</button>
                        </div>
                    </div>
                }
                <div className='sign-up'>
                    <h2>sign up</h2>
                    <button onClick={() => console.log('hello')}>press</button>
                </div>
            </div>
        )
    }
}

export default TestLogin