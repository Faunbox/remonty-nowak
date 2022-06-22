import { motion, AnimatePresence } from "framer-motion";
import { opacityAnimation } from "../Framer-motion/framer";

export const Contact = (props) => {
  return (
    <div>
      <AnimatePresence>
        <div id="kontakt">
          <motion.div
            className="container"
            variants={opacityAnimation}
            initial={opacityAnimation.initial}
            whileInView={opacityAnimation.whileInView}
            transition={opacityAnimation.transition}
          >
            <div className="col-md-8">
              <div className="row">
                <motion.div className="section-title">
                  <h2>Kontakt</h2>
                  <p>Masz pytanie? Zapraszamy do kontaktu!</p>
                </motion.div>
                <motion.form
                  name="sentMessage"
                  validate="true"
                  method="POST"
                  action="https://formsubmit.io/send/4630d2fb-28d2-4aa8-bc8a-a9162a10dc92"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Imie lub nazwa firmy"
                          required
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Wiadomość"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <input
                    name="_formsubmit_id"
                    type="text"
                    style={{ display: "none" }}
                  />
                  <input
                    name="_redirect"
                    type="hidden"
                    id="name"
                    value="https://remonty-nowak.pl"
                  />

                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Wyslij wiadomość
                  </button>
                </motion.form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Informacje kontaktowe</h3>
                <div className="contact-item">
                  <div>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z" />
                      </svg>{" "}
                      <b>Dane firmy:</b>
                    </span>{" "}
                    {props.data ? <p>{props.data.name}</p> : "loading"}
                    {props.data ? <p>{props.data.companyNIP}</p> : "loading"}
                    {props.data ? <p>{props.data.comapnyREGON}</p> : "loading"}
                  </div>
                </div>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> <b>Adres: </b>
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> <b>Telefon:</b>
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> <b>Email:</b>
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <p>Zapraszamy na naszego Facebooka!</p>
                  <ul>
                    <li>
                      <a
                        target="blank"
                        rel="noreferrer"
                        href={props.data ? props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a href={props.data ? props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};
