import { parse, differenceInDays } from "date-fns";
import { Link } from "react-router-dom";
import "./ClinicTableCard.css";

export const clinics = [
  {
    id: 1,
    nameOfClinic: "Karthik Clinic",
    doctorName: "Karthikeya Maturi",
    address1: "karimnagar",
    address2: "Hyderabad",
    country: "India",
    state: "Telangana",
    city: "Hyderabad",
    phoneNo: "",
    zipCode: "",
    gmail: "",
    timeZone: "",
    expireDate: "16-JUl-2023",
  },
  {
    id: 2,
    nameOfClinic: "Karthik Clinic",
    doctorName: "Karthikeya Maturi",
    address1: "karimnagar",
    address2: "Hyderabad",
    country: "India",
    state: "Telangana",
    city: "Hyderabad",
    phoneNo: "",
    zipCode: "",
    gmail: "",
    timeZone: "",
    expireDate: "05-Sep-2023",
  },
  {
    id: 3,
    nameOfClinic: "Karthik Clinic",
    doctorName: "Karthikeya Maturi",
    address1: "karimnagar",
    address2: "Hyderabad",
    country: "India",
    state: "Telangana",
    city: "Hyderabad",
    phoneNo: "",
    zipCode: "",
    gmail: "",
    timeZone: "",
    expireDate: "23-Oct-2023",
  },
  {
    id: 4,
    nameOfClinic: "Karthik Clinic",
    doctorName: "Karthikeya Maturi",
    address1: "karimnagar",
    address2: "Hyderabad",
    country: "India",
    state: "Telangana",
    city: "Hyderabad",
    phoneNo: "",
    zipCode: "",
    gmail: "",
    timeZone: "",
    expireDate: "09-Oct-2023",
  },
];

const ClinicTableCard = () => {
  return (
    <ul className="tableViewList">
      {clinics.map((clinic) => {
        const startDate = new Date();

        const expireDate = parse(clinic.expireDate, "dd-MMM-yyyy", new Date());

        const daysDifference = differenceInDays(expireDate, startDate);

        const activeHandler = () => {
          return (
            <div>
              <p className="active">Active</p>
            </div>
          );
        };

        const inActiveHandler = () => {
          return (
            <div>
              <p className="deActive">InActive</p>
            </div>
          );
        };

        return (
          <li
            style={{
              pointerEvents: daysDifference < 1 ? "none" : "auto",
              opacity: daysDifference < 1 ? 0.5 : 1,
              boxShadow:
                daysDifference < 1 ? "0px 0px 4px red" : "0px 0px 4px #22ff00",
            }}
            className="tableClinicItem"
            key={clinic.id}
          >
            <Link className="tableItemsLink">
              {daysDifference >= 1 ? activeHandler() : inActiveHandler()}
              <p>{clinic.nameOfClinic}</p>
              {daysDifference >= 1 ? (
                <p>
                  Your license will{" "}
                  <span style={{ fontWeight: "bold" }} className="text-danger">
                    Expire
                  </span>{" "}
                  within{" "}
                  <span style={{ fontWeight: "bold" }} className="text-danger">
                    {daysDifference}
                  </span>{" "}
                  days
                </p>
              ) : (
                <p>Expired</p>
              )}
              <p>{clinic.address2}</p>
              <p className="text-primary">Valid Till : {clinic.expireDate}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ClinicTableCard;
