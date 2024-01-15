import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {

  const { isAuthenticated, user } = useAuth0();

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13716.886920656967!2d76.77234782398922!3d30.74027263608904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0a5368ec41%3A0x3ec290bb40ea49d4!2sSector%2017%20Market!5e0!3m2!1sen!2sin!4v1702425899117!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mjvqndoj" method="POST" className="contact-inputs">
            <input
              type="text"
              name="username"
              value={isAuthenticated ? user.name : ""}
              placeholder="Enter your Username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="email"
              value={isAuthenticated ? user.email : ""}
              placeholder="Enter your Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="10"
              autoComplete="off"
              placeholder="Enter your Message"
              required
            />

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: #F2EAFA;
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
