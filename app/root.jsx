import {LiveReload, Outlet} from 'remix'

const App = () => {
	return (
		<Document>
			<Outlet />
		</Document>
	)
}

const Document = ({children, title}) => {
	return (
		<html lang='en'>
			<head>
				<title>{title ? title : 'My Remix Blog'}</title>
			</head>
			<body>
				{children}
				{process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
			</body>
		</html>
	)
}

export default App
