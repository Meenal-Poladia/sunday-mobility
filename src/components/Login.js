import FormFieldInput from "./FormFieldInput";

const Login = () => {
    const handleSubmit = () => {
        console.log(`Form submitted`);
    }

    return (
        <article>
            <h1>Welcome Back!</h1>
            <h3>Please login to your account</h3>
           <form onClick={handleSubmit}>
                <FormFieldInput
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="User Name"
                    minLength="1"
                    maxLength="10"
                />
               <FormFieldInput
                   type="password"
                   id="password"
                   name="password"
                   placeholder="Password"
                   minLength="5"
                   maxLength="20"
               />
               <div>
                   <input type="checkbox" id="rememberMe" name="rememberMe"/>
                       <label htmlFor="rememberMe">Remember Me</label>
               </div>
               <button type="submit">Login</button>
           </form>
        </article>
    )
}
export default Login;