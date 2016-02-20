var fs = require('fs'),
	path = require('path');
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
		// res.send('The image:create POST controller');
		// res.redirect('/images/1');
		var saveImage = function() {
			var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
			imgUrl = '';
			for(var i=0; i < 6; i+=1) {
				imgUrl += possible.charAt(Math.floor(Math.random()*possible.length));
			}

			var tempPath = req.files.file.path,
				ext = path.extname(req.files.file.name).toLowerCase(),
				targetPath = path.resolve('./public/upload/' + imgUrl + ext);

			if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext ===	'.gif') {
				fs.rename(tempPath, targetPath, function(err) {
					if (err) throw err;
					res.redirect('/images/' + imgUrl);
				});
			} else {
				fs.unlink(tempPath, function () {
				if (err) throw err;
				res.json(500, {error: 'Only image files are allowed.'});
					});
				}	
			};
		saveImage();
	},
	like: function(req, res) {
		res.send('The image:like POST controller');
	},
	comment: function(req, res) {
		res.send('The image:comment POST controller');
	}
};