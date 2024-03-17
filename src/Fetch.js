import React, { useState, useEffect } from "react";

import "../src/fetch.css";
const url = "https://65c1ae1fdc74300bce8dcb8a.mockapi.io/company";
let prev = null;

const Fetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) return res.json();
        else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  const handleUser = (e, id) => {
    // console.log(count);
    setValue(id);
    if (prev !== null) {
      prev.style.color = "black";
      prev.style.borderLeft = "none";
    }
    e.target.style.color = "#2caad4";
    e.target.style.borderLeft = "2px solid #2caad4";
    prev = e.target;
  };
  return (
    <>
      <h1>Experience</h1>
      <div className="line"></div>
      <div className="content">
        <section className="users ">
          {users.map((user, index) => {
            return (
              <div
                className="userName"
                // style={ index<1 && {borderLeft:"2px solid #2caad4",color:"#2caad4"} }
                // style={{index} && {borderLeft:"2px solid #2caad4",color:"#2caad4"} }

                key={index}
                onClick={(e) => {
                  handleUser(e, index);
                }}
              >
                {user.username.toUpperCase()}
              </div>
            );
          })}
        </section>
        <Info user={users} index={value} />
      </div>
      <div className="info">MORE INFO</div>
    </>
  );
};

const Info = ({ user, index }) => {
  const { username, jobRole, desc1, desc2, desc3, desc4 } = user[index];

  return (
    <section className="user-info">
      <h4>{jobRole}</h4>
      <h3>{username.toUpperCase()}</h3>

      <section className="description">
        <div className="job-desc">
          <div className="bullet">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>
          </div>
          <p>{desc1}</p>
        </div>

        <div className="job-desc">
          <div className="bullet">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>
          </div>
          <p>{desc2}</p>
        </div>

        <div className="job-desc">
          <div className="bullet">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>
          </div>
          <p>{desc3}</p>
        </div>

        <div className="job-desc">
          <div className="bullet">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>
          </div>
          <p>{desc4}</p>
        </div>
      </section>
    </section>
  );
};

export default Fetch;
