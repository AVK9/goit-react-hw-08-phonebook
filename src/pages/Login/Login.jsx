import { LoginForm } from 'components/LoginForm/LoginForm';
import { Title } from 'components/Title/Title';
import css from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Link to="/">
        <Title text="Phone Book" />
      </Link>
      <div className={css.boxForm}>
        <div className={css.textBoxReg}>
          <h2>User login</h2>
          {/* <Title text="User login" /> */}
          <LoginForm />
          <div className={css.textBox2}>
            <Link to="/register" className={css.nameText2}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
