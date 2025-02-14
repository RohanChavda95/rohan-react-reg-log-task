// import React, { useEffect, useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";

// const Details = () => {
//   const [logindata, setLoginData] = useState([]);

//   const history = useNavigate();

//   const [show, setShow] = useState(false);

//   var todayDate = new Date().toISOString().slice(0, 10);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const Birthday = () => {
//     const getuser = localStorage.getItem("user_login");
//     if (getuser && getuser.length) {
//       const user = JSON.parse(getuser);

//       setLoginData(user);

//       const userbirth = logindata.map((el, k) => {
//         return el.date === todayDate;
//       });

//       if (userbirth) {
//         setTimeout(() => {
//           console.log("ok");
//           handleShow();
//         }, 3000);
//       }
//     }
//   };

//   const userlogout = () => {
//     localStorage.removeItem("user_login");
//     history("/");
//   };

//   useEffect(() => {
//     Birthday();
//   }, []);

//   return (
//     <>
//       {logindata.length === 0 ? (
//         "errror"
//       ) : (
//         <>
//           <h1>detials page</h1>
//           <h1>{logindata[0].name}</h1>
//           <Button onClick={userlogout}>LogOut</Button>

//           {logindata[0].date === todayDate ? (
//             <Modal show={show} onHide={handleClose}>
//               <Modal.Header closeButton>
//                 <Modal.Title>{logindata[0].name} 😄</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 Wish you many many happy returns of the day ! 🍰
//               </Modal.Body>
//               <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                   Close
//                 </Button>
//                 <Button variant="primary" onClick={handleClose}>
//                   Save Changes
//                 </Button>
//               </Modal.Footer>
//             </Modal>
//           ) : (
//             ""
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export default Details;

import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import UserList from "../Userlist"; // Import UserList component

const Details = () => {
  const [logindata, setLoginData] = useState([]);
  const [userCount, setUserCount] = useState(0); // State to keep track of user count

  const history = useNavigate();
  const [show, setShow] = useState(false);
  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);
      const userbirth = user.some((el) => el.date === todayDate);
      if (userbirth) {
        setTimeout(() => {
          handleShow();
        }, 3000);
      }
      setUserCount(user.length); // Update user count whenever logindata changes
    }
  };
  

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {logindata.length === 0 ? (
        "error"
      ) : (
        <>
          <h1>Details page</h1>
          <h1>{logindata[0].name}</h1>
          <p>Total Users: {userCount}</p> {/* Display total user count */}
          <Button onClick={userlogout}>Log Out</Button>
          <UserList users={logindata} /> {/* Render UserList component with users data */}
          {logindata[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{logindata[0].name} 😄</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Wish you many many happy returns of the day ! 🍰
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Details;
