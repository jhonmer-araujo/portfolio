import React from 'react';

const contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form action="https://formsubmit.co/jhonmer.araujo@gmail.com" method="POST" >
                <input type="hidden" name="_next" value="https://jhonmer-araujo.github.io/portfolio/thanks.html" />
                <label forHtml="name">Name / Company</label>
                <input type="text" id="name" name="name" placeholder="" />
                <label forHtml="email">Email</label>
                <input type="text" id="email" name="email" placeholder="" />
                <label forHtml="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Let's chat..." style={{height:200}}></textarea>
                <input type="submit" value="Submit" />
            </form>
        </section>
    )
}

export default contact
