import React from "react";
import Image from '/public/img/image.png';

class ReactLogo extends React.Component {

    render() {
        return (
            <div id="logo" >
                <img id="reactLogo" width="120" src={Image} alt="Logo" />
            </div>
        );
    }
}

export default ReactLogo;
