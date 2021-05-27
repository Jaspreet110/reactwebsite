import React from "react";
import { useState } from "react";

const Contact = () => {
  const [email, setemail] = useState("");
  const [fname, setfname] = useState("");
  const [tel, settel] = useState("");
  const [message, setmessage] = useState("");
  const [allinput, setAllinput] = useState([]);

  const formsubmit = (e) => {
    if ((fname, email, tel) && message) {
      e.preventDefault();
      const newvalue = {
        email: email,
        fullname: fname,
        phone: tel,
        message: message,
      };
      setAllinput([...allinput, newvalue]);
      setemail("");
      setfname("");
      settel("");
      setmessage("");
    } else {
      alert("Form cannot be blank!");
      e.preventDefault();
    }
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={fname}
                  onChange={(e) => {
                    setfname(e.target.value);
                  }}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  value={tel}
                  onChange={(e) => {
                    settel(e.target.value);
                  }}
                  placeholder="Phone"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  value={message}
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-outline-primary " type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
