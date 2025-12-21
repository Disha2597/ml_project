import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

function LandingPage(){
    return(
        <div>
        <header className="wrap base-header">

            {/* HERO Header */}
            <div className="hero-header">
             <div className="hero-content">
                <h1>HomePulse</h1>
                <p>Live smarter, search faster, match better!</p>
                </div>
            </div>

            {/* FLASH MESSAGES */}
            <div id="flash-messaging">
                <div className="flash-message flash-message--desktop" id="flash-message-wrapper"></div>
                <div className="flash-message_buffer" style={{height: "0px"}}></div>
            </div>

            {/* MAIN HEADER */}
            <div className="base-header__wrap">
                <a href="#landingpage" className="base-header__skip-link">Skip to Content</a>
                <a href="#top" className="trans-all-1s hidden" hidden>top</a>
                

                <div className="brand-header" id="header">
                    <div className="brand-header-content">
                        <div className="brand-header__logo-wrapper"></div> 
                        <div className="authentication-links authentication-links--button">
                            {/* Register button */}
                            <div className="authentication-links__register-link">
                             <Link className="button"
                              to="/register"
                              id="registerButtonNav"
                              title="Create an account"
                             >Register
                             </Link>
                            </div>
                            <div className="authentication-links__log-in-link">
                              <Link
                              to="/login"
                              id="loginButtonNav"
                              className="button--action show user-auth-pop"
                              >Login
                              </Link> 
                            </div>

                        </div>
                        <div id="authenticationLinks" className="authentication-links">
                            <a id="registerLinkNav" className="authentication-links__register-link"
                              href="/register" title="Create an account" 
                            >
                            Register  
                            </a> 
                            <a id="loginLinkNav" 
                            className="authentication-links__sign-in-link show-user-auth-popup"
                            href="/signin">
                            Log in</a>       
                        </div>
                    </div>
                </div>

            {/* NAVIGATION */}     
            <nav id="navBar" className="nav-bar">
                <div className="nav-bar__menus">
                    <ul className="nav-bar__menu nav-bar__menu--left">
                        <li className="nav-bar__menu-item">
                            <Link to="/browse" id="browseNav" name="browseLink" title="Rooms for rent in your room">Browse</Link>
                        </li>
                        <li className="nav-bar__menu-item">
                            <Link to="/account" id="accountNav" name="accountLink" title="Have a look at your account here!">Account</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            </div>

        </header>
        <main id="HomePulse" className="wrap">
        <div></div>
            <section className="hero">
                <header className="hero_header">
                    <h1 className="hero_heading">Budget Friendly and Roommate Finder Application</h1>
                    <h2 className="hero_sub_heading">
                    Find your perfect roommate or room today!
                    </h2>
                </header>
                <form className="search__form" 
                 method="GET" 
                 action="/rommates/search" 
                 id="searchForm" 
                 data-search-form
                >
                  <div className="search-function-wrapper">
                    <div className="search__input-wrapper">
                        <label 
                        htmlFor="search_by_location_field" 
                        className="magnifierIcon"
                        >
                            {/* <Search aria-hidden={true} size={16} /> */}
                            🔍
                            <span className="sr-only">
                              Search for rooms or room mates
                            </span>
                        </label>


                        <input 
                            id="search_by_location_field"
                            type="text" 
                            data-search-by-location-id="search_by_location_field"
                            className="search-input location-input" 
                            name="search" 
                            size="100" 
                            maxLength="255" 
                            placeholder="Area or ZIP" 
                            pattern=".*" 
                            required 
                            data-store-search-text-incomplete="off"></input>


                        <div 
                        id="autocomplete_list" 
                        className="autoComplete_list"
                        ></div>
                        <div className="search__action-buttons">
                            <button type="reset" name="reset" 
                            className="reset" aria-label="Clear location search">
                                <i className="far fa-times-circle" aria-hidden="true"></i>
                            </button>
                            <button type="button" 
                             data-geo-location="true"
                             className="locationFetchIcon" 
                             id="getLocation" 
                             aria-label="Search using your current location">
                            </button>
                        </div>
                    </div>
                    <fieldset className="Room&Roommate_options">
                        <legend className="search__legend sr-only">
                            What are you searching for?
                        </legend>
                        <div className="checkbox-1">
                          <input type="radio" name="Rooms&Roommates" defaultChecked value="roomsGiven" 
                          id="roomsGivenRadio"></input>
                          <label htmlFor="roomsGivenRadio">
                            Rooms
                          </label>
                        </div>
                        <div className="checkbox-2">
                            <input type="radio" name="Rooms&Roommates" value="roommatesRequested"
                            id="roommatesRequestedRadio"></input>
                            <label htmlFor="roommatesRequestedRadio">
                                Roommates
                            </label>
                        </div>
                    </fieldset>
                    <div className="search-button-location-select">
                      <input type="hidden" name="preferred_location" value="location"></input>
                      <input type="hidden" name="action" value="search"></input>
                      <button className="btn-submit-form" id="" type="submit" name="submit">
                        Show Results
                      </button>
                    </div>
                  </div>
                </form>
                <div className="hero__image-wrapper">
                <picture className=""></picture>
                </div>
            </section>
            <div className="">
            </div>
        </main>
        <footer id="">
                
        </footer>
        </div>
    )
}  
export default LandingPage;