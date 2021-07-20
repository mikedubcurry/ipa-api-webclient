export const slugify = (str: string) => {
	if (!str) throw TypeError('must pass a string of length >= 1');

	return str.replace(/\.|,/g, '').toLowerCase().split(' ').join('-');
};
