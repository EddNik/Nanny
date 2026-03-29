import LoginForm from '@/components/AuthForms/LoginForm';
import css from '../page.module.css';

export default function LoginPage() {
  return (
    <div className={css.pageContainer}>
      <div className={css.formWrapper}>
        <LoginForm />
      </div>
    </div>
  );
}
