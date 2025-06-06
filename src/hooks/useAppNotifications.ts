import { useNotifications } from '@toolpad/core/useNotifications';

const useAppNotifications = () => {
	const notifications = useNotifications();

	const showError = (message: string) => {
		notifications.show(message, {
			severity: 'error',
			autoHideDuration: 3000,
		});
	};

	return { showError };
};

export default useAppNotifications;
