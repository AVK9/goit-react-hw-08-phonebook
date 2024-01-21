import { useState } from 'react';
import css from './LoginForm.module.css';
import { Icon } from '../img/Icon';
// import { toast } from 'react-toastify';
import { IMaskInput } from 'react-imask';

export function LoginForm({ login }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    login({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={css.formBox}>
          <label htmlFor="email" className={css.formLabel}>
            Email
          </label>
          <div className={css.boxInput}>
            <input
              type="email"
              name="email"
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
            <Icon id="enter" className={css.icons} />
            Login
          </button>
        </div>
        <ion-icon name="search"></ion-icon>
      </form>
    </div>
  );
}
