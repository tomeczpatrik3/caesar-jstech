import React from 'react';

import Alert from 'react-bootstrap/lib/Alert';
import DecodeComponent from './decode-component';
import EncodeComponent from './encode-component';

export default class CodingComponent extends React.Component {
    render() {
        return (
         <div>
            <Alert bsStyle="info">
                <h2>Kódolás - Dekódolás</h2>
                <strong>A megfelelő szövegdobozok kitöltésével végrehajtható az üzenet kódolása/dekódolása!</strong>
            </Alert>
            <EncodeComponent />;
            <DecodeComponent />;
         </div>
        );
    }
}