import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

class Table extends Component {
    state = {
        patients: [],
    }

    async componentDidMount() {
        const response = await api.get('/patients');

        this.setState({
            patients: response.data,
        });
    }

    render() {
        const { patients } = this.state;

        return (
            <div className="table">
                <Link className="voltar" to={'/'}>Voltar</Link>
                {patients.map(patients => (
                    <article key={patients.id}>
                        <strong>Nome: {patients.name}</strong>
                        <p>Idade: {patients.age}</p>
                        <p>CPF: {patients.cpf}</p>
                        <p>Sexo: {patients.gender}</p>
                        <p>Conddição de Saúde: {patients.health_condition}</p>
                        <p>Região: {patients.locale}</p>
                        <Link to={`patients/${patients.id}`}>Editar</Link>
                    </article>
                ))};
            </div>
        );
    }
}

export default Table;