import {useState} from "react";

import QRCode from "react-qr-code";

function App() {
    const [encodedString, setEncodedString] = useState("");

    const clear = () => {
        setEncodedString("")
    }

    return (
        <div align="center">
            <span style={{margin: '12px'}}>Enter text to be encoded within the QR code(s).</span>
            <br/>
            <textarea
                style={{height: "100px", marginTop: '16px', width: "50%"}}
                onChange={(e) => setEncodedString(e.target.value)}
                value={encodedString}
            />
            <br/>
            <button
                style={{margin: '16px', padding: '8px'}}
                onClick={() => {
                    clear()
                }}
            >Clear Text Input
            </button>
            <br/>
            <table>
                <tbody>
                    <tr>
                        <td align="center"><span>QR Code with 'L' error level correction</span></td>
                        <td align="center"><span>QR Code with 'M' error level correction</span></td>
                        <td align="center"><span>QR Code with 'Q' error level correction</span></td>
                        <td align="center"><span>QR Code with 'H' error level correction</span></td>
                    </tr>
                    <tr>
                        <td><QRCode style={{background: 'white', padding: '16px'}} value={encodedString} level="L"/></td>
                        <td><QRCode style={{background: 'white', padding: '16px'}} value={encodedString} level="M"/></td>
                        <td><QRCode style={{background: 'white', padding: '16px'}} value={encodedString} level="Q"/></td>
                        <td><QRCode style={{background: 'white', padding: '16px'}} value={encodedString} level="H"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;