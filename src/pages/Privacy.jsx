import React, { useEffect } from "react";
import NavMenu from "../components/_main/NavMenu";
import "../assets/styles/privacy.css";
import Footer from "../components/Footer";
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
            <p className="text-white">Privary Policy</p>
          </div>
        </div>
        <div className="container tcBlock">
          <p className="font18">
            Thank you for visiting EXPONATE ONLINE SERVICES PVT LTD.
            <br />
            EXPONATE ONLINE SERVICES PVT LTD takes the security of your privacy
            and personal information extremely seriously and with great concern.
            <br />
            One can trust EXPONATE ONLINE SERVICES PVT LTD. The highest
            standards for the protection of your privacy and personal
            information are upheld by EXPONATE ONLINE SERVICES PVT LTD. You can
            better understand how EXPONATE ONLINE SERVICES PVT LTD gathers and
            manages your personal data and information by reading this privacy
            statement. <br />
            To gain and maintain your trust, EXPONATE ONLINE SERVICES PVT LTD
            works arduously. As a result, EXPONATE ONLINE SERVICES PVT LTD only
            utilizes your personal data to provide you with the services offered
            by EXPONATE ONLINE SERVICES PVT LTD. Personal data will never be
            rented, sold, or otherwise made available to a third party for
            advertising purposes by EXPONATE ONLINE SERVICES PVT LTD. <br /> For
            any queries you can contact us:
            <br />
            EXPONATE ONLINE SERVICES PVT LTD <br />
            Email: support@indiansabroad.online
          </p>
        </div>
        <div className="container tcBlock">
          <p className="font18">
            Personal Information Provided by You. The personal information that
            we collect depends on the context of your interactions with us and
            the Services, the choices you make, and the products and features
            you use. The personal information we collect may include the
            following:
          </p>
          <div className="container">
            <ul style={{ listStyleType: "disc" }}>
              <li className="font18">names</li>
              <li className="font18">phone numbers</li>
              <li className="font18">email addresses</li>
              <li className="font18">mailing addresses</li>
              <li className="font18">job titles</li>
              <li className="font18">usernames</li>
              <li className="font18">passwords</li>
              <li className="font18">contact preferences</li>
              <li className="font18">contact or authentication data</li>
              <li className="font18">debit/credit card numbers</li>
              <li className="font18">city</li>
              <li className="font18">country in which user is living now</li>
              <li className="font18">university name</li>
              <li className="font18">photo</li>
              <li className="font18">Payment Data</li>
            </ul>
          </div>
        </div>
        <div className="container tcBlock">
          <p className="font18">
            We may collect data necessary to process your payment if you make
            purchases, such as your payment instrument number, and the security
            code associated with your payment instrument. All payment data is
            stored by You may find their privacy notice link(s) here:
            <br />
            Social Media Login Data. We may provide you with the option to
            register with us using your existing social media account details,
            like your Facebook, Twitter, or other social media account. If you
            choose to register in this way, we will collect the information
            described in the following section:
          </p>
        </div>
        {/* 1. HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below. */}
        <div className="container tcBlock">
          <p className="font18 extraBold">
            1. HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.
          </p>
          <div className="container">
            <ul className="subTcBlock" style={{ listStyleType: "disc" }}>
              <li className="font18">
                Application Data. If you use our application(s), we also may
                collect the following information if you choose to provide us
                with access or permission:
              </li>
              <li className="font18">
                Geolocation Information. We may request access or permission to
                track location-based information from your mobile device, either
                continuously or while you are using our mobile application(s),
                to provide certain location-based services. If you wish to
                change our access or permissions, you may do so in your device's
                settings.
              </li>
              <li className="font18">
                Mobile Device Access. We may request access or permission to
                certain features from your mobile device, including your mobile
                device's camera, contacts, microphone, SMS messages, storage,
                and other features. If you wish to change our access or
                permissions, you may do so in your device's settings.
              </li>
              <li className="font18">
                Push Notifications. We may request to send you push
                notifications regarding your account or certain features of the
                application(s). If you wish to opt out from receiving these
                types of communications, you may turn them off in your device's
                settings.
                <br />
                This information is primarily needed to maintain the security
                and operation of our application(s), for troubleshooting, and
                for our internal analytics and reporting purposes. All personal
                information that you provide to us must be true, complete, and
                accurate, and you must notify us of any changes to such personal
                information.
              </li>
            </ul>
          </div>
        </div>
        {/* 2. HOW DO WE PROCESS YOUR INFORMATION? */}
        <div className="container tcBlock">
          <p className="font18 extraBold">
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </p>
          <p className="font18 subTcBlock">
            In Short: We process your information to provide, improve, and
            administer our Services, communicate with you, for security and
            fraud prevention, and to comply with law. We may also process your
            information for other purposes with your consent.
            <br />
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </p>
          <div className="container">
            <ul className="subTcBlock" style={{ listStyleType: "disc" }}>
              <li className="font18">
                To facilitate account creation and authentication and otherwise
                manage user accounts. We may process your information so you can
                create and log in to your account, as well as keep your account
                in working order.
              </li>
              <li className="font18">
                To deliver and facilitate delivery of services to the user. We
                may process your information to provide you with the requested
                service.
              </li>
              <li className="font18">
                To respond to user inquiries/offer support to users. We may
                process our information to respond to your inquiries and solve
                any potential issues you might have with the requested service.
              </li>
              <li className="font18">
                To enable user-to-user communications. We may process your
                information if you choose to use any of our offerings that allow
                for communication with another user.
              </li>
              <li className="font18">
                To request feedback. We may process your information when
                necessary to request feedback and to contact you about your use
                of our Services.
              </li>
              <li className="font18">
                To protect our Services. We may process your information as part
                of our efforts to keep our Services safe and secure, including
                fraud monitoring and prevention.
              </li>
              <li className="font18">
                To identify usage trends. We may process information about how
                you use our Services to better understand how they are being
                used so we can improve them.
              </li>
              <li className="font18">
                To save or protect an individual's vital interest. We may
                process your information when necessary to save or protect an
                individual's vital interest, such as to prevent harm.
              </li>
            </ul>
          </div>
        </div>
        {/* 3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION? */}
        <div className="container tcBlock">
          <p className="font18 extraBold">
            3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
          </p>
          <p className="font18 subTcBlock">
            In Short: We only process your personal information when we believe
            it is necessary and we have a valid legal reason (i.e. legal basis)
            to do so under applicable law, like with your consent, to comply
            with laws, to provide you with services to enter into or fulfil our
            contractual obligations, to protect your rights, or to fulfil our
            legitimate business interests.
            <br />
            We may rely on the following legal bases to process your personal
            information:
          </p>
          <div className="container">
            <ul className="subTcBlock" style={{ listStyleType: "disc" }}>
              <li className="font18">
                Consent. We may process your information if you have given us
                permission (i.e. consent) to use your personal information for a
                specific purpose. You can withdraw your consent at any time.
                Learn more about withdrawing your consent.
              </li>
              <li className="font18">
                Performance of a Contract. We may process your personal
                information when we believe it is necessary to fulfil our
                contractual obligations to you, including providing our Services
                or at your request prior to entering into a contract with you.
              </li>
              <li className="font18">
                Legitimate Interests. We may process your information when we
                believe it is reasonably necessary to achieve our legitimate
                business interests and those interests do not outweigh your
                interests and fundamental rights and freedoms. For example, we
                may process your personal information for some of the purposes
                described in order to:
              </li>
              <li className="font18">
                Analyze how our Services are used so we can improve them to
                engage and retain users
              </li>
              <li className="font18">
                Diagnose problems and/or prevent fraudulent activities
              </li>
              <li className="font18">
                Understand how our users use our products and services so we can
                improve user experience
              </li>
              <li className="font18">
                Legal Obligations. We may process your information where we
                believe it is necessary for compliance with our legal
                obligations, such as to cooperate with a law enforcement body or
                regulatory agency, exercise or defend our legal rights, or
                disclose your information as evidence in litigation in which we
                are involved.
              </li>
              <li className="font18">
                Vital Interests. We may process your information where we
                believe it is necessary to protect your vital interests or the
                vital interests of a third party, such as situations involving
                potential threats to the safety of any person.
              </li>
            </ul>
          </div>
        </div>
        {/* 4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION? */}
        <div className="container tcBlock">
          <p className="font18 extraBold">
            4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </p>
          <p className="font18 subTcBlock">
            In Short: We may share information in specific situations described
            in this section and/or with the following third parties.
            <br />
            We may need to share your personal information in the following
            situations:
          </p>
          <div className="container">
            <ul className="subTcBlock" style={{ listStyleType: "disc" }}>
              <li className="font18">
                Business Transfers. We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of
                company assets, financing, or acquisition of all or a portion of
                our business to another company.
              </li>
              <li className="font18">
                When we use Google Maps Platform APIs. We may share your
                information with certain Google Maps Platform APIs (e.g. Google
                Maps API, Places API). We obtain and store on your device
                ('cache') your location. You may revoke your consent anytime by
                contacting us at the contact details provided at the end of this
                document.
              </li>
              <li className="font18">
                Business Partners. We may share your information with our
                business partners to offer you certain products, services, or
                promotions.
              </li>
              <li className="font18">
                Other Users. When you share personal information (for example,
                by posting comments. contributions, or other content to the
                Services) or otherwise interact with public areas of the
                Services, such personal information may be viewed by all users
                and may be publicly made available outside the Services in
                perpetuity. If you interact with other users of our Services and
                register for our Services through a social network (such as
                Facebook), your contacts on the social network will see your
                name, profile photo, and descriptions of your activity.
                Similarly, other users will be able to view descriptions of your
                activity, communicate with you within our Services, and view
                your profile.
              </li>
            </ul>
          </div>
        </div>
        {/* 5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES? */}
        <div className="container tcBlock">
          <p className="font18 extraBold">
            5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
          </p>
          <p className="font18 subTcBlock">
            In Short: We are not responsible for the safety of any information
            that you share with third parties that we may link to or who
            advertise on our Services, but are not affiliated with, our
            Services.
          </p>
          <p className="font18">
            The Services may link to third-party websites, online services, or
            mobile applications and/or contain advertisements from third parties
            that are not affiliated with us and which may link to other
            websites, services, or applications. Accordingly, we do not make any
            guarantee regarding any such third parties, and we will not be
            liable for any loss or damage caused by the use of such third-party
            websites, services, or applications. The inclusion of a link to a
            third-party website, service, or application does not imply an
            endorsement by us. We cannot guarantee the safety and privacy of
            data you provide to any third parties. Any data collected by third
            parties is not covered by this privacy notice. We are not
            responsible for the content or privacy and security practices and
            policies of any third parties, including other websites, services,
            or applications that may be linked to or from the Services. You
            should review the policies of such third parties and contact them
            directly to respond to your questions.
          </p>
        </div>
        {/* 6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES? */}
        <div className="container tcBlock">
          <p className="font18 extraBold">
            6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </p>
          <p className="font18 subTcBlock">
            In Short: We may use cookies and other tracking technologies to
            collect and store your information. We may use cookies and similar
            tracking technologies (like web beacons and pixels) to access or
            store information. Specific information about how we use such
            technologies and how you can refuse certain cookies is set out in
            our Cookie Notice.
          </p>
        </div>
        {/* 7. HOW DO WE HANDLE YOUR SOCIAL LOGINS? */}
        <div className="container tcBlock">
          <p className="font18 extraBold">
            7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </p>
          <p className="font18 subTcBlock">
            In Short: If you choose to register or log in to our Services using
            a social media account, we may have access to certain information
            about you.
            <br />
            Our Services offer you the ability to register and log in using your
            third-party social media account details (like your Facebook or
            Twitter logins). Where you choose to do this, we will receive
            certain profile information about you from your social media
            provider. The profile information we receive may vary depending on
            the social media provider concerned, but will often include your
            name, email address, friends list, and profile picture, as well as
            other information you choose to make public on such a social media
            platform.
          </p>
          <p className="font18 subTcBlock">
            We will use the information we receive only for the purposes that
            are described in this privacy notice or that are otherwise made
            clear to you on the relevant Services. Please note that we do not
            control, and are not responsible for, other uses of your personal
            Information by your third-party social media provider. We recommend
            that you review their privacy notice to understand how they collect,
            use, and share your personal information, and how you can set your
            privacy preferences on their sites and apps
          </p>
        </div>
        {/* 8. HOW LONG DO WE KEEP YOUR INFORMATION? */}
        <div className="container tcBlock">
          <p className="font18 extraBold">
            8. HOW LONG DO WE KEEP YOUR INFORMATION?
          </p>
          <p className="font18 subTcBlock">
            In Short: We keep your information for as long as necessary to
            fulfil the purposes outlined in this privacy notice unless otherwise
            required by law.
            <br />
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than the period of time in which users have an account with us.
            <br />
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymise such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>
        </div>
        {/* 9. WHAT ARE YOUR PRIVACY RIGHTS? */}
        <div className="container tcBlock">
          <p className="font18 extraBold">9. WHAT ARE YOUR PRIVACY RIGHTS?</p>
          <p className="font18 subTcBlock">Account Information</p>
          <p className="font18 subTcBlock">
            If you would at any time like to review or change the information in
            your account or terminate your account, you can: Log in to your
            account settings and update your user account.
            <br />
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms and/or comply with applicable legal
            requirements.
          </p>
        </div>
        {/* 10. CONTROLS FOR DO-NOT-TRACK FEATURES */}
        <div className="container tcBlock">
          <p className="font18 extraBold">
            10. CONTROLS FOR DO-NOT-TRACK FEATURES
          </p>
          <p className="font18 subTcBlock">
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track ('DNT") feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy notice.
          </p>
        </div>
        {/* 11. DO WE MAKE UPDATES TO THIS NOTICE? */}
        <div className="container tcBlock">
          <p className="font18 extraBold">
            11. DO WE MAKE UPDATES TO THIS NOTICE?
          </p>
          <p className="font18 subTcBlock">
            In Short: Yes, we will update this notice as necessary to stay
            compliant with relevant laws.
            <br />
            We may update this privacy notice from time to time. The updated
            version will be indicated by an updated Revised' date and the
            updated version will be effective as soon as it is accessible. If we
            make material changes to this privacy notice, we may notify you
            either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this
            privacy notice frequently to be informed of how we are protecting
            your information.
          </p>
        </div>
        {/* 12. CHANGES */}
        <div className="container tcBlock">
          <p className="font18 extraBold">12. CHANGES</p>
          <p className="font18 subTcBlock">
            This Privacy policy needs to be modified on occasion to reflect the
            current situational and legal requirements. Before using our site,
            please review the Privacy Policy to ensure you are aware of any
            revisions or changes.
          </p>
        </div>
        {/* 13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? */}
        <div className="container tcBlock">
          <p className="font18 extraBold">
            13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </p>
          <p className="font18 subTcBlock">
            If you have questions or comments about this notice, you may email
            us at <Link to="mailto:support@indiansabroad.online" className="maillink">support@indiansabroad.online</Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
