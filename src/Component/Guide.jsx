import React from "react";
// import ".//static/guide.css";






function Guide(props) {
  return (
    <>
    <div className="guide">
        <div className="guideshape">
            <div className="blackimage" >
             <h1>{props.step}</h1>
            </div>
        </div>
        
    </div>
        
        
    </>
  );
}

export default Guide;
