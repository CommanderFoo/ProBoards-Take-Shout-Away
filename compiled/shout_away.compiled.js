"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shout_Away = function () {
	function Shout_Away() {
		_classCallCheck(this, Shout_Away);
	}

	_createClass(Shout_Away, null, [{
		key: "init",
		value: function init() {
			if (!pb.data("user").is_logged_in) {
				return;
			}

			this.PLUGIN_ID = "pd_take_shout_away";

			this.setup();

			$(this.ready.bind(this));
		}
	}, {
		key: "ready",
		value: function ready() {
			if (this.settings.take_away_from.length && $("div.shoutbox").length) {
				if ($.inArrayLoose(pb.data("user").id, this.settings.take_away_from) > -1) {
					$("a.shoutbox_post_button").hide();
					$("div.shoutbox ul.tools").hide();
					$(".form_shoutbox_shoutbox textarea[name=message]").prop("disabled", true).val(this.settings.message);
				}
			}
		}
	}, {
		key: "setup",
		value: function setup() {
			var plugin = pb.plugin.get(this.PLUGIN_ID);

			if (plugin && plugin.settings) {
				this.settings = plugin.settings;
			}
		}
	}]);

	return Shout_Away;
}();


Shout_Away.init();