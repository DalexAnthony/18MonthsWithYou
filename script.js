/* ================================================================
   CIELO NOCTURNO v5 - TE AMO COMPLETO + I LOVE YOU FINALE
   Colores morado/borgona. Todo interactivo. Estrellas reaparecen.
   ================================================================ */
const C=document.getElementById('skyCanvas'),X=C.getContext('2d');
const banner=document.getElementById('phraseBanner');
const pMonth=document.getElementById('phraseMonth');
const pText=document.getElementById('phraseText');
const hintEl=document.getElementById('hintText');
const PH = [
  "Odio la distancia, pero me gusta saber que, incluso en los días en los que no puedo verte, hay tantas cosas que me recuerdan a ti. A veces basta una canción, una palabra o algo que me hubiera gustado contarte para sentirte un poquito más cerca.",
  "De todas las personas que existen, qué bonito haber coincidido contigo. No sé qué estaba haciendo antes de conocerte, pero ahora hay muchas cosas que me gustan más simplemente porque puedo compartirlas contigo.",
  "Me gustan tantas cosas de ti que a veces ni sé por dónde empezar. Tu forma de hablar, tus esquizofrenia, las cosas que me cuentas y hasta esos pequeños detalles que seguramente haces sin darte cuenta.",
  "Hay días en los que quisiera tenerte aquí, no para hacer algo especial, sino para abrazarte un rato y quedarme contigo. Creo que a veces no necesito mucho más que eso.",
  "Qué curioso es escuchar una canción y pensar en ti sin siquiera proponérmelo. Ahora hay melodías que tienen un poquito de tu nombre, aunque nunca lo mencionen.",
  "No sé si te lo he dicho suficientes veces, pero me gusta lo que somos. Me gusta lo que hemos compartido, lo que hemos aprendido y la manera en que, poco a poco, hemos ido construyendo nuestra propia historia.",
  "Algún día quiero despertar y que seas lo primero que vea, preguntarte si dormiste bien y empezar el día contigo. Mientras tanto, me conformo con desearte buenos días y esperar que el tuyo sea bonito.",
  "No sé si tengo un lugar favorito en el mundo, pero sí sé con quién me gustaría conocer muchos de ellos. Y si al final terminamos quedándonos en casa, creo que tampoco estaría nada mal.",
  "Ya son dieciocho meses de tenerte en mi vida y todavía me hace ilusión hablar contigo, verte y contarte mis cosas. Me gusta que, después de todo este tiempo, sigas siendo esa persona con la que quiero compartir tantas partes de mi día.",
  "No tienes que hacer nada extraordinario para hacerme feliz. Muchas veces eres tú siendo tú, contándome cualquier cosa o haciéndome reír por alguna tontería, y yo pensando en lo mucho que me gusta tenerte en mi vida.",
  "Quiero vivir contigo esos días de los que después casi no nos acordamos, porque no pasó nada especial. Esos días de conversar, comer algo, reírnos por cualquier cosa y terminar la noche sin más planes que seguir juntos.",
  "A veces te extraño por cosas muy pequeñas. Porque vi algo que te habría gustado, porque me pasó algo gracioso o porque simplemente tuve ganas de darte un beso. Supongo que querer a alguien también es eso: encontrar motivos para buscarla hasta en los días más normales.",
  "Hay algo bonito en saber que puedo hacerte sonreír, aunque sea desde lejos. Me gusta imaginar tu carita cuando algo te da risa y pensar que, de alguna manera, pude formar parte de ese momento.",
  "Todavía nos quedan tantas cosas por hacer, tantos lugares por conocer y tantas historias que ni siquiera imaginamos. Me gusta pensar en todo eso, pero más me gusta pensar que puedo vivirlo contigo, poquito a poquito.",
  "Me gustas tú, no solamente tus días buenos ni esa versión tuya que está feliz todo el tiempo. También me gusta poder conocerte cuando estás cansada, cuando algo te preocupa o cuando simplemente quieres ser tú sin tener que explicar demasiado.",
  "Tengo varios besos guardados para ti, aunque no sé si eso sea posible. Por ahora me toca mandártelos de lejos, pero algún día podré darte todos esos que me hacen falta cada vez que nos despedimos.",
  "A veces miro las estrellas y me pregunto si tú también estarás viendo alguna. Me gusta imaginar que aunque estemos lejos, hay pequeñas cosas que podemos compartir sin estar en el mismo lugar.",
  "No sé cómo se verá nuestra historia dentro de muchos años, pero me gusta que hoy seas tú quien está conmigo. Gracias por estos dieciocho meses amor, por los momentos bonitos y por todas esas pequeñas cosas que hacen que te quiera como te quiero. Ojalá nos queden muchísimas estrellas más que contar, muchos abrazos que darnos y muchos días en los que ya no tengamos que extrañarnos tanto."
];

/* ---- MAIN STARS ---- */
const SS=[{x:9,y:34},{x:21,y:34},{x:15,y:66},{x:27,y:34},{x:37,y:34},{x:27,y:66},{x:45,y:66},{x:51,y:34},{x:57,y:66},{x:48,y:52},{x:64,y:66},{x:68,y:34},{x:76,y:34},{x:80,y:66},{x:88,y:34},{x:95,y:50},{x:88,y:66},{x:81,y:50}];
const FILL=[{x:15,y:34,n:[0,1]},{x:15,y:50,n:[0,1,2]},{x:27,y:50,n:[3,5]},{x:34,y:50,n:[3,5]},{x:37,y:66,n:[3,4,5]},{x:54,y:52,n:[6,7,8,9]},{x:72,y:56,n:[11,12]},{x:66,y:50,n:[10,11]},{x:78,y:50,n:[12,13]}];
const STR=[{n:[0,1],d:'l',p:[0,1]},{n:[0,1,2],d:'ts',p:[0,1,2]},{n:[3,4],d:'l',p:[3,4]},{n:[3,5],d:'l',p:[3,5]},{n:[3,4,5],d:'eb',p:[3,4,5]},{n:[6,7],d:'l',p:[6,7]},{n:[7,8],d:'l',p:[7,8]},{n:[6,7,8,9],d:'ac',p:[9,7,8]},{n:[10,11],d:'l',p:[10,11]},{n:[12,13],d:'l',p:[12,13]},{n:[11,12],d:'mv',p:[11,12,10,13]},{n:[14,15],d:'l',p:[14,15]},{n:[15,16],d:'l',p:[15,16]},{n:[16,17],d:'l',p:[16,17]},{n:[17,14],d:'l',p:[17,14]}];

/* ---- COLORES MORADO / BORGONA ---- */
const CLR=['148,80,200','180,100,220','138,43,226','186,85,211','140,20,70','170,40,90','190,60,120','160,50,150','120,30,160','220,120,200','200,80,160','160,60,130'];

/* ---- LETRAS INDIVIDUALES PARA FIREWORKS ---- */
const LP={
  I:[[0,-3],[0,-2],[0,-1],[0,0],[0,1],[0,2],[0,3],[-1,-3],[1,-3],[-1,3],[1,3]],
  L:[[-2,-3],[-2,-2],[-2,-1],[-2,0],[-2,1],[-2,2],[-2,3],[-1,3],[0,3],[1,3],[2,3]],
  O:[[-1,-3],[0,-3],[1,-3],[-2,-2],[2,-2],[-2,-1],[2,-1],[-2,0],[2,0],[-2,1],[2,1],[-2,2],[2,2],[-1,3],[0,3],[1,3]],
  V:[[-2,-3],[2,-3],[-2,-2],[2,-2],[-1,-1],[1,-1],[-1,0],[1,0],[0,1],[0,2],[0,3]],
  E:[[-2,-3],[-1,-3],[0,-3],[1,-3],[2,-3],[-2,-2],[-2,-1],[-1,-1],[0,-1],[1,-1],[-2,0],[-2,1],[-2,2],[-1,2],[0,2],[-2,3],[-1,3],[0,3],[1,3],[2,3]],
  Y:[[-2,-3],[2,-3],[-1,-2],[1,-2],[0,-1],[0,0],[0,1],[0,2],[0,3]],
  U:[[-2,-3],[2,-3],[-2,-2],[2,-2],[-2,-1],[2,-1],[-2,0],[2,0],[-2,1],[2,1],[-1,2],[1,2],[-1,3],[0,3],[1,3]]
};

/* ---- "TE AMO" COMPLETO (patron combinado) ---- */
const TEAMO=[];
// T at offset -12
[[- 2,0],[-1,0],[0,0],[1,0],[2,0],[0,1],[0,2],[0,3],[0,4],[0,5]].forEach(function(p){TEAMO.push([p[0]-12,p[1]]);});
// E at offset -6
[[-2,0],[-1,0],[0,0],[1,0],[2,0],[-2,1],[-2,2],[-1,2],[0,2],[-2,3],[-2,4],[-2,5],[-1,5],[0,5],[1,5],[2,5]].forEach(function(p){TEAMO.push([p[0]-6,p[1]]);});
// A at offset 2
[[0,0],[-1,1],[1,1],[-2,2],[2,2],[-2,3],[-1,3],[0,3],[1,3],[2,3],[-2,4],[2,4],[-2,5],[2,5]].forEach(function(p){TEAMO.push([p[0]+2,p[1]]);});
// M at offset 8
[[-2,0],[2,0],[-2,1],[-1,1],[1,1],[2,1],[-2,2],[0,2],[2,2],[-2,3],[2,3],[-2,4],[2,4],[-2,5],[2,5]].forEach(function(p){TEAMO.push([p[0]+8,p[1]]);});
// O at offset 14
[[-1,0],[0,0],[1,0],[-2,1],[2,1],[-2,2],[2,2],[-2,3],[2,3],[-2,4],[2,4],[-1,5],[0,5],[1,5]].forEach(function(p){TEAMO.push([p[0]+14,p[1]]);});

/* ---- STATE ---- */
let order=[],W,H,mx=-200,my=-200,mouseDown=false;
let fx=[],trail=[],rings=[],rockets=[];
let lineAn={},shooters=[];
let finaleActive=false,lastFinale=0;

/* ---- BACKGROUND AUDIO (canción de la carpeta songs) ---- */
const bgAudio = document.getElementById('bgAudio');
const musicToggleBtn = document.getElementById('musicToggleBtn');
const volumeSlider = document.getElementById('volumeSlider');
let isMusicStarted = false;

// Inicializar volumen
if (bgAudio && volumeSlider) {
  bgAudio.volume = parseFloat(volumeSlider.value);
  volumeSlider.addEventListener('input', (e) => {
    bgAudio.volume = parseFloat(e.target.value);
  });
  volumeSlider.addEventListener('click', (e) => e.stopPropagation());
  volumeSlider.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });
}

function playSong() {
  if (bgAudio) {
    bgAudio.play().then(() => {
      isMusicStarted = true;
      if (musicToggleBtn) musicToggleBtn.classList.add('playing');
    }).catch(() => {});
  }
}

function toggleSong() {
  if (!bgAudio) return;
  if (bgAudio.paused) {
    playSong();
  } else {
    bgAudio.pause();
    if (musicToggleBtn) musicToggleBtn.classList.remove('playing');
  }
}

if (musicToggleBtn) {
  musicToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSong();
  });
}

// Iniciar canción con la primera interacción del usuario en la pantalla
window.addEventListener('click', () => {
  if (!isMusicStarted) playSong();
}, { once: true });
window.addEventListener('touchstart', () => {
  if (!isMusicStarted) playSong();
}, { once: true });

/* ---- RESIZE ---- */
function resize(){W=window.innerWidth;H=window.innerHeight;C.width=W;C.height=H;initBg();}
window.addEventListener('resize',resize);

/* ---- BG STARS ---- */
let bgT=[],bgM=[];
function initBg(){
  bgT=[];bgM=[];
  for(var i=0;i<90;i++)bgT.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.2+0.4,a:Math.random()*0.5+0.25,sp:Math.random()*0.02+0.008,ph:Math.random()*6.28,blue:Math.random()<0.3,alive:true,respawn:0});
  for(var i=0;i<20;i++)bgM.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2.2+1.5,sp:Math.random()*0.025+0.01,ph:Math.random()*6.28,rot:Math.random()*3.14,rs:(Math.random()-0.5)*0.01,warm:Math.random(),alive:true,respawn:0});
}
resize();

/* ---- HELPERS ---- */
function px(s){return{x:(s.x/100)*W,y:(s.y/100)*H}}
function has(i){return order.includes(i)}
function allH(a){return a.every(has)}
function rndClr(){return CLR[Math.floor(Math.random()*CLR.length)];}

/* ---- SPARKLE ---- */
function spark(x,y,r,rays,col,rot){
  X.save();X.translate(x,y);X.rotate(rot||0);
  X.fillStyle=col;X.strokeStyle=col;
  X.lineWidth=Math.max(1,r*0.35);X.lineCap='round';
  X.beginPath();X.arc(0,0,r*0.5,0,6.28);X.fill();
  var l=r*2;
  X.beginPath();X.moveTo(0,-l);X.lineTo(0,l);X.moveTo(-l,0);X.lineTo(l,0);X.stroke();
  if(rays>=8){var d=l*0.6;X.beginPath();X.moveTo(-d,-d);X.lineTo(d,d);X.moveTo(d,-d);X.lineTo(-d,d);X.stroke();}
  X.restore();
}

/* ---- SKY + NEBULA ---- */
function drawSky(t){
  var g=X.createRadialGradient(W*0.7,H*0.2,0,W*0.5,H*0.5,Math.max(W,H));
  g.addColorStop(0,'#0d1b3e');g.addColorStop(0.45,'#081428');g.addColorStop(1,'#020810');
  X.fillStyle=g;X.fillRect(0,0,W,H);
  [[.2,.7,.22,'80,40,180',.04],[.75,.28,.28,'40,80,200',.045],[.5,.5,.18,'160,50,110',.025],[.85,.72,.2,'50,100,200',.03]].forEach(function(n,i){
    var cx2=(n[0]+Math.sin(t*0.15+i)*0.03)*W,cy2=(n[1]+Math.cos(t*0.12+i*2)*0.02)*H,cr=n[2]*Math.max(W,H);
    var g2=X.createRadialGradient(cx2,cy2,0,cx2,cy2,cr);
    g2.addColorStop(0,'rgba('+n[3]+','+n[4]+')');g2.addColorStop(0.5,'rgba('+n[3]+','+(n[4]*0.3)+')');g2.addColorStop(1,'rgba(0,0,0,0)');
    X.fillStyle=g2;X.fillRect(0,0,W,H);
  });
}

/* ---- MOON ---- */
function drawMoon(){
  var cx2=W*0.86,cy2=H*0.13,r=Math.min(W,H)*0.04;
  X.save();
  var g=X.createRadialGradient(cx2,cy2,r*0.5,cx2,cy2,r*2.8);
  g.addColorStop(0,'rgba(255,240,180,0.12)');g.addColorStop(1,'rgba(255,240,180,0)');
  X.fillStyle=g;X.beginPath();X.arc(cx2,cy2,r*2.8,0,6.28);X.fill();
  X.beginPath();X.arc(cx2,cy2,r,0,6.28);X.fillStyle='#fceea7';X.shadowColor='rgba(255,243,176,0.7)';X.shadowBlur=18;X.fill();
  X.globalCompositeOperation='destination-out';
  X.beginPath();X.arc(cx2-r*0.45,cy2-r*0.18,r*0.85,0,6.28);X.fill();
  X.restore();
}

/* ---- BG STARS DRAW ---- */
function drawBg(t){
  bgT.forEach(function(s){
    if(!s.alive){s.respawn-=0.016;if(s.respawn<=0){s.alive=true;s.x=Math.random()*W;s.y=Math.random()*H;}return;}
    var a=s.a*(0.5+0.5*Math.sin(t*s.sp*12+s.ph));
    X.beginPath();X.arc(s.x,s.y,s.r,0,6.28);
    X.fillStyle=s.blue?'rgba(170,200,255,'+a+')':'rgba(255,255,255,'+a+')';X.fill();
  });
  bgM.forEach(function(s){
    if(!s.alive){s.respawn-=0.016;if(s.respawn<=0){s.alive=true;s.x=Math.random()*W;s.y=Math.random()*H;}return;}
    s.rot+=s.rs;
    var p=0.65+0.4*Math.sin(t*s.sp*12+s.ph);
    var c=s.warm>0.5?'252,215,90':'190,215,255';
    spark(s.x,s.y,s.r*p,4,'rgba('+c+','+(0.4*p+0.15)+')',s.rot);
  });
}

/* ---- COMETS ---- */
function drawShooters(t){
  if(Math.random()<0.01&&shooters.length<2){
    shooters.push({x:Math.random()*W*0.6+W*0.1,y:Math.random()*H*0.3,len:Math.random()*100+70,spd:Math.random()*8+6,op:1,ang:Math.PI/4.5+(Math.random()-0.5)*0.12});
  }
  for(var i=shooters.length-1;i>=0;i--){
    var s=shooters[i];
    var tx2=s.x-Math.cos(s.ang)*s.len,ty2=s.y-Math.sin(s.ang)*s.len;
    var g=X.createLinearGradient(s.x,s.y,tx2,ty2);
    g.addColorStop(0,'rgba(255,255,255,'+s.op+')');g.addColorStop(0.15,'rgba(255,230,150,'+(s.op*0.8)+')');g.addColorStop(1,'rgba(255,255,255,0)');
    X.beginPath();X.moveTo(s.x,s.y);X.lineTo(tx2,ty2);X.strokeStyle=g;X.lineWidth=2.5;X.stroke();
    X.save();X.shadowColor='rgba(255,255,255,0.8)';X.shadowBlur=12;
    X.beginPath();X.arc(s.x,s.y,3,0,6.28);X.fillStyle='rgba(255,255,255,'+s.op+')';X.fill();X.restore();
    if(Math.random()<0.3)fx.push({x:s.x+(Math.random()-0.5)*6,y:s.y+(Math.random()-0.5)*6,vx:(Math.random()-0.5)*0.5,vy:(Math.random()-0.5)*0.5,r:Math.random()*1.5+0.5,life:0.5,dec:0.02,c:'255,230,150'});
    s.x+=Math.cos(s.ang)*s.spd;s.y+=Math.sin(s.ang)*s.spd;s.op-=0.012;
    if(s.op<=0)shooters.splice(i,1);
  }
}

/* ---- FX PARTICLES ---- */
function updateFx(){
  for(var i=fx.length-1;i>=0;i--){
    var p=fx[i];p.x+=p.vx;p.y+=p.vy;if(p.grav)p.vy+=p.grav;p.life-=p.dec;
    if(p.life<=0){fx.splice(i,1);continue;}
    X.beginPath();X.arc(p.x,p.y,p.r*Math.min(1,p.life*2),0,6.28);
    X.fillStyle='rgba('+p.c+','+Math.min(1,p.life)+')';X.fill();
  }
  if(fx.length>500)fx.splice(0,fx.length-500);
}

/* ---- RINGS ---- */
function updateRings(){
  for(var i=rings.length-1;i>=0;i--){
    var r=rings[i];r.rad+=r.spd;r.op-=r.dec;
    if(r.op<=0){rings.splice(i,1);continue;}
    X.beginPath();X.arc(r.x,r.y,r.rad,0,6.28);
    X.strokeStyle='rgba('+r.c+','+r.op+')';X.lineWidth=r.w;X.stroke();
  }
}

/* ---- TRAIL ---- */
function updateTrail(){
  for(var i=trail.length-1;i>=0;i--){
    var t2=trail[i];t2.life-=0.03;if(t2.life<=0){trail.splice(i,1);continue;}
    X.beginPath();X.arc(t2.x,t2.y,t2.r*t2.life,0,6.28);
    X.fillStyle='rgba(180,140,220,'+t2.life*0.5+')';X.fill();
  }
  if(trail.length>60)trail.splice(0,trail.length-60);
}

/* ---- EXPLOTAR "TE AMO" COMPLETO (bg stars y cometas) ---- */
function explodeTeAmo(cx2,cy2){
  chord(Math.random()*5+8);
  var scale=Math.min(W,H)*0.008;
  TEAMO.forEach(function(pt){
    var tx2=cx2+pt[0]*scale,ty2=cy2+pt[1]*scale;
    fx.push({x:cx2,y:cy2,vx:(tx2-cx2)*0.1+(Math.random()-0.5)*0.4,vy:(ty2-cy2)*0.1+(Math.random()-0.5)*0.4,r:Math.random()*2+1.2,life:1.5,dec:0.008+Math.random()*0.004,c:rndClr(),grav:0.01});
  });
  for(var i=0;i<10;i++){var a=Math.random()*6.28,sp=Math.random()*2.5+1.5;fx.push({x:cx2,y:cy2,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,r:Math.random()*1.5+0.5,life:0.6,dec:0.02,c:rndClr(),grav:0.015});}
  rings.push({x:cx2,y:cy2,rad:5,spd:3,op:0.5,dec:0.01,c:'180,100,220',w:2});
}

/* ---- EXPLOTAR UNA LETRA INDIVIDUAL (para finale I LOVE YOU) ---- */
function explodeLetter(cx2,cy2,letter){
  var pts=LP[letter];if(!pts)return;
  var scale=Math.min(W,H)*0.014;
  pts.forEach(function(pt){
    var tx2=cx2+pt[0]*scale,ty2=cy2+pt[1]*scale;
    fx.push({x:cx2,y:cy2,vx:(tx2-cx2)*0.09+(Math.random()-0.5)*0.3,vy:(ty2-cy2)*0.09+(Math.random()-0.5)*0.3,r:Math.random()*2.5+1.5,life:2,dec:0.006+Math.random()*0.003,c:rndClr(),grav:0.008});
  });
  for(var i=0;i<8;i++){var a=Math.random()*6.28,sp=Math.random()*2+1;fx.push({x:cx2,y:cy2,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,r:Math.random()*1.5+0.5,life:0.5,dec:0.02,c:rndClr(),grav:0.02});}
  rings.push({x:cx2,y:cy2,rad:5,spd:2.5,op:0.5,dec:0.01,c:'160,50,150',w:2});
}

/* ---- ROCKETS ---- */
function updateRockets(){
  for(var i=rockets.length-1;i>=0;i--){
    var r=rockets[i];
    fx.push({x:r.x+(Math.random()-0.5)*3,y:r.y,vx:(Math.random()-0.5)*0.5,vy:Math.random()*0.5+0.3,r:Math.random()*1.5+0.5,life:0.4,dec:0.025,c:rndClr()});
    r.y-=r.spd;
    X.beginPath();X.arc(r.x,r.y,2.5,0,6.28);X.fillStyle='rgba(220,180,255,'+r.op+')';X.fill();
    if(r.y<=r.ty){
      if(r.letter==='TEAMO')explodeTeAmo(r.x,r.y);
      else explodeLetter(r.x,r.y,r.letter);
      rockets.splice(i,1);
    }
  }
}

/* ---- AMBIENT FIREWORK: lanza "TE AMO" completo ---- */
function launchTeAmo(){
  var tx2=W*0.2+Math.random()*W*0.6;
  var ty2=H*0.15+Math.random()*H*0.2;
  rockets.push({x:tx2,y:H+10,tx:tx2,ty:ty2,spd:5+Math.random()*3,op:1,letter:'TEAMO'});
  chime(12,0.04);
}

/* ---- FINALE: I LOVE YOU (8 fuegos simultaneos) ---- */
function launchILoveYou(){
  var letters=['I','L','O','V','E','Y','O','U'];
  var positions=[0.08,0.20,0.32,0.44,0.56,0.68,0.80,0.92];
  var ty2=H*0.28+Math.random()*H*0.08;
  for(var i=0;i<8;i++){
    (function(idx){
      setTimeout(function(){
        var xp=W*positions[idx];
        rockets.push({x:xp,y:H+10,tx:xp,ty:ty2,spd:5+Math.random()*2,op:1,letter:letters[idx]});
      },idx*120);
    })(i);
  }
}

/* ---- POP BG STAR ---- */
function popBg(s){
  s.alive=false;s.respawn=0.8+Math.random()*1.2; // Rapido respawn!
  for(var i=0;i<8;i++){var a=Math.random()*6.28,sp=Math.random()*2+0.8;fx.push({x:s.x,y:s.y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,r:Math.random()*1.8+0.6,life:0.6,dec:0.02,c:rndClr()});}
  rings.push({x:s.x,y:s.y,rad:3,spd:2,op:0.4,dec:0.015,c:'180,100,220',w:1.5});
}

/* ---- POP COMET -> simple burst ---- */
function popComet(s,idx){shooters.splice(idx,1);for(var i=0;i<16;i++){var a=Math.random()*6.28,sp=Math.random()*3+1.5;fx.push({x:s.x,y:s.y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,r:Math.random()*2.2+0.8,life:0.8,dec:0.015,c:rndClr(),grav:0.02});}rings.push({x:s.x,y:s.y,rad:5,spd:3,op:0.5,dec:0.012,c:'180,100,220',w:2});}

/* ---- SKY RIPPLE ---- */
function skyRipple(x,y){
  rings.push({x:x,y:y,rad:5,spd:2,op:0.3,dec:0.008,c:'140,120,200',w:1.5});
  rings.push({x:x,y:y,rad:3,spd:1.2,op:0.2,dec:0.006,c:'180,150,220',w:1});
  for(var i=0;i<4;i++){var a=Math.random()*6.28,sp=Math.random()*1+0.5;fx.push({x:x,y:y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,r:Math.random()*1.2+0.5,life:0.4,dec:0.015,c:'180,160,220'});}
}

/* ---- CONSTELLATION LINES ---- */
function drawLines(t){
  X.save();X.lineCap='round';X.lineJoin='round';
  STR.forEach(function(st,si){
    if(!allH(st.n))return;
    if(lineAn[si]===undefined)lineAn[si]=0;
    if(lineAn[si]<1)lineAn[si]=Math.min(1,lineAn[si]+0.03);
    var pr=lineAn[si],gp=0.7+0.3*Math.sin(t*2+si);
    X.strokeStyle='rgba(240,214,138,'+(0.65*gp)+')';X.shadowColor='rgba(240,214,138,'+(0.4*gp)+')';X.shadowBlur=14;X.lineWidth=2.5;
    var p=st.p.map(function(i){return px(SS[i]);});
    X.beginPath();
    if(st.d==='l'){X.moveTo(p[0].x,p[0].y);X.lineTo(p[0].x+(p[1].x-p[0].x)*pr,p[0].y+(p[1].y-p[0].y)*pr);}
    else if(st.d==='ts'){var midx=(p[0].x+p[1].x)/2,midy=p[0].y;X.moveTo(midx,midy);X.lineTo(midx+(p[2].x-midx)*pr,midy+(p[2].y-midy)*pr);}
    else if(st.d==='eb'){var midY=(p[0].y+p[2].y)/2;X.moveTo(p[0].x,midY);X.lineTo(p[0].x+(p[1].x-p[0].x)*0.72*pr,midY);X.moveTo(p[2].x,p[2].y);X.lineTo(p[2].x+(p[1].x-p[2].x)*pr,p[2].y);}
    else if(st.d==='ac'){X.moveTo(p[0].x,p[0].y);X.lineTo(p[0].x+(((p[1].x+p[2].x)/2)-p[0].x)*pr,p[0].y);}
    else if(st.d==='mv'){var vx2=(p[0].x+p[1].x)/2,vy2=p[2].y*0.82+p[0].y*0.18;if(pr<=0.5){var t2=pr*2;X.moveTo(p[0].x,p[0].y);X.lineTo(p[0].x+(vx2-p[0].x)*t2,p[0].y+(vy2-p[0].y)*t2);}else{var t3=(pr-0.5)*2;X.moveTo(p[0].x,p[0].y);X.lineTo(vx2,vy2);X.lineTo(vx2+(p[1].x-vx2)*t3,vy2+(p[1].y-vy2)*t3);}}
    X.stroke();
  });
  X.restore();
}

/* ---- FILLER + MAIN STARS ---- */
function drawFill(t){FILL.forEach(function(f,i){if(!allH(f.n))return;var p2=px(f),pp=1+0.2*Math.sin(t*3+i*1.5);X.save();X.shadowColor='rgba(255,220,100,0.5)';X.shadowBlur=10;spark(p2.x,p2.y,5*pp,4,'rgba(240,214,138,0.7)',Math.sin(t*0.6+i)*0.12);X.restore();});}
function drawStars(t){
  SS.forEach(function(star,idx){
    var found=has(idx),p2=px(star),pp=1+0.18*Math.sin(t*3+idx*1.1),r=Math.sin(t*0.65+idx*0.9)*0.18;
    if(found){var num=order.indexOf(idx)+1;X.save();X.shadowColor='rgba(255,220,100,0.8)';X.shadowBlur=26;spark(p2.x,p2.y,8*pp,8,'rgba(255,255,255,0.92)',r);X.restore();spark(p2.x,p2.y,6*pp,8,'rgba(252,215,90,0.85)',r);X.fillStyle='rgba(240,214,138,0.9)';X.font='600 11px Cinzel,serif';X.textAlign='center';X.textBaseline='top';X.fillText(num,p2.x,p2.y+17);}
    else{var hd=Math.hypot(mx-p2.x,my-p2.y),hb=hd<50?1+(50-hd)/50*0.5:1;if(hd<50){var g=X.createRadialGradient(p2.x,p2.y,0,p2.x,p2.y,28*hb);g.addColorStop(0,'rgba(252,215,90,0.3)');g.addColorStop(1,'rgba(252,215,90,0)');X.fillStyle=g;X.beginPath();X.arc(p2.x,p2.y,28*hb,0,6.28);X.fill();}spark(p2.x,p2.y,4.5*pp*hb,4,'rgba(252,215,90,0.75)',r);}
  });
}

/* ---- GLOW ---- */
function drawGlow(){if(mx<0)return;var g=X.createRadialGradient(mx,my,0,mx,my,60);g.addColorStop(0,'rgba(180,140,220,0.04)');g.addColorStop(1,'rgba(180,140,220,0)');X.fillStyle=g;X.beginPath();X.arc(mx,my,60,0,6.28);X.fill();}

/* ---- DISCOVERY BURST ---- */
function spawnBurst(x,y){for(var i=0;i<14;i++){var a=Math.random()*6.28,sp=Math.random()*2.5+1;fx.push({x:x,y:y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,r:Math.random()*2+0.8,life:1,dec:Math.random()*0.02+0.015,c:rndClr(),grav:0.02});}}

/* ---- TYPEWRITER ---- */
var twT='',twI=0,twTm=null;
function tw(text){clearInterval(twTm);twT=text;twI=0;pText.textContent='';twTm=setInterval(function(){if(twI<twT.length)pText.textContent+=twT[twI++];else clearInterval(twTm);},25);}

/* ---- INPUT ---- */
function handleClick(cx2,cy2){
  for(var i=0;i<SS.length;i++){var p2=px(SS[i]);if(Math.hypot(cx2-p2.x,cy2-p2.y)<=38){touchStar(i);return;}}
  for(var i=0;i<shooters.length;i++){var s=shooters[i];if(Math.hypot(cx2-s.x,cy2-s.y)<=45){popComet(s,i);return;}}
  for(var i=0;i<bgM.length;i++){var s=bgM[i];if(s.alive&&Math.hypot(cx2-s.x,cy2-s.y)<=20){popBg(s);return;}}
  for(var i=0;i<bgT.length;i++){var s=bgT[i];if(s.alive&&Math.hypot(cx2-s.x,cy2-s.y)<=15){popBg(s);return;}}
  skyRipple(cx2,cy2);
}
C.addEventListener('click',function(e){var r=C.getBoundingClientRect();handleClick(e.clientX-r.left,e.clientY-r.top);});
C.addEventListener('mousemove',function(e){var r=C.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;if(mouseDown)trail.push({x:mx,y:my,r:Math.random()*2+1,life:1});});
C.addEventListener('mousedown',function(){mouseDown=true;});
C.addEventListener('mouseup',function(){mouseDown=false;});
C.addEventListener('mouseleave',function(){mx=-200;my=-200;mouseDown=false;});
C.addEventListener('touchstart',function(e){e.preventDefault();var t=e.touches[0],r=C.getBoundingClientRect();mx=t.clientX-r.left;my=t.clientY-r.top;handleClick(mx,my);},{passive:false});
C.addEventListener('touchmove',function(e){e.preventDefault();var t=e.touches[0],r=C.getBoundingClientRect();mx=t.clientX-r.left;my=t.clientY-r.top;trail.push({x:mx,y:my,r:Math.random()*2+1,life:1});},{passive:false});

function touchStar(idx){
  var oi=order.indexOf(idx);
  if(oi===-1){order.push(idx);oi=order.length-1;var p2=px(SS[idx]);spawnBurst(p2.x,p2.y);hintEl.classList.add('hidden');
    if(order.length===18){finaleActive=true;lastFinale=-999;} // trigger immediately
  }
  var m=oi+1;pMonth.textContent='Mes '+m;tw(PH[m-1]);banner.classList.add('show');
}

/* ---- MAIN LOOP ---- */
function render(ts){
  var t=ts*0.001;
  X.clearRect(0,0,W,H);
  drawSky(t);drawMoon();drawBg(t);drawShooters(t);drawGlow();updateTrail();
  drawLines(t);drawFill(t);drawStars(t);
  updateRockets();updateFx();updateRings();


  // FINALE: I LOVE YOU every 12 sec (solo activo despues de descubrir las 18 estrellas)
  if(finaleActive&&t-lastFinale>12){lastFinale=t;launchILoveYou();}


  // Cursor
  var hov=false;
  for(var i=0;i<SS.length;i++){if(has(i))continue;var p2=px(SS[i]);if(Math.hypot(mx-p2.x,my-p2.y)<50){hov=true;break;}}
  if(!hov)for(var i=0;i<bgM.length;i++){if(bgM[i].alive&&Math.hypot(mx-bgM[i].x,my-bgM[i].y)<20){hov=true;break;}}
  if(!hov)for(var i=0;i<shooters.length;i++){if(Math.hypot(mx-shooters[i].x,my-shooters[i].y)<45){hov=true;break;}}
  document.body.style.cursor=hov?'pointer':'default';
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
