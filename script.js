/* =========================================================
   IBAD JAHANGIR — INTERACTION LAYER (vanilla JavaScript)
   ========================================================= */
(() => {
  'use strict';
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch = matchMedia('(pointer: coarse)').matches;

  // Theme: system preference on first visit, then persist the user's choice.
  const themeButton = $('#themeToggle');
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('ij-theme', theme);
    themeButton?.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#0A100E' : '#F6F1E7';
  }
  setTheme(localStorage.getItem('ij-theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  themeButton?.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

  // Intro sequence; skip for reduced-motion users.
  if (reduced) $('#intro')?.remove();
  else setTimeout(() => $('#intro')?.remove(), 1050);

  // Typing role.
  const roleNode = $('#typedRole');
  const roles = ['AI & Software Developer', 'Aspiring Data Analyst', 'Mathematician', 'Software Product Builder'];
  if (roleNode && !reduced) {
    let role=0, char=roles[0].length, deleting=true;
    const type = () => {
      const current=roles[role];
      char += deleting ? -1 : 1;
      roleNode.textContent=current.slice(0,char);
      let delay=deleting?42:78;
      if (!deleting && char===current.length) { deleting=true; delay=1350; }
      else if (deleting && char===0) { deleting=false; role=(role+1)%roles.length; delay=280; }
      setTimeout(type,delay);
    };
    setTimeout(type,1800);
  }

  // Scroll state: progress, back-to-top and active section.
  const progress=$('#progress'), backTop=$('#backTop');
  const navAnchors=$$('.nav-links a[href^="#"]');
  const sections=navAnchors.map(a=>$(a.getAttribute('href'))).filter(Boolean);
  let scrollTick=false;
  function updateScroll(){
    const max=document.documentElement.scrollHeight-innerHeight;
    progress.style.width=(max>0?scrollY/max*100:0)+'%';
    backTop.classList.toggle('visible',scrollY>520);
    const marker=scrollY+innerHeight*.34;
    let active=sections[0];
    sections.forEach(section=>{if(section.offsetTop<=marker)active=section;});
    navAnchors.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+active?.id));
    scrollTick=false;
  }
  addEventListener('scroll',()=>{if(!scrollTick){requestAnimationFrame(updateScroll);scrollTick=true;}},{passive:true});
  updateScroll();
  backTop.addEventListener('click',()=>scrollTo({top:0,behavior:reduced?'auto':'smooth'}));

  // Reveal on scroll.
  const revealNodes=$$('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    }),{threshold:.12,rootMargin:'0px 0px -35px 0px'});
    revealNodes.forEach(node=>observer.observe(node));
  } else revealNodes.forEach(node=>node.classList.add('is-visible'));

  // Mobile navigation.
  const menuToggle=$('#menuToggle'), navLinks=$('#navLinks');
  function closeMenu(){navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation');}
  menuToggle.addEventListener('click',()=>{
    const open=menuToggle.getAttribute('aria-expanded')!=='true';
    menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    navLinks.classList.toggle('open',open);
    if(open) $('a',navLinks).focus();
  });
  navLinks.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});

  // Cursor spotlight + magnetic buttons + project tilt (desktop only).
  if(!touch&&!reduced){
    addEventListener('pointermove',e=>{document.documentElement.style.setProperty('--mx',e.clientX+'px');document.documentElement.style.setProperty('--my',e.clientY+'px');},{passive:true});
    $$('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform='translate('+(e.clientX-r.left-r.width/2)*.055+'px,'+(e.clientY-r.top-r.height/2)*.09+'px)';});el.addEventListener('pointerleave',()=>el.style.transform='');});
    $$('.project-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform='perspective(900px) rotateY('+(x*3)+'deg) rotateX('+(-y*3)+'deg) translateY(-3px)';});card.addEventListener('pointerleave',()=>card.style.transform='');});
  }

  // Hero canvas: slow Lissajous traces, pauses when hidden/offscreen.
  const canvas=$('#mathCanvas'), ctx=canvas?.getContext('2d');
  if(canvas&&ctx&&!reduced){
    let w=0,h=0,frame=0,raf=0,visible=true;
    const resize=()=>{const dpr=Math.min(devicePixelRatio||1,1.5);w=canvas.clientWidth;h=canvas.clientHeight;canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);};
    resize();addEventListener('resize',resize,{passive:true});
    const draw=()=>{
      if(!visible||document.hidden)return;
      ctx.clearRect(0,0,w,h);const dark=document.documentElement.dataset.theme==='dark';
      ctx.strokeStyle=dark?'rgba(242,184,75,.28)':'rgba(184,116,26,.24)';ctx.lineWidth=1;
      const cx=w*.52,cy=h*.5,scale=Math.min(w,h)*.29;
      ctx.beginPath();
      for(let i=0;i<=520;i++){const t=i/520*Math.PI*2;const x=cx+Math.sin(3*t+frame*.002)*scale*.8;const y=cy+Math.sin(2*t)*Math.cos(1.2*t+frame*.001)*scale*.72;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}
      ctx.stroke();
      ctx.fillStyle=dark?'rgba(242,184,75,.55)':'rgba(184,116,26,.55)';
      for(let i=0;i<5;i++){const t=i/5*Math.PI*2+frame*.001;const x=cx+Math.sin(3*t)*scale*.8,y=cy+Math.sin(2*t)*Math.cos(1.2*t)*scale*.72;ctx.beginPath();ctx.arc(x,y,2,0,Math.PI*2);ctx.fill();}
      frame++;raf=requestAnimationFrame(draw);
    };
    const io=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible&&!document.hidden)draw();else cancelAnimationFrame(raf);});
    io.observe(canvas);document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(raf);else if(visible)draw();});
  }

  // Email copy with fallback and accessible toast.
  const toast=$('#toast');let toastTimer;
  function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2300);}
  async function copyEmail(){
    const email='ibadjahangir8100@gmail.com';
    try{
      if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(email);
      else {const input=document.createElement('textarea');input.value=email;input.style.position='fixed';input.style.opacity='0';document.body.append(input);input.select();const ok=document.execCommand('copy');input.remove();if(!ok)throw new Error('Copy unavailable');}
      showToast('Email copied to clipboard');
    }catch{showToast('Copy unavailable — use the email link');}
  }
  $('#copyEmail').addEventListener('click',copyEmail);

  // Case studies: keep project status and claims explicit.
  const projectData={
    orvexa:{label:'PROJECT 01 / AI WORKSPACE',title:'ORVEXA — AI Workspace',status:'In Development',overview:'An AI-powered workspace concept designed to bring intelligent assistance and productivity capabilities together in one environment.',stack:'The public GitHub repositories available for this portfolio review did not include an ORVEXA repository. A verified technology stack and module implementation status could not be confirmed, so no stack or completed-module claims are made here.',implemented:['Product direction and workspace concept'],developing:['Overall AI workspace project'],planned:['AI Chat','Document Management','Research Workspace','Task Management','Automations','AI Agents','Knowledge Base','Settings'],link:null},
    hms:{label:'PROJECT 02 / HOSPITAL SOFTWARE',title:'Hospital Management System',status:'Implemented modules documented',overview:'A database-driven hospital management application designed to organize patient records, doctors, departments, appointments, and prescriptions.',stack:'Verified from the Medicare-HMS repository README: Python, Flask, PostgreSQL, vanilla JavaScript (ES modules), and pytest. The repository is private, so no public repository button is displayed.',implemented:['Authentication and role-based access','Patients, Doctors and Departments','Appointments and Prescriptions','Billing and payment receipts','Pharmacy and stock management','Reports, CSV export and audit log','Dashboard'],developing:[],planned:[],link:null}
  };
  const dialog=$('#caseDialog'),dialogContent=$('#dialogContent');
  function openCase(key){
    const p=projectData[key];if(!p)return;
    const list=(title,items)=>items.length?'<h3>'+title+'</h3><ul>'+items.map(x=>'<li>'+x+'</li>').join('')+'</ul>':'';
    dialogContent.innerHTML='<p class="section-label">// '+p.label+'</p><h2 id="dialogTitle">'+p.title+'</h2><span class="dialog-status">'+p.status+'</span><h3>Overview</h3><p>'+p.overview+'</p><h3>Verified technology & status</h3><p>'+p.stack+'</p>'+list('Implemented / documented',p.implemented)+list('In development',p.developing)+list('Planned / concept modules',p.planned)+'<div class="dialog-actions"><a href="https://github.com/EbadJahangir" target="_blank" rel="noopener noreferrer">GitHub profile ↗</a><a href="mailto:ibadjahangir8100@gmail.com">Discuss this project ↗</a></div>';
    dialog.showModal();$('#dialogClose').focus();
  }
  $$('.project-card').forEach(card=>{card.addEventListener('click',()=>openCase(card.dataset.project));card.addEventListener('keydown',e=>{if(e.target===card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openCase(card.dataset.project);}});});
  $('#dialogClose').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});

  // Command palette with keyboard navigation and focus restoration.
  const palette=$('#palette'),paletteInput=$('#paletteInput'),paletteItems=$('#paletteItems');
  const commands=[
    ...[['Home','#home'],['About','#about'],['Skills','#skills'],['Projects','#projects'],['Education','#education'],['Interests','#interests'],['Contact','#contact']].map(([label,href])=>({label,detail:'Go to section',run:()=>$(href).scrollIntoView({behavior:reduced?'auto':'smooth'})})),
    {label:'Copy email address',detail:'Clipboard',run:copyEmail},
    {label:'Open GitHub profile',detail:'New tab',run:()=>window.open('https://github.com/EbadJahangir','_blank','noopener,noreferrer')},
    {label:'Toggle color theme',detail:'Appearance',run:()=>themeButton.click()}
  ];
  let filtered=commands,selected=0,previousFocus=null;
  function renderCommands(){paletteItems.innerHTML='';filtered.forEach((cmd,i)=>{const b=document.createElement('button');b.className='palette-item'+(i===selected?' selected':'');b.innerHTML='<span></span><small></small>';b.querySelector('span').textContent=cmd.label;b.querySelector('small').textContent=cmd.detail;b.addEventListener('click',()=>chooseCommand(i));paletteItems.append(b);});}
  function chooseCommand(i){const cmd=filtered[i];if(!cmd)return;palette.close();cmd.run();previousFocus?.focus?.();}
  function openPalette(){previousFocus=document.activeElement;filtered=commands;selected=0;paletteInput.value='';renderCommands();palette.showModal();paletteInput.focus();}
  $('#openPalette').addEventListener('click',openPalette);
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(!palette.open)openPalette();}if(!palette.open)return;if(e.key==='ArrowDown'){e.preventDefault();selected=(selected+1)%filtered.length;renderCommands();}if(e.key==='ArrowUp'){e.preventDefault();selected=(selected-1+filtered.length)%filtered.length;renderCommands();}if(e.key==='Enter'){e.preventDefault();chooseCommand(selected);}});
  paletteInput.addEventListener('input',()=>{const q=paletteInput.value.toLowerCase();filtered=commands.filter(c=>c.label.toLowerCase().includes(q)||c.detail.toLowerCase().includes(q));selected=0;renderCommands();});
  palette.addEventListener('close',()=>previousFocus?.focus?.());
  renderCommands();

  // Footer year.
  $('#year').textContent=new Date().getFullYear();
})();