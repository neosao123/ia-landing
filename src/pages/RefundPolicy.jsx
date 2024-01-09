import React, { useEffect } from "react";
import NavMenu from "../components/_main/NavMenu";
import "../assets/styles/privacy.css";
import Footer from "../components/Footer";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Privacy = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
    return (
        <>
            <NavMenu />
            <div className="main-container bg-white">
                <div className="container-fluid bg-theme-color">
                    <div className="container section-title py-5">
                        <p className="text-white">Refund Policy</p>
                    </div>
                </div>
                <div className="container tcBlock" style={{ marginTop: "5rem", marginBottom:"5rem" }}>
                    <h4>Refunds</h4>
                    <p className="font18">
                        IndiansAbroad Premium subscriptions are final and no refund will be issued. If you cancel your subscription plan, all your Premium features will expire.
                    </p>
                </div>
                <div className="container tcBlock" style={{ marginTop: "5rem", marginBottom:"5rem" }}>
                    <h4>Questions</h4>
                    <p className="font18">
                        If you have any questions concerning our return policy, please contact us at:
                        <br />
                        Email: <Link to="mailto:support@indiansabroad.online" className="maillink">support@indiansabroad.online</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Privacy;
