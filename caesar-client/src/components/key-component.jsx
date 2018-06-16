import React from 'react';

import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class KeyComponent extends React.Component {
    
    constructor() {
        super();
        this.state = {
          secret_key: '',
        };
    }

    /**
     * A state-ben található tikos kulcs frissítése
     * @param {*} e 
     */
    onSecretKeyInput(e) {
        this.setState({
            secret_key: e.target.value,
        });
    }
    
    /**
     * Submitolás esetén eltároljuk a localStorage-ben a kapott eltolást hosszt:
     * @param {*} e 
     */
    onSubmit(e) {
        e.preventDefault();

        //console.log(this.state.secret_key);
        localStorage.setItem('offset', '10');
        
        this.props.history.push('/coding');
    }

    render() {
        return (
            <div>
                <Alert bsStyle="info">
                    <h2>Titkos kulcs megadása</h2>
                    <strong>Kérlek add meg a titkos kulcsot a folytatáshoz!</strong>
                </Alert>
                <form onSubmit={e => this.onSubmit(e)}>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel><strong>Kulcs:</strong></ControlLabel>
                        <FormControl componentClass="textarea" onChange={e => this.onSecretKeyInput(e)}/>
                    </FormGroup>
                
                    <Button bsStyle="primary" type="submit">OK</Button>
                </form>
            </div>
        )
      }
}