import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import App from './App.tsx';
import LoadingScreen from './components/UI/LoadingScreen.tsx';

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
		<Provider store={store}>
			<PersistGate loading={<LoadingScreen />} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</StrictMode>,
);
