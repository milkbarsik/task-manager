import { Navigate, Route, Routes } from "react-router";
import { routes } from "./routes";


const AppRouter = () => {
	return (
		<Routes>
			{
				routes.map(({path, Component}) => (
					<Route key={path} path={path} element={<Component />}/>
				))
			}
			<Route path="*" element={<Navigate to='/'/>} />
		</Routes>
	)
}

export default AppRouter;