import React, { Component } from 'react';
import Backdrop from './Backdrop/Backdrop'
import CSSTransition from 'react-transition-group/CSSTransition'

import './Modal.css';

const animationTiming = {
  enter: 200,
  exit: 600
};

class Modal extends Component {
  state = {
    isOpen: false
  }

  handleToggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <>
        {this.props.trailerId && (
          <button className='BtnTrailer' onClick={this.handleToggleModal}>View Trailer</button>
        )}
        <Backdrop show={this.state.isOpen} close={this.handleToggleModal}/>
        <CSSTransition
          in={this.state.isOpen}
          timeout={animationTiming}
          mountOnEnter
          unmountOnExit
          classNames='show-modal'>
          <div className='Modal'>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${this.props.trailerId}`}
              frameBorder="0"
              title={this.props.title}
              allow="autoplay; encrypted-media"
              allowFullScreen></iframe>
            <button className='CloseModal' onClick={this.handleToggleModal}>CLOSE</button>
          </div>
        </CSSTransition>


      </>
    )
  }
}

export default Modal;
