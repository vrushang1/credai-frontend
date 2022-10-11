import Footer from "./footer";
import Header from "./header";
import Button from '@mui/material/Button';
import { Checkbox } from "@mui/material";
import {useQuery, gql} from '@apollo/client';
import { useState } from "react";
import { getAllHealthForms } from "../queries/queries";

function HealthForm()
{

    const { loading, error, data } = useQuery(getAllHealthForms);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
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
        <Footer />
        </>
    );
}


export default HealthForm;