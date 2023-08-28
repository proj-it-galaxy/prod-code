import { useState } from "react";

export default function RegisterPage(){
    const [username, serUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev){
        ev.preventDefault();
        await fetch('http://localhost:4000/register',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
        })
    }
        return(
        <div>
            <form className="register" onSubmit={register}>
                <h1>Registration Page</h1>
                <input type="text" 
                    placeholder="username" 
                    value={username} 
                    onChange={ev => serUsername(ev.target.value)} 
                    />
                <input type="password" 
                    placeholder="password" 
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    />
                <button>Register</button>
            </form>
        </div>
    );
}