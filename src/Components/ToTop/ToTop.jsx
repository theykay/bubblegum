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
  };

  const goUp = () => {
    window.scrollTo({
      top: 0
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', showHide)
  }, []);

  return (
    <>
      { showMe &&
        <div id="to-top" onClick={goUp}>
          <FontAwesomeIcon id="to-top-icon" icon={faAngleDoubleUp} />
        </div>
      }
    </>
  )
}

export default ToTop;