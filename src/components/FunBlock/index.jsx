import { useState, useEffect } from "react";
import Layout from "../Layout";

import SimpleCard from "../SimpleCard";

import {getRGB} from "../../utils/functions"
const icons = [
    "car",
    "rocket",
    "train",
    "bicycle",
    "truck",
    "subway",
    "plane",
    "ship"
];




export default () => {
    const [n, setN] = useState(0);
    const [big, setBig] = useState(n);
    
    // useEffect(() => {
    //     console.log("hello")
    // });

    useEffect(() => {
        console.log("hello")
        // здесь самое лучшее место для сетевых запросов
    }, []);

    useEffect(() => {
        console.log("change Big")
    }, [big]);

    const handler = () => {
        setN(n + 1);
        if ((n + 1) % 10 === 0) {
            setBig((n+1) / 10)
        }
    }

    
    return <Layout count={4}>
        <span></span>
        <span>n: {n}</span>
        <span>big: {big}</span>
        <span></span>
        {icons.map(icon => <div
            key={icon}
            // style={{backgroundColor: getRGB()}}
            onClick={handler}
        >
            <SimpleCard 
                name={icon}
                text=" "
                pic={icon}
                type="fa"
            />
        </div>)}
    </Layout>
}