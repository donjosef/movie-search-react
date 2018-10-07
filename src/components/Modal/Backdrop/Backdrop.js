import React from 'react';
import './Backdrop.css';

const backDrop = props => {
    let classes = 'Hidden';
    if(props.show) {
      classes = 'Backdrop';
    }
    return (
      <div className={classes} onClick={props.close}></div>
    );
}

export default backDrop;
