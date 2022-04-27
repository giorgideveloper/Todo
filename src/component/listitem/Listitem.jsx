import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Listitem.css';
import { Button, FloatingLabel, Modal, Form } from 'react-bootstrap';

function Listitem(props) {
	const [show, setShow] = React.useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Button variant='' onClick={handleShow}>
				<Card className='cards h-100' sx={{ maxWidth: 345, maxHeight: 500 }}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								{props.note.title.toUpperCase()}
							</Typography>

							<Typography variant='body2' color='text.secondary'>
								{props.note.description}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{props.note.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FloatingLabel controlId='floatingTextarea2' label=''>
						<Form.Control
							value={props.note.description}
							as='textarea'
							placeholder='Description'
							style={{ height: '100px' }}
						/>
					</FloatingLabel>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Listitem;
