import "./Clinics.css";
import Logo from "../../components/Logo/Logo";
import Profile from "../../components/Profile/Profile";
import ClinicTableCard from "../../components/ClinicTableCard/ClinicTableCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

const Clinics = () => {
  const [tableView, setTableView] = useState(true);

  const tableAndGridsIconsHander = () => {
    return (
      <div className="col-6 d-flex justify-content-end">
        <button
          className="table-grid-btns"
          onClick={() => {
            setTableView(true);
          }}
        >
          <FontAwesomeIcon
            fontSize={30}
            className="me-4 "
            icon={faTableCells}
            color="#0d6efd"
          />
        </button>
        <button
          className="table-grid-btns"
          onClick={() => {
            setTableView(false);
          }}
        >
          <FontAwesomeIcon fontSize={30} icon={faList} color="#0d6efd" />
        </button>
      </div>
    );
  };

  return (
    <div className="container-fluid p-0">
      <header className="header">
        <Logo />
        <div className="d-flex align-items-center">
          <Link to="/manage/clinics/addClinic">
            <button className="btn btn-danger">+ ADD CLINIC</button>
          </Link>
          <Profile />
        </div>
      </header>

      <section className="clinics-body">
        <div className="row">
          <h5 className="col-6 text-primary">SELECTION OF CLINIC</h5>
          {tableAndGridsIconsHander()}
        </div>
        <div className="container-fluid  mt-4 p-0">
          <ClinicTableCard />
        </div>
      </section>
    </div>
  );
};

export default Clinics;
