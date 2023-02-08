import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

export default function Events(){
    const router = useRouter();

    const [person, setPerson] = useState({
        name: 'John Doe',
        address: 'Davao City'
    })

    function buttonClicked(){
        setPerson({...person, name: 'Anna'})
    }

    function inputChange(e){
        setPerson({...person, name: e.target.value})
    }

    useEffect(() => {
        console.log("useEffect")
    }, [person])

    return (
        <div>
            <Navbar />
            <div>
                <div className="text-[30px]">Name: {person.name}</div>
                <div className="text-[30px]">Address: {person.address}</div>
                <input type="text" name="personName" className="border border-black" 
                    onChange={inputChange} />
                <br/>
                <button className="border border-black mt-10" 
                    onClick={buttonClicked}>Click me</button>
            </div>
        </div>
    )
}