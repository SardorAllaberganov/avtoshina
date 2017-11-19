var floatPanel = new McFloatPanel();
function McFloatPanel(){
	var i=[],
	s=[],
	h="className",
	t="getElementsByClassName",
	d="length",
	m="style",
	B="height",
	c="scrollTop",
	k="offsetHeight",
	e=document,
	b=document.documentElement,
	j=function(a,c,b)
	{
		if(a.addEventListener)
			a.addEventListener(c,b,false);
		else a.attachEvent&&a.attachEvent
			("on"+c,b)
	},
	O=function(a,c)
	{
		var b=a[d];
		while(b--)
			if(a[b]===c)
				return true;
			return false
		},
		g=function(b,a){
			return O(b[h].split(" "),a)
		},
		q=function(a,b){
			if(!g(a,b))
				if(!a[h])a[h]=b;
			else a[h]+=" "+b
		},
	p=function(a,f){
		if(a[h]&&g(a,f)){
			for(var e="",c=a[h].split(" "),b=0,i=c[d];b<i;b++)
				if(c[b]!==f)e+=c[b]+" ";
			a[h]=e.replace(/^\s+|\s+$/g,"")
		}
	},
	n=function(){
		return window.pageYOffset||b[c]
	},
	z=function(a){
		return a.getBoundingClientRect().top
	},

I=function(){
	var f=[],c,b;
	if(e[t]){
		f=e[t]("float-panel");
		i=e[t]("slideanim")
	}
	else{
		var k=e.getElementsByTagName("*");
		c=k[d];
		while(c--)g(k[c],"float-panel")&&f.push(k[c])
	}
c=f[d];
for(var h=0;h<c;h++){
	b=s[h]=f[h];
	b.oT=parseInt(b.getAttribute("data-top")||0);
	b.oS=parseInt(b.getAttribute("data-scroll")||0);
	if(b.oS>20&&o(b,"position")==a)b.aF=1;
	b.pH=e.createElement("div");
	b.pH[m].width=b.offsetWidth+"px";
	b.pH[m][l]="none";
	b.parentNode.insertBefore(b.pH,b.nextSibling)
}
if(s[d]){
	setTimeout(x,160);
	j(window,"scroll",x)
}
},f,
D=200,E=0,r,u,H=function(){
	return window.innerWidth||b.clientWidth||e.body.clientWidth
};

function A(){
	clearTimeout(u);
	if(n()>D&&H()>E){
		u=setTimeout(function(){
			p(f,"mcOut")
		},60);
		f[m][l]="block"
	}
	else{
		q(f,"mcOut");
		u=setTimeout(function(){
			f[m][l]="none"
		},200)
	}
}
var N=function(){
	f=e.getElementById("backtop");
	if(f){
		var a=f.getAttribute("data-v-w");
		if(a){
			a=a.replace(/\s/g,"").split(",");
			D=parseInt(a[0]);
			if(a[d]>1)E=parseInt(a[1])
		}
	j(f,"click",K);
	j(window,"scroll",A);
	A()}
},
v=function(){
	for(var c=n(),e=c+window.innerHeight,g=i[d],b,f,a=0;a<g;a++){
		b=c+z(i[a]),f=b+i[a][k];
		if(b<e)q(i[a],"slide");
		else p(i[a],"slide")
	}
},
G=function(){
	if(i[d]){
		j(window,"scroll",v);
		v()
	}
},
M=function(){I();
	N();
	G()
};
j(window,"load",M);
}