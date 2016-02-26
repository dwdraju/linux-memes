
var models = require('../models');
module.exports = {
	popular: function(callback) {
		models.Image.find({}, {}, { limit: 9, sort: { likes: -1 }},
		function(err, images) {
			if (err) throw err;
			callback(null, images);
		});
	}
};
// module.exports = {
// 	popular: function(){
// 		var images = [
// 		{
// 			uniqueId:1,
// 			title: 'Sample Image 1',
// 			description: '',
// 			filename: 'sample1.jpg',
// 			views: 0,
// 			likes: 0,
// 			timestamp: Date.now()
// 		},{
// 			uniqueId: 2,
// 			title: 'Sample Image 2',
// 			description: '',
// 			filename: 'sample2.jpg',
// 			views: 0,
// 			likes: 0,
// 			timestamp: Date.now()
// 		}];
// 		return images;
// 	}
// };