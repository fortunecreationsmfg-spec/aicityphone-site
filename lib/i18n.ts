export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "es";
}

export const copy = {
  en: {
    htmlLang: "en",
    skip: "Skip to content",
    nav: {
      media: "Samples",
      homeServices: "Home services",
      audiences: "Cities & schools",
      how: "How it works",
      trust: "911",
      pricing: "Pricing",
      faq: "FAQ",
      privacy: "Privacy",
    },
    headerCta: "Get started",
    langLabel: "Language",
    en: "EN",
    es: "ES",
    hero: {
      switcherLabel: "Choose a line",
      civicBanner:
        "Cities, towns, and school districts: this is the AI City Phone page, including if you opened it from an email. Home-service companies are here too.",
      switcher: [
        {
          href: "#home-services",
          title: "Home services",
          body: "HVAC, roofing, plumbing, electrical, landscaping, and similar contractors.",
        },
        {
          href: "#cities",
          title: "Cities & towns",
          body: "City Hall, utilities, and department lines after hours.",
        },
        {
          href: "#schools",
          title: "School districts",
          body: "Parent, attendance, and front-office lines after the building closes.",
        },
      ],
      eyebrow: "24/7 AI phone answering",
      title: "Answered when no one can pick up.",
      body: "AI City Phone greets callers in English and Spanish, takes a complete message, schedules appointments, texts back, and routes emergencies. One plan, $450 a month, from FortuneCreations, LLC.",
      chips: [
        "24/7 answering",
        "Callbacks",
        "Appointment scheduling",
        "Text-back replies",
        "English + Spanish",
        "Message taking",
        "Emergency routing",
      ],
    },
    media: {
      kicker: "See & hear it in action",
      title: "Hear a city line and a school line.",
      videoCaption:
        "The film shows after-hours answering for local government and schools: a live answer, urgent routing, and a written log. It is a conceptual marketing video, not a recording of a real resident or parent. Home-service companies use the same answering service for estimates, text-back, and after-hours emergencies.",
      videoLabel: "AI City Phone conceptual marketing video",
      cityTitle: "City / resident call sample",
      cityCaption:
        "Demonstration after-hours call on a small-city line. A resident reaches a live answer — intake and a complete note, not a hold queue. Not a recording of a real constituent.",
      schoolTitle: "School / parent call sample",
      schoolCaption:
        "Demonstration parent call on a school-district line. Routine questions after the office is closed. Not a recording of a real family.",
      pricingNote: "$450 a month. See what is included.",
    },
    pillars: {
      title: "What the line does on every call.",
      lead: "The same answering service for a contractor, a city hall, or a district office. The greeting and the handoff follow the organization that owns the number.",
      items: [
        {
          title: "Answered 24/7",
          body: "Nights, weekends, and the hours everyone is already with someone else. Callers get a live answer instead of a full voicemail box.",
        },
        {
          title: "Messages and callbacks",
          body: "Each call leaves a complete note: who called, the number to call back, the language they used, and what they need.",
        },
        {
          title: "Appointment scheduling",
          body: "The agent books an appointment or an estimate window from the hours you approve, and writes down anything that needs a person.",
        },
        {
          title: "Text-back replies",
          body: "When a phone callback is not the right next step, the caller can receive a text with the detail you want them to have.",
        },
        {
          title: "English and Spanish",
          body: "The greeting and the intake are in both languages, so the person who calls back is not guessing what was said.",
        },
        {
          title: "Emergency routing",
          body: "A life-safety caller is told to hang up and dial 911. This line is not dispatch and does not hold that call. Other urgent calls — no heat, an active leak, a closure question — are flagged for the path you set.",
        },
      ],
    },
    how: {
      title: "Your number stays yours.",
      lead: "Callers keep the number on the truck, the city website, or the school handbook. You get a written record instead of a blinking light.",
      steps: [
        {
          n: "01",
          title: "Use the number you already publish",
          body: "After-hours, overflow, or the main line. Customers, residents, and parents do not have to learn a new brand.",
        },
        {
          n: "02",
          title: "Approve the answers",
          body: "Service area, estimate windows, hours, trash days, closures, attendance. The agent uses what you approve.",
        },
        {
          n: "03",
          title: "Answer, book, or take the message",
          body: "Routine questions get a clear answer. Appointments and estimates can be scheduled. Everything else becomes a complete message.",
        },
        {
          n: "04",
          title: "Route what is urgent",
          body: "A life-safety emergency goes to 911 and is never held. Other urgent calls are flagged for callback or the on-call path you choose.",
        },
        {
          n: "05",
          title: "Text back, then open the log",
          body: "Callers can receive a text reply. Your team gets a list of who called, in which language, and what they needed.",
        },
      ],
    },
    audiences: {
      title: "Three kinds of lines. One answering service.",
      lead: "Home-service companies, cities and towns, and school districts. The setup stays separate, so a roofing estimate does not land in a clerk's log.",
      homeKicker: "HVAC, roofing, plumbing, electrical, landscaping",
      homeTitle: "Home services",
      homeBody:
        "For HVAC companies, roofers, plumbers, electricians, landscapers, and similar contractors. A call that nobody answers is usually a job for whoever picks up next. While the crew is on a roof, in a crawl space, or done for the day, AI City Phone answers, books an estimate, takes the address and the problem, and texts back. After-hours emergencies — no heat, an active leak, power out at the house — are flagged for the on-call path you choose. A life-safety emergency is told to hang up and dial 911.",
      homeItems: [
        "Missed calls answered while the crew is on a job",
        "Estimate and appointment booking on the hours you approve",
        "After-hours emergencies flagged for callback",
        "English and Spanish for the customer on the phone",
      ],
      civicTitle: "Cities & schools",
      civicLead:
        "The lines this site started with. Residents and parents get a live answer after the office is closed. Staff get a written log. Setup can be handed to your IT manager.",
      cityTitle: "Cities & towns",
      cityBody:
        "Clerk, public works, parks, utility billing, and the main City Hall line. Residents get hours, pickup days, meeting dates, and a complete note when they need a person tomorrow.",
      cityItems: [
        "After-hours City Hall and department lines",
        "Utility, permit, and meeting FAQs",
        "A morning list the clerk can actually work",
      ],
      schoolTitle: "School districts",
      schoolBody:
        "Attendance, the front office, transportation, and weather closures. Parents get a live answer after the building is dark — without asking a secretary to take the cell phone home.",
      schoolItems: [
        "After-hours parent and attendance lines",
        "Closure, calendar, and registration questions",
        "Notes the office can act on at 8:00 a.m.",
      ],
      aside:
        "We do not publish invented case studies or call counts. The plan is $450 a month. If you want to talk through a contractor line, a city line, or a district line first, email FortuneCreations, LLC.",
    },
    trust: {
      title: "911 is never held. This line is not dispatch.",
      lead: "AI City Phone answers business, city, and school calls. It does not replace 911, does not dispatch police, fire, or EMS, and does not keep an emergency caller waiting. For a contractor, an after-hours problem such as no heat or an active leak is flagged for your on-call path. A life-safety emergency is still 911.",
      items: [
        {
          title: "Hang up and dial 911",
          body: "Emergency callers are instructed to hang up and dial 911 immediately. That instruction is part of the product, not a footnote.",
        },
        {
          title: "Never held, parked, or conferenced",
          body: "An emergency caller is not placed on hold, parked, or conferenced while the agent finishes a script. The path is off this line and onto 911.",
        },
        {
          title: "Not a public-safety answering point",
          body: "This is not a 911 center and not a replacement for police, fire, or EMS dispatch. Those agencies keep their own numbers and processes.",
        },
        {
          title: "A written log for the people who call back",
          body: "Non-emergency calls are written down. For a city or district, that note is a staff tool for the morning. It is not a promise that every note is already a formal records request. For a business, it is the callback list.",
        },
      ],
    },
    pricing: {
      title: "A simple monthly plan",
      lead: "One published price for a home-service company, a city or town, or a school district.",
      perMonth: "per month",
      billed: "Billed monthly.",
      coverage:
        "Covers one organization and the main number you want answered. If you need a second number or a separate log, email us before adding it. We will tell you the cost first.",
      includedTitle: "Included",
      included: [
        "24/7 AI answering",
        "Message taking with callback details",
        "Appointment and estimate scheduling",
        "Text-back replies",
        "English and Spanish",
        "A written log of each call",
        "Emergency routing, with a clear instruction to hang up and dial 911",
      ],
      subscribe: "Get started, $450/month",
      contact: "Questions? Contact us",
      mailSubject: "AI City Phone — $450/month",
      questionSubject: "AI City Phone — question",
      connectedNote:
        "Get started opens Stripe’s secure checkout and bills $450 each month. FortuneCreations, LLC does not see or store your card number. Questions? Contact us still sends an email.",
    },
    itHandoff: {
      kicker: "IT handoff",
      title: "Cities and districts can hand this to IT.",
      body: "Your IT department or IT manager can run setup through HighLevel’s online Boot Camp, with the training materials on that page. Home-service companies can skip that path and email FortuneCreations, LLC.",
      cta: "Open HighLevel Boot Camp",
      note: "The button opens HighLevel’s own training page. FortuneCreations, LLC stays available if you want a conversation first.",
    },
    faq: {
      title: "Questions worth answering before you start",
      items: [
        {
          q: "Does this replace 911?",
          a: "No. AI City Phone is not a public-safety answering point. Emergency callers are told to hang up and dial 911. Those calls are never placed on hold.",
        },
        {
          q: "Does this work for HVAC, roofers, and other contractors?",
          a: "Yes. Home-service companies use it to answer while the crew is on a job, book estimates, take the address and the problem, text back, and flag after-hours emergencies for the on-call path you set. Cities, towns, and school districts use the same service for their public lines.",
        },
        {
          q: "What does $450 a month include?",
          a: "24/7 answering, message taking, callbacks, appointment and estimate scheduling, text-back replies, English and Spanish, a written call log, and emergency routing. The plan covers one organization and its main number. FortuneCreations, LLC will say so before billing anything beyond that.",
        },
        {
          q: "What if Get started opens an email instead of a payment page?",
          a: "Checkout is a Stripe Payment Link. Until that link is connected on the site you are viewing, the button emails fortunecreationsut@froyorobo.com so you can start the $450/month plan. This site never asks for a card number. Questions? Contact us uses the same address.",
        },
        {
          q: "Is every call answered in English and Spanish?",
          a: "Yes. The greeting and intake are bilingual. That is part of the plan, not an add-on we hide in a quote.",
        },
        {
          q: "What is the call log?",
          a: "A written list of calls: who called, the language, the callback number, and what they needed. City and school staff often open it in the morning. A contractor can open it between jobs.",
        },
        {
          q: "Can our IT department handle setup?",
          a: "Yes, for a city or school district. This is easy to pass to your IT manager or IT team. They can run setup through HighLevel’s online Boot Camp, which includes training materials. The button in the IT section opens that HighLevel page. FortuneCreations, LLC can also map numbers and greetings if you want a conversation first. Home-service companies can email us and skip the Boot Camp path.",
        },
        {
          q: "Who operates AI City Phone?",
          a: "FortuneCreations, LLC. Contact: fortunecreationsut@froyorobo.com. The planned public domain is aicityphone.com.",
        },
        {
          q: "Can one setup cover both city hall and the district?",
          a: "Sometimes. They are different front doors and different logs. If you share a building or a phone vendor, say so in the email and we will map it honestly.",
        },
      ],
    },
    cta: {
      title: "Start the $450/month plan, or ask a question first.",
      body: "Tell FortuneCreations, LLC which number you already publish, and which calls should be booked, texted, or only written down.",
      handoff:
        "Cities and school districts can hand setup to an IT manager. Home-service companies can email us and we will map the greeting, the booking rules, and the after-hours path.",
    },
    footer: {
      blurb:
        "24/7 AI phone answering for home-service companies, cities and towns, and school districts. English and Spanish. 911 is never held.",
      legal: "FortuneCreations, LLC",
      domain: "Planned domain: aicityphone.com",
      privacy: "Privacy",
      contact: "Contact",
      homeServices: "Home services",
      cities: "Cities & towns",
      schools: "School districts",
      pricing: "Pricing",
    },
    thanks: {
      kicker: "Checkout",
      title: "Thank you",
      body: "If you finished checkout, FortuneCreations, LLC will use the email from Stripe to set up the line with you: the number, the greeting, what should be booked, and how urgent calls should be flagged.",
      note: "Opening this page does not, by itself, mean a payment went through. If you closed checkout early or you are not sure it completed, email us and we will look it up. The published plan is $450 a month.",
      home: "Back to the homepage",
    },
    privacy: {
      title: "Privacy",
      updated: "Last updated: October 25, 2026",
      sections: [
        {
          title: "Who we are",
          body: "AI City Phone is a 24/7 answering service for home-service companies, cities and towns, and school districts. It is operated by FortuneCreations, LLC. The planned public website is aicityphone.com. Contact: fortunecreationsut@froyorobo.com.",
        },
        {
          title: "This is not an emergency service",
          body: "Do not use AI City Phone or this website to request emergency services. Hang up and dial 911.",
        },
        {
          title: "What this site collects",
          body: "This marketing site does not require an account. If you email us, we receive whatever you send — typically a name, organization, phone number, and a short description of the line you want covered. We use that only to reply and to plan the service.",
        },
        {
          title: "Calls, recordings, and logs",
          body: "When a business, city, or district uses AI City Phone, call audio, transcripts, and call logs are handled on GoHighLevel and according to that organization’s own rules. FortuneCreations, LLC does not sell those records. The organization remains responsible for retention and for any public-records responses.",
        },
        {
          title: "Payments",
          body: "The published plan is $450 a month. When online checkout is connected, payment happens on a Stripe Payment Link, on Stripe’s site. FortuneCreations, LLC does not receive or store your card number. Stripe’s privacy policy applies to that page. If checkout is not connected, the subscribe button on this site opens an email to us instead of a payment page.",
        },
        {
          title: "HighLevel Boot Camp",
          body: "Cities and school districts may open HighLevel’s Boot Camp training page from the IT section of this site. That page is HighLevel’s. It has its own terms and privacy policy. FortuneCreations, LLC does not control HighLevel’s billing. This site does not send you through an affiliate link.",
        },
        {
          title: "Cookies and analytics",
          body: "This site uses Vercel Web Analytics to understand basic visits. It does not use advertising cookies, and we do not sell visitor data.",
        },
        {
          title: "Changes",
          body: "We may update this notice as the product and domain change. The date at the top will change when we do.",
        },
      ],
    },
  },
  es: {
    htmlLang: "es",
    skip: "Saltar al contenido",
    nav: {
      media: "Muestras",
      homeServices: "Servicios del hogar",
      audiences: "Ciudades y escuelas",
      how: "Cómo funciona",
      trust: "911",
      pricing: "Precio",
      faq: "Preguntas",
      privacy: "Privacidad",
    },
    headerCta: "Empiece",
    langLabel: "Idioma",
    en: "EN",
    es: "ES",
    hero: {
      switcherLabel: "Elija una línea",
      civicBanner:
        "Ciudades, pueblos y distritos escolares: esta es la página de AI City Phone, también si llegó desde un correo. Las empresas de servicios del hogar también están aquí.",
      switcher: [
        {
          href: "#home-services",
          title: "Servicios del hogar",
          body: "HVAC, techos, plomería, electricidad, jardinería y contratistas similares.",
        },
        {
          href: "#cities",
          title: "Ciudades y pueblos",
          body: "Ayuntamiento, servicios públicos y líneas de departamentos fuera de horario.",
        },
        {
          href: "#schools",
          title: "Distritos escolares",
          body: "Líneas de padres, asistencia y recepción cuando el edificio ya cerró.",
        },
      ],
      eyebrow: "Atención telefónica con IA, las 24 horas",
      title: "Contestamos cuando nadie puede atender.",
      body: "AI City Phone saluda en inglés y español, toma el mensaje completo, agenda citas, responde por texto y enruta las urgencias. Un plan, $450 al mes, de FortuneCreations, LLC.",
      chips: [
        "Atención 24/7",
        "Devoluciones de llamada",
        "Agenda de citas",
        "Respuesta por texto",
        "Inglés y español",
        "Toma de mensajes",
        "Enrutamiento de urgencias",
      ],
    },
    media: {
      kicker: "Véalo y escúchelo en acción",
      title: "Escuche una línea de ciudad y una de escuela.",
      videoCaption:
        "El video muestra la atención fuera de horario para gobiernos locales y escuelas: una respuesta en vivo, enrutamiento de urgencias y un registro escrito. Es un video conceptual de marketing, no la grabación de un residente o de una familia real. Las empresas de servicios del hogar usan el mismo servicio para presupuestos, respuesta por texto y urgencias fuera de horario.",
      videoLabel: "Video de marketing conceptual de AI City Phone",
      cityTitle: "Muestra de llamada ciudad / residente",
      cityCaption:
        "Llamada de demostración fuera de horario en una línea de ciudad pequeña. La persona recibe una respuesta en vivo: toma de datos y una nota completa, no una espera. No es la grabación de un residente real.",
      schoolTitle: "Muestra de llamada escuela / padre o madre",
      schoolCaption:
        "Llamada de demostración de un padre o madre en una línea de distrito escolar. Preguntas rutinarias cuando la oficina ya cerró. No es la grabación de una familia real.",
      pricingNote: "$450 al mes. Vea qué incluye.",
    },
    pillars: {
      title: "Qué hace la línea en cada llamada.",
      lead: "El mismo servicio de atención para un contratista, un ayuntamiento o la oficina del distrito. El saludo y la entrega siguen a la organización dueña del número.",
      items: [
        {
          title: "Atención las 24 horas",
          body: "Noches, fines de semana y las horas en que todo el equipo ya está con otra persona. Quien llama recibe una respuesta en vivo, no un buzón lleno.",
        },
        {
          title: "Mensajes y devoluciones",
          body: "Cada llamada deja una nota completa: quién llamó, el número para devolver la llamada, el idioma y qué necesita.",
        },
        {
          title: "Agenda de citas",
          body: "El agente reserva una cita o una ventana para un presupuesto en los horarios que usted aprueba, y anota lo que necesita una persona.",
        },
        {
          title: "Respuesta por texto",
          body: "Cuando una devolución de llamada no es el siguiente paso correcto, quien llamó puede recibir un mensaje de texto con el dato que usted quiere dar.",
        },
        {
          title: "Inglés y español",
          body: "El saludo y la toma de datos son en ambos idiomas, para que quien devuelva la llamada no tenga que adivinar lo que se dijo.",
        },
        {
          title: "Enrutamiento de urgencias",
          body: "A quien tiene una emergencia de vida o seguridad se le dice que cuelgue y marque 911. Esta línea no es despacho y no pone esa llamada en espera. Otras urgencias — sin calefacción, una fuga activa, una pregunta de cierre — quedan marcadas para el camino que usted defina.",
        },
      ],
    },
    how: {
      title: "Su número sigue siendo suyo.",
      lead: "Quien llama conserva el número del camión, del sitio de la ciudad o del manual de la escuela. Usted recibe un registro escrito, no una luz parpadeante.",
      steps: [
        {
          n: "01",
          title: "Use el número que ya publica",
          body: "Fuera de horario, desborde o la línea principal. Clientes, residentes y padres no tienen que aprender una marca nueva.",
        },
        {
          n: "02",
          title: "Apruebe las respuestas",
          body: "Zona de servicio, ventanas de presupuesto, horarios, basura, cierres, asistencia. El agente usa lo que usted aprueba.",
        },
        {
          n: "03",
          title: "Contestar, agendar o tomar el mensaje",
          body: "Las preguntas rutinarias reciben una respuesta clara. Las citas y los presupuestos se pueden agendar. Lo demás queda como mensaje completo.",
        },
        {
          n: "04",
          title: "Enrutar lo urgente",
          body: "Una emergencia de vida o seguridad va al 911 y nunca queda en espera. Las demás llamadas urgentes se marcan para devolución o para el camino de guardia que usted elija.",
        },
        {
          n: "05",
          title: "Responder por texto y abrir el registro",
          body: "Quien llama puede recibir un mensaje de texto. Su equipo recibe una lista de quién llamó, en qué idioma y qué necesitaba.",
        },
      ],
    },
    audiences: {
      title: "Tres tipos de línea. Un servicio de atención.",
      lead: "Empresas de servicios del hogar, ciudades y pueblos, y distritos escolares. La configuración se mantiene separada, para que un presupuesto de techos no llegue al registro de la secretaría.",
      homeKicker: "HVAC, techos, plomería, electricidad, jardinería",
      homeTitle: "Servicios del hogar",
      homeBody:
        "Para empresas de HVAC, techos, plomería, electricidad, jardinería y contratistas similares. Una llamada que nadie contesta suele ser un trabajo para quien atiende después. Mientras el equipo está en un techo, en un sótano o ya terminó el día, AI City Phone contesta, agenda un presupuesto, toma la dirección y el problema, y responde por texto. Las urgencias fuera de horario — sin calefacción, una fuga activa, la casa sin luz — quedan marcadas para el camino de guardia que usted elija. A una emergencia de vida o seguridad se le dice que cuelgue y marque 911.",
      homeItems: [
        "Llamadas contestadas mientras el equipo está en un trabajo",
        "Agenda de presupuestos y citas en los horarios que usted aprueba",
        "Urgencias fuera de horario marcadas para devolución",
        "Inglés y español para el cliente que llama",
      ],
      civicTitle: "Ciudades y escuelas",
      civicLead:
        "Las líneas con las que empezó este sitio. Residentes y padres reciben una respuesta en vivo cuando la oficina ya cerró. El personal recibe un registro escrito. La puesta en marcha se puede entregar a su gerente de TI.",
      cityTitle: "Ciudades y pueblos",
      cityBody:
        "Secretaría, obras públicas, parques, facturación de servicios y la línea principal del ayuntamiento. Quien llama obtiene horarios, días de recolección, fechas de reunión y una nota completa si necesita a alguien mañana.",
      cityItems: [
        "Líneas del ayuntamiento y de departamentos fuera de horario",
        "Preguntas de servicios, permisos y reuniones",
        "Una lista matutina con la que la secretaría puede trabajar",
      ],
      schoolTitle: "Distritos escolares",
      schoolBody:
        "Asistencia, recepción, transporte y cierres por clima. Los padres reciben una respuesta en vivo cuando el edificio ya está oscuro, sin que una secretaria se lleve el celular a casa.",
      schoolItems: [
        "Líneas de padres y de asistencia fuera de horario",
        "Preguntas de cierres, calendario e inscripción",
        "Notas que la oficina puede atender a las 8:00 a. m.",
      ],
      aside:
        "No publicamos casos de estudio ni conteos de llamadas inventados. El plan es de $450 al mes. Si quiere hablar primero de una línea de contratista, de ciudad o de distrito, escriba a FortuneCreations, LLC.",
    },
    trust: {
      title: "El 911 nunca se pone en espera. Esta línea no es despacho.",
      lead: "AI City Phone atiende llamadas de empresas, ciudades y escuelas. No reemplaza al 911, no despacha policía, bomberos ni EMS, y no deja esperando a quien tiene una emergencia. Para un contratista, un problema fuera de horario como falta de calefacción o una fuga activa se marca para su camino de guardia. Una emergencia de vida o seguridad sigue siendo 911.",
      items: [
        {
          title: "Cuelgue y marque 911",
          body: "A quien tiene una emergencia se le indica que cuelgue y marque 911 de inmediato. Esa instrucción es parte del producto, no una nota al pie.",
        },
        {
          title: "Nunca en espera, estacionada ni en conferencia",
          body: "Una llamada de emergencia no se pone en espera, no se estaciona y no entra a conferencia mientras el agente termina un guion. El camino es salir de esta línea y marcar 911.",
        },
        {
          title: "No es un punto de respuesta de seguridad pública",
          body: "Esto no es un centro 911 ni un reemplazo del despacho de policía, bomberos o EMS. Esas agencias conservan sus números y procesos.",
        },
        {
          title: "Un registro escrito para quien devuelve la llamada",
          body: "Las llamadas que no son emergencia quedan por escrito. Para una ciudad o un distrito, esa nota es una herramienta del personal para la mañana. No es la promesa de que cada nota ya es una solicitud formal de archivos. Para un negocio, es la lista de devoluciones.",
        },
      ],
    },
    pricing: {
      title: "Un plan mensual sencillo",
      lead: "Un precio publicado para una empresa de servicios del hogar, una ciudad o pueblo, o un distrito escolar.",
      perMonth: "al mes",
      billed: "Se factura cada mes.",
      coverage:
        "Cubre una organización y el número principal que quiere atender. Si necesita un segundo número o un registro aparte, escríbanos antes de agregarlo. Le diremos el costo primero.",
      includedTitle: "Incluye",
      included: [
        "Atención con IA las 24 horas",
        "Toma de mensajes con datos para devolver la llamada",
        "Agenda de citas y presupuestos",
        "Respuestas por mensaje de texto",
        "Inglés y español",
        "Un registro escrito de cada llamada",
        "Enrutamiento de urgencias, con la instrucción clara de colgar y marcar 911",
      ],
      subscribe: "Empiece, $450 al mes",
      contact: "¿Preguntas? Contáctenos",
      mailSubject: "AI City Phone — $450 al mes",
      questionSubject: "AI City Phone — pregunta",
      connectedNote:
        "«Empiece» abre el pago seguro de Stripe y cobra $450 cada mes. FortuneCreations, LLC no ve ni guarda su número de tarjeta. «¿Preguntas? Contáctenos» sigue enviando un correo.",
    },
    itHandoff: {
      kicker: "Entrega a TI",
      title: "Ciudades y distritos pueden pasarlo a TI.",
      body: "Su departamento de informática o gerente de TI puede hacer la puesta en marcha con el Boot Camp en línea de HighLevel y los materiales de esa página. Las empresas de servicios del hogar pueden omitir ese camino y escribir a FortuneCreations, LLC.",
      cta: "Abrir HighLevel Boot Camp",
      note: "El botón abre la página de capacitación de HighLevel. FortuneCreations, LLC sigue disponible si prefieren una conversación primero.",
    },
    faq: {
      title: "Preguntas útiles antes de empezar",
      items: [
        {
          q: "¿Esto reemplaza al 911?",
          a: "No. AI City Phone no es un punto de respuesta de seguridad pública. A quien tiene una emergencia se le dice que cuelgue y marque 911. Esas llamadas nunca se ponen en espera.",
        },
        {
          q: "¿Sirve para HVAC, techos y otros contratistas?",
          a: "Sí. Las empresas de servicios del hogar lo usan para contestar mientras el equipo está en un trabajo, agendar presupuestos, tomar la dirección y el problema, responder por texto y marcar las urgencias fuera de horario para el camino de guardia que definan. Ciudades, pueblos y distritos escolares usan el mismo servicio para sus líneas públicas.",
        },
        {
          q: "¿Qué incluye $450 al mes?",
          a: "Atención 24/7, toma de mensajes, devoluciones de llamada, agenda de citas y presupuestos, respuesta por texto, inglés y español, un registro escrito de llamadas y enrutamiento de urgencias. El plan cubre una organización y su número principal. FortuneCreations, LLC lo dirá antes de cobrar cualquier cosa adicional.",
        },
        {
          q: "¿Qué pasa si Empiece abre un correo en lugar de una página de pago?",
          a: "El pago es un Payment Link de Stripe. Hasta que ese enlace esté conectado en el sitio que está viendo, el botón escribe a fortunecreationsut@froyorobo.com para empezar el plan de $450 al mes. Este sitio nunca pide un número de tarjeta. ¿Preguntas? Contáctenos usa el mismo correo.",
        },
        {
          q: "¿Cada llamada se atiende en inglés y español?",
          a: "Sí. El saludo y la toma de datos son bilingües. Eso es parte del plan, no un extra escondido en una cotización.",
        },
        {
          q: "¿Qué es el registro de llamadas?",
          a: "Una lista escrita: quién llamó, el idioma, el número de devolución y qué necesitaba. El personal de la ciudad o la escuela suele abrirlo por la mañana. Un contratista puede abrirlo entre trabajos.",
        },
        {
          q: "¿Puede encargarse nuestro departamento de TI?",
          a: "Sí, en una ciudad o un distrito escolar. Es fácil pasarlo a su gerente de TI o al equipo de informática. Pueden hacer la puesta en marcha con el Boot Camp en línea de HighLevel, que incluye materiales de capacitación. El botón de la sección de TI abre esa página de HighLevel. FortuneCreations, LLC también puede mapear números y saludos si quieren una conversación primero. Las empresas de servicios del hogar pueden escribirnos y omitir el Boot Camp.",
        },
        {
          q: "¿Quién opera AI City Phone?",
          a: "FortuneCreations, LLC. Contacto: fortunecreationsut@froyorobo.com. El dominio público previsto es aicityphone.com.",
        },
        {
          q: "¿Una sola configuración cubre el ayuntamiento y el distrito?",
          a: "A veces. Son puertas distintas y registros distintos. Si comparten edificio o proveedor telefónico, díganlo en el correo y lo mapeamos con honestidad.",
        },
      ],
    },
    cta: {
      title: "Empiece el plan de $450 al mes, o pregunte primero.",
      body: "Dígale a FortuneCreations, LLC qué número ya publica y qué llamadas deben agendarse, responderse por texto o solo anotarse.",
      handoff:
        "Las ciudades y los distritos escolares pueden entregar la puesta en marcha a un gerente de TI. Las empresas de servicios del hogar pueden escribirnos y mapeamos el saludo, las reglas de agenda y el camino fuera de horario.",
    },
    footer: {
      blurb:
        "Atención telefónica con IA las 24 horas para empresas de servicios del hogar, ciudades y pueblos, y distritos escolares. Inglés y español. El 911 nunca se pone en espera.",
      legal: "FortuneCreations, LLC",
      domain: "Dominio previsto: aicityphone.com",
      privacy: "Privacidad",
      contact: "Contacto",
      homeServices: "Servicios del hogar",
      cities: "Ciudades y pueblos",
      schools: "Distritos escolares",
      pricing: "Precio",
    },
    thanks: {
      kicker: "Pago",
      title: "Gracias",
      body: "Si terminó el pago, FortuneCreations, LLC usará el correo de Stripe para configurar la línea con usted: el número, el saludo, qué debe agendarse y cómo marcar las llamadas urgentes.",
      note: "Abrir esta página no significa, por sí solo, que un pago se haya completado. Si cerró el pago antes de tiempo o no está seguro, escríbanos y lo revisamos. El plan publicado es de $450 al mes.",
      home: "Volver al inicio",
    },
    privacy: {
      title: "Privacidad",
      updated: "Última actualización: 25 de octubre de 2026",
      sections: [
        {
          title: "Quiénes somos",
          body: "AI City Phone es un servicio de atención 24/7 para empresas de servicios del hogar, ciudades y pueblos, y distritos escolares. Lo opera FortuneCreations, LLC. El sitio público previsto es aicityphone.com. Contacto: fortunecreationsut@froyorobo.com.",
        },
        {
          title: "Esto no es un servicio de emergencia",
          body: "No use AI City Phone ni este sitio para pedir servicios de emergencia. Cuelgue y marque 911.",
        },
        {
          title: "Qué recopila este sitio",
          body: "Este sitio de marketing no pide una cuenta. Si nos escribe, recibimos lo que envíe: por lo general un nombre, la organización, un teléfono y una descripción breve de la línea que quieren cubrir. Eso se usa solo para responder y planear el servicio.",
        },
        {
          title: "Llamadas, grabaciones y registros",
          body: "Cuando una empresa, una ciudad o un distrito usa AI City Phone, el audio, las transcripciones y los registros de llamadas se manejan en GoHighLevel y según las reglas de esa organización. FortuneCreations, LLC no vende esos registros. La organización sigue siendo responsable de la retención y de las solicitudes de archivos públicos.",
        },
        {
          title: "Pagos",
          body: "El plan publicado es de $450 al mes. Cuando el pago en línea está conectado, el cobro ocurre en un Payment Link de Stripe, en el sitio de Stripe. FortuneCreations, LLC no recibe ni guarda su número de tarjeta. La política de privacidad de Stripe aplica a esa página. Si el pago no está conectado, el botón de suscripción de este sitio abre un correo en lugar de una página de pago.",
        },
        {
          title: "HighLevel Boot Camp",
          body: "Las ciudades y los distritos escolares pueden abrir la página de capacitación Boot Camp de HighLevel desde la sección de TI de este sitio. Esa página es de HighLevel. Tiene sus propios términos y su política de privacidad. FortuneCreations, LLC no controla la facturación de HighLevel. Este sitio no lo envía por un enlace de afiliado.",
        },
        {
          title: "Cookies y analítica",
          body: "Este sitio usa Vercel Web Analytics para entender las visitas básicas. No usa cookies publicitarias y no vendemos datos de visitantes.",
        },
        {
          title: "Cambios",
          body: "Podemos actualizar este aviso cuando cambien el producto y el dominio. La fecha de arriba cambiará cuando lo hagamos.",
        },
      ],
    },
  },
} as const;

export type Dictionary = (typeof copy)[Locale];
