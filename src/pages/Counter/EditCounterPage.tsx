import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import { updateCounterAmount } from '../../store/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const BackBtnDiv = styled.div`
  font-size: 18px;
  color: blue;
  padding-bottom: 15px;
  cursor: pointer;
`;

const NumberInput = styled.input`
  border: 1px solid #000000;
  border-radius: 5px;
  font-size: 32px;
  color: #000000;
  width: 100px;
`;

const EditCounterPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const counterAmount = useAppSelector((state) => state.counter.amount);
  const [newCounterAmount, setNewCounterAmount] = useState<number>(counterAmount);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewCounterAmount(Number(value));
  };

  const onClickBack = () => {
    history.goBack();
  };

  const onClickUpdate = () => {
    dispatch(updateCounterAmount(newCounterAmount));
    history.goBack();
  };

  return (
    <div style={{ marginTop: 50 }}>
      <BackBtnDiv onClick={onClickBack}>
        &#8249; Back
      </BackBtnDiv>
      <div>
        <NumberInput
          onChange={handleNumberChange}
          value={newCounterAmount}
          type="number"
          placeholder="e.g 1"
        />
      </div>
      <Button type="primary" onClick={onClickUpdate}>
        Update
      </Button>
    </div>
  );
};

export default EditCounterPage;
