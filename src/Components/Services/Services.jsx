import React from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import {themeContext} from '../../Context';
import { useContext } from "react";
import {motion} from 'framer-motion';

const Services = () => {

  const transition = {duration : 1, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
      {/* left side */}
      <div className="awesome">
        <span style={{color: darkMode? 'white': '' }}>My Awesome</span>
        <span>Services</span>
        <spane>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Quo totam quidem quisquam suscipit blanditiis dolorum, <br />
            quia odit, eius ofum ab! Ipsum facilis quas aperiam!
        </spane>
        <a href={Resume} download>
            <button className="button s-button">Download CV</button>
        </a>
        
        <div className="blur s-blur1" style={{ background: "#ABF1FF94"}}></div>
      </div>
      {/* right side */}
      <div className="cards">
            <motion.div 
            whileInView={{left: '1rem'}}
            initial={{left: '25%'}}
            transition= {transition}
            style={{left: '14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}

                />
            </motion.div>

            {/* Seconde card */}

            <motion.div 
            whileInView={{left: '25rem'}}
            initial={{left: '25%'}}
            transition= {transition}
            
            style={{top: '12rem', left: '-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"Html, Css, JavaScript, React"}

                />
            </motion.div>

             {/* Third card */}

             <motion.div 
              whileInView={{left: '9rem'}}
              initial={{left: '25%'}}
              transition= {transition}
             style={{top: '19rem', left: '12rem'}}>
                <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {
                  "Lorem ipsum, dolor  suscipit blanditiis dolorum,  quia odit, eius officia accusamus tempora qui,  enim fugiat accusantium ab! Ipsum facilis quas aperiam!"
                }

                />
            </motion.div>

            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>

      </div>
    </div>
  )
}

export default Services
