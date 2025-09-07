import React, { useEffect } from 'react';

import HomePageComponent from "../../components/HomePageComponent/HomePageComponent"
import JothiCarWorld from "../../components/JothiCarWorld/JothiCarWorld"

export default function Home() {
    useEffect(() => {
        document.title = 'Jothi Car World';
    }, []);

    return <JothiCarWorld />
}