import RegistrationForm from '@/components/AuthForms/RegistrationForm';
import css from '../page.module.css';

export default function RegisterPage() {
  return (
    <div className={css.pageContainer}>
      <div className={css.formWrapper}>
        <RegistrationForm />
      </div>
    </div>
  );
}
