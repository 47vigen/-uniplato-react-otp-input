import * as React from 'react';

declare class OtpInput extends React.Component<OtpInputProps, OtpInputState, any> {
  static defaultProps: {
    numInputs: number;
    onChange: (otp: number) => void;
    isDisabled: boolean;
    shouldAutoFocus: boolean;
    value: string;
  };
  constructor(props: Readonly<OtpInputProps>);
  constructor(props: OtpInputProps, context?: any);
  getOtpValue: () => any;
  getPlaceholderValue: () => any;
  handleOtpChange: (otp: string[]) => void;
  isInputValueValid: (value: any) => boolean;
  focusInput: (input: number) => void;
  focusNextInput: () => void;
  focusPrevInput: () => void;
  changeCodeAtFocus: (value: string) => void;
  handleOnPaste: (e: Object) => void;
  handleOnChange: (e: Object) => void;
  handleOnKeyDown: (e: Object) => void;
  handleOnInput: (e: Object) => void;
  renderInputs: () => any[];
}

interface OtpInputProps {
  className?: string;
  containerStyle?: Object;
  disabledStyle?: Object;
  errorStyle?: Object;
  focusStyle?: Object;
  hasErrored?: boolean;
  inputStyle?: Object;
  isDisabled?: boolean;
  isInputNum?: boolean;
  isInputSecure?: boolean;
  numInputs: number;
  onChange: Function;
  placeholder?: string;
  separator?: Object;
  shouldAutoFocus?: boolean;
  value?: string;
  'data-testid'?: string;
  'data-cy'?: string;
  renderInput?: (
    props: Required<
      Pick<
        React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
        'placeholder' | 'maxLength' | 'autoComplete' | 'type' | 'disabled' | 'value'
      >
    > & { ref: React.RefObject<HTMLInputElement> },
    state: { index: number; focus: boolean; isDisabled: boolean; hasErrored: boolean }
  ) => React.ReactNode;
}

interface OtpInputState {
  activeInput: number;
  otp: string[];
}

export { OtpInputProps };
export default OtpInput;
