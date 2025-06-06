import { AppProvider } from '@toolpad/core/AppProvider';
import { NotificationsProvider } from '@toolpad/core/useNotifications';
import { createTheme, ThemeProvider } from '@mui/material';
import { toolpadRu } from './locales/toolpadRu';

import HomePage from '@components/pages/HomePage';

const theme = createTheme();

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<AppProvider theme={theme} localeText={toolpadRu}>
				<NotificationsProvider
					slotProps={{
						snackbar: {
							anchorOrigin: { vertical: 'top', horizontal: 'right' },
						},
					}}
				>
					<HomePage />
				</NotificationsProvider>
			</AppProvider>
		</ThemeProvider>
	);
};

export default App;
