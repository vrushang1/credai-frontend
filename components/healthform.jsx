import Footer from './footer';
import Header from './header';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Link,
  List,
  ListItem,
  TextField,
} from '@mui/material';
import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { addHealthForm } from '../queries/queries';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FileDrop from './filedrop';
import FileList from './filelist';
import { Formik } from 'formik';
import { stepFourSchema } from '../schemas/validation-schema';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function HealthForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [phone, setPhone] = useState('hii');
  const [files, setFiles] = useState([]);

  const [addForm] = useMutation(addHealthForm);

  const handleDeletePdf = (id) => {
    const values = [...files];
    values.splice(id, 1);
    setFiles(values);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmitFinal = async (values) => {
    const data = await addForm({
      variables: {
        file: files,
        businessUEN: values.uen,
        businessName: values.businessName,
        name: values.fullName,
        email: values.email,
        phone: phone,
      },
    });

    console.log(data);
    router.push('/thankyou');
  };

  return (
    <>
      <Header />
      <Formik
        // enableReinitialize={festivalData && isReinitailize}
        initialValues={{
          form_1: false,
          form_2: false,
          form_3: false,
          uen: '',
          businessName: '',
          fullName: '',
          email: '',
          reEmail: '',
        }}
        validationSchema={stepFourSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values, 'check');
          handleSubmitFinal(values);
        }}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {(props) => (
          <div className="homepage-form-section">
            <div className="container">
              <form className="form-section" onSubmit={props.handleSubmit}>
                <div className="step-wrapper">
                  <div
                    className={`step-inner step-1  ${
                      props.values.businessName && props.values.uen
                        ? 'success'
                        : ''
                    }`}
                  >
                    <span className="step-title">Business Information</span>
                    <div className="form-group-wrapper">
                      <div className="form-group">
                        <TextField
                          id="uen"
                          name="uen"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.uen}
                          label="Business UEN"
                          variant="outlined"
                          className="form-control"
                        />
                        {props.errors.uen && props.touched.uen ? (
                          <p className="formError">{props.errors.uen}</p>
                        ) : null}
                      </div>

                      <div className="form-group">
                        <TextField
                          id="name"
                          name="businessName"
                          label="Business Name"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.businessName}
                          variant="outlined"
                          className="form-control"
                        />
                        {props.errors.businessName &&
                        props.touched.businessName ? (
                          <p className="formError">
                            {props.errors.businessName}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`step-inner step-2  ${
                      files.length ? 'success' : ''
                    }`}
                  >
                    <span className="step-title">Upload Documents</span>
                    <div className="upload-doc-wrapper">
                      <div className="left-block">
                        <FileDrop totalFiles={files} addFiles={setFiles} />
                      </div>
                      <div className="right-block">
                        <List>
                          <ListItem>
                            <p>
                              PDFs (not scanned copies) of company's active
                              operating bank account(s) statements for the past
                              6 months
                            </p>
                            <p>
                              Example: If today is 2 July 22, then please upload
                              bank statements from Jan 22 to Jun 22 (both months
                              inclusive)
                            </p>
                          </ListItem>
                          <ListItem>
                            If your company is multi-banked, then please upload
                            6 months bank statements for each bank account
                          </ListItem>
                          <ListItem>
                            If your file is password protected, we request you
                            to remove the password and upload the file to avoid
                            submission failure
                          </ListItem>
                        </List>
                      </div>
                    </div>
                    <FileList totalFiles={files} deleteFile={handleDeletePdf} />
                  </div>
                  <div
                    className={`step-inner step-3  ${
                      props.values.fullName &&
                      props.values.email &&
                      props.values.reEmail &&
                      !props.errors.email &&
                      !props.errors.reEmail
                        ? 'success'
                        : ''
                    }`}
                  >
                    <span className="step-title">Applicant Information</span>
                    <div className="form-group-wrapper">
                      <div className="form-group">
                        <TextField
                          id="fullname"
                          name="fullName"
                          label="Full Name"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.fullName}
                          variant="outlined"
                          className="form-control"
                        />
                        {props.errors.fullName && props.touched.fullName ? (
                          <p className="formError">{props.errors.fullName}</p>
                        ) : null}
                      </div>
                      <div className="form-group phone-number">
                        <PhoneInput
                          country={'us'}
                          onChange={(phone) => setPhone(phone)}
                          className="form-control"
                        />
                        {!phone ? (
                          <p className="formError">Please Enter Phone</p>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <TextField
                          id="name"
                          name="email"
                          label="Email Address"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.email}
                          variant="outlined"
                          className="form-control"
                        />
                        {props.errors.email && props.touched.email ? (
                          <p className="formError">{props.errors.email}</p>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <TextField
                          id="name"
                          name="reEmail"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.reEmail}
                          label="Re-enter Email Address"
                          variant="outlined"
                          className="form-control"
                        />
                        {props.errors.reEmail && props.touched.reEmail ? (
                          <p className="formError">{props.errors.reEmail}</p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`step-inner step-4  ${
                      props.values.form_1 &&
                      props.values.form_2 &&
                      props.values.form_3
                        ? 'success'
                        : ''
                    }`}
                  >
                    <span className="step-title">Terms & Conditions</span>
                    <div className="form-group-wrapper">
                      <FormGroup>
                        <FormControlLabel
                          name="form_1"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          control={<Checkbox />}
                          label="I assure that uploaded bank statements and provided company information matches and are of same company, if there is a mismatch then my report will not be generated"
                        />
                        <FormControlLabel
                          name="form_2"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          control={<Checkbox />}
                          label="I understand that this is a general report based on the bank statement and Credilinq is not providing a solution or guiding me for my business growth"
                        />
                        <FormControlLabel
                          name="form_3"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          control={<Checkbox />}
                          label={
                            <div>
                              <span>I duly accept the </span>
                              <Link onClick={handleClickOpen}>
                                Terms & Conditions
                              </Link>
                            </div>
                          }
                        />
                        {(props.errors.form_3 && props.touched.form_3) ||
                        (props.errors.form_2 && props.touched.form_2) ||
                        (props.errors.form_1 && props.touched.form_1) ? (
                          <p className="formError">{props.errors.form_3}</p>
                        ) : null}
                      </FormGroup>
                    </div>
                    <div className="btn-wrapper">
                      <Button variant="contained" type="submit">
                        Submit
                      </Button>
                    </div>
                    <Dialog
                      fullScreen={fullScreen}
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="responsive-dialog-title"
                      className="terms-condition-dialog"
                    >
                      <DialogTitle id="responsive-dialog-title">
                        Terms & Conditions
                      </DialogTitle>
                      <DialogContent>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Donec odio. Quisque volutpat mattis eros. Nullam
                          malesuada erat ut turpis. Suspendisse urna nibh,
                          viverra non, semper suscipit, posuere a, pede.
                        </p>
                        <p>
                          Donec nec justo eget felis facilisis fermentum.
                          Aliquam porttitor mauris sit amet orci. Aenean
                          dignissim pellentesque felis.
                        </p>
                        <p>
                          Morbi in sem quis dui placerat ornare. Pellentesque
                          odio nisi, euismod in, pharetra a, ultricies in, diam.
                          Sed arcu. Cras consequat.
                        </p>
                        <p>
                          Praesent dapibus, neque id cursus faucibus, tortor
                          neque egestas auguae, eu vulputate magna eros eu erat.
                          Aliquam erat volutpat. Nam dui mi, tincidunt quis,
                          accumsan porttitor, facilisis luctus, metus.
                        </p>
                        <p>
                          Phasellus ultrices nulla quis nibh. Quisque a lectus.
                          Donec consectetuer ligula vulputate sem tristique
                          cursus. Nam nulla quam, gravida non, commodo a,
                          sodales sit amet, nisi.
                        </p>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={handleClose}
                          autoFocus
                          variant="contained"
                        >
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
      <Footer />
    </>
  );
}

export default HealthForm;
