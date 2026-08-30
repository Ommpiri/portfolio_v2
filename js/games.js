/* ================================================================
   OMM_OS — RETRO GAMES FOLDER (2006 Arcade Collection)
   5 fully playable canvas games, no dependencies.
   ================================================================ */

const GAMES_DATA = [
  {
    id: 'snake',
    title: 'Snake',
    subtitle: 'Nokia Classic · 2000s Mobile',
    icon: '🐍',
    bg: 'linear-gradient(135deg,#1a4731,#0a2018)',
    controls: '↑ ↓ ← → to move  ·  R to restart',
    description: "Eat the dots, grow your snake. Don't bite yourself or hit the walls."
  },
  {
    id: 'tetris',
    title: 'Tetris',
    subtitle: 'Block Puzzle · Arcade Classic',
    icon: '🟦',
    bg: 'linear-gradient(135deg,#1a1a6f,#08081a)',
    controls: '← → move  ·  ↑ rotate  ·  ↓ soft drop  ·  Space hard drop  ·  R restart',
    description: 'Fit the falling blocks. Clear lines to score. Don\'t hit the ceiling.'
  },
  {
    id: 'breakout',
    title: 'Breakout',
    subtitle: 'Atari · Ball & Paddle',
    icon: '🧱',
    bg: 'linear-gradient(135deg,#5a1010,#1a0808)',
    controls: '← → to move paddle  ·  Space to launch  ·  R to restart',
    description: 'Break all the bricks with the bouncing ball. Don\'t let it fall.'
  },
  {
    id: 'invaders',
    title: 'Space Invaders',
    subtitle: 'Shoot \'Em Up · Arcade',
    icon: '👾',
    bg: 'linear-gradient(135deg,#0a1a0a,#000610)',
    controls: '← → to move  ·  Space to shoot  ·  R to restart',
    description: 'Defend Earth. Eliminate all the alien invaders before they land.'
  },
  {
    id: 'pong',
    title: 'Pong',
    subtitle: 'Atari Original · vs CPU',
    icon: '🏓',
    bg: 'linear-gradient(135deg,#1a1a1a,#050505)',
    controls: '↑ ↓ to move your paddle (right side)  ·  First to 7 wins',
    description: 'Classic table tennis against the computer. Simple. Addictive.'
  }
];

let _currentGame = null;
let _gameLoopId  = null;
let _gameKeys    = {};
let _gameKeyFns  = [];

/* ── helpers ───────────────────────────────────────────────── */
function _addKey(fn){ document.addEventListener('keydown',fn); document.addEventListener('keyup',fn); _gameKeyFns.push({fn,both:true}); }
function _addKeyDown(fn){ document.addEventListener('keydown',fn); _gameKeyFns.push({fn,both:false}); }

function stopCurrentGame(){
  if(_gameLoopId !== null){ clearInterval(_gameLoopId); _gameLoopId=null; }
  _gameKeyFns.forEach(({fn,both})=>{ document.removeEventListener('keydown',fn); if(both) document.removeEventListener('keyup',fn); });
  _gameKeyFns=[];
  _gameKeys={};
  _currentGame=null;
}

/* ── init grid ─────────────────────────────────────────────── */
function initGamesApp(){
  const grid = document.getElementById('games-grid');
  const selector = document.getElementById('games-selector');
  const player   = document.getElementById('games-player');
  const backBtn  = document.getElementById('games-back-btn');

  if(!grid) return;
  if(grid.dataset.ready) return;   // already built
  grid.dataset.ready = '1';

  grid.innerHTML = GAMES_DATA.map(g=>`
    <div class="game-card" data-game="${g.id}" tabindex="0" role="button" aria-label="Play ${g.title}">
      <div class="game-card-cover" style="background:${g.bg}">
        <span class="game-card-icon">${g.icon}</span>
        <div class="game-scanlines"></div>
      </div>
      <div class="game-card-info">
        <div class="game-card-title">${g.title}</div>
        <div class="game-card-sub">${g.subtitle}</div>
      </div>
    </div>`).join('');

  grid.querySelectorAll('.game-card').forEach(card=>{
    card.addEventListener('click',()=>_launchGame(card.dataset.game));
    card.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' ') _launchGame(card.dataset.game); });
  });

  if(backBtn){
    backBtn.addEventListener('click',()=>{
      stopCurrentGame();
      if(selector){ selector.style.display=''; }
      if(player){ player.style.display='none'; }
      const sd = document.getElementById('games-score-display');
      if(sd) sd.textContent='Score: 0';
    });
  }
}

function _launchGame(id){
  const game = GAMES_DATA.find(g=>g.id===id);
  if(!game) return;

  const selector = document.getElementById('games-selector');
  const player   = document.getElementById('games-player');
  const titleEl  = document.getElementById('games-current-title');
  const instrEl  = document.getElementById('games-instructions');
  const scoreEl  = document.getElementById('games-score-display');
  const canvas   = document.getElementById('games-canvas');
  if(!canvas) return;

  if(selector) selector.style.display='none';
  if(player)   player.style.display='flex';
  if(titleEl)  titleEl.textContent = game.title;
  if(instrEl)  instrEl.textContent = `${game.description}  ·  ${game.controls}`;
  if(scoreEl)  scoreEl.textContent = 'Score: 0';

  stopCurrentGame();
  _currentGame = id;

  /* fit canvas into the container */
  const wrap = document.getElementById('games-canvas-wrap') || canvas.parentElement;
  const cw = Math.min(wrap ? wrap.clientWidth : 560, 560) || 480;
  const ch = Math.min(wrap ? wrap.clientHeight : 380, 420) || 360;
  canvas.width  = cw;
  canvas.height = ch;

  const onScore = s=>{ if(scoreEl) scoreEl.textContent=`Score: ${s}`; };

  if(id==='snake')    _gameLoopId = _runSnake(canvas, onScore);
  else if(id==='tetris')   _gameLoopId = _runTetris(canvas, onScore);
  else if(id==='breakout') _gameLoopId = _runBreakout(canvas, onScore);
  else if(id==='invaders') _gameLoopId = _runInvaders(canvas, onScore);
  else if(id==='pong')     _gameLoopId = _runPong(canvas, onScore);
}

/* ================================================================
   GAME 1 — SNAKE
   ================================================================ */
function _runSnake(canvas, onScore){
  const ctx = canvas.getContext('2d');
  const SZ=22, W=canvas.width, H=canvas.height;
  const cols=Math.floor(W/SZ), rows=Math.floor(H/SZ);

  let snake=[{x:Math.floor(cols/2),y:Math.floor(rows/2)}];
  let dir={x:1,y:0}, nextDir={x:1,y:0};
  let food=rndFood(), score=0, alive=true;

  function rndFood(){
    let f;
    do{ f={x:Math.floor(Math.random()*cols),y:Math.floor(Math.random()*rows)}; }
    while(snake.some(s=>s.x===f.x&&s.y===f.y));
    return f;
  }

  function draw(){
    ctx.fillStyle='#050f06';
    ctx.fillRect(0,0,W,H);
    /* subtle grid */
    ctx.fillStyle='rgba(61,255,160,0.05)';
    for(let x=0;x<cols;x++) for(let y=0;y<rows;y++) ctx.fillRect(x*SZ+SZ/2-1,y*SZ+SZ/2-1,2,2);
    /* food */
    ctx.fillStyle='#1db954';
    ctx.shadowColor='#1db954'; ctx.shadowBlur=10;
    ctx.beginPath(); ctx.arc(food.x*SZ+SZ/2,food.y*SZ+SZ/2,SZ/2-4,0,Math.PI*2); ctx.fill();
    ctx.shadowBlur=0;
    /* snake */
    snake.forEach((s,i)=>{
      const t=1-i/snake.length;
      ctx.fillStyle=i===0?'#89f4db':`rgba(61,255,160,${0.2+t*0.8})`;
      ctx.beginPath(); ctx.roundRect(s.x*SZ+2,s.y*SZ+2,SZ-4,SZ-4,4); ctx.fill();
    });
    /* score */
    ctx.fillStyle='rgba(137,244,219,0.6)';
    ctx.font='11px JetBrains Mono,monospace';
    ctx.textAlign='left';
    ctx.fillText(`SCORE ${score}`,6,H-6);
  }

  function gameOver(){
    alive=false;
    ctx.fillStyle='rgba(0,0,0,0.72)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#89f4db'; ctx.font='bold 26px JetBrains Mono,monospace'; ctx.textAlign='center';
    ctx.fillText('GAME OVER',W/2,H/2-16);
    ctx.fillStyle='#3dffa0'; ctx.font='14px JetBrains Mono,monospace';
    ctx.fillText(`Score: ${score}`,W/2,H/2+12);
    ctx.fillStyle='#6e7b9b'; ctx.font='12px JetBrains Mono,monospace';
    ctx.fillText('Press R to restart',W/2,H/2+34);
  }

  const kfn=e=>{
    const k=e.key;
    if(k==='ArrowUp'&&dir.y!==1)    nextDir={x:0,y:-1};
    if(k==='ArrowDown'&&dir.y!==-1) nextDir={x:0,y:1};
    if(k==='ArrowLeft'&&dir.x!==1)  nextDir={x:-1,y:0};
    if(k==='ArrowRight'&&dir.x!==-1)nextDir={x:1,y:0};
    if((k==='r'||k==='R')&&!alive){
      snake=[{x:Math.floor(cols/2),y:Math.floor(rows/2)}];
      dir={x:1,y:0}; nextDir={x:1,y:0}; food=rndFood(); score=0; alive=true; onScore(0);
    }
    if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(k)) e.preventDefault();
  };
  _addKeyDown(kfn);
  draw();

  return setInterval(()=>{
    if(!alive) return;
    dir={...nextDir};
    const head={x:snake[0].x+dir.x,y:snake[0].y+dir.y};
    if(head.x<0||head.x>=cols||head.y<0||head.y>=rows||snake.some(s=>s.x===head.x&&s.y===head.y)){
      gameOver(); return;
    }
    snake.unshift(head);
    if(head.x===food.x&&head.y===food.y){ score++; onScore(score); food=rndFood(); }
    else snake.pop();
    draw();
  },130);
}

/* ================================================================
   GAME 2 — TETRIS
   ================================================================ */
function _runTetris(canvas, onScore){
  const ctx=canvas.getContext('2d');
  const COLS=10, ROWS=20;
  const SZ=Math.min(Math.floor(canvas.height/ROWS),Math.floor(canvas.width*0.55/COLS));
  const OX=Math.floor((canvas.width*0.58-COLS*SZ)/2);

  const PIECES=[
    {s:[[1,1,1,1]],             c:'#00f0f0'},
    {s:[[1,1],[1,1]],           c:'#f0f000'},
    {s:[[0,1,0],[1,1,1]],       c:'#a000f0'},
    {s:[[1,0,0],[1,1,1]],       c:'#f0a000'},
    {s:[[0,0,1],[1,1,1]],       c:'#0000f0'},
    {s:[[0,1,1],[1,1,0]],       c:'#00f000'},
    {s:[[1,1,0],[0,1,1]],       c:'#f00000'},
  ];

  let board=Array.from({length:ROWS},()=>Array(COLS).fill(0));
  let piece=spawn(), next=spawn(), score=0, lines=0, gameOver=false, paused=false;

  function spawn(){
    const p=PIECES[Math.floor(Math.random()*PIECES.length)];
    return{s:p.s.map(r=>[...r]),c:p.c,x:Math.floor(COLS/2-p.s[0].length/2),y:0};
  }
  function rotate(s){ return s[0].map((_,i)=>s.map(r=>r[i]).reverse()); }
  function valid(s,ox,oy){ return s.every((row,dy)=>row.every((cell,dx)=>!cell||( (ox+dx)>=0&&(ox+dx)<COLS&&(oy+dy)<ROWS&&(oy+dy<0||!board[oy+dy][ox+dx]) ))); }

  function lock(){
    piece.s.forEach((row,dy)=>row.forEach((cell,dx)=>{ if(cell) board[piece.y+dy][piece.x+dx]=piece.c; }));
    let cleared=0;
    for(let y=ROWS-1;y>=0;y--){
      if(board[y].every(c=>c)){ board.splice(y,1); board.unshift(Array(COLS).fill(0)); cleared++; y++; }
    }
    if(cleared){ const pts=[0,100,300,500,800][cleared]||1000; score+=pts*(Math.floor(lines/10)+1); lines+=cleared; onScore(score); }
    piece=next; next=spawn();
    if(!valid(piece.s,piece.x,piece.y)){ gameOver=true; drawGameOver(); }
  }

  function ghostY(){
    let gy=piece.y;
    while(valid(piece.s,piece.x,gy+1)) gy++;
    return gy;
  }

  function draw(){
    ctx.fillStyle='#06080d'; ctx.fillRect(0,0,canvas.width,canvas.height);

    /* board border */
    ctx.strokeStyle='rgba(139,123,255,0.35)'; ctx.lineWidth=1;
    ctx.strokeRect(OX-1,-1,COLS*SZ+2,ROWS*SZ+2);

    /* ghost piece */
    const gy=ghostY();
    piece.s.forEach((row,dy)=>row.forEach((cell,dx)=>{
      if(!cell) return;
      ctx.fillStyle='rgba(255,255,255,0.07)';
      ctx.fillRect(OX+(piece.x+dx)*SZ+1,(gy+dy)*SZ+1,SZ-2,SZ-2);
    }));

    /* board cells */
    board.forEach((row,y)=>row.forEach((cell,x)=>{
      if(!cell) return;
      ctx.fillStyle=cell; ctx.fillRect(OX+x*SZ+1,y*SZ+1,SZ-2,SZ-2);
      ctx.fillStyle='rgba(255,255,255,0.18)'; ctx.fillRect(OX+x*SZ+1,y*SZ+1,SZ-2,3);
    }));

    /* current piece */
    piece.s.forEach((row,dy)=>row.forEach((cell,dx)=>{
      if(!cell) return;
      ctx.fillStyle=piece.c; ctx.fillRect(OX+(piece.x+dx)*SZ+1,(piece.y+dy)*SZ+1,SZ-2,SZ-2);
      ctx.fillStyle='rgba(255,255,255,0.25)'; ctx.fillRect(OX+(piece.x+dx)*SZ+1,(piece.y+dy)*SZ+1,SZ-2,4);
    }));

    /* side panel */
    const px=OX+COLS*SZ+14;
    ctx.fillStyle='#89f4db'; ctx.font='9px JetBrains Mono,monospace'; ctx.textAlign='left';
    ctx.fillText('SCORE',px,24); ctx.fillStyle='#f5f7ff'; ctx.font='bold 15px JetBrains Mono,monospace';
    ctx.fillText(score,px,42);
    ctx.fillStyle='#89f4db'; ctx.font='9px JetBrains Mono,monospace';
    ctx.fillText('LINES',px,70); ctx.fillStyle='#f5f7ff'; ctx.font='bold 15px JetBrains Mono,monospace';
    ctx.fillText(lines,px,88);
    ctx.fillStyle='#89f4db'; ctx.font='9px JetBrains Mono,monospace';
    ctx.fillText('LEVEL',px,114); ctx.fillStyle='#f5f7ff'; ctx.font='bold 15px JetBrains Mono,monospace';
    ctx.fillText(Math.floor(lines/10)+1,px,132);
    ctx.fillStyle='#89f4db'; ctx.font='9px JetBrains Mono,monospace';
    ctx.fillText('NEXT',px,160);
    /* draw next */
    next.s.forEach((row,dy)=>row.forEach((cell,dx)=>{
      if(!cell) return;
      ctx.fillStyle=next.c; ctx.fillRect(px+dx*(SZ-2),170+dy*(SZ-2),SZ-3,SZ-3);
    }));
  }

  function drawGameOver(){
    ctx.fillStyle='rgba(0,0,0,0.8)'; ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='#89f4db'; ctx.font='bold 26px JetBrains Mono,monospace'; ctx.textAlign='center';
    ctx.fillText('GAME OVER',canvas.width/2,canvas.height/2-16);
    ctx.fillStyle='#bcb3ff'; ctx.font='14px JetBrains Mono,monospace';
    ctx.fillText(`Score: ${score}  Lines: ${lines}`,canvas.width/2,canvas.height/2+12);
    ctx.fillStyle='#6e7b9b'; ctx.font='12px JetBrains Mono,monospace';
    ctx.fillText('Press R to restart',canvas.width/2,canvas.height/2+34);
  }

  const kfn=e=>{
    if(gameOver){ if(e.key==='r'||e.key==='R'){ board=Array.from({length:ROWS},()=>Array(COLS).fill(0)); score=0;lines=0;gameOver=false;piece=spawn();next=spawn();onScore(0); } return; }
    if(e.key==='ArrowLeft'&&valid(piece.s,piece.x-1,piece.y)) piece.x--;
    else if(e.key==='ArrowRight'&&valid(piece.s,piece.x+1,piece.y)) piece.x++;
    else if(e.key==='ArrowDown'){if(valid(piece.s,piece.x,piece.y+1))piece.y++;else lock();}
    else if(e.key==='ArrowUp'){const r=rotate(piece.s);if(valid(r,piece.x,piece.y))piece.s=r;}
    else if(e.key===' '){while(valid(piece.s,piece.x,piece.y+1))piece.y++;lock();}
    else return;
    e.preventDefault();
    if(!gameOver) draw();
  };
  _addKeyDown(kfn);
  draw();

  return setInterval(()=>{
    if(gameOver||paused) return;
    const speed=Math.max(100,500-Math.floor(lines/10)*40);
    if(valid(piece.s,piece.x,piece.y+1)) piece.y++;
    else lock();
    draw();
  },500);
}

/* ================================================================
   GAME 3 — BREAKOUT
   ================================================================ */
function _runBreakout(canvas, onScore){
  const ctx=canvas.getContext('2d');
  const W=canvas.width, H=canvas.height;
  const ROWS=6, COLS=10;
  const bW=(W-20)/COLS, bH=16, bP=3;
  const COLORS=['#ff6b6b','#ff9f43','#ffd93d','#6bcb77','#4d96ff','#c77dff'];

  let bricks=[], paddle={x:W/2-55,y:H-32,w:110,h:12}, ball={x:W/2,y:H-60,vx:3.5,vy:-4.5,r:7};
  let score=0,lives=3,state='ready'; // ready | playing | dead | win

  function mkBricks(){ bricks=[]; for(let r=0;r<ROWS;r++) for(let c=0;c<COLS;c++) bricks.push({x:10+c*bW,y:46+r*(bH+bP),w:bW-bP,h:bH,c:COLORS[r],alive:true}); }
  mkBricks();

  function reset(full=false){ ball={x:W/2,y:H-60,vx:3.5*(Math.random()<0.5?1:-1),vy:-4.5,r:7}; if(full){score=0;lives=3;onScore(0);mkBricks();} state='ready'; }

  function draw(){
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,W,H);
    /* bricks */
    bricks.forEach(b=>{ if(!b.alive) return; ctx.fillStyle=b.c; ctx.beginPath(); ctx.roundRect(b.x,b.y,b.w,b.h,3); ctx.fill(); ctx.fillStyle='rgba(255,255,255,0.2)'; ctx.fillRect(b.x+3,b.y+3,b.w-6,4); });
    /* paddle */
    ctx.fillStyle='#89f4db'; ctx.shadowColor='#89f4db'; ctx.shadowBlur=8; ctx.beginPath(); ctx.roundRect(paddle.x,paddle.y,paddle.w,paddle.h,6); ctx.fill(); ctx.shadowBlur=0;
    /* ball */
    ctx.fillStyle='#fff'; ctx.shadowColor='#fff'; ctx.shadowBlur=12; ctx.beginPath(); ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
    /* HUD */
    ctx.fillStyle='#89f4db'; ctx.font='11px JetBrains Mono,monospace';
    ctx.textAlign='left'; ctx.fillText(`Score: ${score}`,8,20);
    ctx.textAlign='right'; ctx.fillText(`♥ `.repeat(lives).trim(),W-8,20);
    /* overlays */
    if(state==='ready'){ ctx.fillStyle='rgba(255,255,255,0.55)'; ctx.font='13px JetBrains Mono,monospace'; ctx.textAlign='center'; ctx.fillText('Space to launch · ← → to move',W/2,H/2); }
    if(state==='dead'||state==='gameover'){
      ctx.fillStyle='rgba(0,0,0,0.75)'; ctx.fillRect(0,0,W,H);
      ctx.fillStyle= state==='gameover'?'#ff6b6b':'#ffd93d'; ctx.font='bold 26px JetBrains Mono,monospace'; ctx.textAlign='center';
      ctx.fillText(state==='gameover'?'GAME OVER':'LIFE LOST',W/2,H/2-14);
      ctx.fillStyle='#6e7b9b'; ctx.font='13px JetBrains Mono,monospace';
      ctx.fillText(state==='gameover'?`Score: ${score}  ·  Space to retry`:'Space to continue',W/2,H/2+14);
    }
    if(state==='win'){ ctx.fillStyle='rgba(0,0,0,0.75)'; ctx.fillRect(0,0,W,H); ctx.fillStyle='#6bcb77'; ctx.font='bold 26px JetBrains Mono,monospace'; ctx.textAlign='center'; ctx.fillText('YOU WIN!',W/2,H/2-14); ctx.fillStyle='#6e7b9b'; ctx.font='13px JetBrains Mono,monospace'; ctx.fillText(`Score: ${score}  ·  Space to play again`,W/2,H/2+14); }
  }

  let keys={};
  const kfn=e=>{
    keys[e.key]=e.type==='keydown';
    if(e.key===' '&&e.type==='keydown'){
      if(state==='ready') state='playing';
      else if(state==='dead'){ lives--; if(lives<=0) state='gameover'; else reset(); }
      else if(state==='gameover'||state==='win') reset(true);
      e.preventDefault();
    }
    if(['ArrowLeft','ArrowRight'].includes(e.key)) e.preventDefault();
  };
  _addKey(kfn);
  draw();

  return setInterval(()=>{
    if(state==='playing'){
      /* paddle */
      if(keys['ArrowLeft']) paddle.x=Math.max(0,paddle.x-6);
      if(keys['ArrowRight']) paddle.x=Math.min(W-paddle.w,paddle.x+6);
      /* ball */
      ball.x+=ball.vx; ball.y+=ball.vy;
      if(ball.x-ball.r<0){ball.x=ball.r;ball.vx*=-1;}
      if(ball.x+ball.r>W){ball.x=W-ball.r;ball.vx*=-1;}
      if(ball.y-ball.r<0){ball.y=ball.r;ball.vy*=-1;}
      /* paddle hit */
      if(ball.y+ball.r>paddle.y&&ball.y-ball.r<paddle.y+paddle.h&&ball.x>paddle.x&&ball.x<paddle.x+paddle.w&&ball.vy>0){
        ball.vy=-Math.abs(ball.vy); ball.vx+=((ball.x-(paddle.x+paddle.w/2))/paddle.w)*3;
        if(Math.abs(ball.vx)>7) ball.vx=7*Math.sign(ball.vx);
      }
      /* ball lost */
      if(ball.y>H){ state='dead'; }
      /* bricks */
      bricks.forEach(b=>{
        if(!b.alive) return;
        if(ball.x+ball.r>b.x&&ball.x-ball.r<b.x+b.w&&ball.y+ball.r>b.y&&ball.y-ball.r<b.y+b.h){
          b.alive=false; score+=10; onScore(score);
          const overlapX=Math.min(ball.x+ball.r-b.x, b.x+b.w-(ball.x-ball.r));
          const overlapY=Math.min(ball.y+ball.r-b.y, b.y+b.h-(ball.y-ball.r));
          if(overlapX<overlapY) ball.vx*=-1; else ball.vy*=-1;
        }
      });
      if(bricks.every(b=>!b.alive)) state='win';
    }
    draw();
  },16);
}

/* ================================================================
   GAME 4 — SPACE INVADERS
   ================================================================ */
function _runInvaders(canvas, onScore){
  const ctx=canvas.getContext('2d');
  const W=canvas.width, H=canvas.height;
  const IROWS=4, ICOLS=10;
  const EMOJIS=[['👾','👾'],['👽','👽'],['🤖','🤖'],['👻','👻']];
  const PTS=[30,20,10,5];

  let player={x:W/2-22,y:H-50,w:44,h:22};
  let bullets=[], ibullets=[], invaders=[];
  let score=0, lives=3, state='playing';
  let invDir=1, invStepTimer=0, invShootTimer=60;
  let shootCool=0;
  let keys={};

  function mkInvaders(){ invaders=[]; for(let r=0;r<IROWS;r++) for(let c=0;c<ICOLS;c++) invaders.push({x:35+c*48,y:55+r*42,w:36,h:28,alive:true,row:r,frame:0}); }
  mkInvaders();

  function reset(full=false){ bullets=[];ibullets=[];invDir=1;invStepTimer=0;invShootTimer=60;shootCool=0; if(full){score=0;lives=3;onScore(0);mkInvaders();} player.x=W/2-22; state='playing'; }

  const kfn=e=>{
    keys[e.key]=e.type==='keydown';
    if(['ArrowLeft','ArrowRight',' '].includes(e.key)) e.preventDefault();
    if(e.key===' '&&e.type==='keydown'&&(state==='gameover'||state==='win')) reset(true);
  };
  _addKey(kfn);

  /* star field (deterministic) */
  const STARS=Array.from({length:50},(_,i)=>({x:(i*137)%W,y:(i*191)%H}));

  function draw(){
    ctx.fillStyle='#000610'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='rgba(255,255,255,0.35)'; STARS.forEach(s=>ctx.fillRect(s.x,s.y,1.5,1.5));
    /* player ship */
    if(state==='playing'){
      ctx.fillStyle='#89f4db';
      ctx.beginPath(); ctx.moveTo(player.x+player.w/2,player.y); ctx.lineTo(player.x,player.y+player.h); ctx.lineTo(player.x+player.w,player.y+player.h); ctx.closePath(); ctx.fill();
      ctx.fillStyle='rgba(137,244,219,0.25)'; ctx.fillRect(player.x+player.w/2-4,player.y+player.h-6,8,6);
    }
    /* invaders */
    ctx.font='22px serif'; ctx.textAlign='center';
    invaders.forEach(inv=>{ if(!inv.alive) return; ctx.fillText(EMOJIS[inv.row][inv.frame%2],inv.x+inv.w/2,inv.y+inv.h-2); });
    /* bullets */
    ctx.fillStyle='#1db954'; ctx.shadowColor='#1db954'; ctx.shadowBlur=6;
    bullets.forEach(b=>ctx.fillRect(b.x-2,b.y,4,10)); ctx.shadowBlur=0;
    ctx.fillStyle='#ff6b6b'; ctx.shadowColor='#ff6b6b'; ctx.shadowBlur=4;
    ibullets.forEach(b=>ctx.fillRect(b.x-2,b.y,4,12)); ctx.shadowBlur=0;
    /* ground */
    ctx.fillStyle='rgba(137,244,219,0.35)'; ctx.fillRect(0,H-36,W,2);
    /* HUD */
    ctx.fillStyle='#89f4db'; ctx.font='11px JetBrains Mono,monospace'; ctx.textAlign='left';
    ctx.fillText(`Score: ${score}`,8,20); ctx.textAlign='right';
    ctx.fillText(`♥ `.repeat(lives).trim(),W-8,20);
    /* overlays */
    if(state==='gameover'){ ctx.fillStyle='rgba(0,0,0,0.8)'; ctx.fillRect(0,0,W,H); ctx.fillStyle='#ff6b6b'; ctx.font='bold 26px JetBrains Mono,monospace'; ctx.textAlign='center'; ctx.fillText('INVADED!',W/2,H/2-14); ctx.fillStyle='#6e7b9b'; ctx.font='13px JetBrains Mono,monospace'; ctx.fillText(`Score: ${score}  ·  Space to retry`,W/2,H/2+14); }
    if(state==='win'){ ctx.fillStyle='rgba(0,0,0,0.8)'; ctx.fillRect(0,0,W,H); ctx.fillStyle='#1db954'; ctx.font='bold 26px JetBrains Mono,monospace'; ctx.textAlign='center'; ctx.fillText('EARTH SAVED!',W/2,H/2-14); ctx.fillStyle='#6e7b9b'; ctx.font='13px JetBrains Mono,monospace'; ctx.fillText(`Score: ${score}  ·  Space to play again`,W/2,H/2+14); }
  }

  return setInterval(()=>{
    if(state!=='playing'){ draw(); return; }
    /* player */
    if(keys['ArrowLeft']) player.x=Math.max(0,player.x-5);
    if(keys['ArrowRight']) player.x=Math.min(W-player.w,player.x+5);
    /* shoot */
    shootCool--;
    if(keys[' ']&&shootCool<=0){ bullets.push({x:player.x+player.w/2,y:player.y}); shootCool=18; }
    /* move bullets */
    bullets=bullets.filter(b=>b.y>-10); bullets.forEach(b=>b.y-=10);
    ibullets=ibullets.filter(b=>b.y<H); ibullets.forEach(b=>b.y+=5);
    /* move invaders */
    invStepTimer++;
    const alive=invaders.filter(i=>i.alive);
    const speed=Math.max(5,22-Math.floor((IROWS*ICOLS-alive.length)*0.6));
    if(invStepTimer%speed===0){
      const lx=Math.min(...alive.map(i=>i.x)), rx=Math.max(...alive.map(i=>i.x+i.w));
      if((invDir===1&&rx>W-18)||(invDir===-1&&lx<18)){ invaders.forEach(i=>{if(i.alive){i.y+=22;i.frame++;}}); invDir*=-1; }
      else invaders.forEach(i=>{if(i.alive){i.x+=invDir*18;i.frame++;}});
    }
    /* invader shoot */
    invShootTimer--;
    if(invShootTimer<=0&&alive.length>0){ const s=alive[Math.floor(Math.random()*alive.length)]; ibullets.push({x:s.x+s.w/2,y:s.y+s.h}); invShootTimer=25+Math.floor(Math.random()*40); }
    /* bullet vs invader */
    bullets.forEach(b=>{ invaders.forEach(inv=>{ if(!inv.alive) return; if(b.x>inv.x&&b.x<inv.x+inv.w&&b.y>inv.y&&b.y<inv.y+inv.h){ inv.alive=false;b.y=-999;score+=PTS[inv.row];onScore(score); } }); });
    /* inv bullet vs player */
    ibullets.forEach(b=>{ if(b.x>player.x&&b.x<player.x+player.w&&b.y>player.y&&b.y<player.y+player.h){ b.y=H+999;lives--; if(lives<=0)state='gameover'; } });
    /* invaders reach ground */
    if(alive.some(i=>i.y+i.h>=H-36)) state='gameover';
    if(alive.length===0) state='win';
    draw();
  },16);
}

/* ================================================================
   GAME 5 — PONG
   ================================================================ */
function _runPong(canvas, onScore){
  const ctx=canvas.getContext('2d');
  const W=canvas.width, H=canvas.height;
  const PW=12, PH=Math.floor(H*0.18), BR=8, SPD=5.5, MAX=7;

  let cpu={x:18,y:H/2-PH/2,score:0};
  let ply={x:W-18-PW,y:H/2-PH/2,score:0};
  let ball={x:W/2,y:H/2,vx:-SPD,vy:2.5};
  let state='playing', keys={};
  let cpuDiff=0.065; /* AI "laziness" */

  function resetBall(dir){
    ball={x:W/2,y:H/2,vx:SPD*dir*(0.9+Math.random()*0.2),vy:(Math.random()*4-2)};
  }

  const kfn=e=>{
    keys[e.key]=e.type==='keydown';
    if(['ArrowUp','ArrowDown'].includes(e.key)) e.preventDefault();
    if(e.key===' '&&e.type==='keydown'&&(state==='done')){ cpu.score=0;ply.score=0;onScore(0);state='playing';resetBall(-1); e.preventDefault(); }
  };
  _addKey(kfn);

  function draw(){
    ctx.fillStyle='#050505'; ctx.fillRect(0,0,W,H);
    /* centre line */
    ctx.setLineDash([8,8]); ctx.strokeStyle='rgba(255,255,255,0.12)'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(W/2,0); ctx.lineTo(W/2,H); ctx.stroke(); ctx.setLineDash([]);
    /* paddles */
    ctx.fillStyle='#89f4db'; ctx.shadowColor='#89f4db'; ctx.shadowBlur=8; ctx.beginPath(); ctx.roundRect(cpu.x,cpu.y,PW,PH,4); ctx.fill();
    ctx.fillStyle='#ff9f43'; ctx.shadowColor='#ff9f43'; ctx.shadowBlur=8; ctx.beginPath(); ctx.roundRect(ply.x,ply.y,PW,PH,4); ctx.fill();
    ctx.shadowBlur=0;
    /* ball */
    ctx.fillStyle='#fff'; ctx.shadowColor='#fff'; ctx.shadowBlur=14; ctx.beginPath(); ctx.arc(ball.x,ball.y,BR,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
    /* scores */
    ctx.font='bold 48px JetBrains Mono,monospace'; ctx.textAlign='center'; ctx.fillStyle='rgba(255,255,255,0.12)';
    ctx.fillText(cpu.score,W*0.28,64); ctx.fillText(ply.score,W*0.72,64);
    /* labels */
    ctx.font='9px JetBrains Mono,monospace';
    ctx.fillStyle='rgba(137,244,219,0.5)'; ctx.fillText('CPU',W*0.28,H-12);
    ctx.fillStyle='rgba(255,159,67,0.5)'; ctx.fillText('YOU',W*0.72,H-12);
    /* win overlay */
    if(state==='done'){
      const won=ply.score>=MAX;
      ctx.fillStyle='rgba(0,0,0,0.78)'; ctx.fillRect(0,0,W,H);
      ctx.fillStyle=won?'#ff9f43':'#89f4db'; ctx.font='bold 28px JetBrains Mono,monospace'; ctx.textAlign='center';
      ctx.fillText(won?'YOU WIN!':'CPU WINS',W/2,H/2-14);
      ctx.fillStyle='#6e7b9b'; ctx.font='13px JetBrains Mono,monospace';
      ctx.fillText('Space to play again',W/2,H/2+14);
    }
  }

  return setInterval(()=>{
    if(state!=='playing'){ draw(); return; }
    /* player */
    if(keys['ArrowUp']) ply.y=Math.max(0,ply.y-6);
    if(keys['ArrowDown']) ply.y=Math.min(H-PH,ply.y+6);
    /* cpu AI */
    const target=ball.y-PH/2;
    cpu.y+=(target-cpu.y)*cpuDiff;
    cpu.y=Math.max(0,Math.min(H-PH,cpu.y));
    /* ball move */
    ball.x+=ball.vx; ball.y+=ball.vy;
    if(ball.y-BR<0){ball.y=BR;ball.vy*=-1;}
    if(ball.y+BR>H){ball.y=H-BR;ball.vy*=-1;}
    /* cpu paddle */
    if(ball.x-BR<cpu.x+PW&&ball.y>cpu.y&&ball.y<cpu.y+PH&&ball.vx<0){
      ball.vx=Math.abs(ball.vx)+0.25; ball.vy+=((ball.y-(cpu.y+PH/2))/PH)*5; ball.x=cpu.x+PW+BR;
      if(Math.abs(ball.vx)>12) ball.vx=12;
    }
    /* ply paddle */
    if(ball.x+BR>ply.x&&ball.y>ply.y&&ball.y<ply.y+PH&&ball.vx>0){
      ball.vx=-(Math.abs(ball.vx)+0.25); ball.vy+=((ball.y-(ply.y+PH/2))/PH)*5; ball.x=ply.x-BR;
      if(Math.abs(ball.vx)>12) ball.vx=-12;
    }
    /* scoring */
    if(ball.x<0){ ply.score++; onScore(ply.score); if(ply.score>=MAX)state='done'; else resetBall(1); }
    if(ball.x>W){ cpu.score++; if(cpu.score>=MAX)state='done'; else resetBall(-1); }
    draw();
  },16);
}
