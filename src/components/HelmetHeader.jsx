import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTag = () => {
    return (
        <Helmet>
            <meta charSet="utf-8" />            
            <link rel="apple-touch-icon" sizes="57x57" href="/images/logo/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/images/logo/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/images/logo/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/images/logo/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/images/logo/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/images/logo/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/images/logo/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/images/logo/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/images/logo/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/images/logo/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/logo/favicon-16x16.png" />
            <title>Connect with Indians Abroad</title>
            <meta name="description" content="Stay connected with Indians living abroad through our Android and iOS application. Enhance user experience with intuitive interface, performance testing, and push notification integration." />
            <meta name="keywords" content="Indians abroad, connect with Indians, Android app, iOS app, user interface design, performance testing, push notification integration" />
            <meta property="og:title" content="Connect with Indians Abroad - Stay Connected with our App" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Stay connected with Indians living abroad through our Android and iOS application. Enhance user experience with intuitive interface, performance testing, and push notification integration." />
            <meta property="og:image" content="/images/logo/apple-icon-72x72.png" />
        </Helmet>
    )
}

export default MetaTag