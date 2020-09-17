import React from 'react';
import { useFormik } from 'formik';
import sendMessageSrc from '../../../img/icons/send-message.svg';
import addFileSrc from '../../../img/icons/add-file.svg';

import {
  Wrap,
  TextWrap,
  Text,
  FileIcon,
  SubmitMessageIcon,
} from './styles';

export default (): React.FunctionComponentElement<unknown> => {
  const formik = useFormik({
    initialValues: { message: '' },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: (): void => {},
  });

  return (
    <Wrap>
      <TextWrap>
        <Text
          placeholder="Напишите что-нибудь..."
          id="message"
          rows={2}
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        <FileIcon src={addFileSrc} />
      </TextWrap>
      <SubmitMessageIcon src={sendMessageSrc} onClick={formik.handleSubmit} />
    </Wrap>
  );
};
