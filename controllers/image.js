module.exports = {
	index: function(req, res) {
		//res.send('The image:index controller ' +	req.params.image_id);
		//renders views/image.handlebars
		//res.render('image');
		var viewModel = {
			image: {
				uniqueId: 1,
				title: 'Sample Image 1',
				description: 'This is sample image',
				filename: 'sample1.jpg',
				views: 0,
				likes: 0,
				timestamp: Date.now
			},
			
			};
			res.render('image',viewModel);
		},
	create: function(req, res) {
		res.send('The image:create POST controller');
	},
	like: function(req, res) {
		res.send('The image:like POST controller');
	},
	comment: function(req, res) {
		res.send('The image:comment POST controller');
	}
};