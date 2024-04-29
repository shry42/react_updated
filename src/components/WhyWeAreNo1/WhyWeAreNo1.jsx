import React from 'react'
import './WhyWeAreNo1.css'  
import hair from '../../assets/hair.mp4'
const WhyWeAreNo1 = () =>  {
        return (
          <div className="why-number-1-section">
            <div className='video-container'></div>
            <div className='number-1-inner-column'>
              <div className='number-1-text'>
                Why We Are Number 1
              </div>
              <BulletPoint
                number={"01"}
                text={"We've helped over 10,000 Men and Women beat hair loss"}
              ></BulletPoint>
              <DottedLine />
              <BulletPoint
                number={"02"}
                text={"10+ Years of Award Winning SMP experience"}
              ></BulletPoint>
              <DottedLine />
              <BulletPoint
                number={"03"}
                text={"We've treated the MOST clients in the United States"}
              ></BulletPoint>
              <button className="quoteButton">
                GET A FREE QUOTE
              </button>
            </div>
          </div>
        );
      }
      
      function BulletPoint({ number, text }) {
        return (
          <div className='number-bullet-row'>
            <div className='num-bullet-number'>{number}</div>
            <div className='num-bullet-text'>{text}</div>
          </div>
        );
      }
      
      
      function DottedLine() {
        return (<div className='dotted-line-row'>
          <div className='dotted-line'></div>
        </div>);
      }
      
      function VideoComponent() {
        return (
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            height: '300px',
            maxHeight: '500px',
            width: '100%'
          }}>
            <div style={{
              width: '90%',
              maxWidth: '630px',
              height: '300px',
              maxHeight: '500px',
              backgroundColor: 'black',
              margin: '10px 0px 20px 23px',
              borderRadius: '15px',
            }}>
              <video autoPlay muted loop playsInline className="hero-video">
      <source src={hair} type="video/mp4" />
    </video>
            </div>
          </div>
        );
      }
      

export default WhyWeAreNo1