import React from 'react';

import {
    Button,
    FormGroup,
    ControlLabel,
    FormControl,
} from 'react-bootstrap/lib';

import { encode } from '../utils/coding';

export default class EncodeComponent extends React.Component {
    
    constructor() {
        super();
        this.state = {
            msg: '',
        };
    }

      /**
     * Submitolás esetén
     * -- ha van eltárolt offset: kódolunk
     * -- ha nincs: jelezzük a hibát
     * @param {*} e 
     */
    onSubmit(e) {
        e.preventDefault();
        let encoded = '';
    
        if (localStorage.hasOwnProperty('offset')) {
            encoded = encode(this.state.msg, localStorage.getItem('offset'));
        }
        else {
            encoded = 'Hiba történt, nem adtál meg kulcsot!';
        }

        this.setState({
            msg: encoded,
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
                        <ControlLabel><strong>Kódolandó üzenet:</strong></ControlLabel>
                        <FormControl componentClass="textarea" onChange={e => this.onMessageInput(e)} value={this.state.msg}/>
                    </FormGroup>
                
                    <Button bsStyle="primary" type="submit">Kódolás</Button>
                </form>
            </div>
        )
    }
}