import Script from 'next/dist/client/script';
import styles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
    const { data }:any = useSession();

    return (
        <div className={styles.navbar}>
            {/* <div className={styles.navbar_brand}>
                My App
            </div> */}

            <div className={styles.navbar__brand} id="title"></div>
            <Script id="title-script">
                {`document.getElementById('title').innerHTML = 'My App';`}
            </Script>

            <div className={styles.navbar_right}>
                {data ? (
                <>
                    <div className={styles.navbar__user}>
                        Welcome, {data.user?.fullname || data.user?.name || data.user?.email}
                        {data.user.image && (
                            <Image
                                src={data.user.image}
                                alt={data.user.fullname || data.user.name || data.user.email}
                                className={styles.navbar__user__image}
                                width={50}
                                height={50}
                                style={{ objectFit: "cover", borderRadius: "50%" }}
                                priority
                            />
                        )}
                    </div>
                    <button
                        className={`${styles.navbar_button} ${styles["navbar_button-danger"]}`}
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </button>
                </>
                ) : (
                    <button
                        className={`${styles.navbar_button} ${styles["navbar_button-primary"]}`}
                        onClick={() => signIn()}
                    >
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;