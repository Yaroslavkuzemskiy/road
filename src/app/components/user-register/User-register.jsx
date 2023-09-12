
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
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
    const [value, setValue] = React.useState('');
    const [show, setShow] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setData((current) => ({ ...current, status: 'loading' }));
        try {
          // Replace timeout with real backend operation
          setTimeout(() => {
            setData({ email: '', status: 'sent' });
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
                        
                        <Stack direction="row" justifyContent="space-between" >
                            <Input placeholder="First Name" sx={{width:280}} required/>
                            <Input placeholder="Last Name" sx={{width: 280}} required/>
                        </Stack>

                        {show ? <Input
                            startDecorator={<LocationOnIcon />}
                            placeholder="City"
                            required
                        /> : null }

                        <Input
                            startDecorator={<LocationOnIcon />}
                            placeholder="City"
                            required
                        />
                       
                        <Input
                            startDecorator={<CallIcon />}
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
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
                                setData({ email: event.target.value, status: 'initial' })
                            }
                            error={data.status === 'failure'}

                        />
                        {/* <Input
                            startDecorator={<PasswordIcon />}
                            type="password"
                            placeholder="Password"
                            required
                            
                            
                        />
                          */}
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        size="small"
                        required
                        startAdornment={
                            <InputAdornment position="start">
                               <PasswordIcon />
                            </InputAdornment>
                        }
                        endAdornment={
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
                        }
                        placeholder="Password"
                    />

                        <Button
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