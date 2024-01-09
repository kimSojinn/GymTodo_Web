import styled from 'styled-components';
import { useState } from 'react';
import { CheckBar } from '../../components/common/Login/CheckBar';
import { Login } from '../../components/common/Login/Login';
import { SignUp } from '../../components/common/Login/SignUp';

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <SLoginPage>
      <CheckBar onToggle={handleToggle} />
      {isLogin ? <Login /> : <SignUp />}
    </SLoginPage>
  );
};

const SLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
