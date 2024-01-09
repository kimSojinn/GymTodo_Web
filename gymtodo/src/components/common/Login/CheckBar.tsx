import React, { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface CheckBarProps {
  onToggle: (isChecked: boolean) => void;
}

export const CheckBar: FunctionComponent<CheckBarProps> = ({ onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    onToggle(isChecked);
  }, [isChecked]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <SWrapper>
      <div className="select-wrapper">
        <span>LOG IN</span>
        <span>SIGN UP</span>
      </div>
      <div>
        <input
          className="checkbox"
          type="checkbox"
          id="reg-log"
          name="reg-log"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="reg-log"></label>
      </div>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: #c4c3ca;
  font-weight: 700;
  .select-wrapper {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 15px;
    font-size: 17px;
  }
  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  [type='checkbox']:checked,
  [type='checkbox']:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  .checkbox:checked + label,
  .checkbox:not(:checked) + label {
    position: relative;
    display: block;
    text-align: center;
    width: 60px;
    height: 16px;
    border-radius: 8px;
    padding: 0;
    margin: 20px auto;
    cursor: pointer;
    background-color: #ffeba7;
  }
  .checkbox:checked + label:before,
  .checkbox:not(:checked) + label:before {
    position: absolute;
    display: block;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    color: #ffeba7;
    background-color: #102770;
    font-family: 'unicons';
    content: '';
    z-index: 20;
    top: -10px;
    left: -10px;
    line-height: 36px;
    text-align: center;
    font-size: 24px;
    transition: all 0.5s ease;
  }
  .checkbox:checked + label:before {
    transform: translateX(44px) rotate(-270deg);
  }
`;
