console.debug('[NoGoogleLinkHijack] Removing data-jsarwt')

setTimeout(function() {
	const links = document.getElementsByTagName("a");
	
	// Remove the data-jsarwt attribute from all <a> tags
	for (const link of links) {
		if (link.hasAttribute("data-jsarwt")) {
			link.removeAttribute("data-jsarwt");
		}
	}
}, 0);