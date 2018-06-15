import React from 'react';

import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class KeyComponent extends React.Component {
    
    render() {
        return (
            <div>
                <Alert bsStyle="info">
                    <h2>Titkos kulcs megadása</h2>
                    <strong>Kérlek add meg a titkos kulcsot a folytatáshoz!</strong>
                </Alert>
                <form>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel><strong>Kulcs:</strong></ControlLabel>
                        <FormControl componentClass="textarea" />
                    </FormGroup>
                
                    <Button bsStyle="primary" type="submit">OK</Button>
                </form>
            </div>
        )
      }
}