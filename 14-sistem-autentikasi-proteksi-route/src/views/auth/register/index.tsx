import Link from 'next/link';
import styles from './register.module.css';
//register page
const halamanRegister = () => {
    return (
        <div className={styles.register}>
            <h1 className={styles.title}>Halaman Register</h1>
            <p>
                Sudah punya akun? <a href="/auth/login">Login</a>
            </p>
        </div>
    );
};

export default halamanRegister;