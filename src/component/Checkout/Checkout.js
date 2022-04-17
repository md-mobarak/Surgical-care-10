import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate()
    return (
        <div className='container'>
            <h1 className='text-center'>PUBLIC WARNING</h1>
            <p style={{ textAlign: "justify" }}>
                It has been brought to our notice that some people have received emails purporting to offer money for kidney donation and misusing the name of Apollo Hospitals.

                The public in general and kidney patients in particular are hereby cautioned that these are fake phishing emails and that these mails are neither sent by Apollo Hospitals nor is Apollo Hospitals involved in any such scheme. These fraudulent and suspicious emails are only a scheme to extract payments from gullible individuals by misleading them using the names of reputed hospitals.

                The Apollo Hospitals transplant program is carried out in accordance with the Transplantation of Human Organs Act 1994 with amendments thereafter, and the Transplantation of Human Organs and Tissues Rules 2014. Any buying and selling of human organs are illegal and punishable under the law.

                The general public is hereby warned to report such emails to the concerned authorities and not to deal/engage in any manner with any person/agency offering any benefits in cash or kind for kidney donation. Apollo Hospitals does not solicit donation of human organs from the general public through social media or through phone calls. Apollo Hospitals is taking appropriate legal action in this matter.
            </p>
            <button onClick={() => navigate(-1)} className='btn text-white ' style={{ backgroundColor: "#263082" }}>Back</button>
        </div>
    );
};

export default Checkout;