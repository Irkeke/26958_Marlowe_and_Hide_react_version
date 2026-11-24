import Icon from '../components/Icon';
import { useContactForm } from '../../controllers/useContactForm';

export default function Contact() {
  const { sent, handleSubmit } = useContactForm();

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="hero-eyebrow">Get in touch</div>
          <h1>Visit, call, or write to the workshop</h1>
          <p className="lede">For wholesale inquiries, custom commissions, or questions about an existing order, reach the front office directly — or send a note through the form below.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="info-card">
                <div className="info-row"><Icon name="pin" className="ic" /><div><h4>Workshop address</h4><p>Workshop No. 4, Enterprise Road<br />Nairobi Industrial Area, Kenya</p></div></div>
                <div className="info-row"><Icon name="phone" className="ic" /><div><h4>Telephone</h4><p>+254 700 442 981</p></div></div>
                <div className="info-row"><Icon name="mail" className="ic" /><div><h4>Email</h4><p>orders@marlowehide.example</p></div></div>
                <div className="info-row"><Icon name="clock" className="ic" /><div><h4>Workshop hours</h4><p>Mon–Fri, 8:00–17:00<br />Sat, 9:00–13:00 (collection only)</p></div></div>
              </div>
              <div className="map-note">Map embed omitted in this build — the live portal would place a location map here once connected to a mapping service.</div>
            </div>

            <div className="form-card">
              <h2 style={{ marginBottom: '1.4rem' }}>Send a message</h2>
              {sent && <div className="form-success show">Thank you — your message has been noted. This is a frontend demo, so no message was actually sent, but this is exactly how the confirmation will read once the portal is connected to a backend.</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-two">
                  <div className="form-row"><label htmlFor="fname">First name <span className="req">*</span></label><input type="text" id="fname" required /></div>
                  <div className="form-row"><label htmlFor="lname">Last name <span className="req">*</span></label><input type="text" id="lname" required /></div>
                </div>
                <div className="form-two">
                  <div className="form-row"><label htmlFor="email">Email address <span className="req">*</span></label><input type="email" id="email" required /></div>
                  <div className="form-row"><label htmlFor="phone">Telephone</label><input type="tel" id="phone" /></div>
                </div>
                <div className="form-row">
                  <label htmlFor="reason">Reason for contact <span className="req">*</span></label>
                  <select id="reason" required defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option value="wholesale">Wholesale inquiry</option>
                    <option value="custom">Custom commission</option>
                    <option value="order">Existing order</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="form-row"><label htmlFor="message">Message <span className="req">*</span></label><textarea id="message" rows="5" required></textarea></div>
                <button type="submit" className="btn btn-primary">Send message</button>
                <p className="form-note">This form is a static frontend demo built for coursework — submitting it does not send a real message.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
