import React from 'react';

const SearchBox = () => {
    return(
      <div>
          <div id="search-menu">
              <div className="wrapper">
                  <form id="form" action="#" method="">
                      <input id="popup-search" type="text" name="u" placeholder="Search for a user"/>
                      <button id="popup-search-button" type="submit" name="search"><i
                          className="ion-ios-search-strong"></i></button>
                  </form>
              </div>
          </div>
          <i className="header__search-btn ti-search" id="search-icon"></i>
      </div>
    );
}

export default SearchBox;