import syles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
    const { data }:any = useSession();
    return (
        <div className={syles.navbar}>
            <div className={syles.navbar_brand}>
                My App
            </div>

            <div className={syles.navbar_right}>
                {data ? (
                <>
                    <div className={syles.navbar__user}>
                        Welcome, {data.user?.fullname || data.user?.name || data.user?.email}
                        {data.user.image && (
                            <Image
                                src={data.user.image}
                                alt={data.user.fullname || data.user.name || data.user.email}
                                className={syles.navbar__user__image}
                                width={32}
                                height={32}
                                style={{ objectFit: "cover", borderRadius: "50%" }}
                                priority
                            />
                        )}
                    </div>
                    <button
                        className={`${syles.navbar_button} ${syles["navbar_button-danger"]}`}
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </button>
                </>
                ) : (
                    <button
                        className={`${syles.navbar_button} ${syles["navbar_button-primary"]}`}
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