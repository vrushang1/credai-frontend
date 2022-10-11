import Footer from './footer';
import Header from './header';
import Image from 'next/image';
import caseIc from '../public/case-ic.svg';
import currencyIc from '../public/currency-ic.svg';
import personIc from '../public/person-ic.svg';
import watchIc from '../public/watch-ic.svg';
import eventIc from '../public/event-ic.svg';
import Button from '@mui/material/Button';

function ThankYouPage() {
  return (
    <>
      <Header />
      <section className="thankyou-section">
        <div className="container">
          <div className="title-block">
            <div className="title">
              <h1>Thank you for your trust in us.</h1>
            </div>
            <p>
              Our team will do the analysis for you and a report will be sent to
              your email address within 72 hrs.
            </p>
            <p className="small-text">
              In case we need some more information, our team will contact you
            </p>
            <div className="btn-wrap">
              <Button variant="outlined" className="border-btn">
                View Report
              </Button>
            </div>
          </div>
        </div>
        <div className="thankyou-content-block">
          <div className="custom-row-outer">
            <div className="custom-row">
              <div className="custom-col left-col">
                <div className="content-block">
                  <h2>Congratulations !! </h2>
                  <p>you could be eligible for a business loan upto</p>
                  <p className="price">SGD $ 100,000</p>
                  <div className="btn-wrap">
                    <Button variant="contained" className="gradient-btn">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="custom-col right-col">
                <div className="content-block">
                  <div className="listing-block">
                    <div className="list-item">
                      <div className="content">
                        <i>
                          <Image src={caseIc} alt="Case" />
                        </i>
                        <p>Upto SGD $300,000 collateral-fee capital</p>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="content">
                        <i>
                          <Image src={personIc} alt="Person" />
                        </i>
                        <p>Instant eligibility check</p>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="content">
                        <i>
                          <Image src={watchIc} alt="Watch" />
                        </i>
                        <p>Get approval in 48 hours</p>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="content">
                        <i>
                          <Image src={eventIc} alt="Event" />
                        </i>
                        <p>3 to 12 months flexibal tenture</p>
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="content">
                        <i>
                          <Image src={currencyIc} alt="Currency" />
                        </i>
                        <p>Transparent Fees and Charges</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ThankYouPage;
