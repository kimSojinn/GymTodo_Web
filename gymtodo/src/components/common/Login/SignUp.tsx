import styled from 'styled-components';
import Email from '../../../assets/svg/Email.svg';
import Password from '../../../assets/svg/Password.svg';
import Member from '../../../assets/svg/Member.svg';

export const SignUp = () => {
  return (
    <SContainer>
      <div className="layout">
        <div className="card-wrap">
          <span className="title">Sign Up</span>
          <form autoComplete="off">
            <div className="form-group">
              <input
                type="text"
                name="logtext"
                className="form-style"
                placeholder="Your Name"
                id="logname"
                autoComplete="off"
              />
              <img src={Member} className="member-icon" alt="member" />
              <input
                type="email"
                name="logemail"
                className="form-style"
                placeholder="Your Email"
                id="logemail"
                autoComplete="off"
              />
              <img src={Email} className="email-icon" alt="email" />
              <input
                type="password"
                name="logpass"
                className="form-style"
                placeholder="Your Password"
                id="logpass"
                autoComplete="off"
              />
              <img src={Password} className="password-icon" alt="password" />
            </div>
          </form>
          <a href="#" className="btn">
            submit
          </a>
        </div>
      </div>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  justify-content: center;
  align-items: center;
  color: #c4c3ca;
  font-weight: 700;
  margin: 0 auto;

  .layout {
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #302e3f;
    padding: 40px 100px;
    margin-top: 13px;
    width: 100%;
  }
  .card-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .title {
    font-size: 25px;
    margin-bottom: 20px;
  }
  .btn {
    border-radius: 4px;
    height: 44px;
    font-size: 13px;
    text-transform: uppercase;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    padding: 0 30px;
    letter-spacing: 1px;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
    text-align: center;
    border: none;
    background-color: #ffeba7;
    color: #102770;
    box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.2);
    margin-top: 20px;
    text-decoration: none;
  }
  .btn:active,
  .btn:focus {
    background-color: #102770;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }
  .btn:hover {
    background-color: #102770;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }
  .form-group {
    position: relative;
  }
  .member-icon {
    position: absolute;
    top: 20%;
    left: 20px;
    transform: translateY(-50%);
  }
  .email-icon {
    position: absolute;
    top: 54%;
    left: 20px;
    transform: translateY(-50%);
  }
  .password-icon {
    position: absolute;
    top: 88%;
    left: 20px;
    transform: translateY(-50%);
  }
  .form-style {
    padding-left: 55px;
    margin-top: 15px;
    height: 48px;
    width: 400px;
    font-weight: 700;
    border-radius: 4px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.5px;
    outline: none;
    color: #c4c3ca;
    background-color: #1f2029;
    border: none;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  }
  .form-style:focus,
  .form-style:active {
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  }
`;
