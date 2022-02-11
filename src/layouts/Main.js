import React from "react"
import Navbar from "./../componetns/Navbar"

export default ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            {children}
        </React.Fragment>
    )
}