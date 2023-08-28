export default function RegisterPage(){
    return(
        <div>
            <form className="register">
                <h1>Registration Page</h1>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Register</button>
            </form>
        </div>
    );
}