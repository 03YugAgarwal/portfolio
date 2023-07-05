import React, { useState } from "react";
import styles from "./Contact.module.css";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [postCheck, setPostCheck] = useState(false);

  const handleNameChange = (e) => {
    setDetails({ ...details, name: e.target.value });
  };
  const handleEmailChange = (e) => {
    setDetails({ ...details, email: e.target.value });
  };
  const handleSubjectChange = (e) => {
    setDetails({ ...details, subject: e.target.value });
  };
  const handleMsgChange = (e) => {
    setDetails({ ...details, message: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    // if (!details.name || !details.email || !details.subject || !details.msg) {
    //   alert("Empty");
    //   return;
    // }

    if (postCheck) {
      return;
    }
    const detailCollection = collection(db, "message");
    setPostCheck(true);
    await addDoc(detailCollection, details);

    setDetails({
      name: "",
      email: "",
      subject: "",
      message: "Thank you! Your response has been submitted!",
    });
  };

  return (
    <div className={styles.container}>
      <form>
        <h1 className={styles.contactHeader}>Get in touch with me</h1>
        <label htmlFor="name" className={styles.label}>
          Name*
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={handleNameChange}
          value={details.name}
          placeholder="Enter your name"
        />
        <label htmlFor="email" className={styles.label}>
          Email*
        </label>
        <input
          type="text"
          name="email"
          id="email"
          required
          onChange={handleEmailChange}
          value={details.email}
          placeholder="Enter your email address"
        />

        <label htmlFor="subjetc" className={styles.label}>
          Subject*
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          onChange={handleSubjectChange}
          value={details.subject}
          placeholder="Enter your subject"
        />
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          type="text"
          onChange={handleMsgChange}
          value={details.message}
          className={`${!postCheck ? styles.msg : styles.msgActive}`}
          readOnly={postCheck}
        />

        <button onClick={handleClick} className={styles.btn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
