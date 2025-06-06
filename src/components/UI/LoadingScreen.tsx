import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingScreen = () => {
	return (
		<Box
			sx={{
				position: 'fixed',
				inset: 0,
				zIndex: 2000,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<CircularProgress />
		</Box>
	);
};

export default LoadingScreen;
