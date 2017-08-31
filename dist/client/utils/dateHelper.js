'use strict';

var releaseDateHash = function releaseDateHash(date) {
	var jsDate = new Date(date);

	return {
		day: jsDate.getDate(),
		month: jsDate.getMonth(),
		year: jsDate.getFullYear()
	};
};

var monthShortCodeHash = {
	0: 'Jan',
	1: 'Feb',
	2: 'Mar',
	3: 'Apr',
	4: 'May',
	5: 'Jun',
	6: 'Jul',
	7: 'Aug',
	8: 'Sep',
	9: 'Oct',
	10: 'Nov',
	11: 'Dec'
};

var releaseDateFormatted = function releaseDateFormatted(date) {
	var releaseHash = releaseDateHash(date);
	return releaseHash.day + ' ' + monthShortCodeHash[releaseHash.month] + ' ' + releaseHash.year;
};

module.exports = {
	releaseDateHash: releaseDateHash,
	monthShortCodeHash: monthShortCodeHash,
	releaseDateFormatted: releaseDateFormatted
};