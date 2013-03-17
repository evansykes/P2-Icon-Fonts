/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'silhouette\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-aascot' : '&#x61;',
			'icon-kate' : '&#x74;',
			'icon-Kurt' : '&#x6b;',
			'icon-jane' : '&#x6a;',
			'icon-peter' : '&#x70;',
			'icon-josh' : '&#x6f;',
			'icon-jasmine-silhouette' : '&#x73;',
			'icon-christopher' : '&#x78;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};