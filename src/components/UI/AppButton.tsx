import type { ButtonProps } from '@mui/material/Button';
import Button from '@mui/material/Button';

const AppButton = ({ children, ...props }: ButtonProps) => {
	return <Button {...props}>{children}</Button>;
};

export default AppButton;
