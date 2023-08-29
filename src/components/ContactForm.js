import classes from "./ContactForm.module.css";

function ContactForm(){
  function handleSubmit(){
    alert('Sent a message')
  }
return (
  <div className={classes.card}>
    <div className={classes.form}>
      <form>
        <div className={classes.control}><input type = 'name' placeholder="Name"></input></div>
        <div className={classes.control}><input type = 'email' placeholder="Email"></input></div>
        <div className={classes.control}><textarea required rows='5' type = 'message' placeholder="Message"></textarea></div>
        <div className={classes.actions}><button onClick={handleSubmit} type = 'submit'>Submit</button></div>
      </form>
      </div>
      </div>
);
}
export default ContactForm;