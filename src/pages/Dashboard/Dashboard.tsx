export default function Dashboard() {
	// моковые данные
	const currentTrip = {
		title: 'Париж',
		date: '10.09 - 14.09',
	};

	const pastTrips = [
		{
			title: 'Рим',
			date: '06.01 - 24.01',
			id: 1,
		},
		{
			title: 'Венеция',
			date: '16.04 - 24.04',
			id: 2,
		},
		{
			title: 'Милан',
			date: '19.05 - 24.05',
			id: 3,
		},
	];

	return (
		<div>
			<h1>Мои поездки</h1>

			<section>
				<h2>Текущая поездка</h2>
				<article>
					<h3>{currentTrip.title}</h3>
					<p>{currentTrip.date}</p>
				</article>
			</section>

			<section>
				<h2>История поездок</h2>

				{/* перебираем массив и рендерим карточку для каждой поездки */}
				{pastTrips.map(trip => (
					<article key={trip.id}>
						<h3>{trip.title}</h3>
						<p>{trip.date}</p>
					</article>
				))}
			</section>
		</div>
	);
}
