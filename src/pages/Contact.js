import ContactForm from "../components/ContactForm";

function Contact(){
  return(
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',}}>
        <h1 style={{fontSize: "50px" }}>Contact</h1>
      </div>
      <ContactForm/>
    </div>
  );
}

export default Contact;