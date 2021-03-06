import React from 'react';

class ContactUs extends React.Component {
    render() {
        return (
            <div className="modal fade" id="contactUs" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="contactUsLabel">Message Us</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Your Email address (so we can contact you):</label>
                                    <input type="text" className="form-control" id="sender-name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Your Phone Number (so we can contact you):</label>
                                    <input type="text" className="form-control" id="sender-number"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}
}

export default ContactUs;
