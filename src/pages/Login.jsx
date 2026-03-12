import { useNavigate } from "react-router-dom"

function Login(){

const navigate = useNavigate()

return(

<div>

<div className="title">
Signin to your PopX account
</div>

<div className="subtitle">
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
</div>

<div className="formGroup">
<label>Email Address</label>
<input placeholder="Enter email address"/>
</div>

<div className="formGroup">
<label>Password</label>
<input type="password" placeholder="Enter password"/>
</div>

<button
className="primaryBtn"
onClick={()=>navigate("/profile")}
>
Login
</button>

</div>

)

}

export default Login