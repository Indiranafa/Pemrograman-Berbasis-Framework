import { useRouter } from "next/router";
import Navbar from "../navbar";

const disableNavbar = ['/auth/login', '/auth/register'];
type AppshellProps = {
    children: React.ReactNode;
}

const Appshell = (props:AppshellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    return (
        <main className="appshell-main">
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    );
};

export default Appshell;