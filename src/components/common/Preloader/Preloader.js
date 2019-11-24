import React from 'react';
import preloader from "../../../assets/images/preloader.gif";

let Preloader = (props) => {
    return <div className='preload' style={{ backgroundColor: 'transparent' }, { width: '100%' }, { float: 'left' }, { position: "absolute" }, { zIndex: "999" }}>
    <img style={{ backgroundColor: 'transparent' }, { width: '42px' }, { margin: 'auto' }} src={preloader} />
</div>
}

export default Preloader;