'use client';

import css from './AuthForm.module.css';
import Button from '../Button/Button';
import { auth } from '@/lib/firebase/firebase';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {
  RegistrationData,
  registrationSchema,
} from '@/lib/validation/authSchema';
import { handleApiError } from '@/utils/errorHandler';

interface RegistrationProps {
  onSuccess: () => void;
}

export default function RegistrationForm({ onSuccess }: RegistrationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: data.name, // Set display name from the form input
        //   photoURL: 'https://example.com/default-avatar.png', // Optional: Set a default avatar URL
        // displayName: data.email.split('@')[0], // Set display name as the part before '@'
      });

      toast.success('Registration successful!');
      onSuccess();
    } catch (error) {
      // toast.error((error as Error).message || 'Registration failed');
      // One clean line handles everything
      handleApiError(error, 'Registration failed');
    }
  };

  return (
    <>
      <div className={css.headerBlock}>
        <h2 className={css.title}>Registration</h2>
        <p className={css.description}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </div>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputWrapper}>
          <input
            type="text"
            className={css.inputField}
            {...register('name')}
            placeholder="Name"
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}
        </div>
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
          {isSubmitting ? 'Registering...' : 'Sign Up'}
        </Button>
      </form>
    </>
  );
}
