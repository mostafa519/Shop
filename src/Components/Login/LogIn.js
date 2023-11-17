
import React, { useEffect, useState } from 'react';
import './LogIn.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Constants/Firebase/Firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import ChangeRouting from '../../Store/Actions/Auth';
const LogIn = () => { 
    const dispatch =useDispatch();
    const [User, setUser] = useState([
        { 
            email: "",
            password: "",
        },
    ]);
    const [error, setError] = useState([
        { 
            passwordError: "",
            emailError: "",

        },
    ]);

const navigate =useNavigate();

    const handleSubmit = async(evt) => {
        evt.preventDefault(); 
        await signInWithEmailAndPassword(auth,User.email,User.password)
            .then(() => { 
                dispatch(ChangeRouting(true)); 
                navigate("/home");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage); 
            });
    
      };
    const handleChange = (ev) => {
       if (ev.target.name === "UserEmail") {
            setUser({ ...User, email: ev.target.value });
            setError({
                ...error,
                emailError:
                    ev.target.value.length === 0
                        ? "Enter User of Email "
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
                                <p className="text-danger">{error.emailError}</p>
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
                                <p className="text-danger">{error.passwordError}</p>
                            </div></Col>

                            <Col xs>
                                <Row xs={2} md={2} xl={2}>
                                    <Col>
                                        <Button variant="success" type="submit" className="m-2">LogIn</Button>
                                    </Col>
                                    <Col>
                                        <Button href={"/Register"} variant="warning" className="m-2">Register</Button>

                                    </Col>
                                </Row> </Col>



                        </Row>
                    </Container>
                </form>
            </div>
        </>
    );
};


export default LogIn;
