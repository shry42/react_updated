import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
        <div className='consultation-form-main-column'>
            <div className='consult-text-1'>
                FREE CONSULTATION
            </div>
            <div className='consult-text-2'>
                Get your FREE Scalp Micropigmentation consultation
            </div>
            <div className='consult-text-3'>
                Speak with a scalp micropigmentation expert today!
            </div>
            <ConsultationCard className={"consultation-card"}>
                <div className='form-row'>
                    <div className='form-wrap'>
                        <GreyTextField labelText={"First name*"}></GreyTextField>
                        <GreyTextField labelText={"Last name*"}></GreyTextField>
                        <GreyTextField labelText={"Email*"}></GreyTextField>
                        <GreyTextField labelText={"Phone number*"}></GreyTextField>
                        <GreyTextField labelText={"Gender*"}></GreyTextField>
                        <GreyTextField labelText={"Desired service*"}></GreyTextField>
                        <GreyTextFieldMessage labelText={"Message"}></GreyTextFieldMessage>
                        <button className='submit-button'>Submit</button>
                    </div>
                    <div className='consultation-types-row'>
                        <div className='consultation-types-column'>
                            <div className='consultation-types-title'>
                                Types of Consultations
                            </div>
                            <ConsultationBullet
                                number={"1"}
                                text={"In Person – get all your questions answered face to face by an expert scalp micropigmentation artist."}
                            ></ConsultationBullet>
                            <DottedLine></DottedLine>
                            <ConsultationBullet
                                number={"2"}
                                text={"Phone – speak with an expert micropigmentation over the phone"}
                            ></ConsultationBullet>
                            <DottedLine></DottedLine>
                            <ConsultationBullet
                                number={"3"}
                                text={"Facetime – Learn more about the scalp micropigmentation process with a Facetime chat"}
                            ></ConsultationBullet>
                            <DottedLine></DottedLine>
                            <ConsultationBullet
                                number={"4"}
                                text={"Receive a quote and treatment plan based on your specific hair loss goals"}
                            ></ConsultationBullet>
                        </div>
                    </div>
                </div>
            </ConsultationCard>
        </div>
    );
}

function ConsultationBullet({ number, text }) {
    return (
        <div className='consultation-bullet-row'>
            <div className='consultation-bullet-circle'>
                <div className='consultation-bullet-number'>{number}</div>
            </div>
            <div className='consultation-bullet-text'>
                {text}
            </div>
        </div>
    );
}

function DottedLine() {
    return (
        <div className='dotted-line-row'>
            <div className='dotted-line'></div>
        </div>
    );
}

function GreyTextField({ labelText, value, onChange }) {
    return (
        <div className='grey-text-field-column'>
            <div style={{ margin: '0px 0px 5px 0px', }}>
                {labelText}
            </div>
            <input
                className="grey-text-field"
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

function GreyTextFieldMessage({ labelText, value, onChange }) {
    return (
        <div className='grey-text-field-message-column'>
            <div style={{ margin: '0px 0px 5px 0px' }}>
                {labelText}
            </div>
            <input
                className='grey-text-field-message'
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

function ConsultationCard({ className, children }) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default ContactForm;
