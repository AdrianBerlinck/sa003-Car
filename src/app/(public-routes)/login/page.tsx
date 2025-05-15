'use client'
import './styles.css'
import { FormEvent, useState } from "react";
import axios from "axios";






export default function Login() {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const disabled_button = (!username || !(password.length > 3));

    type User = {
        username: string;
        password: string
    }

    async function HandleSubmit(event: FormEvent) {
        event.preventDefault()


        const user: User = {
            username: username,
            password: password
        }

        let response = await axios.get("http://localhost:3333/users");

        const userFound = response.data.find((user: User) =>
            user.username == username && user.password == password
        );
        console.log(userFound)
        if (!userFound) {
            alert('Credenciais incorretas')
            return;
        }

        window.location.href = '/dashboard'


    }

    return (
        <div className='container-login'>
            <form onSubmit={HandleSubmit}>
                <h1>NextCar</h1>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                    required
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    required
                />
                <button type="submit" className='button-login' disabled={disabled_button}>Entrar</button>
            </form>
        </div>
    )

}