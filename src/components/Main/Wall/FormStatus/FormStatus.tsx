/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateStatus } from '../../../../redux-toolkit/userSlice';

import {
  StatusForm,
  StatusInput,
} from './styles';

interface IFormStatus {
  statusText?: string,
  updateStatus: ( status: string ) => void
};

const FormStatus: React.FC<IFormStatus> = ( { statusText, updateStatus: _updateStatus } ) => {
  /* 
  Не использовал Formik, потому что мне необходимо было сделать
  зависимость от statusText, а Formik принимает лишь initialValue, а после не реагирует
  на пропсы, приходящие снаружи.
  Плюс особенности Formik тут не особо помогают, так как поле лишь одно, валидировать его
  не надо и дополнительные обертки наворачивать смысла не имеет. 
  */
  const [ status, setStatus ] = useState( statusText || '' );
  useEffect(() => {
    setStatus( statusText || '' );
  }, [ statusText ]);
  const onSubmit = () => {
    alert(`Sending ${status}`);
   // _updateStatus(status);
  };
  const onChange = ( event: React.ChangeEvent<HTMLInputElement> ) : void => {
    const temp = event.target.value ? event.target.value : status;
    setStatus( temp );
  }
  return (
  <StatusForm onSubmit={onSubmit}>
    <StatusInput
      name="statusText"
      placeholder="Обновите свой статус"
      as={StatusInput}
      autoComplete="off"
      onChange={onChange}
      onBlur={onSubmit}
      value={status}
    />
  </StatusForm>
  );
};

const mapDispatchToProps = {
  updateStatus
}

export default connect( null, mapDispatchToProps )(FormStatus);
