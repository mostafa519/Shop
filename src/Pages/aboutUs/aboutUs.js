import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit"; 
export default function AboutUS() {
 
  return (
    <MDBFooter className="text-center text-lg-start  mt-3">
      <div
        className="text-center p-4" 
      >
        <p className="animate-charcter"> About Us
        </p> 
        <p>THE FASHION STORE caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find anywhere else. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care.</p>
      </div>

      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      
      <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="6" lg="3" xl="3" className="  mb-4 text-center">
            <h1 className="animate-charcter ">       

            Our Mission 
              </h1>
              <p>
             is to make a difference through our branding by staying ahead of the fashion trends, defining style and giving customers what they want.
              </p>
            </MDBCol>
            <MDBCol md="6" lg="3" xl="3" className="  mb-4  text-center ">
            <h1 className="animate-charcter  ">       

            Our Vision </h1>
                <p>
                is to change the way our society connects with the fashion industry by providing our customers with products that are ethically and responsibly sourced.
                </p>
              </MDBCol>
            <MDBCol md="6" lg="3" xl="3" className="  mb-4  text-center">
            <h1 className="animate-charcter  ">      

            THE FASHION STORE         </h1>
                <p>
                 is here to serve you and make sure you find the Perfect Look for every occasion. Our passion for fashion is the reason why we are here. We absolutely love what we do, and our goal is to help our customers by providing them with unique outfit and accessories that make them stand-out from the crowd.
                </p>
             </MDBCol> 
             <MDBCol md="6" lg="3" xl="3" className="  mb-4 text-center">
            <h1 className="animate-charcter  ">       

            Small clothing brands             </h1>
                <p>
                don’t always have the capacity to offer a broad array of sizes, or even when they do, some sizes might run out quicker than others. In particular, many fail to consider larger sizes, which is a problem in the fashion industry in general.
                </p>
                          </MDBCol>           
         </MDBRow>
        </MDBContainer>
      </section>  
    </MDBFooter>
  );
}
