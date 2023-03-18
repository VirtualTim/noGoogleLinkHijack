console.debug('[NoGoogleLinkHijack] Adding rlhc="1"')

setTimeout(function() {
	const links = document.getElementsByTagName("a");
	
	// Remove the data-jsarwt attribute from all <a> tags
	for (const link of links) {
		if (link.hasAttribute("jsaction")) {
			link.setAttribute("rlhc", "1");
		}
	}
}, 0);