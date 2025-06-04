import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import App from './App.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CssBaseline />
		<GlobalStyles
			styles={{
				body: {
					minWidth: '340px',
				},
				html: {
					minWidth: '340px',
				},
			}}
		/>
		<App />
	</StrictMode>,
);
