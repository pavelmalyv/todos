import type { TypographyProps } from '@mui/material';
import Typography from '@mui/material/Typography';

type DisplayMessageProps = TypographyProps;

const DisplayMessage = ({ children, ...props }: DisplayMessageProps) => {
	return (
		<Typography {...props} variant="body1" color="textSecondary" sx={{ px: 3.12, py: 4 }}>
			{children}
		</Typography>
	);
};

export default DisplayMessage;
