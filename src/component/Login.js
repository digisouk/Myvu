import '../App.css';
import DenseAppBar from './NavBar';
import SignInSide from './SignInSide';

function Login() {
  return (
    <div className="App">
     <DenseAppBar/>
     <SignInSide/>
    </div>
  );
}

export default Login;
