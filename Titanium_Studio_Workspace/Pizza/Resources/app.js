// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#8C0221');

//// ---- Menu window, positioned on the left
var menuWindow = Ti.UI.createWindow({
    top:0,
    left:0,
    width:150
});
menuWindow.open();
 
//// ---- Menu Table
// Menu Titles
var menuTitles = [
    {title: 'Menu 1'},
    {title: 'Menu 2'},
    {title: 'Menu 3'},
    {title: 'Menu 4'},
    {title: 'Menu 5'},
    {title: 'Menu 6'}
];
// Tableview
var tableView = Ti.UI.createTableView({
    data:menuTitles
});
menuWindow.add(tableView);

//// ---- Window with navigationGroup
var navWindow = Ti.UI.createWindow({
    width:320 // Set the width of the sliding window to avoid cut out from animation
});
navWindow.open();
 
// Main window
var win = Ti.UI.createWindow({
    title:'Main Window',
    backgroundColor:'#28292c',
    barColor:'#28292c'
});
 
// NavigationGroup
var navGroup = Ti.UI.createNavigationGroup({
    window:win
});
navWindow.add(navGroup);
 
// Top left button
var menuButton = Ti.UI.createButton({
    title:'Menu',
    toggle:false // Custom property for menu toggle
});
 
win.setLeftNavButton(menuButton);

menuButton.addEventListener('click', function(e){
    // If the menu is opened
    if(e.source.toggle == true){
        navWindow.animate({
            left:0,
            duration:400,
            curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        e.source.toggle = false;
    }
    // If the menu isn't opened
    else{
        navWindow.animate({
            left:150,
            duration:400,
            curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        e.source.toggle  = true;
    }
});

//var main = Ti.UI.createWindow({
    //url:'main_windows/main.js',
    //height:Ti.Platform.displayCaps.platformHeight,
    //width:Ti.Platform.displayCaps.platformWidth,
    //fullscreen:true,
    //navBarHidden:true
//});
//main.open();
