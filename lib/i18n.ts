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
      media: "See & hear it",
      how: "How it works",
      audiences: "Who it's for",
      trust: "911",
      pricing: "Pricing",
      faq: "FAQ",
      privacy: "Privacy",
    },
    headerCta: "Request a conversation",
    langLabel: "Language",
    en: "EN",
    es: "ES",
    hero: {
      eyebrow: "Done-for-you AI phone answering",
      cityTitle: "After-hours resident calls, answered.",
      cityBody:
        "We answer the line for small city and town departments. Residents and parents are greeted in English and Spanish, a complete message is taken, and staff get a morning log. 911 is never held. The service includes 24/7 AI call answering, missed-call text-back, automatic callbacks, appointment and estimate scheduling, and text replies around the clock. Setup and ongoing management are done for you.",
      homeTitle: "Missed calls on the job turn into lost jobs.",
      homeBody:
        "We answer the line for roofers, HVAC companies, plumbers, and similar contractors. Calls missed while the crew is on a roof or on a job, after hours, or during storm and heat-season rushes are covered with 24/7 AI call answering, missed-call text-back, automatic callbacks, appointment and estimate scheduling, and text replies around the clock. Setup and ongoing management are done for you.",
      primary: "See & hear it in action",
      secondary: "See what it costs",
      chips: [
        "24/7 AI call answering",
        "Missed-call text-back",
        "Automatic callbacks",
        "Appointment and estimate scheduling",
        "Text replies around the clock",
        "Setup and management included",
      ],
    },
    media: {
      kicker: "See & hear it in action",
      title: "See how a call is answered.",
      videoCaption:
        "Conceptual marketing video. The samples below are a small-city resident call and a school-district parent call — demonstrations, not recordings of real people.",
      videoLabel: "AI City Phone conceptual marketing video",
      cityTitle: "City / resident call sample",
      cityCaption:
        "Demonstration after-hours call on a small-city line. A resident reaches a live answer — intake and a complete note, not a hold queue. Not a recording of a real constituent.",
      schoolTitle: "School / parent call sample",
      schoolCaption:
        "Demonstration parent call on a school-district line. Routine questions after the office is closed. Not a recording of a real family.",
      pricingNote: "Pricing available upon request.",
    },
    pillars: {
      title: "What the service includes.",
      lead: "The same done-for-you answering service covers small city and town departments and local home services companies.",
      items: [
        {
          title: "24/7 AI call answering",
          body: "The line is answered at night, on weekends, and during the workday when no one can pick up.",
        },
        {
          title: "Missed-call text-back",
          body: "If a call does not connect, a text goes back to the caller.",
        },
        {
          title: "Automatic callbacks",
          body: "Callbacks are placed automatically so the request is not left as a missed call.",
        },
        {
          title: "Appointment and estimate scheduling",
          body: "A caller can be scheduled for an appointment or an estimate.",
        },
        {
          title: "Text replies around the clock",
          body: "Text replies continue outside office hours, not only while someone is at a desk.",
        },
        {
          title: "Setup and ongoing management",
          body: "Our team sets the service up. It is managed on GoHighLevel. That work is done for you.",
        },
      ],
    },
    how: {
      title: "How a call is handled.",
      lead: "You keep the number you already publish. Our team sets the service up. It is managed on GoHighLevel.",
      steps: [
        {
          n: "01",
          title: "Keep the number you already publish",
          body: "Callers use the city, town, school, or company number they already have. Setup is done for you.",
        },
        {
          n: "02",
          title: "Answer calls 24/7",
          body: "AI call answering covers the line day and night, including weekends and busy seasons.",
        },
        {
          n: "03",
          title: "Text back and call back",
          body: "A missed call gets a text back. Callbacks are placed automatically.",
        },
        {
          n: "04",
          title: "Schedule appointments and estimates",
          body: "When the caller needs a time on the calendar, the service can book an appointment or an estimate.",
        },
        {
          n: "05",
          title: "Keep managing it",
          body: "Text replies continue around the clock. Ongoing management runs on GoHighLevel.",
        },
      ],
    },
    audiences: {
      label: "Who the service is for",
      heading: "Cities, towns, and home services.",
      lead: "The same answering service. The calls are different.",
      cityTab: "Cities & Towns",
      cityTabHint: "Residents and department lines",
      homeTab: "Home Services",
      homeTabHint: "Roofers, HVAC, plumbers, and other home services",
      cityIntro:
        "AI City Phone greets residents and parents in English and Spanish, takes a complete message, and delivers a morning log. 911 is never held. Setup and ongoing management are done for you.",
      cityTitle: "Small cities & towns",
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
      cityStaffTitle: "What city and school staff still get",
      cityStaffLead:
        "The same product covers City Hall and the district office. Start with one published number. Expand when the morning log earns the next department.",
      cityStaff: [
        {
          title: "English and Spanish from the first greeting",
          body: "Callers are met in both languages. Intake, routing, and the morning log stay bilingual so staff are not guessing.",
        },
        {
          title: "911 is never held",
          body: "Emergency callers are told to hang up and dial 911. This line is not dispatch, not a 911 center, and never parks an emergency.",
        },
        {
          title: "Morning logs, not voicemail piles",
          body: "Overnight and weekend calls become a structured list: who called, language, callback, and what they asked for.",
        },
        {
          title: "Clean public-record notes",
          body: "Each answered call is written down so clerks and principals start from a record, not a blinking light on a desk phone.",
        },
        {
          title: "Setup and management are done for you",
          body: "Our team sets up the number, greeting, and routing. The line is managed on GoHighLevel. Staff still open the morning log.",
        },
        {
          title: "Try one department first",
          body: "Clerk, public works, attendance, or the main after-hours line. Prove the morning before you cover the whole building.",
        },
      ],
      cityHowTitle: "A night desk that writes things down.",
      cityHowLead: "Residents and parents keep the number they already know. Staff keep their mornings.",
      citySteps: [
        {
          n: "01",
          title: "Publish the number you already use",
          body: "The after-hours or overflow line stays yours. We do not ask the public to learn a new brand.",
        },
        {
          n: "02",
          title: "Train the agent on your FAQs",
          body: "Hours, trash days, closures, attendance, registration windows — answers come from what you approve, not from the open internet.",
        },
        {
          n: "03",
          title: "Answer, route, or take a complete note",
          body: "Routine questions get a clear answer. Urgent non-emergency calls can be routed. Everything else becomes a full message.",
        },
        {
          n: "04",
          title: "Protect 911 on every call",
          body: "If someone needs emergency help, the agent tells them to hang up and dial 911. Those callers are never placed on hold.",
        },
        {
          n: "05",
          title: "Open the morning log",
          body: "Staff arrive to a bilingual list of overnight and weekend calls — ready for callbacks, work orders, or the principal’s desk.",
        },
      ],
      homeTitle: "Missed calls on the job turn into lost jobs.",
      homeBody:
        "For roofers, HVAC companies, plumbers, and similar contractors, calls missed while the crew is on a roof or on a job, after hours, or during storm and heat-season rushes turn into lost jobs. We answer the phone, send a text when a call is missed, place automatic callbacks, schedule appointments and estimates, and reply by text around the clock.",
      homeListTitle: "Included on a home services line",
      homeItems: [
        "24/7 AI call answering while the crew is on a job",
        "Missed-call text-back when a call does not connect",
        "Automatic callbacks",
        "Appointment and estimate scheduling",
        "Text replies around the clock",
        "Setup and ongoing management done for you",
      ],
      aside:
        "We do not publish invented case studies or customer counts. Pricing available upon request. If a conversation is useful, we will talk through a one-department or one-company start.",
    },
    trust: {
      title: "911 is never held. This line is not dispatch.",
      lead: "This line is not dispatch. Emergency callers are told to hang up and dial 911, and they are never held. For cities, towns, and school districts, the service is after-hours and overflow intake for non-emergency calls. The same 911 instruction applies on a home services line.",
      items: [
        {
          title: "Hang up and dial 911",
          body: "Emergency callers are instructed to hang up and dial 911 immediately. That instruction is part of the product, not a footnote.",
        },
        {
          title: "Never held, parked, or conferenced",
          body: "An emergency caller is not placed on hold, parked, or conferenced while the agent “finishes.” The path is out of this line and onto 911.",
        },
        {
          title: "Not a public-safety answering point",
          body: "This is not a 911 center and not a replacement for your police, fire, or EMS dispatch. Those agencies keep their own numbers and processes.",
        },
        {
          title: "Public-record logs for civic staff",
          body: "Non-emergency calls are written down for the morning. That is a staff tool — not a promise that every note is already a formal records request.",
        },
      ],
    },
    pricing: {
      title: "What it costs",
      statement: "Pricing available upon request.",
      note: "Email us and say whether you are a city or town department or a home services company, and which number you want covered.",
      emailCta: "Email us",
    },
    done: {
      kicker: "Done for you",
      title: "Set up for you, managed on GoHighLevel.",
      body: "The answering service is set up by FortuneCreations, LLC and is managed by GoHighLevel (GHL). City and town staff still receive the morning log. Home services companies get missed-call text-back, automatic callbacks, appointment and estimate scheduling, and text replies around the clock.",
      cta: "Email us",
      note: "Pricing available upon request.",
    },
    faq: {
      title: "Common questions",
      items: [
        {
          q: "Who is this for?",
          a: "Small city and town departments, and local home services companies such as roofers, HVAC, plumbers, and similar contractors. School district lines remain part of the offering.",
        },
        {
          q: "Does this replace 911?",
          a: "No. This is not a public-safety answering point. Emergency callers are told to hang up and dial 911. Those calls are never placed on hold.",
        },
        {
          q: "Is every city, town, and school call answered in English and Spanish?",
          a: "Yes. On those lines, the greeting and intake are bilingual. That is part of the service, not an add-on checkbox we hide in a quote.",
        },
        {
          q: "What is a morning log?",
          a: "A structured list of overnight and weekend calls: who called, language, callback number, and what they asked for — so staff start the day from writing, not from a voicemail pile.",
        },
        {
          q: "What happens when a home services call is missed?",
          a: "The line is answered 24/7. If a call is missed, the service sends a text back, can place an automatic callback, and can schedule an appointment or an estimate. Text replies continue around the clock.",
        },
        {
          q: "Who sets it up and manages it?",
          a: "Our team sets up the service. It is managed on GoHighLevel. You keep the number you already publish.",
        },
        {
          q: "What does it cost?",
          a: "Pricing available upon request.",
        },
        {
          q: "Who operates this service?",
          a: "Our team. Contact: fortunecreationsut@froyorobo.com. The planned public domain is aicityphone.com.",
        },
        {
          q: "Can one setup cover both city hall and the district?",
          a: "Sometimes. They are different front doors and different logs. If you share a building or a phone vendor, say so in the email and we will map it honestly.",
        },
      ],
    },
    cta: {
      title: "Send the number you already publish.",
      body: "City and town departments can start with one line — the clerk, after-hours City Hall, or a parent line. Home services companies can start with the number customers already call. Setup and ongoing management are done for you.",
      email: "Email fortunecreationsut@froyorobo.com",
      secondary: "Cities and home services",
      note: "Pricing available upon request.",
    },
    footer: {
      blurb:
        "Done-for-you AI phone answering for small city and town departments and for local home services companies. Setup and ongoing management included.",
      domain: "Planned domain: aicityphone.com",
      privacy: "Privacy",
      contact: "Contact",
    },
    privacy: {
      title: "Privacy",
      updated: "Last updated: October 26, 2026",
      sections: [
        {
          title: "Who we are",
          body: "We operate this site. The service is done-for-you AI phone answering for small city and town departments, school districts, and local home services companies. The planned public website is aicityphone.com. Contact: fortunecreationsut@froyorobo.com.",
        },
        {
          title: "This is not an emergency service",
          body: "Do not use this service or this website to request emergency services. Hang up and dial 911.",
        },
        {
          title: "What this site collects",
          body: "This marketing site does not require an account. If you email us, we receive whatever you send — typically a name, a department or company, and a short description of the line you want covered. We use that only to reply and to plan a conversation.",
        },
        {
          title: "Calls, recordings, and logs",
          body: "When a customer uses the answering service, call audio, transcripts, text messages, and logs are handled for that customer and according to that customer’s records rules. We do not sell those records. The customer remains responsible for retention and, where public-records laws apply, for responses to records requests.",
        },
        {
          title: "Setup and management",
          body: "Our team sets up the answering service. It is managed on GoHighLevel. Email the contact address above to ask about setup. We use that conversation to plan the line. We do not sell your email or the contents of that message.",
        },
        {
          title: "Cookies and analytics",
          body: "This site does not currently drop advertising cookies. If we later add basic hosting or analytics cookies, we will update this page.",
        },
        {
          title: "Changes",
          body: "We may update this notice as the product and domain go live. The date at the top will change when we do.",
        },
      ],
    },
  },
  es: {
    htmlLang: "es",
    skip: "Saltar al contenido",
    nav: {
      media: "Ver y escuchar",
      how: "Cómo funciona",
      audiences: "Para quién",
      trust: "911",
      pricing: "Precio",
      faq: "Preguntas",
      privacy: "Privacidad",
    },
    headerCta: "Pedir una conversación",
    langLabel: "Idioma",
    en: "EN",
    es: "ES",
    hero: {
      eyebrow: "Contestación telefónica con IA, hecha por nosotros",
      cityTitle: "Llamadas de residentes fuera de horario, contestadas.",
      cityBody:
        "Contestamos la línea para departamentos de ciudades y pueblos pequeños. Residentes y padres son atendidos en inglés y español, se toma un mensaje completo y el personal recibe un registro matutino. El 911 nunca se pone en espera. El servicio incluye contestación con IA las 24 horas, texto si se pierde la llamada, devoluciones automáticas, programación de citas y estimados, y respuestas por texto a cualquier hora. La puesta en marcha y la gestión continua las hacemos nosotros.",
      homeTitle: "Las llamadas perdidas en el trabajo se vuelven trabajos perdidos.",
      homeBody:
        "Contestamos la línea para techadores, empresas de HVAC, plomeros y contratistas similares. Las llamadas que se pierden mientras el equipo está en un techo o en un trabajo, fuera de horario, o en la temporada de tormentas o de calor, se cubren con contestación con IA las 24 horas, texto si se pierde la llamada, devoluciones automáticas, programación de citas y estimados, y respuestas por texto a cualquier hora. La puesta en marcha y la gestión continua las hacemos nosotros.",
      primary: "Véalo y escúchelo en acción",
      secondary: "Vea qué cuesta",
      chips: [
        "Contestación con IA las 24 horas",
        "Texto si se pierde la llamada",
        "Devoluciones automáticas",
        "Citas y estimados",
        "Respuestas por texto a cualquier hora",
        "Puesta en marcha y gestión incluidas",
      ],
    },
    media: {
      kicker: "Véalo y escúchelo en acción",
      title: "Vea cómo se contesta una llamada.",
      videoCaption:
        "Video de marketing conceptual. Las muestras de abajo son una llamada de un residente en una ciudad pequeña y una llamada de un padre o madre en un distrito escolar: demostraciones, no grabaciones de personas reales.",
      videoLabel: "Video de marketing conceptual de AI City Phone",
      cityTitle: "Muestra de llamada ciudad / residente",
      cityCaption:
        "Llamada de demostración fuera de horario en una línea de ciudad pequeña. La persona recibe una respuesta en vivo: toma de datos y una nota completa, no una espera. No es la grabación de un residente real.",
      schoolTitle: "Muestra de llamada escuela / padre o madre",
      schoolCaption:
        "Llamada de demostración de un padre o madre en una línea de distrito escolar. Preguntas rutinarias cuando la oficina ya cerró. No es la grabación de una familia real.",
      pricingNote: "Pricing available upon request.",
    },
    pillars: {
      title: "Qué incluye el servicio.",
      lead: "El mismo servicio, hecho por nosotros, cubre departamentos de ciudades y pueblos pequeños y empresas locales de servicios del hogar.",
      items: [
        {
          title: "Contestación con IA las 24 horas",
          body: "La línea se contesta de noche, en fin de semana y durante la jornada cuando nadie puede atender.",
        },
        {
          title: "Texto si se pierde la llamada",
          body: "Si una llamada no conecta, se envía un texto a quien llamó.",
        },
        {
          title: "Devoluciones automáticas",
          body: "Las devoluciones se hacen de forma automática para que la solicitud no quede como llamada perdida.",
        },
        {
          title: "Programación de citas y estimados",
          body: "Quien llama puede quedar agendado para una cita o un estimado.",
        },
        {
          title: "Respuestas por texto a cualquier hora",
          body: "Las respuestas por texto siguen fuera del horario de oficina, no solo cuando alguien está en un escritorio.",
        },
        {
          title: "Puesta en marcha y gestión continua",
          body: "Nuestro equipo configura el servicio. Se administra en GoHighLevel. Ese trabajo lo hacemos nosotros.",
        },
      ],
    },
    how: {
      title: "Cómo se atiende una llamada.",
      lead: "Usted conserva el número que ya publica. Nuestro equipo configura el servicio. Se administra en GoHighLevel.",
      steps: [
        {
          n: "01",
          title: "Conserve el número que ya publica",
          body: "Quien llama usa el número de la ciudad, el pueblo, la escuela o la empresa que ya tiene. La puesta en marcha la hacemos nosotros.",
        },
        {
          n: "02",
          title: "Contestar llamadas las 24 horas",
          body: "La contestación con IA cubre la línea de día y de noche, incluidos fines de semana y temporadas de mucho trabajo.",
        },
        {
          n: "03",
          title: "Texto de vuelta y devolución de llamada",
          body: "Una llamada perdida recibe un texto. Las devoluciones se hacen de forma automática.",
        },
        {
          n: "04",
          title: "Programar citas y estimados",
          body: "Cuando quien llama necesita una hora en el calendario, el servicio puede agendar una cita o un estimado.",
        },
        {
          n: "05",
          title: "Seguir administrándolo",
          body: "Las respuestas por texto continúan a cualquier hora. La gestión continua se hace en GoHighLevel.",
        },
      ],
    },
    audiences: {
      label: "Para quién es el servicio",
      heading: "Ciudades, pueblos y servicios del hogar.",
      lead: "El mismo servicio de contestación. Cambian las llamadas.",
      cityTab: "Ciudades y pueblos",
      cityTabHint: "Residentes y departamentos",
      homeTab: "Servicios del hogar",
      homeTabHint: "Techos, HVAC, plomería y otros servicios del hogar",
      cityIntro:
        "AI City Phone atiende a residentes y padres en inglés y español, toma un mensaje completo y entrega un registro matutino. El 911 nunca se pone en espera. La puesta en marcha y la gestión continua las hacemos nosotros.",
      cityTitle: "Ciudades y pueblos pequeños",
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
      cityStaffTitle: "Lo que sigue recibiendo el personal de ciudad y escuela",
      cityStaffLead:
        "El mismo producto cubre el ayuntamiento y la oficina del distrito. Empiece con un número publicado. Amplíe cuando el registro matutino gane el siguiente departamento.",
      cityStaff: [
        {
          title: "Inglés y español desde el primer saludo",
          body: "Quien llama es atendido en ambos idiomas. La toma de datos, el enrutamiento y el registro matutino siguen bilingües.",
        },
        {
          title: "El 911 nunca se pone en espera",
          body: "A quien tiene una emergencia se le dice que cuelgue y marque 911. Esta línea no es despacho ni un centro 911, y nunca estaciona una emergencia.",
        },
        {
          title: "Registros matutinos, no pilas de buzón",
          body: "Las llamadas de la noche y el fin de semana se vuelven una lista: quién llamó, idioma, devolución y qué pidió.",
        },
        {
          title: "Notas limpias de archivo público",
          body: "Cada llamada contestada queda por escrito para que el personal empiece desde un registro, no desde una luz parpadeante.",
        },
        {
          title: "La puesta en marcha y la gestión las hacemos nosotros",
          body: "Nuestro equipo configura el número, el saludo y el enrutamiento. La línea se administra en GoHighLevel. El personal abre el registro matutino.",
        },
        {
          title: "Empiece con un departamento",
          body: "Secretaría, obras públicas, asistencia o la línea principal fuera de horario. Pruebe la mañana antes de cubrir todo el edificio.",
        },
      ],
      cityHowTitle: "Una mesa nocturna que anota las cosas.",
      cityHowLead: "Residentes y padres conservan el número que ya conocen. El personal conserva sus mañanas.",
      citySteps: [
        {
          n: "01",
          title: "Publique el número que ya usan",
          body: "La línea fuera de horario o de desborde sigue siendo suya. No pedimos que el público aprenda una marca nueva.",
        },
        {
          n: "02",
          title: "Entrene al agente con sus preguntas frecuentes",
          body: "Horarios, basura, cierres, asistencia, inscripciones: las respuestas salen de lo que ustedes aprueban, no de internet abierto.",
        },
        {
          n: "03",
          title: "Contestar, enrutar o tomar una nota completa",
          body: "Las preguntas rutinarias reciben una respuesta clara. Las urgencias que no son emergencia se pueden enrutar. Lo demás queda como mensaje completo.",
        },
        {
          n: "04",
          title: "Proteger el 911 en cada llamada",
          body: "Si alguien necesita ayuda de emergencia, el agente le dice que cuelgue y marque 911. Esas personas nunca quedan en espera.",
        },
        {
          n: "05",
          title: "Abrir el registro matutino",
          body: "El personal llega a una lista bilingüe de la noche y el fin de semana, lista para devoluciones, órdenes de trabajo o el escritorio de la dirección.",
        },
      ],
      homeTitle: "Las llamadas perdidas en el trabajo se vuelven trabajos perdidos.",
      homeBody:
        "Para techadores, empresas de HVAC, plomeros y contratistas similares, las llamadas que se pierden mientras el equipo está en un techo o en un trabajo, fuera de horario, o en la temporada de tormentas o de calor, se convierten en trabajos perdidos. Contestamos el teléfono, enviamos un texto cuando se pierde una llamada, hacemos devoluciones automáticas, programamos citas y estimados y respondemos por texto a cualquier hora.",
      homeListTitle: "Incluido en una línea de servicios del hogar",
      homeItems: [
        "Contestación con IA las 24 horas, también con el equipo en un trabajo",
        "Texto de vuelta si la llamada no conecta",
        "Devoluciones automáticas",
        "Programación de citas y estimados",
        "Respuestas por texto a cualquier hora",
        "Puesta en marcha y gestión continua hechas por nosotros",
      ],
      aside:
        "No publicamos casos de estudio ni conteos de clientes inventados. Pricing available upon request. Si la conversación sirve, hablamos de un arranque de un departamento o de una empresa.",
    },
    trust: {
      title: "El 911 nunca se pone en espera. Esta línea no es despacho.",
      lead: "Esta línea no es despacho. A quien tiene una emergencia se le dice que cuelgue y marque 911, y esa llamada nunca se pone en espera. Para ciudades, pueblos y distritos escolares, el servicio es toma de llamadas fuera de horario y de desborde para asuntos que no son emergencia. La misma instrucción del 911 aplica en una línea de servicios del hogar.",
      items: [
        {
          title: "Cuelgue y marque 911",
          body: "A quien tiene una emergencia se le indica que cuelgue y marque 911 de inmediato. Esa instrucción es parte del producto, no una nota al pie.",
        },
        {
          title: "Nunca en espera, estacionada ni en conferencia",
          body: "Una llamada de emergencia no se pone en espera, no se estaciona y no entra a conferencia mientras el agente “termina.” El camino es salir de esta línea y marcar 911.",
        },
        {
          title: "No es un punto de respuesta de seguridad pública",
          body: "Esto no es un centro 911 ni un reemplazo del despacho de policía, bomberos o EMS. Esas agencias conservan sus números y procesos.",
        },
        {
          title: "Registros para el personal cívico",
          body: "Las llamadas que no son emergencia se anotan para la mañana. Es una herramienta de personal, no la promesa de que cada nota ya es una solicitud formal de archivos.",
        },
      ],
    },
    pricing: {
      title: "Qué cuesta",
      statement: "Pricing available upon request.",
      note: "Escríbanos e indique si es un departamento de ciudad o pueblo, o una empresa de servicios del hogar, y qué número quiere cubrir.",
      emailCta: "Escríbanos",
    },
    done: {
      kicker: "Hecho por nosotros",
      title: "Configurado para usted, administrado en GoHighLevel.",
      body: "El servicio de contestación es configurado por FortuneCreations, LLC y es administrado por GoHighLevel (GHL). El personal de la ciudad o el pueblo sigue recibiendo el registro matutino. Las empresas de servicios del hogar reciben el texto por llamada perdida, las devoluciones automáticas, la programación de citas y estimados, y las respuestas por texto a cualquier hora.",
      cta: "Escríbanos",
      note: "Pricing available upon request.",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Para quién es esto?",
          a: "Para departamentos de ciudades y pueblos pequeños, y para empresas locales de servicios del hogar como techadores, HVAC, plomeros y contratistas similares. Las líneas de distritos escolares siguen formando parte del servicio.",
        },
        {
          q: "¿Esto reemplaza al 911?",
          a: "No. Esto no es un punto de respuesta de seguridad pública. A quien tiene una emergencia se le dice que cuelgue y marque 911. Esas llamadas nunca se ponen en espera.",
        },
        {
          q: "¿Cada llamada de ciudad, pueblo y escuela se atiende en inglés y español?",
          a: "Sí. En esas líneas, el saludo y la toma de datos son bilingües. Eso es parte del servicio, no una casilla extra escondida en una cotización.",
        },
        {
          q: "¿Qué es un registro matutino?",
          a: "Una lista estructurada de las llamadas de la noche y el fin de semana: quién llamó, idioma, número de devolución y qué pidió, para que el personal empiece el día desde lo escrito, no desde el buzón.",
        },
        {
          q: "¿Qué pasa si se pierde una llamada de servicios del hogar?",
          a: "La línea se contesta las 24 horas. Si se pierde una llamada, el servicio envía un texto, puede hacer una devolución automática y puede programar una cita o un estimado. Las respuestas por texto continúan a cualquier hora.",
        },
        {
          q: "¿Quién hace la puesta en marcha y la gestión?",
          a: "Nuestro equipo configura el servicio. Se administra en GoHighLevel. Usted conserva el número que ya publica.",
        },
        {
          q: "¿Cuánto cuesta?",
          a: "Pricing available upon request.",
        },
        {
          q: "¿Quién opera este servicio?",
          a: "Nuestro equipo. Contacto: fortunecreationsut@froyorobo.com. El dominio público previsto es aicityphone.com.",
        },
        {
          q: "¿Una sola configuración cubre el ayuntamiento y el distrito?",
          a: "A veces. Son puertas distintas y registros distintos. Si comparten edificio o proveedor telefónico, díganlo en el correo y lo mapeamos con honestidad.",
        },
      ],
    },
    cta: {
      title: "Envíe el número que ya publican.",
      body: "Los departamentos de ciudades y pueblos pueden empezar con una línea: secretaría, el número fuera de horario del ayuntamiento o la línea de padres. Las empresas de servicios del hogar pueden empezar con el número que los clientes ya llaman. La puesta en marcha y la gestión continua las hacemos nosotros.",
      email: "Escribir a fortunecreationsut@froyorobo.com",
      secondary: "Ciudades y servicios del hogar",
      note: "Pricing available upon request.",
    },
    footer: {
      blurb:
        "Contestación telefónica con IA, hecha por nosotros, para departamentos de ciudades y pueblos pequeños y para empresas locales de servicios del hogar. La puesta en marcha y la gestión continua van incluidas.",
      domain: "Dominio previsto: aicityphone.com",
      privacy: "Privacidad",
      contact: "Contacto",
    },
    privacy: {
      title: "Privacidad",
      updated: "Última actualización: 26 de octubre de 2026",
      sections: [
        {
          title: "Quiénes somos",
          body: "Operamos este sitio. El servicio es contestación telefónica con IA, hecha por nosotros, para departamentos de ciudades y pueblos pequeños, distritos escolares y empresas locales de servicios del hogar. El sitio público previsto es aicityphone.com. Contacto: fortunecreationsut@froyorobo.com.",
        },
        {
          title: "Esto no es un servicio de emergencia",
          body: "No use este servicio ni este sitio para pedir servicios de emergencia. Cuelgue y marque 911.",
        },
        {
          title: "Qué recopila este sitio",
          body: "Este sitio de marketing no pide una cuenta. Si nos escribe, recibimos lo que envíe: por lo general un nombre, un departamento o una empresa, y una descripción breve de la línea que quieren cubrir. Eso se usa solo para responder y planear una conversación.",
        },
        {
          title: "Llamadas, grabaciones y registros",
          body: "Cuando un cliente usa el servicio de contestación, el audio, las transcripciones, los mensajes de texto y los registros se manejan para ese cliente y según sus reglas de archivos. No vendemos esos registros. El cliente sigue siendo responsable de la retención y, cuando aplican leyes de archivos públicos, de las respuestas a esas solicitudes.",
        },
        {
          title: "Puesta en marcha y gestión",
          body: "Nuestro equipo configura el servicio de contestación. Se administra en GoHighLevel. Escriba a la dirección de contacto de arriba para preguntar por la puesta en marcha. Usamos esa conversación para planear la línea. No vendemos su correo ni el contenido de ese mensaje.",
        },
        {
          title: "Cookies y analítica",
          body: "Este sitio no coloca cookies publicitarias en este momento. Si más adelante añadimos cookies básicas de hosting o analítica, actualizaremos esta página.",
        },
        {
          title: "Cambios",
          body: "Podemos actualizar este aviso cuando el producto y el dominio entren en operación. La fecha de arriba cambiará cuando lo hagamos.",
        },
      ],
    },
  },
} as const;

export type Dictionary = (typeof copy)[Locale];
