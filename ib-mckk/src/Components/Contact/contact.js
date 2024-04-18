import "./contact.css";

export const Contact = () =>{
    return (
        <div className='contact_box'>
            <div className="address">
                <h3>Contact Us:</h3>
                <p>The Malay College Kuala Kangsar,</p>
                <p>Jalan Tun Abdul Razak,</p>
                <p>33000 Kuala Kangsar, Perak,</p>
                <p>Malaysia.</p>
            </div>           
            <div className="email">
                <a href="mailto:ibc@mckk.edu.my">ibc@mckk.edu.my</a>
            </div> 
            <div className="socmed">
                <h3>Follow us at:</h3>
                <a href="https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2Fibdpmckk%2F">Facebook</a>

            </div>
        </div>
    )
}