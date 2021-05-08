import React, { useState } from 'react'
import "./FAQ.css"
import Query from "./Query.js"
function Faq() {
    const [faqs, setfaqs] = useState([
        {
            question: 'Why seek The Startup Club?',
            answer: 'The Startups Club provides business assistance in many ways\: Financial assistance to set up or grow your business. We are capable to take a seat on your board of directors and play an active role in the day-to-day management of your business.Free mentorship in Business set-up, Development ,Network Support \: potential partners, suppliers, employees, etc.',
            open: true
        },
        {
            question: 'Is my idea confidential, safe & secure?',
            answer: 'Yes, We value everyone\'s idea and we keep your idea, data safe & secure',
            open: false
        },
        {
            question: 'Am\'I suitable to raise funds?',
            answer: 'If you\'re looking for funding and you\'re looking to make a ROI (Returns On The Investment) then you’re suitable. Our investors look at all stages of business and across all sectors from genuine start-ups to more established businesses. We look at all different types of projects including debt deals, franchises, real estate, equity, etc.',
            open: false
        },
        {
            question: 'Can Business plan be edited after launch?',
            answer: 'No, But Startegy plan can be change after the funding released.',
            open: false
        },
        {
            question: 'Is this location based Network?',
            answer: 'Absolutey not. StartUp from any origin can pitch in.',
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }


    return (
        <div className="fq">
            <h2 id="fqh">
                Frequently Asked Questions (FAQs)</h2>
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <Query faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
    );
}

export default Faq;