import React, { Component } from 'react'
// import asheWarmother from './asheWarmother.jpg'
// import Sylas from '../../images/Sylas.jpg'
// import bloodMoonSivir from '../../images/bloodMoonSivir.jpg'
// import DemacianHeart from '../../images/DemacianHeart.jpg'

// import {connect} from 'react-redux'
// import {Redirect} from 'react-router-dom'

//Jumbotron is a generic component you will have to pass the divs you want should 
//contain everything you want and css as well
//you can also give a options like slider or other supported formats

//move this to a different file
let info = [{
    title: 'Warmother',
    paragraph: 'Raised in the savage wilds of the north, Ashe is an Iceborn, a warrior gifted with a magical connection to her frozen homeland--and burdened by her mother’s fanatical expectations.',
    image: 'asheWarmother'
  },{
    title: 'The Unshackled',
    paragraph: 'As a mage born to a poor Demacian family, Sylas of Dregbourne was perhaps doomed from the start.',
    image: 'Sylas'
  }, {
    title: 'Trial of the Masks',
    paragraph: 'Imagine the world as a mirror.',
    image: 'bloodMoonSivir'   
  }, {
    title: 'Demacian Heart',
    paragraph: 'The boy admired the yellow dormisroot peeking through the frozen soil.',
    image: 'DemacianHeart'
}]

export class Jumbotron extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          images: null,
          pointer: 1,
          currentCard: null,
          intervalId: null
        }
      
        this.timer = this.timer.bind(this)
      }
    
      timer(){
        console.log('hello')

        
        
        if(this.state.pointer === this.state.images.length - 1){
          this.setState((state) => {
            return {
              pointer: 0,
              currentCard: state.images[state.pointer]
            }
          })
        } else {
          this.setState((state, props) => {
          return {
            pointer: state.pointer + 1,
            currentCard: state.images[state.pointer]
            }
          })
        }
    
    
    
        console.log(this.state)
      }
    
      componentDidMount(){
        let styleSheet = document.styleSheets[0]

        let images = info.map((e, i) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              {/* <h1>{!info[i-1] ? info[info.length - 1].title : info[i-1].title}</h1> */}
              <div style={{
                  backgroundImage: `url('./${!info[i-1] ? info[info.length - 1].image : info[i-1].image}.jpg')`,
                  height: '500px',
                  width: '70%',
                  color: 'white',
                  margin: 'auto',
                  backgroundPosition: 'center',
                  position: 'relative'
                  
              }}>
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    backgroundColor: '#16171b',
                    left: '25%',
                    width: '50%',
                    height: '180px'
                }}>
                  <div style={{
                    width: '100%',
                    height: '10px'
                  }}>
                    {/* <div style={{
                      height: '10px',
                      width: '1%',
                      backgroundColor: '#008283',
                      animationName: `${!info[i-1] ? info[info.length - 1].title.replace(/ /g, '') : info[i-1].title.replace(/ /g, '')}`,
                      animationDuration: '6s'
                    }}>
                    </div> */}
                  </div>
                  <h1>{!info[i-1] ? info[info.length - 1].title : info[i-1].title}</h1>
                  <p>{!info[i-1] ? info[info.length - 1].paragraph : info[i-1].paragraph}</p>
                  </div> 
                </div>
              <div style={{
                  backgroundImage: `url('./${e.image}.jpg')`,
                  height: '500px',
                  width: '70%',
                  color: 'white',
                  margin: 'auto',
                  backgroundPosition: 'center',
                  position: 'relative'
                  
              }}>
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    backgroundColor: '#16171b',
                    left: '25%',
                    width: '50%',
                    height: '180px'
                }}>
                  <div style={{
                    width: '100%',
                    height: '10px'
                  }}>
                    <div style={{
                      height: '10px',
                      width: '1%',
                      backgroundColor: '#008283',
                      animationName: `${e.title.replace(/ /g, '')}`,
                      animationDuration: '6s'
                    }}>
                    </div>
                  </div>
                  <h1>{e.title}</h1>
                  <p>{e.paragraph}</p>
                  </div> 
                </div>
              <h1>{!info[i+1] ? info[1].title : info[i+1].title}</h1>                
            </div>
        ))

        let keyframe1 = 
        `@keyframes Warmother {
          from {width: 1%}
          to {width: 100%;}
        }
        
        `

        let keyframe2 = `
        @keyframes TheUnshackled {
          from {width: 1%}
          to {width: 100%}
        }
        `

        let keyframe3 = `
        @keyframes TrialoftheMasks {
          from {width: 1%}
          to {width: 100%}
        }
        `

        let keyframe4 = `
        @keyframes DemacianHeart {
          from {width: 1%}
          to {width: 100%}
        }
        `

        styleSheet.insertRule(keyframe1, styleSheet.cssRules.length)
        styleSheet.insertRule(keyframe2, styleSheet.cssRules.length)
        styleSheet.insertRule(keyframe3, styleSheet.cssRules.length)
        styleSheet.insertRule(keyframe4, styleSheet.cssRules.length)


        this.setState((state,props) => {
            return {
                intervalId: setInterval(this.timer , 6000),
                images: images
            }
        })
      }
    
      componentWillUnmount(){
        clearInterval(this.state.intervalId)
      }

    render(){
        console.log(this.state)
        return (
            <div>
                {!this.state.currentCard 
                ? <div style={{
                  backgroundImage: `url('./${info[0].image}.jpg')`,
                  height: '500px',
                  width: '70%',
                  color: 'white',
                  margin: 'auto',
                  backgroundPosition: 'center',
                  position: 'relative'
                  
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '40px',
                  backgroundColor: '#16171b',
                  left: '25%',
                  width: '50%',
                  height: '180px'
               }}>
                  <h1>{info[0].title}</h1>
                  <p>{info[0].paragraph}</p>
                </div>
                </div> : this.state.currentCard}</div>
        )
    }
}

export default Jumbotron