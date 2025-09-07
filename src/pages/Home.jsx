import React, { useEffect } from 'react';
import HomePageComponent from "../components/HomePageComponent/HomePageComponent"

export default function Home() {
    useEffect(() => {
        document.title = 'Jothi Motor Spares';
    }, []);

    return <HomePageComponent />
}