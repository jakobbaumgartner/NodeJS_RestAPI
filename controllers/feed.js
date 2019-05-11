exports.getPosts = (req, res, next) => {

	 res.status(200).json({posts: [{title: 'First Post', content: 'This is the first post!'}]});
	 //vstavimo javascript objekt, ki se prevede v JSON objekt
	console.log('senttt')
}