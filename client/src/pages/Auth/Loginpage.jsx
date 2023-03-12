
import './login.scss';
import Typography from '@mui/material/Typography';

function Loginpage() {
    return ( 
        <div className='main'>
            <div className='container'>
                <nav>
                    <a className='logo' href='/login'>
                        <img src="logo-favicon-50x50.png" alt="" />
                        <h5>International University</h5>                    </a>
                    <div>
					<a className='Join'>Join Now</a>
					<a className='Signin'>Sign In</a>
				    </div>
                </nav>
                <section>
                    <div className='hello'>
                        <h1>Welcome to IU Intership page</h1>
					    <img src="/images/login-hero.svg" alt="" />
                    </div>
                    <div className='form'>
					<button className='Google'>
						<img src="/images/google.svg" alt="" />
						Sign in with Google
					</button>
				    </div>
                </section>
            </div>
            
        </div>
     );
}
export default Loginpage;
