import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition'

import './Modal.css';

const animationTiming = {
  enter: 200,
  exit: 600
};

const modal = props => {

    return (
      <CSSTransition
          in={props.show}
          timeout={animationTiming}
          mountOnEnter
          unmountOnExit
          classNames='show-modal'>
          <div className='Modal'>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${props.trailerId}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen></iframe>
            <button className='CloseModal' onClick={props.close}>CLOSE</button>
          </div>
       </CSSTransition>
    )
}

export default modal;
