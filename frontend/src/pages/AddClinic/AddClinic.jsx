import Logo from "../../components/Logo/Logo";
import Profile from "../../components/Profile/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faTableCells,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";

const profile = {
  name: "Karthikeya",
  email: "bunnymkk9@gmail.com",
  phoneNo: "917093498939",
};

import "./AddClinic.css";
const AddClinic = () => {
  const [tableView, setTableView] = useState(true);

  const [validated, setValidated] = useState(false);

  const [countryId, setCountryId] = useState("");

  const [stateId, setStateId] = useState("");

  const [cityId, setCityId] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const FormHandler = () => {
    return (
      <Form
        className="addClinicForm mt-5"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group
            className="my-2 my-md-0"
            as={Col}
            md="4"
            controlId="validationCustom01"
          >
            <Form.Label>Clinic Name</Form.Label>
            <Form.Control required type="text" placeholder="Name of clinic" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Provide a valid Clinic Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Doctor Name</Form.Label>
            <Form.Control required type="text" placeholder="Doctor Name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Provide a valid Doctor Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomAddress 1">
            <Form.Label>Address 1</Form.Label>
            <Form.Control type="text" placeholder="Address 1" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Valid Address 1.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomAddress 2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control type="text" placeholder="Address 2" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Valid Address 2.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Country</Form.Label>
            <Form.Select
              onChange={(e) => {
                setCountryId(e.target.value);
              }}
              required
            >
              <option value="">Select-country</option>
              {Country.getAllCountries().map((country) => {
                return (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                );
              })}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a valid Country.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Select
              onChange={(e) => {
                setStateId(e.target.value);
                console.log(e.target.value);
              }}
              required
            >
              <option value="">Select-State</option>
              {State.getStatesOfCountry(countryId).map((state) => {
                return (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                );
              })}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a valid State.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom06">
            <Form.Label>City</Form.Label>
            <Form.Select
              onChange={(e) => {
                setCityId(e.target.value);
              }}
              required
            >
              <option value="">Select-City</option>

              {City.getCitiesOfState(countryId, stateId).map((city) => {
                return (
                  <option key={city.countryCode} value={city.countryCode}>
                    {city.name}
                  </option>
                );
              })}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom07">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              readOnly
              value={profile.phoneNo}
              type="text"
              placeholder="Phone No"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomZipCOde">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip Code" required />
            <Form.Control.Feedback type="invalid">
              Please provide a Zip Code.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom07">
            <Form.Label>Email</Form.Label>
            <Form.Control
              readOnly
              value={profile.email}
              type="text"
              placeholder="Email"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom06">
            <Form.Label>TimeZone</Form.Label>
            <Form.Control
              value={
                countryId != ""
                  ? Country.getCountryByCode(countryId).timezones[0]
                      .gmtOffsetName +
                    " " +
                    Country.getCountryByCode(countryId).timezones[0].zoneName
                  : ""
              }
              type="text"
              placeholder="Time Zone (auto-selected by country)"
              readOnly
            ></Form.Control>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    );
  };

  return (
    <div className="container-fluid p-0">
      <header className="header">
        <Logo />
        <div className="d-flex align-items-center">
          <Link to="/manage/clinics/index">
            <button className="btn btn-danger">
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} /> Back to Clinics
            </button>
          </Link>
          <Profile />
        </div>
      </header>

      <section className="addClinicbody">
        <h5 className="col-6 text-primary">SELECTION OF CLINIC</h5>
        {FormHandler()}
      </section>
    </div>
  );
};

export default AddClinic;
