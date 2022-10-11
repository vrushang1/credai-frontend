import Footer from "./footer";
import Header from "./header";
import Button from '@mui/material/Button';
import { Checkbox } from "@mui/material";
function HealthForm()
{
    return(

        <>
        <Header />
            <Button variant="contained">Hello World</Button>
            <Checkbox defaultChecked />
        <Footer />
        </>
    );
}


export default HealthForm;