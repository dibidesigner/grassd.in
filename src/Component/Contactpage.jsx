import React from "react";
import Navbar from "./Navabar";
import Navbarspace from "./Navbarspace";
import Search from "./Search";
import ".//static/contact.css";
import Footer from "./Footer";
import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { useEffect } from "react";

function Contactpage(){
    useEffect(()=>{
        document.title="Grassd | Contact Us ";
    },[])
    return(
       <>
          <Navbar/>
          <Navbarspace />
          <Search />
          <Navbarspace />
          <div className="conmainimage">
            <div className="conpart1">
                <div className="contactdetails">
                    <div className="details">
                        <label>Contact Us</label>
                        <p className="textblack">Need to get in touch with ? Either fill out form with your<br />
inquirty or find the email youd like to contact below.</p>
                    </div>
                    <div className="contactwithicon">
                        <div className="mobileno">
                            <div className="no">
                                <MdCall />
                                <h3 className="textblack">+91 9348053242</h3>
                            </div>
                            <div className="mailid">
                                <IoMail />
                                <h3 className="textblack">dibihembram4@gmail.com</h3>
                            </div>
                        </div>
                        <div className="conlocation">
                                <MdLocationPin />
                                <h3 className="textblack">Patrapada, Bhubaneswar</h3>
                        </div>
                    </div>
                </div>
                <div className="enquiryform">
                    <form className="formfield">
                       
                            <input type="text" placeholder="Full Name"  />
                            <br />
                            <input type="text" placeholder="Mobile No" />
                            <br />
                            <input type="text" placeholder="Email id" />
                            <br />
                            <textarea placeholder="What can i help you...." className="textarea" />
                            <input type="submit" value="Enquiry"  className="enquiryboton"/>
                    </form>
                </div>
            </div>
            <hr />
          <div className="conpart2" >
                <p className="textblack">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham</p>
            </div>
          </div>
          <Footer />

       </>
    );
}
export default Contactpage;
