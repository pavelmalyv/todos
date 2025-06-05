import type { BoxProps, TypographyProps } from '@mui/material';
import type { Override } from '@/types/utils';

import { useId } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

type Title = Pick<TypographyProps, 'variant' | 'component'> & {
	text: string;
};

type OwnSectionProps = {
	title: Title;
};

type SectionProps = Override<BoxProps, OwnSectionProps>;

const Section = ({
	title,
	children,
	['aria-labelledby']: ariaLabelledby,
	...props
}: SectionProps) => {
	const boxId = useId();
	const ariaLabelledbyBox = ariaLabelledby ? `${boxId} ${ariaLabelledby}` : boxId;

	return (
		<Box component="section" sx={{ py: 4 }} aria-labelledby={ariaLabelledbyBox} {...props}>
			<Container>
				<Typography
					id={boxId}
					variant={title.variant ?? 'h2'}
					component={title.component ?? 'h2'}
					sx={{ mb: 6, textAlign: 'center' }}
				>
					{title.text}
				</Typography>

				{children}
			</Container>
		</Box>
	);
};

export default Section;
