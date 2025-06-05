import type { Override } from '@/types/utils';
import type { ListItemButtonProps, ListItemProps, ListProps } from '@mui/material';

import { useId } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const TodosList = ({ children, ...props }: ListProps) => {
	return <List {...props}>{children}</List>;
};

type OwnItemProps = {
	checked?: boolean;
	onClick?: ListItemButtonProps['onClick'];
};

export type ItemProps = Override<ListItemProps, OwnItemProps>;

const Item = ({ checked, children, onClick, ...props }: ItemProps) => {
	const labelId = useId();

	return (
		<ListItem
			{...props}
			disablePadding
			sx={{ '&:not(:last-child)': { borderBottom: 1, borderColor: 'divider' } }}
		>
			<ListItemButton role={undefined} dense onClick={onClick}>
				<ListItemIcon>
					<Checkbox
						checked={checked}
						tabIndex={-1}
						slotProps={{ input: { 'aria-labelledby': labelId } }}
					/>
				</ListItemIcon>
				<ListItemText id={labelId} primary={children} />
			</ListItemButton>
		</ListItem>
	);
};

TodosList.Item = Item;

export default TodosList;
