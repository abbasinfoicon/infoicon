'use client'
import React from 'react'

const ModalRequest = ({ }) => {
    const handleClose = () => {
        document.querySelector('.quotePopup').classList.remove('show');
        const modalBackdrop = document.querySelector('.modal-backdrop');
        if (modalBackdrop) {
            modalBackdrop.parentNode.removeChild(modalBackdrop);
        }
        document.body.classList.remove('modal-open');
    };

    return (
        <div className="modal fade quotePopup" id="quoteModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="quoteModalLabel">Request Free Quote</h5>
                        <button type="button" className="close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form action="/contactus" method="post">
                            <div className="contactFormNew">
                                <div className="formField">
                                    <label>Name<span className="redClr">*</span></label>
                                    <input required type="text" name="name" id="name" className="contactInput" />
                                </div>
                                <div className="formField">
                                    <label>Email<span className="redClr">*</span></label>
                                    <input required type="text" name="email" id="email" className="contactInput" />
                                </div>
                                <div className="formField">
                                    <label>Phone</label>
                                    <input required type="text" name="phone" id="contact" className="contactInput" />
                                </div>
                                <div className="formField">
                                    <label>Message<span className="redClr">*</span></label>
                                    <textarea required rows="10" cols="2" name="message" id="info"
                                        className="contactInput"></textarea>
                                </div>
                                <div className="formField">
                                    <div className="g-recaptcha" data-sitekey="6LeI9fscAAAAAMXOvblpT1v43W1e-yRwCISb0vVO"></div>
                                    <div className="contactBtn">
                                        <input type="submit" className="formBtn smll" value="Request Quote" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRequest