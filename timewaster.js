/**
 * Time Waster plugin for showtime version 0.1  by NP
 *
 *  Copyright (C) 2011 NP
 * 
 *  ChangeLog: 
 * 
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

//TODO : Clean up
/*
 * http://www.liveleak.com/
 * http://www.disclose.tv/
 * 
 */
(function(plugin) {

var PREFIX = 'timewaster:';
var BREAK_LOGO = 'http://media1.break.com/break/img/site/nav/brk-logo5.png?cachebust=2';
var EPICFAIL_LOGO = 'http://www.epicfail.com/wp-content/themes/epicfail/images/logo.png';
var GAG9 = 'http://9gag.com/';
var FAILBLOG = 'http://failblog.org/';
var FAILBLOG_FAIL = 'http://fails.failblog.org/';
var FAILBLOG_WINS = 'http://wins.failblog.org/';
var FAILBLOG_FAILBOOK = 'http://failbook.failblog.org/';
var FAILBLOG_AUTOCOWRECKS = 'http://autocowrecks.failblog.org/';
var FAILBLOG_FIXEDIT = 'http://thereifixedit.failblog.org/';
var FAILBLOG_DRESSED = 'http://poorlydressed.failblog.org/';
var FAILBLOG_DATING = 'http://dating.failblog.org/';
var FAILBLOG_ENGRISH = 'http://engrishfunny.failblog.org/';
var FAILBLOG_WORK = 'http://work.failblog.org/';
var FAILBLOG_BROS = 'http://bros.failblog.org/';
var FAILBLOG_TATTOS = 'http://ugliesttattoos.failblog.org/';
var FAILBLOG_PARENT = 'http://parenting.failblog.org/';
var FAILBLOG_AFTER = 'http://after12.failblog.org/';
var FAILBLOG_SANTAS = 'http://sketchysantas.failblog.org/';
var FUNNYORDIE_LOGO = 'http://userlogos.org/files/logos/danger83/funnyordie2.png';
var COLLEGEHUMOR_LOGO = 'http://interracialscentral.files.wordpress.com/2011/07/logo_collegehumor.png';
var COLLEGEHUMOR_PICTURES = [ {'name': 'Most Viewed', 'link': 'www.collegehumor.com/pictures/most-viewed'},
				 {'name': 'Art', 'link': 'www.collegehumor.com/pictures/art'},
				 {'name': 'Cars', 'link': 'www.collegehumor.com/pictures/cars'},
				 {'name': 'College', 'link': 'www.collegehumor.com/pictures/college'},
				 {'name': 'Epic', 'link': 'www.collegehumor.com/pictures/epic'},
				 {'name': 'Food', 'link': 'www.collegehumor.com/pictures/food'},
				 {'name': 'Facebook', 'link': 'www.collegehumor.com/pictures/facebook'},
				 {'name': 'Foreign', 'link': 'www.collegehumor.com/pictures/foreign'},
				 {'name': 'Gross', 'link': 'www.collegehumor.com/pictures/gross'},
				 {'name': 'Holidays', 'link': 'www.collegehumor.com/pictures/holidays'},
				 {'name': 'Nerdy', 'link': 'www.collegehumor.com/pictures/nerdy'},
				 {'name': 'People', 'link': 'www.collegehumor.com/pictures/people'},
				 {'name': 'Politics', 'link': 'www.collegehumor.com/pictures/politics'},
				 {'name': 'Pop Culture', 'link': 'www.collegehumor.com/pictures/pop-culture'},
				 {'name': 'Pranks', 'link': 'www.collegehumor.com/pictures/pranks'},	
				 {'name': 'Relationships', 'link': 'www.collegehumor.com/pictures/relationships'},
				 {'name': 'Sexy', 'link': 'www.collegehumor.com/pictures/sexy'},
				 {'name': 'Signs', 'link': 'www.collegehumor.com/pictures/signs'},
				 {'name': 'Sports', 'link': 'www.collegehumor.com/pictures/sports'},
				 {'name': 'The Internet', 'link': 'www.collegehumor.com/pictures/the-internet'},
				 {'name': 'Words', 'link': 'www.collegehumor.com/pictures/words'},
				 {'name': 'WTF', 'link': 'www.collegehumor.com/pictures/wtf'},
				 {'name': 'Cute College Girl', 'link': 'www.collegehumor.com/cutecollegegirl'},
				 {'name': 'Hottest College Girls', 'link': 'www.collegehumor.com/hottestgirl'},				 
				];

var COLLEGEHUMOR_VIDEOS = [ {'name': 'Most Viewed', 'link': 'www.collegehumor.com/videos/most-viewed'},
				 {'name': 'All Originals', 'link': 'www.collegehumor.com/originals'},
				 {'name': 'Sketch', 'link': 'www.collegehumor.com/celebrities'},
				 {'name': 'Animation', 'link': 'www.collegehumor.com/animation'},
				 {'name': 'Music Videos', 'link': 'www.collegehumor.com/animation'},
				 {'name': 'Jake and Amir', 'link': 'www.collegehumor.com/jakeandamir'},
				 {'name': 'Troppers', 'link': 'www.collegehumor.com/troopers'},
				 {'name': 'Hardly Working', 'link': 'www.collegehumor.com/hardlyworking'},
				 {'name': 'Very Mary-Kate', 'link': 'www.collegehumor.com/verymarykate'},
				 {'name': 'Dinosaur Office', 'link': 'www.collegehumor.com/dinosaur-office'},
				 {'name': 'The Six', 'link': 'http://www.collegehumor.com/the-six'},
				 {'name': 'Badman', 'link': 'www.collegehumor.com/badman'},
				 {'name': 'Soap Box', 'link': 'www.collegehumor.com/soap-box'},
				 {'name': 'TV RPG', 'link': 'www.collegehumor.com/tv-rpg'},
				 {'name': 'Full Benefits', 'link': 'www.collegehumor.com/fullbenefits'},	
				 {'name': 'Prank War', 'link': 'www.collegehumor.com/prankwar'},
				 {'name': 'Hello, My name is', 'link': 'www.collegehumor.com/hellomynameis'},
				 {'name': 'CollegeHumor Yearboook', 'link': 'http://www.collegehumor.com/yearbook'},
				 {'name': 'Street Fighter', 'link': 'www.collegehumor.com/streetfighterthelateryears'},
				 {'name': 'Michael Showalter', 'link': 'www.collegehumor.com/michaelshowaltershowalter'},
				 {'name': 'Clock Suckers', 'link': 'www.collegehumor.com/clocksuckers'},
				 {'name': 'Derrick Comedy', 'link': 'www.collegehumor.com/derrick'},
				 {'name': 'Nerd Alert', 'link': 'www.collegehumor.com/nerdalert'},
				 {'name': 'Cast', 'link': 'www.collegehumor.com/originals/cast'},				 
				];


var CHEEZBURGER = [{'name': 'FailBlog', 'link': 'failblog.org/', 
					'icon': 'http://userlogos.org/files/logos/ps1d3r/failblog-black-i-2.png'},
				   {'name': 'FailNation', 'link': 'fails.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/214failnation.png'},
				   {'name': 'WIN!', 'link': 'wins.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/103win.png'},
				   {'name': 'FailBook', 'link': 'failbook.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/669failbook.png'},
				   {'name': 'AutoCowrecks', 'link': 'autocowrecks.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/286autoocorrect.png'},
				   {'name': 'There i fixed it', 'link': 'thereifixedit.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/577fixedit.png'},
				   {'name': 'Poorly Dressed', 'link': 'poorlydressed.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/731dressed.png'},
				   {'name': 'Dating', 'link': 'dating.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/371dating.png'},
				   {'name': 'Engrish Funny', 'link': 'engrishfunny.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/731dressed.png'},
				   {'name': 'Work', 'link': 'work.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/455work.png'},
				   {'name': 'Bros', 'link': 'bros.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/550bros.png'},
				   {'name': 'Ugliest Tattoos', 'link': 'ugliesttattoos.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/983tattos.png'},
				   {'name': 'Parenting', 'link': 'parenting.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/365parenting.png'},
				   {'name': 'After12', 'link': 'after12.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/79312.png'},
				   {'name': 'School', 'link': 'school.failblog.org/',
					'icon': 'http://image.torrent-invites.com/images/357schooloffail.png'},
				 ];

var CHAR_LIST = [ [/&#x27;/gi, "'"], [/&#038;/gi, "&"], [/&#x26;/gi, "&"], [/&amp;<br\/>/gi, "&"],				
				[/&amp;/gi, '&'], [/&#xF4/gi, "o"], [/&#x22;/gi, ""], [/&#x2B;/gi, "e"],
				[/&#xC6;/gi, "AE"], [/&#xC7;/gi, "C"], [/&#xB0;/gi, "º"], [/&#xED;/gi, "í"],
				[/&#xEE;/gi, "î"], [/&#xB3;/gi, "3"], [/&nbsp;/gi, ""],	[/&#8211;/gi, "-"],
				[/&frac12;/gi, "1/2"], [/&#xE9;/gi, "é"], [/&#039;/gi, "'"], [/&quot;/gi, ' '],
				[/&#8217;/gi, "'"], [/&#39;/gi, "'"] , [/&#8230;/gi, "..."], [/&#8220;/gi, '"'],
				[/&#8221;/gi, '"'],
				];




//settings 

	var service = plugin.createService("Time Waster", PREFIX + "start", "tv", true,
			   plugin.path + "logo.jpg");
  
	var settings = plugin.createSettings("Time Waster",
					  plugin.path + "logo.jpg",
					 "Time you enjoy wasting is not wasted time");

	settings.createInfo("info",
			     plugin.path + "logo.jpg",
			     "Time you enjoy wasting is not wasted time\n"+ 
				 "\n    Plugin developed by NP \n");

	settings.createBool("youtube", "Support Youtube links (requires youtube plugin)", true, function(v) {
	    service.youtube = v;
	  });

	settings.createBool("gif", "Support gif images (PS3 version doesn't support)", false, function(v) {
	    service.gif = v;
	  });


function startPage(page) {      	

   page.type = "directory";
   page.contents = "items";

   page.metadata.logo = plugin.path + "logo.jpg";
   page.metadata.title = "Time Waster, pick your poison";
      
      
	page.appendItem( PREFIX + '9gag:/', "directory", { title:  '9GAG',
		icon: 'http://image.torrent-invites.com/images/5779gag_black_i_2.png' });
		//http://userlogos.org/files/logos/ps1d3r/9gag-black-i-2.png

	page.appendItem( PREFIX + 'break:/', "directory", { title:  'Break',
	   icon: BREAK_LOGO });

	page.appendItem( PREFIX + 'cheezburger', "directory", { title:  'CheezBurger Network',
	   icon: "http://image.torrent-invites.com/images/844cheeznetwrk_logo.png" });
	   //http://s.chzbgr.com/s/release_20120213.2/Images/site_directory/cheeznetwrk_logo.png	  
	   
	page.appendItem( PREFIX + 'collegehumor:all', "directory", { title:  'College Humor',
	   icon: COLLEGEHUMOR_LOGO });

	page.appendItem( PREFIX + 'epicfail:/', "directory", { title:  'Epic Fail',
	   icon: EPICFAIL_LOGO });
	   
	page.appendItem( PREFIX + 'funnyordie:/videos', "directory", { title:  'Funny or Die',
	   icon: FUNNYORDIE_LOGO });

	page.loading = false;  

}

/*
 * Break.com
 * 
 */
plugin.addURI( PREFIX + "break:(.*)", function(page, link){
	
	page.type = "directory";
	page.contents = "videos";
	page.metadata.logo = BREAK_LOGO;
	
	var content = showtime.httpGet('http://www.break.com'+link).toString();
	page.metadata.title = cleanString(getValue(content, '<title>', '</title>').replace(/\n/g,''));
	var next = getValue(content,'&nbsp;&nbsp;&nbsp;<a href="http://www.break.com','"');
	
	content = getValue(content, '<li class="cr-like"', '<div class="hp-mod-genre">');
	content = content.split('<li class="cr-like"');
	
	for each (var post in content){
		page.appendItem( PREFIX + "breakplay:" + getValue(post, 'href="http://','"') , "video", {
		    title: cleanString(getValue(post, '>', '</a></dt>', 'endRef')),
		    icon: getValue(post, 'src="', '"'),
		    description:  cleanString(getValue(post, 'class="desc">', '<'))});
	}
	
	//Next
	if(next != '')
		page.appendItem( PREFIX + "break:" + next, "directory", { title: "Next" });
	page.loading = false; 
});

plugin.addURI( PREFIX + "breakplay:(.*)", function(page, link){
	var url = '';
	var content = showtime.httpGet('http://'+link).toString();
	url = getValue(content, "sGlobalFileNameHD='","'") ;
	if(url == '')
		url = getValue(content, "sGlobalFileName='","'")+'.mp4?' + getValue(content, "sGlobalToken='","'");
	else
		url += '?' + getValue(content, "sGlobalToken='","'");
	page.loading = false;
	page.source = "videoparams:" + showtime.JSONEncode({      
		sources: [
		{	
			url: url
		}]    
	});    
	page.type = "video"; 
});



/*
 * Funny or die
 * 
 */
plugin.addURI( PREFIX + "funnyordie:(.*)", function(page, link){
	
	page.type = "directory";
	page.contents = "videos";
	page.metadata.logo = FUNNYORDIE_LOGO;
	var content = showtime.httpGet('http://www.funnyordie.com'+link).toString();
	page.metadata.title = getValue(content, '<title>', '</title>');
	var next = getValue(content,'"','" rel="next">Next &raquo', 'endRef');
	
	content = getValue(content, '<div class="thumb rectangle_xlarge"', '<nav class="pagination">');
	content = content.split('<div class="thumb rectangle_xlarge"');
	
	for each (var post in content){
		page.appendItem( PREFIX + "funnyordie:play:" + getValue(post, 'href="','"') , "video", {
		    title: getValue(post, 'title="', '"'),
		    icon: getValue(post, 'src="', '"'),
		    description:  getValue(post, '<span class="description">', '<')});
	}
	
	//Next
	if(next != '')
		page.appendItem( PREFIX + "funnyordie:" + next, "directory", { title: "Next" });
	page.loading = false; 
});

plugin.addURI( PREFIX + "funnyordie:play:(.*)", function(page, link){
	
	var content = showtime.httpGet('http://www.funnyordie.com'+link).toString();
	//showtime.trace('iPhone: ' + getValue(content, "'","iphone_wifi.mp4", 'endRef'));
	//showtime.trace('iPad: ' + getValue(content, "'","ipad.mp4", 'endRef'));
	page.source = "videoparams:" + showtime.JSONEncode({      
		sources: [
		{	
			url: getValue(content, "'","iphone_wifi.mp4", 'endRef')+"iphone_wifi.mp4"
		}]    
	});    
	page.type = "video"; 
});


/*
 * Epic Fail
 * 
 */
 
plugin.addURI( PREFIX + "epicfail:(.*)", function(page, link){
	
	page.type = "directory";
	page.contents = "videos";
	page.metadata.logo = EPICFAIL_LOGO;

	var content = showtime.httpGet('http://www.epicfail.com'+link).toString();
	var next = getValue(content,'.com','" >Next &raquo;', 'endRef');
	
	content = getValue(content, '<div class="post" ','<!-- END post listing -->');
	content = content.split('<div class="post" ');
	var item= {};
	for each (var post in content){
		if(post.indexOf('.mp4"') == -1){
			item.uri = getValue(post, 'src="', '"');
			item.type = 'image';
		}else{
			item.uri = getValue(post, '"', '.mp4"', 'endRef')+'.mp4';
			item.type = 'video';
		}
		if(fileSupport(item.uri) != '')
			page.appendItem( item.uri , item.type, {
			    title: getValue(post, '>', '</a></h2>', 'endRef'),
			    icon: getValue(post, 'src="', '"') });
	}
	
	//Next
	if(next != '')
		page.appendItem( PREFIX + "epicfail:" + next, "directory", { title: "Next" });
	page.loading = false; 
});


/*
 *  9GAG
 *  
 */

plugin.addURI( PREFIX + "9gag:(.*)", function(page, indice){
	
	page.type = "directory";
	page.contents = "images";
	page.metadata.title = '9GAG - Just for Fun!';
	
	var content = showtime.httpGet( GAG9 + indice ).toString();
	if(content.indexOf("class='next'")!=-1)
		var next = getValue(content, "class='next' href=", ' ').replace(/\"/gi, '');
	content = getValue(content, '<div id="entry-list" class="list">', "<!--end entry-list-->");
	content = cleanString(content);
	var names = content.match(/data-text="(.*)" gagId/gi);
	var img = content.match(/src="(.*)"/gi);
	var link = null;
	var icon = null;
	var title = null;
	var aux = 0;
	for each (var post in img){
		link = getValue(post, 'src="', '"');
		title = getValue(names[aux], 'data-text="', '" gagId');
		if(link.indexOf('youtube') !=-1){
			title+='(video)';
			link = 'youtube:video:simple:'+ escape(title) + ':' +getValue(link,'/','&amp','endRef') ;
			icon = 'http://transparentproductions.org/wp-content/uploads/2010/04/Music-on-Youtube.png';
		}else{ icon =link; }
		if(fileSupport(icon) != ''){
			page.appendItem(link, "image",
			 { title: title,
			   icon:  icon});
		}
		aux++;
	}
	//Next
	if(next)
		page.appendItem( PREFIX + "9gag:" + next, "directory", { title: "Next" });
	page.loading = false; 
});

/*
 * Cheez Burger Network
 *
 */
 
plugin.addURI( PREFIX + "cheezburger", function(page){
	
	page.type = "directory";
	page.contents = "items";
	page.metadata.title = 'CheezBurger Network';
	
	for each (var site in CHEEZBURGER){
			page.appendItem( PREFIX + 'cheezburger:' + site.link, "video",
				 { title: site.name,
					icon: site.icon });
	}
	
	page.loading = false; 
});

plugin.addURI( PREFIX + "cheezburger:(.*)", function(page, site){
	
	page.type = "directory";
	page.contents = "list";
	
	
	var content = showtime.httpGet( 'http://' + site ).toString();
	page.metadata.title = cleanString(getValue(content, '<title>', '</title>'));
	if(content.indexOf('" >Next')!=-1)
		var next = getValue(content, 'href="http://', '" >Next', 'endRef');
		
	content = getValue(content,'<h2>',' >Next');
	content = cleanString(content);
	content = content.split('<!-- end: Print On Demand -->');
	var title = null;
	var name = null;
	for each (var post in content){
		title = post.match(" src=(.*) alt=(.*)>");
		if(post.indexOf('youtube.com')!=-1){
			title = getValue(post, "'title' : '","'").replace(/\+/gi,' ');
			page.appendItem( 'youtube:video:simple:'+ escape(title) + ':' +getValue(post,'youtube.com/embed/','?'), "video",
				 { title: unescape(title) + ' (Video)',
					icon: '' });
			
		}else if(title != null){
			title = title.toString().replace(/\"/gi, "'");
			//name = getValue(title, "alt='", "'");
			name = getValue(post, "title=", ">").replace('Permanent Link to','').replace(/\"/g, '').replace(/\'/g, '');
			name = cleanString(name);
			if(name.indexOf(' - ') != -1)
				name = name.slice(name.indexOf('-')+1, name.length)
			if(name.indexOf(': ') != -1)
				name = name.slice(name.indexOf(':')+1, name.length)
			if(fileSupport(getValue(title, "src='","'")) != '')	
				page.appendItem( getValue(title, "src='","'"), "image",
					 { title: name ,
						icon: getValue(title, "src='","'") });
		
		}else if(getValue(post, 'src="http://www.viddler.com', '"') != ''){
			/*Not Working
			page.appendItem( 'http://' + getValue(post, 'http://', '/html5mobile/','endRef') + '/html5mobile/'
				, "video", { title: getValue(post, '>','</a></h2>', 'endRef')+'(video)',
				icon: getValue(post, 'poster="','"') });
			showtime.trace('viddler: ' +  getValue(post, 'src="http://www.viddler.com', '"','start','all').replace('"',''));
			showtime.trace('?: '+getValue(post, 'src="http://www.viddler.com', '"', 'start', ''));
			*/
		}

	}
	
	//Next
	if(next)
		page.appendItem( PREFIX + "cheezburger:" + next, "directory", { title: "Next" });
	page.loading = false; 
});

/*
 * College Humor
 * 
 */

plugin.addURI( PREFIX + "collegehumor:(.*)", function(page, category){
	
	page.type = "directory";
	page.contents = "items";
	page.metadata.title = 'College Humor';
	page.metadata.logo = COLLEGEHUMOR_LOGO;
	
	switch(category){
		case 'all':
			page.appendItem( PREFIX + 'collegehumor:list:www.collegehumor.com/pictures', "directory",
				 { title: 'Pictures',
					icon: COLLEGEHUMOR_LOGO });
			page.appendItem( PREFIX + 'collegehumor:list:www.collegehumor.com/videos', "directory",
				 { title: 'Videos',
					icon: COLLEGEHUMOR_LOGO });
		break;
		
		case 'pictures':
			for each (cat in COLLEGEHUMOR_PICTURES)
				page.appendItem( PREFIX + 'collegehumor:list:' + cat.link, "directory",
				 { title: cat.name,
					icon: COLLEGEHUMOR_LOGO });
		break;
		
		case 'videos':
			for each (cat in COLLEGEHUMOR_VIDEOS)
				page.appendItem( PREFIX + 'collegehumor:list:' + cat.link, "directory",
				 { title: cat.name,
					icon: COLLEGEHUMOR_LOGO });
		break;
		
		case 'default':
			showtime.trace('Error!');
		break;	
	}
	page.loading = false; 
});


plugin.addURI( PREFIX + "collegehumor:list:(.*)", function(page, site){
	
	page.type = "directory";
	page.contents = "list";
	page.metadata.logo = COLLEGEHUMOR_LOGO;
	
	var content = showtime.httpGet('http://' + site).toString();

	page.metadata.title = getValue(content, '<title>', '</title>');
	if(content.indexOf('">Next')!=-1)
		var next  = getValue(content, 'href="','">Next<','endRef');
	content = getValue(content, '<div class="media_list cfx">', '<h5 class="module_title">Newsletter');
	content = cleanString(content);
	content = content.split('<!--VIEWDATA:');
	var open =null;
	for each (var video in content){
		if(getValue(video,'title="','"')!=''){
			if(site.indexOf('/pictures') !=-1)
				open = PREFIX + 'collegehumor:list:' + site; //todo: open bigger
			else
				open = PREFIX + 'collegehumor:play:' + getValue(video, '"/video/', '/');
			page.appendItem( open, "video",
			 { title: getValue(video,'title="','"'),
				icon: getValue(video, 'img src="','"'),
				description: getValue(video, '<p>', '</p>') });
		}
	}	
	
	if(site.indexOf('/pictures')!=-1)
		page.appendItem( PREFIX + 'collegehumor:pictures', "directory", { title: 'Categories' });
	else
		page.appendItem( PREFIX + 'collegehumor:videos', "directory", { title: 'Categories' })

	if(next)
		page.appendItem( PREFIX + "collegehumor:list:www.collegehumor.com" + escape(next), "directory", { title: "Next" });
	page.loading = false; 
});


plugin.addURI( PREFIX + "collegehumor:play:(.*)", function(page, id){
	
	var content = showtime.httpGet('http://www.collegehumor.com/moogaloop/video/'+id).toString();
	
	page.source = "videoparams:" + showtime.JSONEncode({      
		title: getValue(content, '<caption>','</caption>'),     
		sources: [
		{	
			url: 'http://' + getValue(content, 'http://', '.mp4', 'endRef') +'.mp4'
		}]    
	});    
	page.type = "video";
});



function cleanString(string) {
	for each(var charr in CHAR_LIST)
		string = string.replace(charr[0], charr[1]);

	return string;
}


function getValue(text, start_string, end_string, start, start_offset , end_offset)
{

	if(start == null)
		start = 'start';
		
	if(start_offset == null)
		start_offset = 0;		
	if(start_offset == 'all')
		start_offset = -start_string.length;
	
	if(end_offset == null)
		end_offset = 0;
	
	switch(start){
		case 'start':
			if (text.indexOf(start_string)!=-1 && 
				text.indexOf(end_string, text.indexOf(start_string) + start_string.length)!=-1) {
				var begin_temp = text.indexOf(start_string) + start_string.toString().length + start_offset;
				var end_temp = text.indexOf(end_string, begin_temp) + end_offset;				
				return text.slice(begin_temp, end_temp);
			}
			break;
		
		case 'end':
			if (text.indexOf(start_string)!=-1 && 
				text.indexOf(end_string, text.lastIndexOf(start_string) + start_string.length)!=-1) {
				var begin_temp = text.lastIndexOf(start_string) + start_string.length + start_offset;
				var end_temp = text.indexOf(end_string, begin_temp) + end_offset;				
				return text.slice(begin_temp, end_temp);
			}
			break;
			
		case 'endRef':
				if (text.indexOf(start_string)!=-1 && 
					text.indexOf(end_string)!=-1) {
					var end_temp = text.lastIndexOf(end_string) -1 + end_offset;				
					var begin_temp = text.lastIndexOf(start_string, end_temp) + start_string.length + start_offset;
					return text.slice(begin_temp, end_temp +1);
				}
				break;
		
		default:
			break;	
	}
	showtime.trace('Get Value error!');
	return '';
}

function fileSupport(string) {
	if(service.gif == '1')
		return string;
	var fileType = string.slice(string.lastIndexOf('.'),string.length);
	if(fileType.indexOf('gif') == -1)
		return string;
	else
		return '';
}
	
plugin.addURI(PREFIX + "start", startPage);
})(this);
