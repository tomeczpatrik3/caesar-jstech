import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class DecodeComponent extends React.Component {
    
    render() {
        return (
            <div>
                <form>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel><strong>Dekódolandó üzenet:</strong></ControlLabel>
                        <FormControl componentClass="textarea" />
                    </FormGroup>
                
                    <Button bsStyle="primary" type="submit">Dekódolás</Button>
                </form>
            </div>
        )
      }
}