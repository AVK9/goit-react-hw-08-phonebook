import { useState } from 'react';
import css from './RegistrationForm.module.css';
import { Icon } from '../img/Icon';
// import { toast } from 'react-toastify';
import { IMaskInput } from 'react-imask';

export function RegistrationForm({ register }) {
  const [showPassword, setShowPassword] = useState(false);
  const [nameContact, setNameContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setNameContact(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    checkData();
  };

  const checkData = () => {
    if (password.length < 7) {
      return alert('Password must have been 7 charge');
      //  toast.warn('Password must have been 6 charge');
    } else {
      const data = { name: nameContact, email, password };
      register(data);

      reset();
    }
  };

  const reset = () => {
    setNameContact('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={css.formBox}>
          <label htmlFor="Name" className={css.formLabel}>
            Name
          </label>
          <div className={css.boxInput}>
            <input
              type="text"
              name="name"
              value={nameContact}
              onChange={handleChange}
              placeholder="Ivan Bereza"
              required
            />

            <Icon id="user" className={css.iconsInput} />
          </div>

          <label htmlFor="email" className={css.formLabel}>
            Email
          </label>
          <div className={css.boxInput}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="asd@gmail.com"
              required
            />

            <Icon id="user-email" className={css.iconsInput} />
          </div>
          <label htmlFor="password" className={css.formLabel}>
            Password
          </label>
          <div className={css.boxInput}>
            <IMaskInput
              mask={'****************'}
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="***"
              required
            />

            <Icon id="user-key" className={css.iconsInput} />
            <div className={css.checkBoxes}>
              <div
                className={css.check}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Icon id="eye" className={css.iconsInputCheckImg} />
                ) : (
                  <Icon id="eye-blocked" className={css.iconsInputCheckImg} />
                )}
              </div>
            </div>
          </div>

          <button type="submit" className={css.btnAddContact}>
            <Icon id="user-plus" className={css.icons} />
            {/* <i className={css.icon} class="icon ion-md-person-add"></i> */}
            Register
          </button>
        </div>
        <ion-icon name="search"></ion-icon>
      </form>
    </div>
  );
}
