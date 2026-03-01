import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import MainSection from "./MainSection";

const produk = () => {
    // const [isLogin, setIsLogin] = useState(false);
    // const {push} = useRouter();
    // useEffect(() => {
    //     if(!isLogin) 
    //         push('/auth/login');
    // },[]);
    
    return (
        <>
            <HeroSection />
            <MainSection />
        </>
    );
};

export default produk;