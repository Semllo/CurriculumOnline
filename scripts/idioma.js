function Cambiar(x){
	
	if(x==0){
		idioma="es"
		celda = document.getElementById("seleccionen"); 	
		celda.style.background="";	
	}else if(x==1){
		idioma="en"
		celda = document.getElementById("selecciones"); 	
		celda.style.background="";
	}
	
	if(idioma=="es"){
	celda = document.getElementById("boton"); 	
	celda.innerHTML="Idioma"
	celda = document.getElementById("selecciones"); 	
	celda.style.background="green";	
	celda = document.getElementById("IngInf"); 	
	celda.innerHTML="Ingeniero inform&aacutetico junior"
	
	celda = document.getElementById("Titulo1"); 	
	celda.innerHTML="Sobre m&iacute"
	celda = document.getElementById("Titulo2"); 	
	celda.innerHTML="Mi perfil"	
	celda = document.getElementById("Titulo3"); 	
	celda.innerHTML="Educaci&oacuten"
	celda = document.getElementById("Titulo4"); 	
	celda.innerHTML="Experiencia"
	celda = document.getElementById("Titulo5"); 	
	celda.innerHTML="Idiomas"
	celda = document.getElementById("Titulo6"); 	
	celda.innerHTML="Habilidades"
	
	celda = document.getElementById("SubTitulo1"); 	
	celda.innerHTML="Programaci&oacuten"
	celda = document.getElementById("SubTitulo2"); 	
	celda.innerHTML="Otros"
	
	celda = document.getElementById("des1"); 	
	celda.innerHTML="Me considero una persona responsable, curiosa y con af&aacuten de aprender."
	celda = document.getElementById("des2"); 	
	celda.innerHTML="En mis inicios me quise dedicar a la m&uacutesica cl&aacutesica, estudi&eacute 10 años en un 	conservatorio mientras realizaba la eso y bachillerato. Durante toda mi vida he trabajado en m&uacuteltiples trabajos para poder estudiar, como jardinero, agricultor, etc. Una vez terminado el bachillerato, ten&iacutea claro que quer&iacutea estudiar alg&uacuten grado relacionado con las matem&aacuteticas, ya que, era lo que mejor se me daba. Finalmente me decant&eacute por la inform&aacutetica, principalmente, porque pens&eacute que ser&iacutea el futuro."
	celda = document.getElementById("des3"); 	
	celda.innerHTML="Soy un futuro Ing.Inform&aacutetico de 25 años, actualmente curso mi &uacuteltimo año en la Universidad Polit&eacutecnica de Valencia,Campus de Alcoy(EPSA)."	
	celda = document.getElementById("des4"); 	
	celda.innerHTML="En 2013 empec&eacute mis estudios, en ellos he aprendido muchas disciplinas como programación, redes, administracion de sistemas, etc. pero lo que m&aacutes me interesa y gusta es la programaci&oacuten."
	celda = document.getElementById("des5"); 	
	celda.innerHTML="En 2016 realic&eacute pr&aacutecticas de empresa en <a href='https://www.mabisy.com/'>Mabisy</a>, donde me dediqu&eacute principalmente a hacer web scraping. Al terminar empec&eacute un nuevo contrato de pr&aacutecticas en <a href='https://www.casaytextil.com/'>CasayTextil</a>, en esta segunda empresa desarroll&eacute un cuadro de mando integral. Tambi&eacuten colabor&eacute en el desarrollo e implementacion de diversos m&oacutedulos de un ERP(odoo)."
	celda = document.getElementById("des6"); 	
	celda.innerHTML="En 2017 segu&iacute con los estudios, especializ&aacutendome en sistemas de informaci&oacuten. En esta especialidad aprend&iacute las necesidades tecnol&oacutegicas de la empresa y realic&eacute proyectos como una tienda online integrada con un ERP o una terminal de punto de venta tambi&eacuten integrado e interrelacionado, etc. Adem&aacutes he realizado un <a href='https://ude.my/UC-AV49EF2D'>curso online sobre Spring Framework 4.3.</a>"
	celda = document.getElementById("des7"); 	
	celda.innerHTML="Terminando Grado en ingenier&iacutea inform&aacutetica en la<span itemprop='alumniOf'> EPSA</span>"
	celda = document.getElementById("des8"); 	
	celda.innerHTML="Bachillerato cientif&iacuteco-t&eacutecnico en<span itemprop='alumniOf'> IES Les Foies </span><span itemprop='addressLocality'>Benig&aacutenim</span>"
	celda = document.getElementById("des9"); 	
	celda.innerHTML="Ingeniería de software/UML,Git.."
	celda = document.getElementById("des10"); 	
	celda.innerHTML="Administracion de empresas"
	celda = document.getElementById("des11"); 	
	celda.innerHTML="Redes Lan/VLAN,DHCP,DNS,OSPF.."
	celda = document.getElementById("des12"); 	
	celda.innerHTML="Ayuntamiento de Beniatjar ~ 2010"
	celda = document.getElementById("des13"); 	
	celda.innerHTML="Biblioteca de Beniatjar ~ 2009"
	celda = document.getElementById("des14"); 	
	celda.innerHTML="Valenciano ~ Nativo"
	celda = document.getElementById("des15"); 	
	celda.innerHTML="Castellano ~ Nativo"
	celda = document.getElementById("des16"); 	
	celda.innerHTML="Ingl&eacutes ~ B&aacutesico(Acreditaci&oacuten nivel B2 por la EPSA)"
		
	}else if(idioma=="en"){

	celda = document.getElementById("boton"); 	
	celda.innerHTML="Language"	
	celda = document.getElementById("seleccionen"); 	
	celda.style.background="green";	
	celda = document.getElementById("IngInf"); 	
	celda.innerHTML="Junior Computer Engineer"
	
	celda = document.getElementById("Titulo1"); 	
	celda.innerHTML="About me"
	celda = document.getElementById("Titulo2"); 	
	celda.innerHTML="My profile"
	celda = document.getElementById("Titulo3"); 	
	celda.innerHTML="Education"
	celda = document.getElementById("Titulo4"); 	
	celda.innerHTML="Experience"
	celda = document.getElementById("Titulo5"); 	
	celda.innerHTML="Languages"
	celda = document.getElementById("Titulo6"); 	
	celda.innerHTML="Abilities"
	
	celda = document.getElementById("SubTitulo1"); 	
	celda.innerHTML="Programming"
	celda = document.getElementById("SubTitulo2"); 	
	celda.innerHTML="Others"
	
	celda = document.getElementById("des1"); 	
	celda.innerHTML="I consider myself a responsible person, curious and eager to learn."
	celda = document.getElementById("des2"); 	
	celda.innerHTML="At the beginning, I wanted to become a classical music musician, so I studied 10 years in a conservatory, while I was doing elementary and middle school. Throughout my life, I have worked at multiple jobs, as a gardener, farmer, etc. Once I finished middle school, I had no doubts: I wanted to study a degree related to mathematics since I was good at that. Finally, I chose Computer Engineering, mainly because I thought it would be the future."
	celda = document.getElementById("des3"); 	
	celda.innerHTML="I am a 25-year-old Computer Engineer, currently studying my last year at the Polytechnic University of Valencia, Campus of Alcoy (EPSA)."
	celda = document.getElementById("des4"); 	
	celda.innerHTML="In 2013, I began my studies, in which I have learned many disciplines such as programming, networks, systems administration, etc. However, the one which I am most interested at is programming."
	celda = document.getElementById("des5"); 	
	celda.innerHTML="In 2016, I did an internship at  <a href='https://www.mabisy.com/'>Mabisy</a>, where I worked mainly in web scraping. When I finished, I started a new internship contract at <a href='https://www.casaytextil.com/'>CasayTextil</a>. At this second company, I developed a balanced scorecard. I also collaborated in the development and implementation of several modules of an ERP (odoo)."
	celda = document.getElementById("des6"); 	
	celda.innerHTML="In 2017, I finished my studies, and I specialized in information systems, from which I learned the technological needs of the company and carried out projects such as an online store integrated with an ERP or a point of sale terminal integrated and also interrelated, etc. I have also completed an <a href='https://ude.my/UC-AV49EF2D'> online curse about Spring Framework 4.3.</a>"
	celda = document.getElementById("des7"); 	
	celda.innerHTML="Finishing Degree in computer engineering at EPSA"
	celda = document.getElementById("des8"); 	
	celda.innerHTML="Scientific and technical middle school at IES Les Foies Benigánim"
	celda = document.getElementById("des9"); 	
	celda.innerHTML="Software Engineering/UML, Git .."
	celda = document.getElementById("des10"); 	
	celda.innerHTML="Business Administration"
	celda = document.getElementById("des11"); 	
	celda.innerHTML="Lan networks/VLAN,DHCP,DNS,OSPF.."
	celda = document.getElementById("des12"); 	
	celda.innerHTML="City Council of Beniatjar ~ 2010"
	celda = document.getElementById("des13"); 	
	celda.innerHTML="Library of Beniatjar ~ 2009"
	celda = document.getElementById("des14"); 	
	celda.innerHTML="Valencian ~ Native"
	celda = document.getElementById("des15"); 	
	celda.innerHTML="Spanish ~ Native"
	celda = document.getElementById("des16"); 	
	celda.innerHTML="English ~ Basic(Accreditation level B2 by EPSA)"
		
	}
}