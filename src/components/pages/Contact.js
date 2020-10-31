import React from "react";

function Contact() {
    return (
        <>
            <div className="container" id="greeting">
                <div className="title has-text-centered">Contact me to make your site <span
                    style={{fontSize: "80px", display : "inline-block"}} id="better">better</span>
                    <div className="is-size-4 has-text-weight-light">href = " (470)-776-1603 or ethanlam93@gmail.com "</div>
                </div>

            </div>
            <div className="container" id="formGroup">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input is-large" type="text" placeholder="your name" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input is-large" type="email" placeholder="yourname@gmail.com" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea is-large" rows="6" placeholder="Textarea"></textarea>
                    </div>
                </div>

                <div className="control">
                    <button className="button is-link" type="submit">Submit</button>
                </div>
            </div>
</>
    )
}

export default Contact