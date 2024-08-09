import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="text-white">
      <h1 className="font-bold text-[1.3rem] pb-4"> Contacts</h1>
      <div className="footer-item flex flex-col gap-2">
        <p>22 St. Black Road Raleigh</p>
        <Link className="text-primary">support@agrilogistic.com</Link>
        <p> Mon-Sun, 24/7</p>
        <Link className="hover:text-primary transition-all duration-300 ease-in-out">
          (123) 456-7890
        </Link>
      </div>
    </div>
  );
}

export default Contact;
