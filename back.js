const AVATAR_COLORS=['#2a5fff','#7c3aed','#db2777','#059669','#d97706','#dc2626','#0891b2','#65a30d','#9333ea','#0d9488','#b45309','#be123c'];

/* ── Removed: Mohmadd muslmani (id 7) ── */
const DEFAULT_ALUMNI=[
  {id:1,name:'Priya Sharma',grad:2019,role:'Senior Product Manager',company:'Google',industry:'Tech',domain:'Product Management',skills:['Product Strategy','Agile','User Research','Roadmapping','OKRs'],availability:'available',bio:'Product leader with 5+ years building consumer and enterprise products. Passionate about user-centric design and data-driven decisions. Happy to help with PM interviews, career pivots, and product thinking.',mentorship:'Open to 1:1 calls monthly. Prefer mentees interested in PM roles at large tech or startups.',connections:142,sessions:38,rating:4.9,linkedin:''},
  {id:2,name:'Mohan das',grad:2017,role:'Engineering Manager',company:'Meta',industry:'Tech',domain:'Software Engineering',skills:['React','Node.js','System Design','Leadership','Python'],availability:'busy',bio:'EM leading a team of 12 engineers on infrastructure at Meta. CS grad with deep love for distributed systems and great engineering culture. Previously at Stripe and Airbnb.',mentorship:'Accepting requests for engineering career growth and system design prep. Limited slots.',connections:89,sessions:21,rating:4.8,linkedin:''},
  {id:3,name:'Anika Patel',grad:2021,role:'Data Scientist',company:'Netflix',industry:'Media',domain:'Data Science',skills:['Python','ML','SQL','Spark','A/B Testing'],availability:'available',bio:'Data scientist at Netflix working on personalization algorithms. Loves teaching ML concepts and helping others break into data science. Previously interned at Amazon and LinkedIn.',mentorship:'Happy to review resumes, prep for DS interviews, and discuss career paths.',connections:67,sessions:15,rating:4.7,linkedin:''},
  {id:4,name:'sweta bansal',grad:2018,role:'Investment Banker',company:'Goldman Sachs',industry:'Finance',domain:'Investment Banking',skills:['Financial Modeling','Valuation','M&A','Excel','PowerPoint'],availability:'unavailable',bio:'Associate in Tech M&A at Goldman Sachs. Advise on multi-billion dollar deals. Strong interest in fintech and crypto. Happy to help with IB recruiting and technical prep.',mentorship:'Currently not accepting new mentees. Check back in Q2.',connections:203,sessions:9,rating:4.6,linkedin:''},
  {id:5,name:'Sonia kumari',grad:2020,role:'UX Designer',company:'Figma',industry:'Tech',domain:'Design',skills:['Figma','UX Research','Interaction Design','Prototyping','Design Systems'],availability:'available',bio:'Designer at Figma, building tools for designers. Previously at IDEO and Dropbox. Passionate about design systems and accessibility. Speaker at Config 2024.',mentorship:'Love helping people transition into UX/product design. Portfolio reviews welcome.',connections:112,sessions:44,rating:5.0,linkedin:''},
  {id:6,name:'Danish yadav',grad:2016,role:'Startup Founder & CEO',company:'Nexus AI',industry:'Tech',domain:'Entrepreneurship',skills:['Fundraising','Strategy','AI/ML','B2B Sales','Team Building'],availability:'busy',bio:'2x founder. Raised $12M Series A for Nexus AI, a B2B SaaS platform for enterprise automation. Ex-Google, ex-McKinsey. YC W22 alum.',mentorship:'Open to advising early-stage founders on go-to-market, fundraising, and scaling teams.',connections:318,sessions:62,rating:4.9,linkedin:''},
  {id:8,name:'Raj Menon',grad:2015,role:'Director of Marketing',company:'HubSpot',industry:'SaaS',domain:'Marketing',skills:['Growth Marketing','SEO','Content Strategy','Analytics','Demand Gen'],availability:'available',bio:'10+ years in B2B SaaS marketing. Built HubSpot\'s APAC go-to-market strategy from scratch. Previously at Salesforce. Author of the "SaaS Growth Playbook" newsletter.',mentorship:'Mentoring junior and mid-level marketers who want to grow in SaaS.',connections:256,sessions:71,rating:4.7,linkedin:''},
  {id:9,name:'Ankur Dwivedi',grad:2023,role:'Professional',company:'',industry:'Other',domain:'Other',skills:['Communication','Leadership','Problem Solving'],availability:'available',bio:'Ambitious professional open to mentoring students and sharing career insights.',mentorship:'Open to connecting with students and recent graduates.',connections:0,sessions:0,rating:5.0,linkedin:'https://www.linkedin.com/in/ankur-dwivedi005/',isNew:true},
  {id:10,name:'Dadichiluka Shiv Harsha Vignesh',grad:2023,role:'Professional',company:'',industry:'Tech',domain:'Software Engineering',skills:['Engineering','Technology','Innovation'],availability:'available',bio:'Tech enthusiast passionate about engineering and innovation, eager to mentor the next generation.',mentorship:'Happy to guide students in tech and engineering careers.',connections:0,sessions:0,rating:5.0,linkedin:'https://www.linkedin.com/in/dadichiluka-shiv-harsha-vignesh',isNew:true},
  {id:11,name:'Somya Gangwar',grad:2023,role:'Professional',company:'',industry:'Other',domain:'Other',skills:['Communication','Teamwork','Leadership'],availability:'available',bio:'Driven professional ready to share experiences and mentor aspiring students.',mentorship:'Open to 1:1 sessions with motivated students.',connections:0,sessions:0,rating:5.0,linkedin:'https://www.linkedin.com/in/somya-gangwar-191159200/',isNew:true},
  {id:12,name:'Pratishtha Pragya',grad:2023,role:'Professional',company:'',industry:'Other',domain:'Other',skills:['Research','Analysis','Communication'],availability:'available',bio:'Analytical thinker with a passion for knowledge sharing and professional development.',mentorship:'Excited to mentor students in research and career planning.',connections:0,sessions:0,rating:5.0,linkedin:'https://www.linkedin.com/in/p-pragya/',isNew:true},
  {id:13,name:'Tanisha Singh',grad:2023,role:'Professional',company:'',industry:'Other',domain:'Other',skills:['Strategy','Leadership','Collaboration'],availability:'available',bio:'Collaborative leader eager to give back by mentoring students and young professionals.',mentorship:'Open to discussing career paths and professional development.',connections:0,sessions:0,rating:5.0,linkedin:'https://www.linkedin.com/in/tanisha-singh-88b544260/',isNew:true},
  {id:14,name:'Venkatesh Mishra',grad:2023,role:'Professional',company:'',industry:'Tech',domain:'Software Engineering',skills:['Software Development','Problem Solving','Tech'],availability:'available',bio:'Software professional passionate about tech innovation and mentoring aspiring engineers.',mentorship:'Happy to guide students exploring software engineering careers.',connections:0,sessions:0,rating:5.0,linkedin:'https://www.linkedin.com/in/venkatesh-mishra02112002/',isNew:true},
  {id:15,name:'Samriddhi Tripathi',grad:2023,role:'Professional',company:'',industry:'Other',domain:'Other',skills:['Creativity','Communication','Planning'],availability:'available',bio:'Creative and driven professional looking to inspire and mentor the next generation.',mentorship:'Open to mentoring students in diverse career paths.',connections:0,sessions:0,rating:5.0,linkedin:'https://www.linkedin.com/in/samriddhi-tripathi-489b72294/',isNew:true},
  {id:16,name:'Piyush Kumar',grad:2023,role:'Professional',company:'',industry:'Tech',domain:'Software Engineering',skills:['Development','Innovation','Engineering'],availability:'available',bio:'Tech professional keen on solving real-world problems and guiding students in their tech journey.',mentorship:'Looking to connect with students interested in tech and engineering.',connections:0,sessions:0,rating:5.0,linkedin:'https://www.linkedin.com/in/piyush1-gupta/',isNew:true},
  {id:17,name:'Ashwini Singh',grad:2023,role:'Professional',company:'',industry:'Other',domain:'Other',skills:['Leadership','Communication','Teamwork'],availability:'available',bio:'Dedicated professional ready to share career experiences and support student growth.',mentorship:'Open to mentoring students across various career interests.',connections:0,sessions:0,rating:5.0,linkedin:'https://www.linkedin.com/in/ashwini-singh-062465282/',isNew:true},
  {id:18,name:'Chirag Sharma',grad:2023,role:'Professional',company:'',industry:'Tech',domain:'Software Engineering',skills:['Technology','Development','Problem Solving'],availability:'available',bio:'Tech-driven professional excited to mentor students entering the world of software and innovation.',mentorship:'Happy to guide aspiring engineers and tech enthusiasts.',connections:0,sessions:0,rating:5.0,linkedin:'https://www.linkedin.com/in/sharmachirag760/',isNew:true},
  {id:19,name:'Jagpreet Singh Khurana',grad:2023,role:'Professional',company:'',industry:'Other',domain:'Other',skills:['Leadership','Strategy','Networking'],availability:'available',bio:'Networker and strategist eager to mentor students and help them navigate professional life.',mentorship:'Open to connecting and guiding students on career and networking strategies.',connections:0,sessions:0,rating:5.0,linkedin:'https://www.linkedin.com/in/khurana-js/',isNew:true},
  {id:20,name:'Ayush',grad:2023,role:'Professional',company:'',industry:'Tech',domain:'Software Engineering',skills:['Technology','Innovation','Engineering'],availability:'available',bio:'Passionate about technology and innovation. Looking to mentor students entering the tech industry.',mentorship:'Open to guiding students interested in tech, engineering, and startups.',connections:0,sessions:0,rating:5.0,linkedin:'https://www.linkedin.com/in/ayush-kumar-singh-a95170256/',isNew:true},
];

/* ── State ── */
let userAlumni=JSON.parse(localStorage.getItem('userAlumni')||'[]');
let ALUMNI_DATA=[...DEFAULT_ALUMNI,...userAlumni];
let alumniMap=new Map(ALUMNI_DATA.map(a=>[a.id,a]));
let currentUser=null;
let bookmarks=new Set(JSON.parse(localStorage.getItem('bookmarks')||'[]'));
let activeTab='all';
let activeFilters={industry:null,domain:null,avail:null};
let currentModalId=null;
let sidebarOpen=false;
let parsedLinkedInData={firstName:'',lastName:'',role:'',company:'',skills:[],bio:'',gradYear:''};
let currentSkills=[];
let filterTimer=null;

/* ── Helpers ── */
const getInitials=name=>name.trim().split(/\s+/).filter(Boolean).map(n=>n[0]).join('').toUpperCase().slice(0,2);
const getAvatarColor=id=>AVATAR_COLORS[(id-1)%AVATAR_COLORS.length];

/* ── Auth screens ── */
function showLogin(){hideAllScreens();document.getElementById('loginScreen').style.display='flex'}
function showSignup(){hideAllScreens();document.getElementById('signupScreen').style.display='flex'}
function hideAllScreens(){['loginScreen','signupScreen','studentSignupScreen','alumniSignupScreen'].forEach(id=>document.getElementById(id).style.display='none')}
function selectSignupType(type){hideAllScreens();if(type==='student')document.getElementById('studentSignupScreen').style.display='flex';else{document.getElementById('alumniSignupScreen').style.display='flex';resetAlumniForm()}}
function resetAlumniForm(){parsedLinkedInData={firstName:'',lastName:'',role:'',company:'',skills:[],bio:'',gradYear:''};currentSkills=[];document.getElementById('linkedinContent').value='';document.getElementById('parseStatus').className='parse-status';goToStep1()}

/* ── LinkedIn parse ── */
function parseLinkedIn(){
  const content=document.getElementById('linkedinContent').value.trim();
  const status=document.getElementById('parseStatus');
  if(!content||content.length<50){status.className='parse-status error';status.textContent='❌ Please paste more content from your LinkedIn profile.';return}
  status.className='parse-status info';status.textContent='🔄 Parsing your LinkedIn profile...';
  setTimeout(()=>{
    try{
      const parsed=extractLinkedInData(content);
      parsedLinkedInData=parsed;currentSkills=[...parsed.skills];
      status.className='parse-status success';status.textContent=`✅ Successfully extracted profile for "${parsed.firstName} ${parsed.lastName}"!`;
      setTimeout(()=>{populateStep2(parsed);goToStep2()},800);
    }catch(e){status.className='parse-status error';status.textContent='❌ Could not parse profile. Please try manually.'}
  },1000);
}

function extractLinkedInData(content){
  const lines=content.split('\n').map(l=>l.trim()).filter(l=>l);
  let firstName='',lastName='',role='',company='',skills=[],bio='',gradYear='';
  for(let i=0;i<Math.min(10,lines.length);i++){
    const line=lines[i];
    if(line.match(/^(Home|My Network|Jobs|Messaging|Notifications|Me|LinkedIn|Search)/i))continue;
    if(line.match(/^(View|Edit|Add|More|Open|Share|Save|Connect|Follow|Message)/i))continue;
    if(line.length>50)continue;
    if(line.match(/\d+\s*(connections|followers)/i))continue;
    if(!firstName&&line.match(/^[A-Za-z\s\-\.]+$/)&&line.length<40){const np=line.split(/\s+/);if(np.length>=2){firstName=np[0];lastName=np.slice(1).join(' ');continue}}
    if(firstName&&!role&&line.length<60){if(line.includes(' at ')){const p=line.split(' at ');role=p[0].trim();company=p[1].trim();continue}else if(line.match(/(Engineer|Manager|Director|Analyst|Designer|Consultant|Developer|Founder|CEO|CTO|VP|Lead|Senior|Junior|Associate|Intern)/i)){role=line;continue}}
    if(role&&!company&&line.length<40&&!line.includes('·')){if(line.match(/^[A-Za-z0-9\s\&\.\-]+$/)&&!line.match(/(University|College|School|Institute)/i)){company=line;continue}}
  }
  const eduMatch=content.match(/(19|20)\d{2}\s*[-–]\s*(19|20)\d{2}/g);
  if(eduMatch){const years=eduMatch.map(m=>{const m2=m.match(/(19|20)\d{2}/g);return m2?parseInt(m2[m2.length-1]):null}).filter(y=>y&&y<=new Date().getFullYear());if(years.length)gradYear=Math.max(...years).toString()}
  if(!gradYear){const cm=content.match(/Class of (\d{4})/i)||content.match(/Graduated?\s*:?\s*(\d{4})/i);if(cm)gradYear=cm[1]}
  const skillsMatch=content.match(/Skills[\s\S]*?([\w\s,\+\#\.\-]+)/i);
  if(skillsMatch)skills=skillsMatch[1].split(/[,·•\n]/).map(s=>s.trim()).filter(s=>s.length>1&&s.length<30&&!s.match(/^(Show|See|View|Add|Edit|More|Skills|endorsements?|\d+)/i)).slice(0,10);
  const common=['JavaScript','Python','React','Node.js','SQL','Java','C++','AWS','Docker','Machine Learning','Data Science','Product Management','Agile','Figma','Marketing','Finance','Excel','Leadership','Strategy','Analytics'];
  common.forEach(s=>{if(content.toLowerCase().includes(s.toLowerCase())&&!skills.includes(s))skills.push(s)});
  skills=[...new Set(skills)].slice(0,8);
  const aboutMatch=content.match(/About\s*\n([\s\S]*?)(?=Experience|Education|Skills|Activity|$)/i);
  if(aboutMatch)bio=aboutMatch[1].trim().split('\n')[0].slice(0,500);
  return{firstName:firstName||'Alumni',lastName:lastName||'User',role:role||'Professional',company:company||'Company',skills:skills.length?skills:['Problem Solving','Communication','Leadership'],bio:bio||'Experienced professional looking to mentor the next generation.',gradYear:gradYear||'2020'};
}

function skipToManual(){parsedLinkedInData={firstName:'',lastName:'',role:'',company:'',skills:[],bio:'',gradYear:''};currentSkills=[];populateStep2(parsedLinkedInData);goToStep2()}
function populateStep2(data){
  ['alumniFirst','alumniLast','alumniRole','alumniCompany','alumniGrad','alumniBio'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=data[{alumniFirst:'firstName',alumniLast:'lastName',alumniRole:'role',alumniCompany:'company',alumniGrad:'gradYear',alumniBio:'bio'}[id]]||''});
  currentSkills=[...data.skills];renderSkills();updatePreview();
}

function goToStep1(){document.getElementById('alumniStep1').style.display='block';document.getElementById('alumniStep2').style.display='none';document.getElementById('alumniStep3').style.display='none';document.getElementById('step1').className='step active';document.getElementById('step2').className='step';document.getElementById('step3').className='step'}
function goToStep2(){document.getElementById('alumniStep1').style.display='none';document.getElementById('alumniStep2').style.display='block';document.getElementById('alumniStep3').style.display='none';document.getElementById('step1').className='step completed';document.getElementById('step2').className='step active';document.getElementById('step3').className='step'}
function goToStep3(){
  const fields=['alumniFirst','alumniLast','alumniRole','alumniCompany','alumniGrad'];
  const selects=['alumniIndustry','alumniDomain'];
  for(const f of fields){if(!document.getElementById(f).value.trim()){showToast('Please fill in all required fields');return}}
  for(const s of selects){if(!document.getElementById(s).value){showToast('Please select industry and domain');return}}
  document.getElementById('alumniStep1').style.display='none';document.getElementById('alumniStep2').style.display='none';document.getElementById('alumniStep3').style.display='block';
  document.getElementById('step1').className='step completed';document.getElementById('step2').className='step completed';document.getElementById('step3').className='step active';
}

/* ── Skills widget ── */
function renderSkills(){
  const container=document.getElementById('skillsContainer');
  const input=document.getElementById('skillInput');
  const frag=document.createDocumentFragment();
  currentSkills.forEach((skill,idx)=>{
    const tag=document.createElement('span');tag.className='skill-tag';
    tag.innerHTML=`${skill} <span class="remove-skill" onclick="removeSkill(${idx})">×</span>`;
    frag.appendChild(tag);
  });
  container.innerHTML='';container.appendChild(frag);container.appendChild(input);updatePreview();
}
function handleSkillInput(e){if(e.key==='Enter'){e.preventDefault();const v=e.target.value.trim();if(v&&!currentSkills.includes(v)&&currentSkills.length<10){currentSkills.push(v);e.target.value='';renderSkills()}}}
function removeSkill(idx){currentSkills.splice(idx,1);renderSkills()}
function updatePreview(){
  const first=document.getElementById('alumniFirst').value.trim();
  const last=document.getElementById('alumniLast').value.trim();
  const role=document.getElementById('alumniRole').value.trim();
  const company=document.getElementById('alumniCompany').value.trim();
  document.getElementById('previewAvatar').textContent=getInitials(`${first} ${last}`)||'?';
  document.getElementById('previewName').textContent=`${first} ${last}`.trim()||'Your Name';
  document.getElementById('previewRole').textContent=`${role}${company?' at '+company:''}`.trim()||'Your Role';
  document.getElementById('previewSkills').innerHTML=currentSkills.slice(0,5).map(s=>`<span class="preview-tag">${s}</span>`).join('');
}

['alumniFirst','alumniLast','alumniRole','alumniCompany'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener('input',updatePreview)});

/* ── Login / Signup ── */
function handleLogin(){
  const email=document.getElementById('loginEmail').value.trim();
  const pass=document.getElementById('loginPass').value;
  if(!email||!pass){showToast('Please fill in all fields');return}
  const name=email.split('@')[0].replace(/[^a-zA-Z ]/g,' ').replace(/\b\w/g,l=>l.toUpperCase());
  currentUser={name,email,type:'student'};startApp();
}
function handleStudentSignup(){
  const first=document.getElementById('studentFirst').value.trim();
  const last=document.getElementById('studentLast').value.trim();
  const email=document.getElementById('studentEmail').value.trim();
  const pass=document.getElementById('studentPass').value;
  if(!first||!last||!email||!pass){showToast('Please fill in all fields');return}
  currentUser={name:`${first} ${last}`,email,type:'student'};startApp();
}
function handleAlumniSignup(){
  const email=document.getElementById('alumniEmail').value.trim();
  const pass=document.getElementById('alumniPass').value;
  if(!email||!pass){showToast('Please fill in email and password');return}
  const newAlumni={id:Date.now(),name:`${document.getElementById('alumniFirst').value.trim()} ${document.getElementById('alumniLast').value.trim()}`,grad:parseInt(document.getElementById('alumniGrad').value)||2020,role:document.getElementById('alumniRole').value.trim(),company:document.getElementById('alumniCompany').value.trim(),industry:document.getElementById('alumniIndustry').value||'Tech',domain:document.getElementById('alumniDomain').value||'Other',skills:currentSkills.length?currentSkills:['Problem Solving','Communication'],availability:document.getElementById('alumniAvailability').value,bio:document.getElementById('alumniBio').value.trim()||'Experienced professional looking to mentor the next generation.',mentorship:document.getElementById('alumniMentorship').value.trim()||'Open to mentoring students and recent graduates.',connections:0,sessions:0,rating:5.0,isNew:true,linkedinImport:true,linkedin:''};
  userAlumni.push(newAlumni);localStorage.setItem('userAlumni',JSON.stringify(userAlumni));
  ALUMNI_DATA=[...DEFAULT_ALUMNI,...userAlumni];rebuildMap();
  currentUser={name:newAlumni.name,email,type:'alumni',alumniId:newAlumni.id};
  showToast('🎉 Your alumni profile has been created!');startApp();
}

function rebuildMap(){alumniMap=new Map(ALUMNI_DATA.map(a=>[a.id,a]))}

function startApp(){
  hideAllScreens();
  const app=document.getElementById('mainApp');app.style.display='flex';
  document.getElementById('userAvatar').textContent=getInitials(currentUser.name);
  userAlumni=JSON.parse(localStorage.getItem('userAlumni')||'[]');
  ALUMNI_DATA=[...DEFAULT_ALUMNI,...userAlumni];rebuildMap();
  buildFilters();renderGrid();
  showToast(`Welcome, ${currentUser.name.split(' ')[0]}! 👋`);
}
function handleLogout(){currentUser=null;document.getElementById('mainApp').style.display='none';document.getElementById('loginScreen').style.display='flex';document.getElementById('loginEmail').value='';document.getElementById('loginPass').value='';showToast('Signed out successfully')}

/* ── Filters ── */
function buildFilters(){
  const industries=[...new Set(ALUMNI_DATA.map(a=>a.industry))];
  const domains=[...new Set(ALUMNI_DATA.map(a=>a.domain))];
  const years=[...new Set(ALUMNI_DATA.map(a=>a.grad))].sort((a,b)=>b-a);
  const iCont=document.getElementById('industryFilters');
  const dCont=document.getElementById('domainFilters');
  const frag1=document.createDocumentFragment();
  const frag2=document.createDocumentFragment();
  industries.forEach(ind=>{const count=ALUMNI_DATA.filter(a=>a.industry===ind).length;const div=document.createElement('div');div.className='filter-chip';div.dataset.industry=ind;div.innerHTML=`<span>${ind}</span><span class="count">${count}</span>`;div.onclick=()=>toggleFilter(div,'industry');frag1.appendChild(div)});
  domains.forEach(dom=>{const count=ALUMNI_DATA.filter(a=>a.domain===dom).length;const div=document.createElement('div');div.className='filter-chip';div.dataset.domain=dom;div.innerHTML=`<span>${dom}</span><span class="count">${count}</span>`;div.onclick=()=>toggleFilter(div,'domain');frag2.appendChild(div)});
  iCont.innerHTML='';iCont.appendChild(frag1);
  dCont.innerHTML='';dCont.appendChild(frag2);
  const yearSel=document.getElementById('yearFilter');yearSel.innerHTML='<option value="">All years</option>';
  years.forEach(y=>{const opt=document.createElement('option');opt.value=y;opt.textContent=y;yearSel.appendChild(opt)});
}

function toggleFilter(el,type){
  const val=el.dataset[type];
  if(activeFilters[type]===val){activeFilters[type]=null;el.classList.remove('active')}
  else{if(activeFilters[type])document.querySelectorAll(`[data-${type}]`).forEach(e=>e.classList.remove('active'));activeFilters[type]=val;el.classList.add('active')}
  applyFilters();
}

/* Debounced search for fast typing */
function debouncedFilter(){clearTimeout(filterTimer);filterTimer=setTimeout(applyFilters,120)}

function applyFilters(){
  const query=document.getElementById('searchInput').value.toLowerCase();
  const year=document.getElementById('yearFilter').value;
  const sort=document.getElementById('sortSelect').value;
  let data=ALUMNI_DATA;
  if(activeTab==='bookmarks')data=data.filter(a=>bookmarks.has(a.id));
  if(query)data=data.filter(a=>a.name.toLowerCase().includes(query)||a.company.toLowerCase().includes(query)||a.skills.some(s=>s.toLowerCase().includes(query))||a.role.toLowerCase().includes(query)||a.domain.toLowerCase().includes(query));
  if(activeFilters.industry)data=data.filter(a=>a.industry===activeFilters.industry);
  if(activeFilters.domain)data=data.filter(a=>a.domain===activeFilters.domain);
  if(activeFilters.avail)data=data.filter(a=>a.availability===activeFilters.avail);
  if(year)data=data.filter(a=>a.grad==year);
  if(sort==='default')data=[...data].sort((a,b)=>(b.isNew?1:0)-(a.isNew?1:0));
  else if(sort==='az')data=[...data].sort((a,b)=>a.name.localeCompare(b.name));
  else if(sort==='za')data=[...data].sort((a,b)=>b.name.localeCompare(a.name));
  else if(sort==='newest')data=[...data].sort((a,b)=>b.grad-a.grad);
  else if(sort==='oldest')data=[...data].sort((a,b)=>a.grad-b.grad);
  renderCards(data);
  document.getElementById('resultsInfo').textContent=`Showing ${data.length} of ${ALUMNI_DATA.length} alumni`;
}
function renderGrid(){applyFilters()}

/* ── Card rendering with DocumentFragment ── */
function renderCards(data){
  const grid=document.getElementById('alumniGrid');
  if(!data.length){grid.innerHTML=`<div class="empty-state" style="grid-column:1/-1"><div class="big">🔍</div><p>${activeTab==='bookmarks'?'No bookmarked profiles yet. Explore alumni and save your favorites!':'No alumni found matching your filters.'}</p></div>`;return}
  const frag=document.createDocumentFragment();
  data.forEach(a=>frag.appendChild(createCard(a)));
  grid.innerHTML='';grid.appendChild(frag);
}

function createCard(a){
  const div=document.createElement('div');
  div.className='alumni-card'+(a.isNew?' new-alumni':'');
  div.onclick=e=>{if(!e.target.closest('.bookmark-btn,.btn-connect,.btn-mentor,.btn-linkedin-card'))openModal(a.id)};
  const color=getAvatarColor(a.id);
  const isBookmarked=bookmarks.has(a.id);
  const availLabel=a.availability.charAt(0).toUpperCase()+a.availability.slice(1);
  const skillsHtml=a.skills.slice(0,4).map(s=>`<span class="skill-tag">${s}</span>`).join('')+(a.skills.length>4?`<span class="skill-tag">+${a.skills.length-4}</span>`:'');
  const linkedinBtn=a.linkedin?`<a class="btn-linkedin-card" href="${a.linkedin}" target="_blank" onclick="event.stopPropagation()" title="View LinkedIn">in</a>`:'';
  div.innerHTML=`<div class="card-top"><div style="position:relative;flex-shrink:0;"><div class="avatar" style="background:${color}">${getInitials(a.name)}</div><div class="avail-dot ${a.availability}"></div></div><div class="card-info"><div class="card-name">${a.name}</div><div class="card-role">${a.role||'Professional'}</div><div class="card-company">${a.company||'Alumni'}</div></div><button class="bookmark-btn${isBookmarked?' bookmarked':''}" onclick="toggleBookmark(${a.id},this)">${isBookmarked?'⭐':'☆'}</button></div><div class="card-meta"><span class="meta-badge badge-year">Class of ${a.grad}</span><span class="meta-badge badge-domain">${a.domain}</span><span class="meta-badge badge-avail-${a.availability}">${availLabel}</span>${a.linkedin?'<span class="meta-badge badge-linkedin">LinkedIn</span>':''}</div><div class="card-skills">${skillsHtml}</div><div class="card-actions"><button class="btn-connect" onclick="connectAlumni('${a.name}')">Connect</button><button class="btn-mentor" onclick="openModal(${a.id})">📩 Mentor</button>${linkedinBtn}</div>`;
  return div;
}

/* ── Bookmarks ── */
function toggleBookmark(id,btn){
  if(bookmarks.has(id)){bookmarks.delete(id);btn.textContent='☆';btn.classList.remove('bookmarked');showToast('Removed from bookmarks')}
  else{bookmarks.add(id);btn.textContent='⭐';btn.classList.add('bookmarked');showToast('Saved to bookmarks ⭐')}
  localStorage.setItem('bookmarks',JSON.stringify([...bookmarks]));
  if(activeTab==='bookmarks')applyFilters();
}

function switchTab(tab){
  activeTab=tab;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.add('active');
  activeFilters={industry:null,domain:null,avail:null};
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
  document.getElementById('yearFilter').value='';document.getElementById('searchInput').value='';
  applyFilters();
}

/* ── Modal ── */
function openModal(id){
  const a=alumniMap.get(id);if(!a)return;
  currentModalId=id;
  const color=getAvatarColor(a.id);
  const av=document.getElementById('modalAvatar');av.style.background=color;av.textContent=getInitials(a.name);
  document.getElementById('modalName').textContent=a.name;
  document.getElementById('modalRole').textContent=a.role||'Professional';
  document.getElementById('modalCompany').textContent=`${a.company?a.company+' · ':''}${a.industry}`;
  document.getElementById('modalBio').textContent=a.bio;
  document.getElementById('modalMentor').textContent=a.mentorship;
  document.getElementById('modalBadges').innerHTML=`<span class="meta-badge badge-year">Class of ${a.grad}</span><span class="meta-badge badge-domain">${a.domain}</span><span class="meta-badge badge-avail-${a.availability}">${a.availability.charAt(0).toUpperCase()+a.availability.slice(1)}</span>${a.linkedin?'<span class="meta-badge badge-linkedin">LinkedIn</span>':''}`;
  document.getElementById('modalStats').innerHTML=`<div class="stat-box"><div class="stat-num">${a.connections}</div><div class="stat-lbl">Connections</div></div><div class="stat-box"><div class="stat-num">${a.sessions}</div><div class="stat-lbl">Sessions</div></div><div class="stat-box"><div class="stat-num">${a.rating}</div><div class="stat-lbl">Rating</div></div>`;
  document.getElementById('modalSkills').innerHTML=a.skills.map(s=>`<span class="skill-tag">${s}</span>`).join('');
  document.getElementById('modalBookmarkBtn').textContent=bookmarks.has(id)?'⭐ Saved':'☆ Save Profile';
  const liBtn=document.getElementById('modalLinkedInBtn');
  if(a.linkedin){liBtn.href=a.linkedin;liBtn.style.display='flex'}else{liBtn.style.display='none'}
  document.getElementById('modalOverlay').classList.add('open');document.body.style.overflow='hidden';
}
function closeModal(){document.getElementById('modalOverlay').classList.remove('open');document.body.style.overflow='';currentModalId=null}
function closeModalOutside(e){if(e.target===document.getElementById('modalOverlay'))closeModal()}
function toggleModalBookmark(){
  if(!currentModalId)return;
  const id=currentModalId;const bBtn=document.getElementById('modalBookmarkBtn');
  if(bookmarks.has(id)){bookmarks.delete(id);bBtn.textContent='☆ Save Profile';showToast('Removed from bookmarks')}
  else{bookmarks.add(id);bBtn.textContent='⭐ Saved';showToast('Saved to bookmarks ⭐')}
  localStorage.setItem('bookmarks',JSON.stringify([...bookmarks]));
  if(activeTab==='bookmarks'){closeModal();applyFilters()}else applyFilters();
}
function requestMentorship(){const a=alumniMap.get(currentModalId);if(!a)return;if(a.availability==='unavailable'){showToast(`${a.name} is not currently accepting mentees`);return}showToast(`Mentorship request sent to ${a.name}! 📩`);closeModal()}
function connectAlumni(name){showToast(`Connection request sent to ${name}!`)}

/* ── Theme / sidebar / toast ── */
function toggleTheme(){const h=document.documentElement;const d=h.getAttribute('data-theme')==='dark';h.setAttribute('data-theme',d?'light':'dark');document.getElementById('themeBtn').textContent=d?'☀️':'🌙'}
function toggleSidebar(){sidebarOpen=!sidebarOpen;document.getElementById('sidebar').classList.toggle('open',sidebarOpen)}
let toastTimer;
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2800)}

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});