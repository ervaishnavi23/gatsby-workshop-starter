import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/GJS.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Hi I am vaishnavi Shah</strong><br />and this is my portfolio<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
