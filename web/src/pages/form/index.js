import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [cpf, setCpf] = useState('');
    let [gender, setGender] = useState('');
    let [health_condition, setHealth_conditon] = useState('');
    let [locale, setLocale] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name, age, cpf, gender, health_condition, locale,
        };

        if (age < 0 || age > 101) {
            alert('Idade inválida');
        }
        else {
            try {
                const resposnse = await api.post('/patients', data);
                alert(`Usuário de cpf: ${resposnse.data.cpf} cadastrado`);
            } catch (error) {
                alert('Erro ao cadastrar, tente novamente!');
            }
        }
    }

    return (
        <div className="form-user">
            <Link to={'/'}>Voltar</Link>
            <h1>Cadastre um novo paciente</h1>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Nome" required value={name}
                    onChange={e => setName(e.target.value)} />
                <input type="number" placeholder="Idade" required value={age}
                    onChange={e => setAge(e.target.value)} />
                <input type="text" placeholder="CPF" required value={cpf}
                    onChange={e => setCpf(e.target.value)} />

                <label for="gender">Sexo:</label>
                <select name="gender" value={gender} required onChange={e => setGender(e.target.value)}>
                    <option value="MASCULINO">MASCULINO</option>
                    <option value="FEMININO">FEMININO</option>
                </select>
                <br />

                <label for="health_condition">Estado de saúde:</label>
                <select name="health_condition" value={health_condition} required onChange={e => setHealth_conditon(e.target.value)}>
                    <option value="EM TRATAMENTO">EM TRATAMENTO</option>
                    <option value="CURADO">CURADO</option>
                    <option value="ÓBITO">ÓBITO</option>
                </select>
                <br />

                <label for="locale">Região do paciente:</label>
                <select name="locale" value={locale} required onChange={e => setLocale(e.target.value)}>
                    <option value="NORTE">NORTE</option>
                    <option value="CENTRO-OESTE">CENTRO-OESTE</option>
                    <option value="NORDESTE">NORDESTE</option>
                    <option value="SUDESTE">SUDESTE</option>
                    <option value="SUL">SUL</option>
                </select>
                <br />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default Form;