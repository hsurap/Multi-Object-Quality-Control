// var about=document.getElementById('aboutjs');
// var skill=document.getElementById('skill.js');
// var education=document.getElementById('educationjs');
// var portfolio=document.getElementById('portfoliojs');
// var contact=document.getElementById('contactjs');
var navmenuanchor=document.querySelectorAll('.nav-menu a');
var aboutsec=document.getElementById('about');
var skillsec=document.getElementById('skills');
var educationsec=document.getElementById('education');
var portfoliosec=document.getElementById('portfolio');
var contactsec=document.getElementById('contact');

for (var i=0;i<navmenuanchor.length;i++)
{
	navmenuanchor[i].addEventListener('click',function(event){
	event.preventDefault();
	var targetsectionid=this.getAttribute("href");
	targetsectionid=targetsectionid.substring(1);
	// console.log(targetsectionid)
	var targetsection=document.getElementById(targetsectionid);
	// console.log(targetsection)
	var h=targetsection.getBoundingClientRect().top;
	// console.log(h);
	var id=setInterval(function(){
		if(h<=0)
		{
			clearInterval(id);
			return;
		}
		h=h-50;
		scrollBy(0,50);
	},30)
})
}
// skill.addEventListener('click',function(event){
// 	event.preventDefault();
// 	var h=skillsec.getBoundingClientRect().top;
// 	var id=setInterval(function(){
// 		if(h<=0)
// 		{
// 			clearInterval(id);
// 			return;
// 		}
// 		h=h-50;
// 		scrollBy(0,50);
// 	},50)
// });