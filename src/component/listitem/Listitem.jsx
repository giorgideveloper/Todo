import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Listitem.css';

function Listitem(props) {
	console.log(props.note.title);
	return (
		<Card className='cards' sx={{ maxWidth: 345, maxHeight: 500 }}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{props.note.title}
					</Typography>

					<Typography variant='body2' color='text.secondary'>
						{props.note.description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default Listitem;
