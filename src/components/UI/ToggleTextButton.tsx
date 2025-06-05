import type { ToggleButtonGroupProps, ToggleButtonProps } from '@mui/material';

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Typography from '@mui/material/Typography';

const ToggleTextButton = ({ children, ...props }: ToggleButtonGroupProps) => {
	return (
		<ToggleButtonGroup exclusive {...props}>
			{children}
		</ToggleButtonGroup>
	);
};

const Item = ({ children, ...props }: ToggleButtonProps) => {
	return (
		<ToggleButton {...props}>
			<Typography variant="body2" color="textSecondary">
				{children}
			</Typography>
		</ToggleButton>
	);
};
ToggleTextButton.Item = Item;

export default ToggleTextButton;
