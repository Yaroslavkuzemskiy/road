"use client"
import * as React from 'react';
import { signIn } from "next-auth/react"

import Link from "next/link"
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import { useRouter } from 'next/navigation'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';

export default function LoginUser() {
   
    const [error, setError] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPasswordl] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const router = useRouter()
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // signIn('credentials', {
        //     email: email,
        //     password: password,
        //     redirect: false,
        // })
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: email,
                password: password,
            });
            if (res.error) {
                setError('Invalid')
                console.log('ddddddddddddddddddddddddd')
                return
            }
            router.push('/')
        } catch (error) { }
    }


    return (

        <Sheet variant="plain"
            sx={{
                maxWidth: 600,
                mx: 'auto', // margin left & right
                my: 4, // margin top & bottom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
            }}

        >
            {/* <button onClick={() => router.push('/login?type=fffff111ff', 'replace')} type="button">gggg</button> */}


            

            <form id="demo" onSubmit={handleSubmit} >
            
                {/* <FormControl >
                
                    <FormLabel
                        sx={(theme) => ({
                            '--FormLabel-color': theme.vars.palette.primary.softColor,
                            justifyContent: "center",
                        })}
                    >
                        
                        Sign in to your account
                       
                    </FormLabel>
                    
                </FormControl> */}
                 <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <p>Sign in to your account </p>

                   
                </Stack>
               
                <Stack
                    sx={{ mb: 2 }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <p>Or create account </p>

                    <Link href={{
                        pathname: '/register',

                    }}>Register</Link>
                </Stack>

                <Stack spacing={2}>


                    <Input

                        startDecorator={<AlternateEmailIcon />}
                        sx={{ '--Input-decoratorChildHeight': '45px' }}
                        placeholder="mail@mui.com"
                        type="email"
                        required
                        value={email}
                        onChange={(event) =>
                            setEmail((event.target.value))

                        }
                    // error={data.status === 'failure'}

                    />

                    <TextField
                        value={password}
                        onChange={(event) =>
                            setPasswordl((event.target.value))
                        }
                        // id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        size="small"
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PasswordIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        placeholder="Password"

                    />
                    <Stack>
                        <Button
                            sx={{ mb: 2 }}
                            variant="solid"
                            color="primary"
                            size="md"

                            type="submit"
                        // sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                        >
                            Register
                        </Button>
                    </Stack>

                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <p>{error} </p>


                </Stack>

                {error ? (<Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <p>{error} </p>


                </Stack>) : null}

               

               

                {/* {data.status === 'failure' && (
                <FormHelperText
                    sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
                >
                    Oops! something went wrong, please try again later.
                </FormHelperText>
            )}

            {data.status === 'sent' && (
                <FormHelperText
                    sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
                >
                    You are all set!
                </FormHelperText>
            )} */}


            </form>

        </Sheet>
    )
}
