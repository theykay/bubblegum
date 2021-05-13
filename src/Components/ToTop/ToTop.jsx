import React from 'react';
import './ToTop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const ToTop = () => {
  return (
    <div id="to-top">
      <a href="#about">
        <FontAwesomeIcon id="to-top-icon" icon={faAngleDoubleUp} />
      </a>
    </div>
  )
}

export default ToTop;