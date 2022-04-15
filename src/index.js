import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/app/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/about/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='about' element={<About />} />
			<Route path='/' element={<App />} />
		</Routes>
	</BrowserRouter>
);
