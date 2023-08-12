import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaDownload,
  FaPhoneAlt,
  FaHouseUser,
} from "react-icons/fa";
import "./Footer.css";
export default function FooterComponent() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted FootEditting mt-3">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Here is your free sample essay on clothes?</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100007115927987"
            target="_blank"
            className="me-4 text-reset"
          >
            <FaFacebook style={{ fontSize: "30px" }} />
          </a>
          <a
            href="https://github.com/mostafa519"
            target="_blank"
            className="me-4 text-reset"
          >
            <FaGithub style={{ fontSize: "30px" }} />
          </a>
          <a
            href="mailto:engmostafa51999@gmail.com"
            className="me-4 text-reset"
          >
            <FaGoogle style={{ fontSize: "30px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/eng-mostafa-4a228519b/"
            target="_blank"
            className="me-4 text-reset"
          >
            <FaLinkedin style={{ fontSize: "30px" }} />
          </a>
          <a
            className="me-4 text-reset"
            target="_blank"
            onClick={() => {
              window.print();
            }}
          >
            <FaDownload style={{ fontSize: "30px" }} />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase  mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Clothes add to beauty
              </h6>
              <p>
                Proper dressing enhances the natural beauty of a person whereas un­desirable clothes have an adverse effect on it. Similarly an ordinary person can add his beauty by judicious selection of clothes keeping in mind his colour, height, size, etc. In this way, clothes beautify the physical appearance of a person and bring out his personality              </p>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase  mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Adds variety to life
              </h6>
              <p>
                Clothing adds variety to life and does away with monotony. Dressing makes a man fashionable. Dress designing is an art. These days, this art is in great demand because of fashion advertise­ments and fashion shows. Hence, we can express artistic abilities by designing varied dresses.                       </p>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase  mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Mental development
              </h6>
              <p>
                Clothing has a deep influence on human behaviour. A per­son who is not dressed according to prevalent fashion or season is mocked at. For example, a person wearing a woollen suit in summers would be a source of laughter.                  </p>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase  mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Social development
              </h6>
              <p>
                Clothing serves a social purpose for human beings just as food serves a health purpose for him. A properly dressed person attracts the attention of others towards him whereas a person who for one reason or other cannot dress up properly tries to avoid meeting and interacting with others. Thus his behaviour becomes unsocial. Decent and proper dressing is essential for social development.</p>            </MDBCol>


          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"

        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright :
        <a className="text-reset fw-bold" href="/">
          Clothes For All
        </a>
      </div>
    </MDBFooter>
  );
}
