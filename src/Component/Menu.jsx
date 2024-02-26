import React from "react";
import ".//static/menu.css";

function Menu(){
    return(
        <>
            <div className="listmenu">
                <h2 className="items">SERVICES</h2>
                <hr />
                <h2 className="items">CONTACT US</h2>
                <hr />
                <h2 className="items">ABOUT US</h2>
                <hr />
                <h2 className="items">PAYMENT</h2>
            </div>
        </>
    )
}

export default Menu;