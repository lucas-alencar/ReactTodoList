import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

export default class AddTask extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
        };
        
        this.handleInput= this.handleInput.bind(this);
    }

    handleInput( event ) {
        this.setState({
            title: event.target.value,
        });
    }

    render() {
        const { title } = this.state;
        const { onCreate } = this.props;
        return (
            <form onSubmit={(event) => OnCreate(event, this.state)} >
                <input type="text" value={title} onChange={this.handleInput} />
                <button type="button">Adicionar tarefa</button>
            </form>
            

        )
    }
}

AddTask.PropTypes = {
    onCreate: PropTypes.func,
}.isRequired;