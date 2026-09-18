import { useEffect, useState } from "react";

const getRegisteredUsers = () => {
	const registeredUsers = localStorage.getItem("formData");
	return registeredUsers ? JSON.parse(registeredUsers).registeredUsers : null;
};

const getLoggedInUsers = () => {
	const formData = localStorage.getItem("formData");
	if (formData) {
		const data = JSON.parse(formData);
		return data.loggedInUsers || null;
	}
	return null;
};

const Dashboard = () => {
	const [totalUsers, setTotalUsers] = useState(0);
	const [registeredUsers, setRegisteredUsers] = useState(null);
	const [loggedInUsers, setLoggedInUsers] = useState(null);

	useEffect(() => {
		const users = getRegisteredUsers();
		setRegisteredUsers(users);
	}, []);

	useEffect(() => {
		if (registeredUsers) {
			setTotalUsers(registeredUsers.length);
		}
	}, [registeredUsers]);

	useEffect(() => {
		const users = getLoggedInUsers();
		setLoggedInUsers(users);
	}, []);

	return (
		<>
			<h1>Dashboard</h1>
			<div className="grid grid-cols-3">
				<div>
					<h1>Number of Registered Users</h1>
					<p>Total Registered Users: {totalUsers}</p>
				</div>
				<div>
					<h1>Number of Users Logged In</h1>
					<p>Logged In Users: {loggedInUsers ? loggedInUsers.length : 0}</p>
				</div>
				<div>Number of Contacts</div>
			</div>
		</>
	);
};

export default Dashboard;
