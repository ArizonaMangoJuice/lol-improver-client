import React, { Component } from 'react'
import './index.css'

//contain everything you want and css as well
//you can also give a options like slider or other supported formats
//add next or before arrows
//make the loading bar stop when you hover over the mid card
//move this to a different file
let info = [{
    title: 'Take Notes',
    paragraph: 'Write down what you learned from your matches.',
    image: 'asheWarmother'
  },{
    title: 'Latest Matches',
    paragraph: 'See the latest stats from players.',
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
      }
    
      componentDidMount(){
        let styleSheet = document.styleSheets[0]

        let images = info.map((e, i) => (
            <div className={`jumbo-container`}>
            {/* left card */}
              <div  style={{backgroundImage: `url('./${!info[i-1] ? info[info.length - 1].image : info[i-1].image}.jpg')`}} className={`jumbo-card`}>
                <div className={`text-card`}>
                  <h1 className={'lol-theme'}>{!info[i-1] ? info[info.length - 1].title : info[i-1].title}</h1>
                  <p className={'lol-theme2'}>{!info[i-1] ? info[info.length - 1].paragraph : info[i-1].paragraph}</p>
                </div> 
              </div>
              {/* middle card */}
              <div style={{backgroundImage: `url('./${e.image}.jpg')`}} className={`jumbo-card`}>
                <div className={`text-card`}>
                  <div className={`loading-bar`}>
                    <div style={{animationName: `${e.title.replace(/ /g, '')}`}} className={`animation-loading-bar`}></div>
                  </div>
                  <h1 className={'lol-theme'}>{e.title}</h1>
                  <p className={'lol-theme2'}>{e.paragraph}</p>
                </div> 
              </div>
              {/* right card */}
              <div style={{backgroundImage: `url('./${!info[i+1] ? info[1].image : info[i+1].image}.jpg')`}} className={`jumbo-card`}>
                <div className={`text-card`}>
                  <h1 className={'lol-theme'}>{!info[i+1] ? info[1].title : info[i+1].title}</h1>
                  <p className={'lol-theme2'}>{!info[i+1] ? info[1].paragraph : info[i+1].paragraph}</p>
                </div> 
              </div>            
            </div>
        ))

        let keyframe1 = 
        `@keyframes TakeNotes {
          from {width: 1%}
          to {width: 100%;}
        }
        
        `

        let keyframe2 = `
        @keyframes LatestMatches {
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
        // console.log(this.state)
        return (
            <React.Fragment>
                {!this.state.currentCard 
                ? <div className={`jumbo-container`}>
                    <div style={{backgroundImage: `url('./${info[info.length-1].image}.jpg')`}} className={`jumbo-card`}>
                      <div className={`text-card`}>
                        <h1 className={'lol-theme'}>{info[info.length-1].title}</h1>
                        <p>{info[info.length-1].paragraph}</p>
                      </div>
                    </div> 
                    <div style={{backgroundImage: `url('./${info[0].image}.jpg')`}} className={`jumbo-card`}>
                      <div className={`text-card`}>
                        <div className={`loading-bar`}>
                          <div style={{animationName: `${info[0].title.replace(/ /g, '')}`}} className={`animation-loading-bar`}></div>
                        </div>
                        <h1 className={'lol-theme'}>{info[0].title}</h1>
                        <p>{info[0].paragraph}</p>
                      </div>
                    </div> 
                    <div style={{backgroundImage: `url('./${info[1].image}.jpg')`}} className={`jumbo-card`}>
                      <div className={`text-card`}>
                        <h1 className={'lol-theme'}>{info[1].title}</h1>
                        <p>{info[1].paragraph}</p>
                      </div>
                    </div> 
                  </div>: this.state.currentCard}
            </React.Fragment>
        )
    }
}

export default Jumbotron