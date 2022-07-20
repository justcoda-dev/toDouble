import InputText from '../UI/InputText/InputText';
import Button from '../UI/Button/Button';
import useInputText from '../UI/InputText/useInputText';
import { useCallback } from 'react';
import scss from './contactForm.module.scss';
import { emailSchema, nameSchema, phoneSchema } from './validation';

const ContactForm = () => {

  const {
    value: nameValue,
    textError: nameError,
    handleChange: nameHandleChange,
    clearInput: nameClear,
  } = useInputText({ initialStateText: '', validationSchema: nameSchema });

  const {
    value: phoneValue,
    textError: phoneError,
    handleChange: phoneHandleChange,
    clearInput: phoneClear,
  } = useInputText({ initialStateText: '', validationSchema: phoneSchema });

  const {
    value: emailValue,
    textError: emailError,
    handleChange: emailHandleChange,
    clearInput: emailClear,
  } = useInputText({ initialStateText: '', validationSchema: emailSchema });

  const sendFormHandle = useCallback(
    (e) => {
      e.preventDefault();
      console.log({ nameValue, phoneValue, emailValue });
      clearInputs();

    },
    [nameValue, phoneValue, emailValue],
  );

  const clearInputs = useCallback(() => {
    emailClear();
    nameClear();
    phoneClear();
  }, [emailValue, nameValue, phoneValue]);

  return (
    <form className={scss.form}  onSubmit={sendFormHandle}>
      <InputText
        onChange={nameHandleChange}
        value={nameValue}
        error={nameError}
        helpText={nameError}
        placeholder='Имя'
      />
      <InputText
        onChange={phoneHandleChange}
        value={phoneValue}
        error={phoneError}
        helpText={phoneError}
        placeholder='Telegram/Viber'
      />
      <InputText
        onChange={emailHandleChange}
        value={emailValue}
        error={emailError}
        helpText={emailError}
        placeholder='Email'
      />
      <Button type='submit'>отправить</Button>
    </form>
  );
};
export default ContactForm;
