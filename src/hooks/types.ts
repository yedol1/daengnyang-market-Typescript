export interface IUseInput {
  initailValues: { email: string; password: string };
  inputsValidState: { email: boolean; password: boolean };
  setInputsValidState: React.Dispatch<React.SetStateAction<{ email: boolean; password: boolean }>>;
  alertMessage: { emailAlertMessage: string; passwordAlertMessage: string };
  setAlertMessage: React.Dispatch<
    React.SetStateAction<{
      emailAlertMessage: string;
      passwordAlertMessage: string;
    }>
  >;
  ChangeLoginFailStateToFail?: () => void | null;
}
