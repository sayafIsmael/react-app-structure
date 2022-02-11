import React from "react"
import Navbar from "./../componetns/Navbar"
import Footer from "./../componetns/Footer"

export default ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            {children}
            <Footer />
        </React.Fragment>
    )
}