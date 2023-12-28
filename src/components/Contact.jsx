import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const apiUrl = "https://express.indiansabroad.online/api/email/sendemail";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .matches(
        /^[A-Za-z\s]+$/,
        "Name should only contain alphabetic characters and spaces"
      )
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot be longer than 50 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string()
      .required("Please enter your message")
      .min(20, "Your mesage shoud be 20 chracters long"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading((prev) => true);
      const payload = {
        name: values.name,
        email: values.email,
        message: values.message,
      };
      await axios
        .post(apiUrl, payload)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            const resData = res.data;
            setLoading((prev) => false);
            if (resData.status === 200) {
              toast.success(resData.msg);
            } else {
              toast.error(resData.msg);
            }
          } else {
            setLoading((prev) => false);
            toast.error(
              "Failed to send your message! Please try again later..."
            );
          }
          resetForm();
        })
        .catch((err) => {
          setLoading((prev) => false);
          resetForm();
          toast.error("Failed to send your message! Please try again later...");
        });
    },
  });

  return (
    <div className="section-container bg-theme-color" id="contact">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <Container>
          <Row>
            <Col md={6} className="mb-5 mb-lg-0">
              <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
                <Stack>
                  <div className="section-title">
                    <h2 className="text-white">Contact</h2>
                    <p className="text-white">Let's get in touch</p>
                  </div>
                  <div className="mb-3">
                    "Your feedback and questions are important to us!"
                  </div>
                  <div className="mb-3">
                    If you have any inquiries, suggestions, or just want to say
                    hello, don't hesitate to reach out. Simply click on the
                    'Contact Us' tab in the menu, where you can fill out a quick
                    form with your details and message. Alternatively, you can
                    send us an email directly at support@indiansabroad.online.
                  </div>
                  <div className="mb-3">
                    We're here to assist you and look forward to hearing from
                    you!!!
                  </div>
                </Stack>
              </AnimationOnScroll>
            </Col>
            <Col md={6} className="mb-5 mb-lg-0">
              <Stack>
                <form
                  id="sendJobform"
                  onSubmit={formik.handleSubmit}
                  enctype="multipart/form-data"
                >
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className={`form-control custom-input ${formik.touched.name && formik.errors.name
                          ? "is-invalid"
                          : ""
                        }`}
                      id="name"
                      name="name"
                      placeholder="Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="invalid-feedback">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className={`form-control custom-input ${formik.touched.email && formik.errors.email
                          ? "is-invalid"
                          : ""
                        }`}
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="invalid-feedback">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <textarea
                      id="message"
                      name="message"
                      className={`form-control custom-input ${formik.touched.message && formik.errors.message
                          ? "is-invalid"
                          : ""
                        }`}
                      rows="5"
                      placeholder="Write your message below"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                    ></textarea>
                    {formik.touched.message && formik.errors.message && (
                      <div className="invalid-feedback">
                        {formik.errors.message}
                      </div>
                    )}
                  </div>
                  <div>
                    <Row>
                      <Col sm={8} md={8}>
                        This site is protected by reCAPTCHA and the Google
                        Privacy Policy and Terms of Service apply.
                      </Col>
                      <Col sm={4} md={4} className="text-end">
                        <button
                          type="submit"
                          class="theme-button"
                          disabled={loading}
                        >
                          {loading ? "Sending..." : "Send"}
                        </button>
                      </Col>
                    </Row>
                  </div>
                </form>
              </Stack>
            </Col>
          </Row>
        </Container>
      </AnimationOnScroll>
    </div>
  );
};

export default Contact;
