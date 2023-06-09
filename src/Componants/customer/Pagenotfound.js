import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import error from "../../assest/images/error-page/404-error.gif";
import FooterApp from './Footer';

export default function PagenotfoundApp() {
  return (
    <Fragment>
      <MDBContainer>
        <MDBCol className='d-flex justify-content-center'>
          <img src={error} alt='page not found' className='img-fluid w-50 mx-auto' />
        </MDBCol>
        <MDBCol className='d-flex justify-content-center'>
          <MDBBtn className='mb-4' href='/Home'>Go Back <i className="bi bi-arrow-right"></i> </MDBBtn>
        </MDBCol>
      </MDBContainer>
      {/* footer start */}
      <FooterApp/>
    </Fragment>
  )
}
