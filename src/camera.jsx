import React, { Component } from 'react';
import Webcam from "react-webcam";
const Camera = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
    
  
    return (
      <>
      
      <center>
      <button className="btn btn-warning"style={{marginTop:'-100px'}} onClick={capture}>Capture photo</button>
      
        <Webcam
          audio={false}
          facingMode='user'
          ref={webcamRef}
          width={720}
          height={720}
          screenshotFormat="image/jpeg"
        />
        
        {imgSrc && (
          <img
            src={imgSrc}
          />
        )}
        </center>
      </>
    );
  };
 
export default Camera;