/** Another minecraft theme mod?!!?! **/
var app=new function(){this.name="Otherside",this.version="1",this.date="2024",this.folder="asset-v1/",this.looptime=10434,this.bpm=92,this.totalframe=500,this.nbpolo=7,this.nbloopbonus=3,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=68,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#143434",this.col0="#b1e283",this.col1="#4baa63",this.col2="#34794c",this.col3="#154c3c",this.col4="#143434",this.animearray=[{name:"1_Exolotl",color:"4baa62",uniqsnd:!0},{name:"2_Azalea Bush",color:"4baa62",uniqsnd:!0},{name:"3_Drip leaves",color:"4baa62",uniqsnd:!0},{name:"4_Lush Vines",color:"4baa62",uniqsnd:!0},{name:"5_Glare",color:"4baa62",uniqsnd:!1},{name:"6_Raw Copper",color:"e45444",uniqsnd:!0},{name:"7_Dripstone",color:"e45444",uniqsnd:!0},{name:"8_Copper Golem",color:"e45444",uniqsnd:!1},{name:"9_Dripstone Brass",color:"e45444",uniqsnd:!1},{name:"10_Caves Ambience",color:"e45444",uniqsnd:!0},{name:"11_Geode Guardian",color:"af81fb",uniqsnd:!0},{name:"12_Crystal Notes",color:"af81fb",uniqsnd:!1},{name:"13_Amethyst Collector",color:"af81fb",uniqsnd:!1},{name:"14_Enderman",color:"af81fb",uniqsnd:!1},{name:"15_Amethyst Statue",color:"af81fb",uniqsnd:!1},{name:"16_Warden",color:"53e3cb",uniqsnd:!1},{name:"17_Survivor",color:"53e3cb",uniqsnd:!1},{name:"18_Traveler",color:"53e3cb",uniqsnd:!1},{name:"19_Elderly Allay",color:"53e3cb",uniqsnd:!1},{name:"20_Sweden",color:"53e3cb",uniqsnd:!1}],this.bonusarray=[],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};