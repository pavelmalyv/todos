import type { TextFieldProps } from '@mui/material';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type AppTextFieldProps = Omit<TextFieldProps, 'variant'>;

const AppTextField = (props: AppTextFieldProps) => {
	return (
		<TextField
			{...props}
			variant="outlined"
			fullWidth
			slotProps={{
				input: {
					startAdornment: (
						<InputAdornment position="start">
							<KeyboardArrowDownIcon sx={{ mx: 1.37 }} />
						</InputAdornment>
					),
				},
			}}
			sx={{
				'& .MuiInputLabel-root': { ml: 1.37 },
				'& .MuiOutlinedInput-root': { borderRadius: 0 },
				'& .MuiOutlinedInput-notchedOutline': { borderTop: 0, borderLeft: 0, borderRight: 0 },
			}}
		/>
	);
};

export default AppTextField;
