import React from 'react';

const DarkModeBtn = () => {
    return(
        <div className="dark__mode-btn header__prepend-item">
            <div role="status" className="[ visually-hidden ][ js-mode-status ]"></div>
            <div className="outer-container dark-light js-mode-toggle js-mode-toggle-text">
                <div className="container-btn">
                    <div className="circle">
                        <div className="cloud"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DarkModeBtn;