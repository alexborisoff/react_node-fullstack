import axios from 'axios';
import { useState } from 'react';

export const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        const data = { username: username, password: password };
        axios
            .post('http://localhost:3001/auth/login', data)
            .then((response) => {
                console.log(response.data);
            });
    };

    return (
        <main>
            <div>
                <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={login}>Log In</button>
            </div>
        </main>
    );
};
