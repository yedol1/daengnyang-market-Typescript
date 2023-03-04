export interface ButtonProps {
  children: string;
  size: 'L' | 'M' | 'MS' | 'S';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  onClickHandler?: () => void;
  isActive?: boolean;
}
