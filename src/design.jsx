import React from 'react';
import './index.css'

function Design(){
    return(
        <>
        <div className="header">
            <h1>Abidians Foundation</h1>
        </div>
        <div class="heading">
          <h1 class="big-heading">
            Help Others with this platform 
          </h1>
          <p class="tagline">Do Good to Have Good</p>
        </div>
        
        </>
    )
}
function Footer(){
    return(
        <section id="footer">
            <p>© Abidians Foundation 2021 All rights reserved.</p>
        </section>
    )
}
export default Design;
export {Footer};