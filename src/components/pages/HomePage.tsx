import Section from '../UI/Section';
import Todos from '../sections/Todos';

const HomePage = () => {
	return (
		<>
			<Section title={{ text: 'Задачи', variant: 'h2', component: 'h1' }}>
				<Todos />
			</Section>
		</>
	);
};

export default HomePage;
