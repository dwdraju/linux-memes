var sidebar = require('../helpers/sidebar');
ImageModel = require('../models').Image;

module.exports = {
	index: function(req, res) {
		//res.render('index');
		//res.send('The home:index controller');
		var viewModel = {
			images: [
			// {
			// 	uniqueId: 1,
			// 	title: 'Sample Image 1',
			// 	description: '',
			// 	filename: 'sample1.jpg',
			// 	views: 0,
			// 	likes: 0,
			// 	timestamp: Date.now
			// },
			
			]
		};

		//res.render('index', viewModel);
		//sidebar(viewModel, function(viewModel) {
			//res.render('index', viewModel);
		ImageModel.find({}, {}, { sort: { timestamp: -1 }},
		function(err, images) {
			if (err) { throw err; }

			viewModel.images = images;
			sidebar(viewModel, function(viewModel) {
				res.render('index', viewModel);
			});
		});
		//});
	}
};