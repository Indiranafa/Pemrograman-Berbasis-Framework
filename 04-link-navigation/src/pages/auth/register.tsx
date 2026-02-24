import Link from 'next/link';

const halamanRegister = () => {
    return (
        <div>
            <h1>Halaman Register</h1>
            <p>
                Sudah punya akun? <a href="/auth/login">Login</a>
            </p>
        </div>
    );
};

export default halamanRegister;