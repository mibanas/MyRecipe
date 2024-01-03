import React  from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img10 from "../Assets/img/pex.jpg";
import "../Assets/styles/Contact.css"; 

export default function Contact() {
  const notify = () => toast("message sent succesfully!");
  
  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${img10})` }} >

      </div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" >
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" placeholder="Enter full name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Enter Email" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter message"
            required
          ></textarea>
          <ToastContainer />
          <button type="Submit" onClick={notify}>Send Message</button>
          

        </form>
      </div>
    </div>
  );
}











// const [plats, setPlats] = useState([]);
  // const [troisPlats, setTroisPlats] = useState([]);

  // useEffect(() => {
  //   const getAllPlats = async () => {
  //     try {
  //       const responsePlats = await fetch('http://localhost:3000/plats');
  //       if (!responsePlats.ok) {
  //         return 'errors';
  //       }

  //       const dataPlats = await responsePlats.json();
  //       setPlats(dataPlats);
  //       console.log(dataPlats);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getAllPlats();
  // }, []);

  // useEffect(() => {
  //   if (plats.length >= 3) {
  //     const selectedTroisPlats = plats.slice(0, 3);
  //     setTroisPlats(selectedTroisPlats);
  //   }
  // }, [plats]);