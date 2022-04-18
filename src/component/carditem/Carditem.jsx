import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cardlistitem from '../cardlistitem/Cardlistitem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carditem.css';

function Carditem() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-12'>
					<Cardlistitem />
				</div>
			</div>
		</div>
	);
}

export default Carditem;
