import Navbar from "../navbar";

type AppshellProps = {
    children: React.ReactNode;
}

const Appshell = (props:AppshellProps) => {
    const { children } = props;
    return (
        <main className="appshell-main">
            <Navbar />
            <div style={{ flex: 1 }}>{children}</div>
            <footer className="footer">
                Praktikum Next.js Pages Router © 2026
            </footer>
        </main>
    );
};

export default Appshell;