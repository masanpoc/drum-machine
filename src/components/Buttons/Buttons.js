import React, { Component } from 'react';
import './Buttons.css';
import v1 from './v1.mp3';
import v2 from './v2.mp3';
import v3 from './v3.mp3';
import v4 from './v4.mp3';
import v5 from './v5.mp3';
import v6 from './v6.mp3';
import v7 from './v7.mp3';
import v8 from './v8.mp3';
import v9 from './v9.mp3';
import {Howl, Howler} from 'howler';

const audioClips = [
  {
    sound: v1,
    label: 'Q',
    keyCode: 'q'
  },
  {
    sound: v2,
    label: 'W',
    keyCode: 'w'
  },
  {
    sound: v3,
    label: 'E',
    keyCode: 'e'
  },
  {
    sound: v4,
    label: 'A',
    keyCode: 'a'
  },
  {
    sound: v5,
    label: 'S',
    keyCode: 's'
  },
  {
    sound: v6,
    label: 'D',
    keyCode: 'd'
  },
  {
    sound: v7,
    label: 'Z',
    keyCode: 'z'
  },
  {
    sound: v8,
    label: 'X',
    keyCode: 'x'
  },
  {
    sound: v9,
    label: 'C',
    keyCode: 'c'
  },
];

class Buttons extends Component {
  constructor(props){
    super(props);
    this.state={
      check: 'on',
      volume: 0.1,
      value: 20
    }
    this.handleEvent=this.handleEvent.bind(this);
    this.handleCheck=this.handleCheck.bind(this);  
    this.handleChange=this.handleChange.bind(this);  
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleEvent )
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEvent)
  }

  handleEvent(event) {
    audioClips.map((el) =>{
      if(event.key===el.keyCode){
        this.SoundPlay(el.sound);
        this.refs[el.sound].focus();
        setTimeout(()=>{this.refs[el.sound].blur();}, 200);
      }
      return null
    })
  }
  SoundPlay = (src) => {
    const sound = new Howl({
      src: src
    });
    sound.play();
  }
  RenderButtonAndSound = () => {
    return audioClips.map((objSound, index) => {
      return(
        <button className='bttn' ref={objSound.sound} key={index} onClick={() => this.SoundPlay(objSound.sound)} >
          {objSound.label}
        </button>
      )
    })
  }
  handleCheck() {
    if(this.state.check==='on'){
      this.setState((state) => {
        return {
          check: 'off',
          volume: 0,
        };
      });
    }
    if(this.state.check==='off'){
      this.setState((state) => {
        return {
          check: 'on',
          volume: state.value/200,
        };
      });
    }
  }  
  handleChange(event) {
    if(this.state.check==='on'){
      this.setState({
        value: event.target.value,
        volume: event.target.value/200
      });
    }
    else {
      this.setState({
        value: event.target.value
      });
    }
  }
  
  render() {
      Howler.volume(this.state.volume);
      return (
        <div className='media'>
          <div className="Buttons">
            {this.RenderButtonAndSound()}
          </div>
          <div className='options'>
            <div className='power-button'>
              power
              <input id='checkbox' type="checkbox" 
              onChange={this.handleCheck} 
              defaultChecked={this.state.check} />
            </div>
            <h4 className='volume'>Volume: {this.state.value}</h4>
            <div className='slideContainer'>
              <input id='audioRange' type='range' min='0' max='100' value={this.state.value} onChange={this.handleChange}  className='slider' />
            </div>
          </div>
        </div>
      );
  }
  }

export default Buttons;