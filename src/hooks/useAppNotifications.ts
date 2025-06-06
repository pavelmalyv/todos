import type { NotificationKey } from '@/types/notification';
import { useNotifications } from '@toolpad/core/useNotifications';

const HIDE_DURATION = 3000;

const useAppNotifications = () => {
	const notifications = useNotifications();

	const showError = (message: string) => {
		return notifications.show(message, {
			severity: 'error',
			autoHideDuration: HIDE_DURATION,
		});
	};

	const showSuccess = (message: string) => {
		return notifications.show(message, {
			severity: 'success',
			autoHideDuration: 3000,
		});
	};

	const closeNotification = (key: NotificationKey) => {
		if (key !== null) {
			notifications.close(key);
		}
	};

	return { showError, showSuccess, closeNotification };
};

export default useAppNotifications;
