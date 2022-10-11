import Footer from "./footer";
import Header from "./header";
import Button from '@mui/material/Button';
import { Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormGroup, Link, List, ListItem, TextField } from "@mui/material";
import {useMutation} from '@apollo/client';
import { useState } from "react";
import { addHealthForm} from "../queries/queries";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FileDrop from "./filedrop";
import FileList from "./filelist";

function HealthForm()
{

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    

    const [businessUEN,setBusinessUEN] = useState('1234');
    const [businessName,setBusinessName] = useState('Hey');
    const [name,setName] = useState('hi');
    const [email,setEmail] = useState('Hello');
    const [phone,setPhone] = useState('hii');
    const [files, setFiles] = useState([]);

    const [addForm] = useMutation(addHealthForm);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await addForm({variables: {file: [files[0]], businessUEN: businessUEN, businessName, name, email, phone}});
        console.log(data);
    }
    const handleFileChange = (e) => {
        const file = e.target.files;
        setFiles(file);
 
      };
    return(

        <>
        <Header />
        <div className="homepage-form-section">
            <div className="container">
                <form className="form-section">
                    <div className="step-wrapper">
                        <div className="step-inner step-1 success">
                            <span className="step-title">Business Information</span>
                            <div className="form-group-wrapper">
                                <div className="form-group">
                                    <TextField id="uen" label="Business UEN" variant="outlined" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <TextField id="name" label="Business Name" variant="outlined" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="step-inner step-2">
                            <span className="step-title">Upload Documents</span>
                            <div className="upload-doc-wrapper">
                                <div className="left-block">
                                    <FileDrop totalFiles={files} addFiles={setFiles}/>
                                </div>
                                <div className="right-block">
                                    <List>
                                        <ListItem>
                                            <p>PDFs (not scanned copies) of company's active operating bank account(s) statements for the past 6 months</p>
                                            <p>Example: If today is 2 July 22, then please upload bank statements from Jan 22 to Jun 22 (both months inclusive)</p>    
                                        </ListItem>
                                        <ListItem>If your company is multi-banked, then please upload 6 months bank statements for each bank account</ListItem>
                                        <ListItem>If your file is password protected, we request you to remove the password and upload the file to avoid submission failure</ListItem>
                                    </List>
                                </div>
                            </div>
                            <FileList totalFiles={files} />
                        </div>
                        <div className="step-inner step-3">
                            <span className="step-title">Applicant Information</span>
                            <div className="form-group-wrapper">
                                <div className="form-group">
                                    <TextField id="fullname" label="Full Name" variant="outlined" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <TextField id="name" label="Email Address" variant="outlined" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <TextField id="name" label="Re-enter Email Address" variant="outlined" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="step-inner step-4">
                            <span className="step-title">Terms & Conditions</span>
                            <div className="form-group-wrapper">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="I assure that uploaded bank statements and provided company information matches and are of same company, if there is a mismatch then my report will not be generated" />
                                    <FormControlLabel control={<Checkbox />} label="I understand that this is a general report based on the bank statement and Credilinq is not providing a solution or guiding me for my business growth" />
                                    <FormControlLabel control={<Checkbox />}
                                        label={
                                        <div>
                                            <span>I duly accept the </span>
                                            <Link onClick={handleClickOpen}>Terms & Conditions</Link>
                                        </div>
                                        }
                                    />
                                </FormGroup>
                            </div>
                            <div className="btn-wrapper">
                                <Button variant="contained">Submit</Button>
                            </div>
                            <Dialog
                                fullScreen={fullScreen}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="responsive-dialog-title"
                                className="terms-condition-dialog"
                            >
                                <DialogTitle id="responsive-dialog-title">Terms & Conditions</DialogTitle>
                                <DialogContent>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                                    <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                                    <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                                    <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                                    <p>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</p>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} autoFocus variant="contained">Close</Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
        </>
    );
}


export default HealthForm;