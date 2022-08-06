(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{42:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},91:function(e,t,s){"use strict";s.r(t);var i=s(11),n=s(2),a=s(1),c=s(0),r=Object(a.createContext)(),l=function(e){var t=e.children,s=Object(a.useState)("light"),i=Object(n.a)(s,2),l=i[0],o=i[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(c.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://frankpacini.github.io",d="FP.",j="Frank Pacini",u="Welcome to my portfolio! I'm Frank, a senior at Boston University studying Computer Science and Statistics. I have experience across the development stack, and am interested in engineering roles where I can develop the platforms that make full scale data analytics and AI possible for organizations. Some of my notable experience and projects are shown below.",h="resume.pdf",m={linkedin:"frank-pacini",github:"frankpacini"},b=[{name:"Boston University",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boston_University_seal.svg/1200px-Boston_University_seal.svg.png",degree:"B.A. Computer Science and Statistics",date_start:"September 2019",date_end:"May 2023",description:"Relevant Coursework:",bullets:["Deep Learning, Data Science, Machine Learning, NLP (expected), Big Data (expected)","Algorithms, Operating Systems, Programming Languages, Cybersecurity","Linear Models, Mathematical Statistics, Stochastic Processes, Nonparametric Statistics (expected)"],gpa:"3.97"}],p=[{name:"Dell Technologies",logo:"https://www.lesopportunites.com/wp-content/uploads/2022/03/DELL.png",title:"Software Engineer Intern",date_start:"June 2022",date_end:"August 2022",description:"Developed Java extension for the Oracle Enterprise Manager database platform to collect and display hardware-level statistics and alerts.",bullets:[],skills:["Java","Javascript","Perl","Oracle DB"]},{name:"BU Spark! & Civera Software",logo:"https://mic.bu.edu/image/logo/spark.png",title:"Software Developer Intern",date_start:"February 2022",date_end:"May 2022",description:"Implemented a web scraper for masscourts.org and data pipeline with Python, MySQL and AWS to provide an easily accessible, comprehensive dataset of Massachusetts court cases to researchers and policy makers.",bullets:[],skills:["Python","MySQL","AWS"]},{name:"Dell Technologies",logo:"https://www.lesopportunites.com/wp-content/uploads/2022/03/DELL.png",title:"Software Engineer Intern",date_start:"May 2021",date_end:"August 2021",description:"Created end-to-end pipeline infrastructure in Go for collecting internal metrics from multiple sources, running ML models, and visualizing data insights.",bullets:["Developed plugins in Go to support data processing and execution of any Tensorflow ML model within the Telegraf data collection infrastructure, significantly reducing evaluation time on the collected metrics.","Built neural networks in Tensorflow to predict GitHub repository activity, enabling more efficient scheduling of IT maintenance periods. Curated and trained on a dataset of 1,000,000+ internal commits.","Deployed an end-to-end time series data pipeline and visualization dashboard with Docker and SQL to enable monitoring of various hardware metrics on Dell systems."],skills:["Go","Telegraf","Tensorflow","Docker","SQL"]}],f=[{name:"LyricRec",description:"Lyric-based track recommendation site using deep language models and the Genius.com API.",full_description:"The idea of this project was to use ML language models to process song lyrics in order to find tracks which are lyrically similar to each other. The best observed model performance was achieved by taking a pretrained BERT language model and fine-tuning on lyric data (in this case the task was to predict the next line in the song given the previous). The LyricRec site is a full stack web app built in React.js and Django that allows users to search for tracks via the Genius API, retrieve similar songs from my model and compare lyrics. Microsoft Azure was used for the lyric database (compiled from Genius) and for model inference via Azure Functions. Ideally, this model would be used alongside the large quantity of track metadata already in use to provide better song recommendations to end users. The site is currently in use by Eatwell to bring its content and services to its users, primarily hospital patients.",stack:["PyTorch","React.js","Django","Azure"],sourceCode:"https://github.com/frankpacini/LyricRecSite",livePreview:"https://github.com/frankpacini/LyricRecSite",pictures:["/static/assets/lyricrec1.png","/static/assets/lyricrec2.png","/static/assets/lyricrec3.png"],videos:[]},{name:"Eatwell",description:"A content delivery and user management platform bringing the programs and services of local non-profit Eatwell to underprivileged households.",full_description:"This content delivery website was built for Eatwell Meal Kits, a local Boston non-profit, as part of the BU Hack4Impact student volunteer organization. I served as a developer and technical lead on the project, managing the team of 8-10 developers over the course of the school year, meeting with the customer to discuss requirements, and developing major features such as the recipe pages, user program management, and code-based login/authentication.",stack:["React.js","Material-ui","Firebase"],sourceCode:"https://github.com/frankpacini/eatwell",livePreview:"https://eatwell-meal-kits.web.app/",pictures:["/static/assets/eatwell_recipe.png","/static/assets/eatwell_upload.png"],videos:["https://github.com/frankpacini/frankpacini.github.io/raw/main/public/static/assets/eatwell.mp4"]},{name:"ANEDA",description:"Novel embedding-based graph representation model for rapidly finding optimal routes within large street networks.",full_description:"Trained an embedding-based graph representation model to predict optimal routes within large cities using network data from OpenStreetMap. The embeddings (basically an array of numbers) are trained to encode a spatial representation of a given city network based on the travel time between street corners within it. This is useful for algorithms such as A* which use distance approximations to more efficiently discover optimal routes. The ANEDA site I built in Leaftlet.js and Flask demonstrates the routing applications for this work with the Boston-area street network.",stack:["PyTorch","Flask","Leaflet.js"],sourceCode:"https://github.com/frankpacini/ANEDA",livePreview:"https://github.com/frankpacini/ANEDA",pictures:["/static/assets/aneda.png"],videos:[]}],g=["Python","Java","SQL","Go","JavaScript","PyTorch","TensorFlow","React.js","NumPy","Azure","Google Cloud","Docker","MySQL","CI/CD","Linux","Git"],x="fgpacini@bu.edu",O=s(27),v=s.n(O),k=s(25),w=s.n(k),y=s(29),N=s.n(y),_=s(28),C=s.n(_),S=(s(42),function(){var e=Object(a.useContext)(r),t=Object(n.a)(e,1)[0],s=t.themeName,i=t.toggleTheme,l=Object(a.useState)(!1),o=Object(n.a)(l,2),d=o[0],j=o[1],u=function(){return j(!d)};return Object(c.jsxs)("nav",{className:"center nav",children:[Object(c.jsxs)("ul",{style:{display:d?"flex":null},className:"nav__list",children:[b.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#education",onClick:u,className:"link link--nav",children:"Education"})}):null,p.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#experience",onClick:u,className:"link link--nav",children:"Experience"})}):null,f.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,g.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,x?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(c.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===s?Object(c.jsx)(w.a,{}):Object(c.jsx)(v.a,{})}),Object(c.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:d?Object(c.jsx)(C.a,{}):Object(c.jsx)(N.a,{})})]})}),E=(s(46),function(){var e=o,t=d;return Object(c.jsxs)("header",{className:"header center",children:[Object(c.jsx)("h3",{children:e?Object(c.jsx)("a",{href:e,className:"link",children:t}):t}),Object(c.jsx)(S,{})]})}),L=(s(47),function(){var e=j,t=h,s=m;Object(a.useEffect)((function(){var e=document.createElement("script");e.type="text/javascript",e.src="/static/libs/jquery.particleground.js",e.async=!0;var t=document.createElement("script");t.type="text/javascript",t.src="/static/libs/demo.js",t.async=!0,t.onload=function(){console.log(t),window.runParticle()},document.body.appendChild(e),document.body.appendChild(t)}),[]);var i=Object(a.useContext)(r),l=Object(n.a)(i,1)[0],o=l.themeName,d=(l.toggleTheme,{fontFamily:"Syncopate, sans-serif",fontWeight:10,color:"dark"===o?"white":"black"}),u={color:"white"},b={fontSize:"2em",color:"dark"===o?"white":"black",padding:"0px 5px 0px",display:"inline-block"};return Object(c.jsxs)("div",{id:"particles",children:[Object(c.jsx)("div",{id:"header",children:Object(c.jsx)(E,{})}),Object(c.jsxs)("div",{id:"intro",children:[Object(c.jsx)("img",{src:"/static/assets/profile.png",alt:"Profile",style:{width:"250px"}}),Object(c.jsx)("h2",{style:d,children:e}),Object(c.jsx)("hr",{style:{width:"50%",backgroundColor:"#E83951",borderColor:"#E83951"}}),Object(c.jsx)("a",{href:t,style:{display:"inline-block",verticalAlign:"top"},children:"light"===o?Object(c.jsx)("img",{src:"/static/assets/resume-icon.png",alt:"",height:"35",width:"35"}):Object(c.jsx)("img",{src:"/static/assets/resume-icon-invert.png",alt:"",height:"35",width:"35"})}),s.linkedin&&Object(c.jsx)("a",{href:"https://www.linkedin.com/in/".concat(s.linkedin,"/"),style:u,children:Object(c.jsx)("i",{className:"fab fa-linkedin",style:b})}),s.github&&Object(c.jsx)("a",{href:"https://www.github.com/".concat(s.github,"/"),style:u,children:Object(c.jsx)("i",{className:"fab fa-github",style:b})}),s.medium&&Object(c.jsx)("a",{href:"https://medium.com/@".concat(s.medium,"/"),style:u,children:Object(c.jsx)("i",{className:"fab fa-medium",style:b})})]})]})}),P=(s(48),function(){var e=u;return Object(c.jsx)("div",{className:"about center",children:Object(c.jsx)("p",{className:"about__desc",children:e&&e})})}),T=(s(49),function(){var e=Object(a.useContext)(r);Object(n.a)(e,1)[0].themeName;return Object(c.jsxs)("section",{id:"education",className:"section education",children:[Object(c.jsx)("h2",{className:"section__title",children:"Education"}),b.map((function(e){return Object(c.jsx)("div",{className:"card",children:Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsxs)("div",{className:"media",children:[Object(c.jsx)("div",{className:"media-left",children:""!==e.logo&&Object(c.jsx)("figure",{className:"image is-75x75",children:Object(c.jsx)("img",{src:e.logo,alt:e.name})})}),Object(c.jsxs)("div",{className:"media-content",children:[Object(c.jsx)("h3",{className:"title",children:e.name}),Object(c.jsx)("p",{className:"subtitle",style:{marginBottom:"0.2rem"},children:Object(c.jsx)("em",{children:e.degree})}),Object(c.jsxs)("p",{className:"subtitle is-6",children:[e.date_start," - ",e.date_end,"  \xa0 | \xa0 ","GPA: ".concat(e.gpa)]})]})]}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("p",{children:e.description}),0!==e.bullets.length&&Object(c.jsx)("ul",{children:e.bullets.map((function(e){return Object(c.jsx)("li",{children:e})}))})]})]})})}))]})}),A=(s(50),function(){var e=Object(a.useContext)(r),t=Object(n.a)(e,1)[0].themeName;return Object(c.jsxs)("section",{id:"experience",className:"section experience",children:[Object(c.jsx)("h2",{className:"section__title",children:"Experience"}),p.map((function(e){return Object(c.jsx)("div",{className:"card",children:Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsxs)("div",{className:"media",children:[Object(c.jsx)("div",{className:"media-left",children:""!==e.logo&&Object(c.jsx)("figure",{className:"image is-75x75",children:Object(c.jsx)("img",{src:e.logo,alt:e.name})})}),Object(c.jsxs)("div",{className:"media-content",children:[Object(c.jsx)("h3",{className:"title",children:e.name}),Object(c.jsx)("p",{className:"subtitle",style:{marginBottom:"0.2rem"},children:Object(c.jsx)("em",{children:e.title})}),Object(c.jsxs)("p",{className:"subtitle is-6",children:[e.date_start," - ",e.date_end]})]})]}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("p",{children:e.description}),0!==e.bullets.length&&Object(c.jsx)("ul",{children:e.bullets.map((function(e){return Object(c.jsx)("li",{children:e})}))}),0!==e.skills.length&&Object(c.jsx)("div",{className:"tags",children:e.skills.map((function(e){return Object(c.jsx)("span",{className:"tag-".concat(t),children:e})}))})]})]})})}))]})}),D=s(6),I=s.n(D),M=s(13),B=s.n(M),F=s(33),G=s.n(F),R=s(30),z=s(31),J=s(32),Q=s.n(J),U=(s(80),s(81),s(82),function(e){var t=e.project,s=Object(a.useContext)(r),i=Object(n.a)(s,1)[0].themeName,l=Object(a.useRef)();return Object(c.jsx)(R.a,{trigger:Object(c.jsx)("button",{type:"button",className:"btn btn--outline",style:{margin:"auto"},children:"View"}),modal:!0,nested:!0,onOpen:function(){return function(){var e;null===(e=l.current)||void 0===e||e.scrollIntoView()}()},className:"popup-".concat(i),children:function(e){return Object(c.jsxs)("div",{className:"modal",children:[Object(c.jsx)("button",{type:"button",className:"close",onClick:e,children:"\xd7"}),Object(c.jsxs)("div",{style:{margin:"15px"},children:[Object(c.jsxs)("h3",{className:"modal-title",children:[" ",t.name," "]}),Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsxs)(z.Carousel,{showThumbs:!1,className:"carousel-".concat(i),children:[t.videos.map((function(e){return Object(c.jsx)(Q.a,{controls:!0,width:"100%",url:e},I()())})),t.pictures.map((function(e){return Object(c.jsx)("img",{src:e,alt:"",style:{maxHeight:"50vh",width:"auto"}},I()())}))]}),Object(c.jsx)("p",{className:"project_full_description",children:null===t.full_description||""===t.full_description?t.description:t.full_description}),t.stack&&Object(c.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(c.jsx)("li",{className:"project__stack-item",children:e},I()())}))}),Object(c.jsxs)("div",{className:"modal-links",children:[t.sourceCode&&Object(c.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(c.jsx)(B.a,{})}),t.livePreview&&Object(c.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(c.jsx)(G.a,{})})]}),Object(c.jsx)("div",{ref:l})]})]})]})}})}),W=(s(83),function(){return f.length?Object(c.jsxs)("section",{id:"projects",className:"section projects",children:[Object(c.jsx)("h2",{className:"section__title",children:"Projects"}),Object(c.jsx)("div",{className:"projects__grid",children:f.map((function(e){return Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("h3",{children:e.name}),Object(c.jsx)("p",{className:"project__description",children:e.description}),Object(c.jsx)(U,{project:e})]},I()())}))})]}):null}),q=(s(84),function(){return g.length?Object(c.jsxs)("section",{className:"section skills",id:"skills",children:[Object(c.jsx)("h2",{className:"section__title",children:"Skills"}),Object(c.jsx)("ul",{className:"skills__list",children:g.map((function(e){return Object(c.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},I()())}))})]}):null}),H=s(34),V=s.n(H),K=(s(85),function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),s=t[0],i=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),s?Object(c.jsx)("div",{className:"scroll-top",children:Object(c.jsx)("a",{href:"#top",children:Object(c.jsx)(V.a,{fontSize:"large"})})}):null}),Y=(s(86),function(){return x?Object(c.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(c.jsx)("h2",{className:"section__title",children:"Contact"}),Object(c.jsx)("a",{href:"mailto:".concat(x),children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),X=(s(87),function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("a",{href:"https://github.com/frankpacini/frankpacini.github.io",className:"link footer__link",children:"Frank Pacini"})})}),Z=(s(88),function(){var e=Object(a.useContext)(r),t=Object(n.a)(e,1)[0].themeName;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(c.jsx)(L,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)(P,{}),Object(c.jsx)(T,{}),Object(c.jsx)(A,{}),Object(c.jsx)(W,{}),Object(c.jsx)(q,{}),Object(c.jsx)(Y,{})]}),Object(c.jsx)(K,{}),Object(c.jsx)(X,{})]})})});s(89);Object(i.render)(Object(c.jsx)(l,{children:Object(c.jsx)(Z,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.b005ecd5.chunk.js.map