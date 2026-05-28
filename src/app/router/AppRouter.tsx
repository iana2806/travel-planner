import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from '../layout/AppLayout';

import Dashboard from '../../pages/Dashboard/Dashboard';
import Login from '../../pages/Login/Login';
import TripDetails from '../../pages/TripDetails/TripDetails';

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Public route */}
				<Route path='/login' element={<Login />} />

				{/* App layout routes */}
				<Route element={<AppLayout />}>
					<Route path='/' element={<Dashboard />} />
					<Route path='/trips/:id' element={<TripDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
