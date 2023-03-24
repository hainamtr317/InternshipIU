import { Box,Avatar,Typography, Checkbox,Button,FormControlLabel,TextField,Link,Grid   } from '@mui/material';
import './login.scss';
import logo from '../../assets/logo-small_logo.png'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Loginpage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
      
    return (
        <div className='main-login'>
            
            <div className='logo-header'>
            <a className='logo' href='/login'>
                <img className='logo-img' src={logo} alt="" />
                <div className='logo-text'>
                <span className='logo-text-top'>Vietnam National University HCMC</span>
                <span className='logo-text-bottom'>International University</span>
                </div>
            </a>
           
            </div>
             {/* add box container for login */}
             <div className='box-contain'>
             <Box sx={{
                display: 'flex',
                width: {xs:500,md:1000},
                height: 600,
                backgroundColor: 'white',
                border:'2px solid whitesmoke',
                borderRadius:"3%"
                
             }}>
             <Box
          sx={{
            marginLeft:22,
            marginTop: "8",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

            <Avatar sx={{ m: 1 }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
              <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              />
             <Button
              type="submit" 
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}    
              >
              Sign In
            </Button>
            <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        
                </Box>


             </Box>
             </div>

        </div>
    );
}
export default Loginpage;
