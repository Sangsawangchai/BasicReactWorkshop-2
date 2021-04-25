import React, { useEffect, useState } from 'react'
import NoAuth from '../layout/NoAuth'
import { Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const registers = {
    email: 'test@test.com',
    password: '123456',
    firstname: '',
    lastname: ''
}

const AlertLogin = (props) => {

    useEffect(() => {
        console.log('mounting');
        return () => {
            console.log('unmounting');
        }
    }, [])

    if (props.isLogin) {
        return (<Alert variant='success'>
            Login Success
        </Alert>)
    }

    if (!props.isLogin && props.error) {
        return (<Alert variant='danger'>
            {props.error}
        </Alert>)
    }

    return (<></>)
}

function Register() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const [checkLogin, setCheckLogin] = useState({
        isSuccess: false,
        error: '',
    })

    console.log(errors)

    const onSubmit = (data) => {
        console.log('register data:', data)
        /*if (data.email === login.email && login.password === data.password) {
            setCheckLogin({ isSuccess: true, error: '' })
        } else {
            setCheckLogin({ isSuccess: false, error: 'Login Fail.' })
        }*/
        //reset()
    }

    useEffect(() => {
        // console.log('useEffect');
        return () => {

        }
    }, [])

    return (
        <NoAuth>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    textAlign: 'left',
                }}
            >
                <h1 className="h3 mb-3 fw-normal" style={{ textAlign: 'center' }}>Register</h1>
                {/** เช็คเงื่อนไข การแสดงผล */}
                <AlertLogin isLogin={checkLogin.isSuccess} error={checkLogin.error} />

                <div className="form-floating">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        {...register('email', {
                            required: true,
                        })}
                        type='text'
                        placeholder='test2@test.com'
                    />
                    {errors?.email?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ username</p>}
                </div>
                <div className="form-floating">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        {...register('password', {
                            required: true,
                        })}
                        type='password'
                        placeholder='Password'
                    />
                    {errors?.password?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ password</p>}
                </div>
                <div className="form-floating">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        {...register('firstname', {
                            required: true,
                        })}
                        type='text'
                        placeholder='Thanapong'
                    />
                    {errors?.firstname?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ first name</p>}
                </div>
                <div className="form-floating">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        {...register('lastname', {
                            required: true,
                        })}
                        type='text'
                        placeholder='Sangsawangchai'
                    />
                    {errors?.lastname?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ last name</p>}
                </div>

                <Button type='submit' variant='primary' className="mt-2" block>Register</Button>
                <p className="mt-5 mb-3 text-muted" style={{ textAlign: 'center' }}>© 2017–2021</p>
            </Form>
        </NoAuth>
    )
}

export default Register