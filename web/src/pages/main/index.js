import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

class Main extends Component {

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
            <main>
                <div className="casos">
                    <h2>Número geral de casos da pandemia COVID-19 no Brasil:</h2>
                    <strong>{patients.length} Casos confirmados</strong>
                    <br />
                    <Link className="new-patient" to={`/patients`}>Cadastrar novo Paciente</Link>
                </div>

                <div className="casos">
                    <h2>Casos da regiao Norte</h2>
                    <strong>{patients.length} Casos confirmados</strong>
                    <br />
                    <Link className="new-patient" to={`/patients`}>Ver todos</Link>
                </div>

                <div className="casos">
                    <h2>Casos da regiao Centro-Oeste</h2>
                    <strong>{patients.length} Casos confirmados</strong>
                    <br />
                    <Link className="new-patient" to={`/patients`}>Ver todos</Link>
                </div>

                <div className="casos">
                    <h2>Casos da regiao Nordeste</h2>
                    <strong>{patients.length} Casos confirmados</strong>
                    <br />
                    <Link className="new-patient" to={`/patients`}>Ver todos</Link>
                </div>

                <div className="casos">
                    <h2>Casos da regiao Sudeste</h2>
                    <strong>{patients.length} Casos confirmados</strong>
                    <br />
                    <Link className="new-patient" to={`/patients`}>Ver todos</Link>
                </div>

                <div className="casos">
                    <h2>Casos da regiao Sul</h2>
                    <strong>{patients.length} Casos confirmados</strong>
                    <br />
                    <Link className="new-patient" to={`/patients`}>Ver todos</Link>
                </div>
            </main>
        );
    }
}

export default Main;

