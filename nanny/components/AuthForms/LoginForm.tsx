'use client';

import { auth } from '@/lib/firebase/firebase';
import { LoginData, loginSchema } from '@/lib/validation/authSchema';
import { handleApiError } from '@/utils/errorHandler';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '../Button/Button';
import css from './AuthForm.module.css';

interface LoginProps {
  onSuccess: () => void;
}

export default function LoginForm({ onSuccess }: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success('Successfully logged in!');
      onSuccess();
    } catch (error) {
      handleApiError(error, 'Login failed');
    }
  };

  return (
    <>
      <div className={css.headerBlock}>
        <h2 className={css.title}>Log In</h2>
        <p className={css.description}>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </p>
      </div>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputWrapper}>
          <input
            type="email"
            className={css.inputField}
            {...register('email')}
            placeholder="Email"
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
        </div>

        <div className={css.inputWrapper}>
          <input
            type="password"
            className={css.inputField}
            {...register('password')}
            placeholder="Password"
          />
          {errors.password && (
            <p className={css.error}>{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className={css.authButton}
        >
          {isSubmitting ? 'Logging in...' : 'Log In'}
        </Button>
      </form>
    </>
  );
}
