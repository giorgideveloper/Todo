import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Listitem.css';

function Listitem(props) {
	console.log(props.note.title);
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardContent>
					<div className='col-md-12'>
						<Typography gutterBottom variant='h5' component='div'>
							{props.note.title}
						</Typography>

						<Typography variant='body2' color='text.secondary'>
							{props.note.description}
						</Typography>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default Listitem;
