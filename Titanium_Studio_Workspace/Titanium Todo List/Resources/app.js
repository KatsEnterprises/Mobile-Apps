if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
else {
	
	var tabGroup = Titanium.UI.createTabGroup();
	var win1 = Titanium.UI.createWindow({title: "Tab 1", backgroundColor: "#fff"});
	var tab1 = Titanium.UI.createTab({icon: "images/KS_nav_views.png", title: "Tab 1", window:win1});
	var win2 = Titanium.UI.createWindow({title: "Tab 2", backgroundColor: "#fff"});
	var tab2 = Titanium.UI.createTab({icon: "images/KS_nav_views.png", title: "Tab 2", window:win2 });
	
var table1 =  Titanium.UI.createTableView({
	data:[
		{title:"Row 1 - simple row"},
		{title:"Row 2 -  with child", hasChild:true},
		{title:"Row 3 -  with detail", hasDetail:true},
		{title:"Row 4 -  with check", hasCheck:true},
		{title:"Row 5 -  red background", backgroundColor:"#f00"}
	]	
});
 
win1.add(table1);
	
//	var view1 = Titanium.UI.createView({ })
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	tabGroup.title = "To Do List";
	tabGroup.open();
}