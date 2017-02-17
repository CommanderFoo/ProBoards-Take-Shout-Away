class Shout_Away {

	static init(){
		if(!pb.data("user").is_logged_in){
			return;
		}

		this.PLUGIN_ID = "pd_take_shout_away";

		this.setup();

		$(this.ready.bind(this));
	}

	static ready(){
		if(this.settings.take_away_from.length && $("div.shoutbox").length){
			if($.inArrayLoose(pb.data("user").id, this.settings.take_away_from) > -1){
				$("a.shoutbox_post_button").hide();
				$("div.shoutbox ul.tools").hide();
				$(".form_shoutbox_shoutbox textarea[name=message]").prop("disabled", true).val(this.settings.message);
			}
		}
	}

	static setup(){
		let plugin = pb.plugin.get(this.PLUGIN_ID);

		if(plugin && plugin.settings){
			this.settings = plugin.settings;
		}
	}

}

Shout_Away.init();