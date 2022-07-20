import scss from './inputText.module.scss';
import classnames from 'classnames';

const InputText = ({ error, helpText, onChange, value, placeholder }) => {
  return (
    <div className={scss.inputWrapper}>
      <input
        placeholder={placeholder}
        onChange={onChange}
        className={classnames({
          [scss.input]: true,
          [scss.error]: !!error,
        })}
        value={value}
      />
      <span className={scss.helpText}>{helpText}</span>
    </div>
  );
};
export default InputText;
