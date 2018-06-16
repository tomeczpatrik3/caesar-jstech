import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

import { decode } from '../utils/coding';

export default class DecodeComponent extends React.Component {
    
    constructor() {
        super();
        this.state = {
            msg: '',
        };
    }

    /**
     * Submitolás esetén
     * -- ha van eltárolt offset: dekódolunk
     * -- ha nincs: jelezzük a hibát
     * @param {*} e 
     */
    onSubmit(e) {
        e.preventDefault();
        let decoded = '';

        if (localStorage.hasOwnProperty('offset')) {
            decoded = decode(this.state.msg, localStorage.getItem('offset'));
        }
        else {
            decoded = 'Hiba történt, nem adtál meg kulcsot!';
        }

        this.setState({
            msg: decoded,
        });
    }

    /**
     * Eltárolja az inputbox tartalmát a msg változóban
     * @param {*} e 
     */
    onMessageInput(e) {
        this.setState ({
            msg: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.onSubmit(e)}> 
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel><strong>Dekódolandó üzenet:</strong></ControlLabel>
                        <FormControl componentClass="textarea" onChange={e => this.onMessageInput(e)} value={this.state.msg}/>
                    </FormGroup>
                
                    <Button bsStyle="primary" type="submit">Dekódolás</Button>
                </form>
            </div>
        )
      }
}