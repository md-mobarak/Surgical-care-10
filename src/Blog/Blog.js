import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>Difference  of Authorization And Authentication</h1>
            <p className='blog-info'>Together, authentication and authorization do a great job of verifying a user's identity and restricting access. However, the cloud and multi-cloud present some challenges. <br />
                Authentication is the act of identifying a user and making sure they are who they say they are. It's how most modern networks and platforms grant access to protected parts of their systems. Anyone who's encountered a login page on a website or computer system has seen authentication in action.
                In that scenario, a username is how we tell a platform who we claim to be. And when we enter a password, it’s how we prove to the platform that we are, in fact, that user <br />
                Authorization, by contrast, is how modern networks and platforms grant a given user the right to perform specific actions once they’ve authenticated. For example, after logging into an email provider, we don’t see the mail of every user on that system. We see only our own messages. And we’re prevented from sending messages on behalf of other users on the system. That’s authorization at work.
            </p><br /><br />
            <h1 className='text-center'>Why are you using firebase?</h1>
            <p className='blog-info'>Firebase authentication is a tool to rapidly and securely authenticate users.It offers a very clear flow for the authentication and login method and is easy to use.Time, cost, security, and stability are advantages of using authentication as a service instead of constructing it yourself. Firebase Authentication has already done the legwork for you in terms of safe account storage, email/phone authentication flows, and so on.
                Firebase Authentication has many integrations with Developed products like Cloud Fire store, Realtime Database, and Cloud Storage. Declarative security rules are used to protect these products, and Firebase Authentication is used to introduce granular per-user security.</p>
            <br /><br />
            <h1 className='text-center'>What other options do you have to implement authentication?</h1>
            <div>
                <ul>
                    <li>1- Parse .. Open Source Backend Platform;</li>
                    <li>2-Back4app .. Parse Hosting Platform;</li>
                    <li>3-Kinvey .. Mobile Backend as a Service (mBaaS) for the Enterprise</li>
                    <li>4-Backend less .. Mobile Backend and API Services Platform;</li>
                    <li>5-Kuzzle .. Backend for web, hybrid, or native mobile apps and IoT projects</li>
                    <li>6-Pubnub .. Real-time APIs and Global Messaging</li>
                    <li>7-Kumulos .. App Performance Management</li>
                    <li>8- Game Sparks..Game Backend Platform</li>
                    <li>9- Hoodie .. Generic backend with a client API for Offline First applications</li>
                    <li>10- Appwrite .. Open-Source backend for Flutter developers</li>
                </ul>
            </div>
            <br /><br />
            <h1>What other services does firebase provide other than authentication</h1>
            <h4>There are many services which Firebase provides without authentication</h4>
            <ul>
                <li>Cloud Firestore </li>
                <li>Cloud Functions</li>

                <li> Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li> Predictions</li>
                <li>Cloud Messaging </li>
                <li>Dynamic Links</li>
                <li>Remote Config</li>
            </ul>

        </div>
    );
};

export default Blog;