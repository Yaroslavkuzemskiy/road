
import { useRouter } from 'next/navigation'
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
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/material/Divider';
import Link from "next/link"
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';




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

    const router = useRouter()

    

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
   
    const [show, setShow] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        setData((current) => ({ ...current, status: 'loading' }));
       
         try {
          const response = await fetch('//127.0.0.1/api/register', {
            method: 'POST',
            headers: {
                'Contect-type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          console.log( response)
          
          if(response?.status === 201){
            console.log( response.status)
            setData((current) => ({ ...current, status: 'sent' }));
            router.push('/dashboard')
          }
          
        
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
            {/* <button onClick={redirect('/register?type=fffffff11', 'replace')} type="button">gggg</button> */}


           

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

                
                    <RadioGroup
                        orientation="horizontal"
                        aria-labelledby="segmented-controls-example"
                        name="justify"
                        value={data.role}
                        onChange={(event) => setData((current) => ({ ...current, role: event.target.value }))}
                        sx={{
                            minHeight: 48,
                            padding: '4px',
                            borderRadius: '12px',
                            bgcolor: 'white',
                            '--RadioGroup-gap': '4px',
                            '--Radio-actionRadius': '8px',
                        }}


                    >
                        <Radio
                            // size="lg"
                            border='1'
                            key='Carrier'
                            color="neutral"
                            value = '1'
                            disableIcon
                            label='Carrier'
                            variant="plain"
                            sx={{
                                px: 2,
                                alignItems: 'center',
                                width: 300,
                                
                            }}
                            slotProps={{
                                action: ({ checked }) => ({
                                    sx: {
                                        ...(checked && {
                                            bgcolor: '#97c3f0',
                                            boxShadow: 'sm',
                                            '&:hover': {
                                                bgcolor: '#97c3f0',
                                            },
                                        }),
                                    },
                                }),
                            }}
                        />
                        <Radio
                            key='Shipper'
                            color="neutral"
                            value='2'
                            disableIcon
                            label='Shipper'
                            variant="plain"
                            sx={{
                                px: 2,
                                alignItems: 'center',
                                width: 300,
                            }}
                            slotProps={{
                                action: ({ checked }) => ({
                                    sx: {
                                        ...(checked && {
                                            bgcolor: '#97c3f0',
                                            boxShadow: 'sm',
                                            '&:hover': {
                                                bgcolor: '#97c3f0',
                                            },
                                        }),
                                    },
                                }),
                            }}
                        />

                    </RadioGroup>
                   
                   

                    <Stack direction="row" justifyContent="space-between" >
                        <Input

                            value={data.first_name}
                            onChange={(event) =>
                                setData((current) => ({ ...current, first_name: event.target.value }))

                            }
                            placeholder="First Name" sx={{ width: 280 }} required />

                        <Input
                            value={data.last_name}
                            onChange={(event) =>
                                setData((current) => ({ ...current, last_name: event.target.value }))

                            }
                            placeholder="Last Name" sx={{ width: 280 }} required />
                    </Stack>

                    {data.role === '2' ? <Input
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
                        // error={data.status === 'failure'}

                    />

                    <TextField
                        value={data.password}
                        onChange={(event) =>
                            setData((current) => ({ ...current, password: event.target.value }))
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
                        helperText={0 < data.password.length & data.password.length <= 5 ? 'password should be more than 5 symbol' : ''}
                        error={0 < data.password.length & data.password.length <= 5}
                    />

                    <FormControl size="sm" sx={{ width: 360 }}>
                        <Checkbox required
                            label={
                                <React.Fragment>
                                    I have read and agree to the{' '}
                                    <Typography fontWeight="md">terms and conditions</Typography>.
                                </React.Fragment>
                            }
                        />
                        <FormHelperText>
                            <Typography level="body-sm">
                                Read our <Link href="#link">terms and conditions</Link>.
                            </Typography>
                        </FormHelperText>
                    </FormControl>

                    <Stack>
                    <Button 
                        disabled={data.password.length <= 5}
                        variant="solid"
                        color="primary"
                        size="md"
                        loading={data.status === 'loading'}
                        type="submit"
                        sx={{ mb: 1 }}
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
                    <Divider  />

                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <p>Already have an account? </p>
                        
                        <Link href={{
                            pathname: '/login',

                        }}>Login</Link>
                    </Stack>

                </Stack>
               
                

            </form>
           
        </Sheet>
    )
}