import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  return (

    <div className="signupContainer">

      <div className="formSection">

        <div className="title">
          Create your PopX account
        </div>

        <div className="formGroup">
          <label>Full Name*</label>
          <input type="text" placeholder="Marry Doe"/>
        </div>

        <div className="formGroup">
          <label>Phone number*</label>
          <input type="text" placeholder="9876543210"/>
        </div>

        <div className="formGroup">
          <label>Email address*</label>
          <input type="email" placeholder="example@mail.com"/>
        </div>

        <div className="formGroup">
          <label>Password*</label>
          <input type="password"/>
        </div>

        <div className="formGroup">
          <label>Company name</label>
          <input type="text"/>
        </div>

        <div className="agencyGroup">

          <label>Are you an Agency?*</label>

          <div className="radioGroup">

            <label>
              <input type="radio" name="agency"/>
              Yes
            </label>

            <label>
              <input type="radio" name="agency"/>
              No
            </label>

          </div>

        </div>

      </div>

      <button
        className="primaryBtn bottomButton"
        onClick={() => navigate("/profile")}
      >
        Create Account
      </button>

    </div>

  );

}

export default Signup;