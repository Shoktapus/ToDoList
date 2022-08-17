import React from "react";
import ToDoList from "../component/ToDoList.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="todo-app">
		<ToDoList/>
		</div>
	);
};

export default Home;
