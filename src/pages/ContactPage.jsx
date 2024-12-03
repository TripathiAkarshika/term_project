import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    // <>
    //   <Navbar />
    //   <div className="container my-3 py-3">
    //     <h1 className="text-center">Contact Us</h1>
    //     <hr />
    //     <div class="row my-4 h-100">
    //       <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
    //         <form>
    //           <div class="form my-3">
    //             <label for="Name">Name</label>
    //             <input
    //               type="email"
    //               class="form-control"
    //               id="Name"
    //               placeholder="Enter your name"
    //             />
    //           </div>
    //           <div class="form my-3">
    //             <label for="Email">Email</label>
    //             <input
    //               type="email"
    //               class="form-control"
    //               id="Email"
    //               placeholder="name@example.com"
    //             />
    //           </div>
    //           <div class="form  my-3">
    //             <label for="Password">Message</label>
    //             <textarea
    //               rows={5}
    //               class="form-control"
    //               id="Password"
    //               placeholder="Enter your message"
    //             />
    //           </div>
    //           <div className="text-center">
    //             <button
    //               class="my-2 px-4 mx-auto btn btn-dark"
    //               type="submit"
    //               disabled
    //             >
    //               Send
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    //   <Footer />
    // </>
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto text-center">
            {/* Social Media Icons */}
            <div className="social-icons">
              <a
                href="https://www.facebook.com/YatrEcommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-3"
              >
                <img
                  src="https://i.pinimg.com/736x/42/75/49/427549f6f22470ff93ca714479d180c2.jpg"
                  alt="Facebook"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%", // Optional: to make it circular
                    objectFit: "cover", // To make sure the image covers the space
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/YatrEcommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-3"
              >
                <img
                  src="https://e7.pngegg.com/pngimages/672/312/png-clipart-instagram-logo-icon-others-text-photography.png"
                  alt="Instagram"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%", // Optional: to make it circular
                    objectFit: "cover", // To make sure the image covers the space
                  }}
                />
              </a>
            </div>

            {/* Contact Number */}
            <div className="my-3">
              <p>Phone: +1 762 250 6335</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
