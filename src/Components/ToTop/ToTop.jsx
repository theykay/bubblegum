import React, { useEffect, useState } from 'react';
import './ToTop.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const ToTop = () => {
  const [showMe, setShowMe] = useState(false);

  const showHide = () => {
    setShowMe(false)
    if (window.scrollY > 200) {
      setShowMe(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showHide)
  }, [])

  return (
    <>
      { showMe &&
        <div id="to-top">
          <a href="#about">
            <FontAwesomeIcon id="to-top-icon" icon={faAngleDoubleUp} />
          </a>
        </div>
      }
    </>
  )
}

export default ToTop;