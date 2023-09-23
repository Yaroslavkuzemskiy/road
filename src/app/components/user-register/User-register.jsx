

import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';




const TextMaskAdapter = React.forwardRef(function TextMaskAdapter(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(+00000) 000-0000"
        definitions={{
          '#': /[0-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });
  
  TextMaskAdapter.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };


export default function UserRegister ({data, setData}){

    const [value, setValue] = React.useState('default1');

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
   
    const [show, setShow] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
       
        setData((current) => ({ ...current, status: 'loading' }));
       
         try {
          // Replace timeout with real backend operation
          setTimeout(() => {
             setData((current) => ({ ...current, status: 'sent' }));
          }, 1500);
        } catch (error) {
          setData((current) => ({ ...current, status: 'failure' }));
        }
        
      };

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
            {/* <button onClick={redirect('/register?type=fffffff', 'replace')} type="button">gggg</button> */}


           

            <form id="demo" onSubmit={handleSubmit}>
            
                <FormControl >
                    <FormLabel
                        sx={(theme) => ({
                            '--FormLabel-color': theme.vars.palette.primary.softColor,
                        })}
                    >
                        Registration
                    </FormLabel>
                </FormControl>

                <FormControl required>
                    <FormLabel
                        sx={(theme) => ({
                            '--FormLabel-color': theme.vars.palette.primary.softColor,
                        })}
                    >
                        all fields are required
                    </FormLabel>
                </FormControl>
                

                <Stack spacing={2}>

                    <ToggleButtonGroup
                        color="primary"
                        variant="soft"
                        value={data.user}
                        onChange={(event, newValue) => {
                            // setData(newValue);
                            setData((current) => ({ ...current, user: newValue }))
                        }}
                    >
                        <Button value="default1" fullWidth>Default</Button>
                        <Button value="default" fullWidth>New</Button>


                    </ToggleButtonGroup>

                    <Stack direction="row" justifyContent="space-between" >
                        <Input

                            value={data.fname}
                            onChange={(event) =>
                                setData((current) => ({ ...current, fname: event.target.value }))

                            }
                            placeholder="First Name" sx={{ width: 280 }} required />

                        <Input
                            value={data.lname}
                            onChange={(event) =>
                                setData((current) => ({ ...current, lname: event.target.value }))

                            }
                            placeholder="Last Name" sx={{ width: 280 }} required />
                    </Stack>

                    {data.user === 'default' ? <Input
                        startDecorator={<LocationOnIcon />}
                        placeholder="City111"
                        required
                    /> : null}

                    <Input
                        value={data.city}
                        onChange={(event) =>

                            setData((current) => ({ ...current, city: event.target.value }))
                        }
                        startDecorator={<LocationOnIcon />}
                        placeholder="City"
                        required
                    />

                    <Input
                        value={data.phone}
                        onChange={(event) =>
                            setData((current) => ({ ...current, phone: event.target.value }))
                        }
                        startDecorator={<CallIcon />}


                        placeholder="(+38060) 000-0000"
                        slotProps={{ input: { component: TextMaskAdapter } }}
                        required
                    />

                    <Input

                        startDecorator={<AlternateEmailIcon />}
                        sx={{ '--Input-decoratorChildHeight': '45px' }}
                        placeholder="mail@mui.com"
                        type="email"
                        required
                        value={data.email}
                        onChange={(event) =>
                            setData((current) => ({ ...current, email: event.target.value }))
                        }
                        error={data.status === 'failure'}

                    />

                    <TextField
                        value={data.pass}
                        onChange={(event) =>
                            setData((current) => ({ ...current, pass: event.target.value }))
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
                        helperText={0 < data.pass.length & data.pass.length <= 5 ? 'password should be more than 5 symbol' : ''}
                        error={0 < data.pass.length & data.pass.length <= 5}
                    />

                    <Button
                        disabled={data.pass.length <= 5}
                        variant="solid"
                        color="primary"
                        size="md"
                        loading={data.status === 'loading'}
                        type="submit"
                    // sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                    >
                        Register
                    </Button>


                </Stack>
                {data.status === 'failure' && (
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
                )}
                

            </form>
           
        </Sheet>
    )
}