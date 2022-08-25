import React, { useState } from "react";
import { auth, fs } from "../Config/Config";

function MyProducts() {
  const [allDocs, setAllDocs] = useState([]);
  const [show, setShow] = useState(false);

  const fetchAll = (e) => {
    e.preventDefault();
    const uid = auth.currentUser.uid;
    console.log(uid);
    fs.collection("Buyer-Cart " + uid)
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length > 0) {
          snapshot.docs.forEach((doc) => {
            setAllDocs((pre) => {
              return [...pre, doc.data()];
            });
          });
        }
      })
      .catch((err) => {
        console.log("Error occured");
      });
    console.log(allDocs);
    setShow((prev) => !prev);
  };

  // useEffect(() => {
  //   fetchAll();
  // }, []);

  return (
    <>
      {!show && (
        <div className="text-center">
          <div className="btn btn-primary item-center mt-4" onClick={fetchAll}>
            Fetch My History
          </div>
        </div>
      )}
      <h1 className="fw-bold mb-4 text-center mt-4">My History</h1>
      {allDocs.map((doc) => {
        return (
          <>
            <div className="px-4 my-5 bg-white rounded-3">
              <div
                className="container py-4"
                style={{ border: "2px solid #ECE6EE", borderRadius: "2%" }}
              >
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src={doc.url}
                      alt={doc.title}
                      height="70%"
                      width="60%"
                    />
                  </div>
                  <div className="col-md-6">
                    <h6 className="display-6">{doc.title}</h6>
                  </div>
                  <p className="lead">{doc.description}</p>
                  <h3>₹ {doc.price}</h3>
                  <div>{doc.category}</div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default MyProducts;
