import React from 'react';
import axios from 'axios';
import Listitem from '../listitem/Listitem';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cardlistitem() {
	const [post, setPost] = React.useState(null);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		axios.get('https://keep.jrwebdeveloper.com/api/notes').then(response => {
			setPost(response.data.data);
			console.log(post);
			setLoading(true);
		});
	}, []);
	if (!post) return null;

	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-md-3'>
						{post.map(note => (
							<div key={note.id}>
								<Listitem key={note.id} note={note} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Cardlistitem;
