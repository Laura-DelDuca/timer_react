import React from "react";
import Image from '/public/img/image.png';

class ReactLogo extends React.Component {

    render() {
        return (
            <div>
                <img width="120" src={Image} alt="Logo" />
            </div>
        );
    }
}

export default ReactLogo;
