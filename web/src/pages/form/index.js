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
                <select name="gender" required onChange={e => setGender(e.target.value)}>
                    <option value={gender = "MASCULINO"}>MASCULINO</option>
                    <option value={gender = "FEMININO"}>FEMININO</option>
                </select>
                <br />

                <label for="health_condition">Estado de saúde:</label>
                <select name="health_condition" required onChange={e => setHealth_conditon(e.target.value)}>
                    <option value={health_condition = "EM TRATAMENTO"}>EM TRATAMENTO</option>
                    <option value={health_condition = "CURADO"}>CURADO</option>
                    <option value={health_condition = "ÓBITO"}>ÓBITO</option>
                </select>
                <br />

                <label for="locale">Região do paciente:</label>
                <select name="locale" required onChange={e => setLocale(e.target.value)}>
                    <option value={locale = "NORTE"}>NORTE</option>
                    <option value={locale = "CENTRO-OESTE"}>CENTRO-OESTE</option>
                    <option value={locale = "NORDESTE"}>NORDESTE</option>
                    <option value={locale = "SUDESTE"}>SUDESTE</option>
                    <option value={locale = "SUL"}>SUL</option>
                </select>
                <br />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default Form;