import React from 'react';
import './Experience.css';
import {themeContext} from '../../Context';
import { useContext } from "react";


const Experience = () => {
  
  return (
    <div className='experience' id='Experience'>
        <div className="achievement">
            <div className="circle">8+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle">20+</div>
            <span>completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle">2+</div>
            <span>companies</span>
            <span>Work</span>
        </div>
      
    </div>
  )
}

export default Experience
