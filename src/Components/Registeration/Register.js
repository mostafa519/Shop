import React, {   useState } from 'react';
import './Register.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Constants/Firebase/Firebase';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import ChangeRouting from '../../Store/Actions/Auth';
const Register = () => {
    const navigate =useNavigate();
    const dispatch =useDispatch(); 
    const [User, setUser] = useState([
        {
            name: "",
            email: "",
            password: "",
            confirmpassword:""
        },
    ]);
    const [error, setError] = useState([
        {
            nameError: "",
            passwordError: "",
            emailError: "",
            confirmpasswordError: "",

        },
    ]);

    const validateEmail = (email) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };

      const handleSubmit = async(evt) => {
        evt.preventDefault(); 
      await createUserWithEmailAndPassword(auth,User.email,User.password)
            .then(() => { 
                
                navigate("/home");
                dispatch(ChangeRouting(true)); 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    
      };
    const handleChange = (ev) => {
        if (ev.target.name === "UserName") {
            setUser({ ...User, name: ev.target.value });
            setError({
                ...error,
                nameError:
                    ev.target.value.length === 0
                        ? "Enter User Name"
                        : ev.target.value.length <= 5
                        ? "Name must be at least 5"
                        : "",
            });
        }
        else if (ev.target.name === "UserEmail") {
            setUser({ ...User, email: ev.target.value });
            setError({
                ...error,
                emailError:
                ev.target.value.length === 0
                ? "Enter Your Email"
                : ev.target.value.length <= 10
                ? "Email must be at least 10"
                : !validateEmail(ev.target.value)
                ? "Please enter a valid email"
                : "",
            });
        }
        else if (ev.target.name === "UserPassword") {
            setUser({ ...User, password: ev.target.value });
            setError({
                ...error,
                passwordError:
                    ev.target.value.length === 0
                    ? "Enter User Password "
                    : ev.target.value.length <= 8
                    ? "Password must be at least 8"
                    : "",
            });
        }
        else if (ev.target.name === "confirmpassword") {
            setUser({ ...User, confirmpassword: ev.target.value });
            setError({
                ...error,
                confirmpasswordError:
                ev.target.value.length === 0
                ? "Enter Password "
                : ev.target.value.length <= 8
                ? "Password must be at least 8"
                : ev.target.value!==User.password
                ? "the PassWord not confirmed"
                : "",
            });
        }

    };



    return (
        <>

            <div className='BackgroundDash'>
            </div>


            <div className='BackgroundDash2'>
                <form className="text-white p-3" onSubmit={handleSubmit}>
                    <Container>
                        <Row xs={1} md={1} xl={1} >
                            <Col xs><div   >

                                <input
                                    type="name"
                                    required
                                    className="form-control p-3"
                                    name="UserName"
                                    placeholder="User Name"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                                <p className="text-white">{error.nameError}</p>
                            </div></Col>
                            <Col xs>   <div   >
                                <input
                                    type="email"
                                    name="UserEmail"
                                    required
                                    className="form-control p-3"
                                    placeholder="User Email"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                                <p className="text-white">{error.emailError}</p>
                            </div></Col>
                            <Col xs><div   >

                                <input
                                    type="password"
                                    required
                                    className="form-control p-3"
                                    name="UserPassword"
                                    placeholder="User Password"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                                <p className="text-white">{error.passwordError}</p>
                            </div></Col>
                            <Col xs><div   >

                                <input
                                    type="password"
                                    required
                                    className="form-control p-3"
                                    name="confirmpassword"
                                    placeholder="confirm Password"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                />
                                <p className="text-white">{error.confirmpasswordError}</p>
                            </div></Col>

                            <Col xs>
                                <Row xs={2} md={2} xl={2}>
                                    <Col>
                                        <Button variant="success" type="submit" className="m-2">Register</Button>
                                    </Col>
                                    <Col>
                                        <Button href='/' variant="warning" className="m-2">LogIn</Button>

                                    </Col>
                                </Row> </Col>



                        </Row>
                    </Container>
                </form>
            </div>
        </>
    );
};


export default Register;
