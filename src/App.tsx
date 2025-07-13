import './App.css';
import { useTasks } from './store/tasks-store';
import AppRouter from './components/app-router/app-router';
import Header from './components/header/header';
import { useEffect } from 'react';

function App() {

	const {init} = useTasks();

	useEffect(() => {
		init();
	}, [])

  return (
    <>
			<Header />
    	<AppRouter />
    </>
  )
}

export default App;
