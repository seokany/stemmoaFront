import React from 'react';
import QRCode from 'qrcode-react';

import '../../styles/Main.css';

const Main = () => {
    return (
        <div className="Main">
            <h1>QR / STAMP</h1>
            <div className="Main__qr">
                <QRCode 
                    value="yeodal89@gmail.com" 
                    size={250} 
                    logoWidth={100}
                    bgColor="#FDE7A7"
                    fgColor="#2C3F50" 
                />
            </div>
        </div>
    );
};

export default Main;