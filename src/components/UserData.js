export default function UserData({
  fname,
  lname,
  email,
  school,
  subject,
  country,
}) {
  return (
    <div className="user-data">
      <h4> Submitted Data </h4>{" "}
      <div className="input-container">
        <label> Full Name </label>{" "}
        <div className="value">
          {" "}
          {fname} {lname}{" "}
        </div>{" "}
      </div>{" "}
      <div className="input-container">
        <label> Email Address </label> <div className="value"> {email} </div>{" "}
      </div>{" "}
      <div className="input-container">
        <label> School </label> <div className="value"> {school} </div>{" "}
      </div>{" "}
      <div className="input-container">
        <label> Subject </label> <div className="value"> {subject} </div>{" "}
      </div>{" "}
      <div className="input-container">
        <label> Country </label> <div className="value"> {country} </div>{" "}
      </div>{" "}
    </div>
  );
}
