import styled from 'styled-components';
import Email from '../../../assets/svg/Email.svg';
import Password from '../../../assets/svg/Password.svg';
import Member from '../../../assets/svg/Member.svg';
import { useState } from 'react';

export const SignUp = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [isUserIdValid, setIsUserIdValid] = useState(true);
  const [isUserPwValid, setIsUserPwValid] = useState(true);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserId(value);
    setIsUserIdValid(value.length > 6 && value.length <= 20);
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserPw(value);
    setIsUserPwValid(value.length > 6 && value.length <= 20);
  };

  return (
    <SContainer>
      <div className="layout">
        <div className="card-wrap">
          <span className="title">Sign Up</span>
          <form autoComplete="off">
            <div className="input-group">
              <input
                type="text"
                name="logtext"
                className="form-style"
                placeholder="Your Name"
                id="logname"
                autoComplete="new-password"
              />
              <img src={Member} className="member-icon" alt="member" />
            </div>
            <div className="input-group">
              <div className="input-wrap">
                <input
                  type="text"
                  name="logid"
                  className="form-style"
                  placeholder="Your Id"
                  id="logid"
                  autoComplete="new-password"
                  onChange={handleIdChange}
                />
                <img src={Email} className="email-icon" alt="email" />
              </div>
              {!isUserIdValid && (
                <div className={`warn ${isUserIdValid ? 'hide' : ''}`}>
                  아이디는 6~20자 사이여야 합니다.
                </div>
              )}
            </div>
            <div className="input-group">
              <div className="input-wrap">
                <input
                  type="password"
                  name="logpass"
                  className="form-style"
                  placeholder="Your Password"
                  id="logpass"
                  autoComplete="new-password"
                  onChange={handlePwChange}
                />
                <img src={Password} className="password-icon" alt="password" />
              </div>
              {!isUserPwValid && (
                <div className={`warn ${isUserPwValid ? 'hide' : ''}`}>
                  비밀번호는 6~20자 사이여야 합니다.
                </div>
              )}
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
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 100%;
  color: #c4c3ca;
  margin: 0 auto;
  .layout {
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #302e3f;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 270%;
    padding: 40px 100px;
    margin-top: 13px;
    margin-right: 300px;
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
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 20px;
  }
  .input-group {
    position: relative;
  }
  .input-wrap {
    position: relative;
  }

  .warn {
    margin-top: 15px;
  }
  .hide {
    display: none;
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
    font-weight: bold;
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
  /* .form-group {
    position: relative;
  } */
  .form-group input::placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .form-group input:focus::placeholder {
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .member-icon {
    position: absolute;
    top: 60%;
    left: 20px;
    transform: translateY(-50%);
  }
  .email-icon {
    position: absolute;
    top: 60%;
    left: 20px;
    transform: translateY(-50%);
  }
  .password-icon {
    position: absolute;
    top: 60%;
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
