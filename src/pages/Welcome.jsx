import { useNavigate } from "react-router-dom"

function Welcome(){

const navigate = useNavigate()

return(

<div style={{marginTop:"350px"}}>

<div className="title">
Welcome to PopX
</div>

<div className="subtitle">
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
</div>

<button
className="primaryBtn"
onClick={()=>navigate("/signup")}
>
Create Account
</button>

<button
className="secondaryBtn"
onClick={()=>navigate("/login")}
>
Already Registered? Login
</button>

</div>

)

}

export default Welcome