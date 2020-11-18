import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact">
            <section id="contactUs">
        <div className="contact-image">
            <div class="fixed-back">
                <span>CONTACT</span>   
            </div>
            <div className="contact-image-2">
                <span><span>HOME</span>  / CONTACT US</span>
            </div>
        </div>
        
    <div class="contact-container">
        
        <div class="form-container">
            <form class="form-1">
            <h3>Send Us Message</h3>
            <input type="text" placeholder="Your Name" /><br />
            <input type="email" placeholder="Your Email" /><br />
            <input type="text" placeholder="Your Phone" /><br />
            <textarea class="message-hide" placeholder="Your Message" rows="8"></textarea>
            <button type="button" class="contactus-btn">SUBMIT FORM</button>
            </form>
            <div class="message-container">
                <textarea class="message" placeholder="Your Message" rows="9" cols="45"></textarea>
            </div>
        <div class="contact-info">
            <h3>Contact Info</h3>
           <p> 385 "SHUBHAM" NEW ADARSH COLONY Near MR4 Road, I/F Gajannan Park Jabalpur - 482001 Madhya Pradesh, INDIA</p>
           <div class="contact-info-2">
            <span><span>Phone:</span> 1234567897</span><br />
            <span><span>Fax: </span> 1234567897 </span><br />
           <span><span>Email: </span> abc@example.com </span><br />
           <span><span>Web: </span> http://example.com</span> <br />
           <span><span>Open: </span> Monday-Friday 08:00-18:00</span>
        </div>
        </div>
        </div>
        <div class="contact-info-3">
            <h3>Contact Info</h3>
           <p> 385 "SHUBHAM" NEW ADARSH COLONY Near MR4
               <br />
             Road, I/F Gajannan Park Jabalpur - 482001 Madhya Pradesh, INDIA</p>
           <div class="contact-info-2">
            <span><span>Phone: </span>  1234567897</span><br />
            <span><span>Fax: </span> 1234567897 </span><br />
           <span><span>Email: </span> abc@example.com </span><br />
           <span><span>Web: </span> http://example.com</span> <br />
           <span><span>Open: </span> Monday-Friday 08:00-18:00</span>
        </div>
        </div>
        {/* <p>
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.7159682892734!2d77.31362241491696!3d28.36743558252319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc71f6e9f557%3A0xeb301eec9ff18517!2z4KSc4KWHLuCkuOClgC4g4KSs4KWL4KS4IOCkr-ClgeCkqOCkv-CkteCksOCljeCkuOCkv-Ckn-ClgCDgpJHgpKsg4KS44KS-4KSH4KSC4KS4IOCkkOCkguCkoSDgpJ_gpYjgpJXgpKjgpYvgpLLgpYvgpJzgpYAsIOCkteCkvuCkry4g4KSQ4KSuLiDgpLjgpYAuIOCkjy4!5e0!3m2!1shi!2sin!4v1599791355003!5m2!1shi!2sin" width="800" height="600" frameBorder="0" style="border:0;" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </p> */}
    </div>
</section>
        </div>
    )
}

export default Contact
