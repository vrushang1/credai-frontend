import Footer from "./footer";
import Header from "./header";

import {useQuery, gql} from '@apollo/client';
import { useState } from "react";
import { getAllHealthForms } from "../queries/queries";
import { Button, Checkbox } from "@mui/material";

function HealthForm()
{

    const { loading, error, data } = useQuery(getAllHealthForms);


    const [businessUEN,setBusinessUEN] = useState(1234);
    const [businessName,setBusinessName] = useState('Hey');
    const [name,setName] = useState('hi');
    const [email,setEmail] = useState('Hello');
    const [phone,setPhone] = useState('hii');
    const [files, setFiles] = useState(null);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Files:", files);
    }


    return(

        <>
        <Header />
            <Button variant="contained">Hello World</Button>
            <Checkbox defaultChecked />
            <ul id="book-list">
                {
                    data.healthform.map(healthform => {
                        return (
                            <li key={healthform.id}>
                               <h3>{healthform.id}</h3>
                               <h3>{healthform.businessUEN}</h3>
                               <h3>{healthform.businessName}</h3>
                            </li>
                            
                        );
                    })
                }
                
            </ul>
            <form onSubmit={handleSubmit}>

                <input type="file" onChange={(e) => setFiles(e)}/>
                <input type="submit" value="submit"/>
            </form>
        <Footer />
        </>
    );
}


export default HealthForm;