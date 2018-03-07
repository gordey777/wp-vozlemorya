function loadCamScript(src) {
	return new Promise(function(resolve, reject) {
		var s;
		s = document.createElement('script');
		s.src = src;
		s.onload = resolve;
		s.onerror = reject;
		document.head.appendChild(s);
	});
}

function initCamera(url, id, fps) {
	loadCamScript(url).then(
		function() {
			var viewer = jQuery('#' + id);

			viewer.empty();

			var viewerObj = new SNC.viewer(id, {sz: viewer.width() + ',' + viewer.height(), frm: '0', ptz: '1', fps: fps, iPS: '1'});

			pageCameraObjectCache[id] = viewerObj;

			jQuery(window).on(
				'resize',
				function() {
					setTimeout(
						function() {
							resizeCamera(url, id, fps);
						},
						200
					);
				}
			);
		},
		function() {
			var viewer = jQuery('#' + id);

			viewer.empty();

			viewer.html(viewer.data('message'));
		}
	);
}

function resizeCamera(url, id, fps) {
	if(typeof pageCameraObjectCache !== 'undefined') {
		var cam = pageCameraObjectCache[id];
		
		if(typeof cam !== 'undefined') {
			try {
				var viewer = jQuery('#' + id);

				cam.chgSize(viewer.width(), viewer.height());
			}
			catch(ex) {}
		} else {
			initCamera(url, id, fps);
		}
	}
}