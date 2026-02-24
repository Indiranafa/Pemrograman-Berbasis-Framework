import Link from 'next/link';
import { useRouter } from 'next/router';

const halamanLogin = () => {
    // const {push} = useRouter();
    const router = useRouter();
    const handleProduct = () => {
        router.push('/produk');
    };

    // const handlerLogin = () => {
    //     // Logic login di sini
    //     push('/produk');
    // }

    return (
        <div>
            <h1>Halaman Login</h1>
            {/* <button onClick={handlerLogin}>Login</button> <br />
            <button onClick={() => push('/produk')}>Login</button> <br /> */}
            <button onClick={() => handleProduct()}>Go to Produk</button> <br />
            <p>
                Belum punya akun? <a href="/auth/register">Register</a>
            </p>
        </div>
    );
};

export default halamanLogin;