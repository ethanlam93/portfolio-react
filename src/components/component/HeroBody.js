import React, {useEffect} from "react";


function HeroBody(props) {
    useEffect(() => {
      console.log("s")
    }); 
    return (
        <div className="hero-body">
            {props.children}
        </div>
    )
}

export default HeroBody 