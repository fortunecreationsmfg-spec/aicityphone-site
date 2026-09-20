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
      audiences: "Cities & schools",
      trust: "911",
      estimate: "Estimate",
      faq: "FAQ",
      privacy: "Privacy",
    },
    headerCta: "Request a conversation",
    langLabel: "Language",
    en: "EN",
    es: "ES",
    hero: {
      eyebrow: "AI phone answering for small cities and school districts",
      title: "After-hours calls answered. Staff mornings protected.",
      body: "AI City Phone greets residents and parents in English and Spanish, takes a complete message, and delivers a morning log. 911 is never held. Built on GoHighLevel, with IT help and a Boot Camp path to get started.",
      primary: "See & hear it in action",
      secondary: "Plan an estimate",
      trial: "Try it with one department",
      chips: [
        "911 never held",
        "English + Spanish",
        "Morning logs",
        "IT + Boot Camp",
      ],
    },
    media: {
      kicker: "See & hear it in action",
      title: "24/7 AI Phone Support for Local Governments and Schools",
      videoCaption:
        "Upgrade after-hours voicemail with an intelligent AI voice agent that answers citizen FAQs, routes urgent calls, and keeps clean public-record logs — without adding headcount.",
      videoLabel: "AI City Phone conceptual marketing video",
      cityTitle: "City / resident call sample",
      cityCaption:
        "Demonstration after-hours call on a small-city line. A resident reaches a live answer — intake and a complete note, not a hold queue. Not a recording of a real constituent.",
      schoolTitle: "School / parent call sample",
      schoolCaption:
        "Demonstration parent call on a school-district line. Routine questions after the office is closed. Not a recording of a real family.",
    },
    pillars: {
      title: "Built for clerks, superintendents, and the one person who still answers the phone.",
      lead: "The same product covers City Hall and the district office. Start with one published number. Expand when the morning log earns the next department.",
      items: [
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
          title: "IT help on a platform you can see",
          body: "AI City Phone runs on GoHighLevel Voice AI. FortuneCreations helps map numbers, greetings, and routing with your existing vendor.",
        },
        {
          title: "Try one department first",
          body: "Clerk, public works, attendance, or the main after-hours line. Prove the morning before you cover the whole building.",
        },
      ],
    },
    how: {
      title: "A night desk that writes things down.",
      lead: "Residents and parents keep the number they already know. Staff keep their mornings.",
      steps: [
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
    },
    audiences: {
      title: "One product, two front doors.",
      lead: "Small cities and school districts share the same after-hours problem. The logs stay separate.",
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
      aside:
        "We do not publish invented dollar case studies. If a conversation is useful, we will talk through your numbers, your vendors, and a one-department start.",
    },
    trust: {
      title: "911 is never held. This line is not dispatch.",
      lead: "AI City Phone is after-hours and overflow intake for non-emergency city and school calls. It does not replace 911, does not dispatch units, and does not keep an emergency caller waiting for an agent to finish a script.",
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
    estimate: {
      title: "Estimate calculator",
      lead: "Planning ranges only — not a quote, not a contract, and not based on invented customer savings. Use this to decide whether a conversation is worth your time.",
      orgLabel: "Organization",
      city: "Small city or town",
      school: "School district",
      sizeLabel: "Size",
      citySizes: {
        xs: "Under 2,500 residents",
        s: "2,500–10,000 residents",
        m: "10,000–25,000 residents",
        l: "25,000–50,000 residents",
      },
      schoolSizes: {
        xs: "Under 500 students",
        s: "500–2,000 students",
        m: "2,000–5,000 students",
        l: "5,000–10,000 students",
      },
      coverageLabel: "Coverage",
      evenings: "Evenings and weekends",
      nights: "Nights, weekends, and holidays (24/7 after hours)",
      overflow: "After hours plus daytime overflow",
      deptLabel: "Departments to cover",
      deptHint: "Most offices start with one published number.",
      monthly: "Estimated monthly range",
      setup: "Estimated setup range",
      included: "English + Spanish and 911-safe intake are included in every estimate.",
      disclaimer:
        "These figures are planning estimates only. Usage, carrier, and GoHighLevel communication fees vary. They are not a price quote and not a report of another city’s results.",
      emailCta: "Email this planning range",
      emailSubject: "AI City Phone planning estimate",
    },
    faq: {
      title: "Questions clerks and IT actually ask",
      items: [
        {
          q: "Does this replace 911?",
          a: "No. AI City Phone is not a public-safety answering point. Emergency callers are told to hang up and dial 911. Those calls are never placed on hold.",
        },
        {
          q: "Is every call answered in English and Spanish?",
          a: "Yes. The greeting and intake are bilingual. That is part of the product, not an add-on checkbox we hide in a quote.",
        },
        {
          q: "What is a morning log?",
          a: "A structured list of overnight and weekend calls: who called, language, callback number, and what they asked for — so staff start the day from writing, not from a voicemail pile.",
        },
        {
          q: "Do we need our own IT department?",
          a: "No. The product runs on GoHighLevel. FortuneCreations helps with setup, and your team can take the HighLevel Boot Camp path if you want platform training first.",
        },
        {
          q: "What is the HighLevel Boot Camp path?",
          a: "A GoHighLevel onboarding class and trial you can start before a longer commitment. It is the hands-on way to see the platform AI City Phone is built on. Offers on that page are HighLevel’s — we do not invent a separate 30-day-only city package.",
        },
        {
          q: "Are the calculator numbers a quote?",
          a: "No. They are planning estimates only — a range to decide whether a conversation is worth your time. They are not based on invented customer savings.",
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
      title: "Send the number you already publish. We will talk through coverage.",
      body: "Start with one department — the clerk line, the after-hours City Hall number, or the parent line. No invented case studies. No pressure to cover every extension on day one.",
      email: "Email fortunecreationsut@froyorobo.com",
      trial: "Try it with one department",
      trialNote:
        "Opens the HighLevel Boot Camp page — the platform path behind AI City Phone.",
    },
    footer: {
      blurb:
        "AI phone answering for small cities and school districts. English and Spanish. 911 never held. Morning logs for staff.",
      legal: "FortuneCreations, LLC",
      domain: "Planned domain: aicityphone.com",
      privacy: "Privacy",
      contact: "Contact",
    },
    privacy: {
      title: "Privacy",
      updated: "Last updated: September 20, 2026",
      sections: [
        {
          title: "Who we are",
          body: "AI City Phone is operated by FortuneCreations, LLC. The planned public website is aicityphone.com. Contact: fortunecreationsut@froyorobo.com.",
        },
        {
          title: "This is not an emergency service",
          body: "Do not use AI City Phone or this website to request emergency services. Hang up and dial 911.",
        },
        {
          title: "What this site collects",
          body: "This marketing site does not require an account. If you email us, we receive whatever you send — typically a name, office, phone number, and a short description of the line you want covered. We use that only to reply and to plan a conversation.",
        },
        {
          title: "Calls, recordings, and logs",
          body: "When a city or district uses AI City Phone, call audio, transcripts, and morning logs are handled on GoHighLevel and according to that agency’s records rules. FortuneCreations does not sell those records. Your agency remains responsible for retention and public-records responses.",
        },
        {
          title: "HighLevel Boot Camp",
          body: "The “try it with one department” link opens a GoHighLevel Boot Camp page. That site has its own terms, privacy policy, and trial terms. We do not control HighLevel’s billing or communication surcharges.",
        },
        {
          title: "Cookies and analytics",
          body: "This site does not currently drop advertising cookies. If we later add basic hosting or analytics cookies, we will update this page.",
        },
        {
          title: "Changes",
          body: "We may update this stub as the product and domain go live. The date at the top will change when we do.",
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
      audiences: "Ciudades y escuelas",
      trust: "911",
      estimate: "Estimación",
      faq: "Preguntas",
      privacy: "Privacidad",
    },
    headerCta: "Pedir una conversación",
    langLabel: "Idioma",
    en: "EN",
    es: "ES",
    hero: {
      eyebrow: "Atención telefónica con IA para ciudades pequeñas y distritos escolares",
      title: "Llamadas fuera de horario contestadas. Las mañanas del personal, protegidas.",
      body: "AI City Phone atiende a residentes y padres en inglés y español, toma un mensaje completo y entrega un registro matutino. El 911 nunca se pone en espera. Funciona sobre GoHighLevel, con apoyo de TI y un Boot Camp para empezar.",
      primary: "Véalo y escúchelo en acción",
      secondary: "Calcular una estimación",
      trial: "Pruébelo con un departamento",
      chips: [
        "El 911 nunca en espera",
        "Inglés + español",
        "Registros matutinos",
        "TI + Boot Camp",
      ],
    },
    media: {
      kicker: "Véalo y escúchelo en acción",
      title: "Atención telefónica con IA 24/7 para gobiernos locales y escuelas",
      videoCaption:
        "Mejore el buzón de voz fuera de horario con un agente de voz de IA que responde preguntas frecuentes de la ciudadanía, enruta llamadas urgentes y mantiene registros limpios de archivo público — sin sumar personal.",
      videoLabel: "Video de marketing conceptual de AI City Phone",
      cityTitle: "Muestra de llamada ciudad / residente",
      cityCaption:
        "Llamada de demostración fuera de horario en una línea de ciudad pequeña. La persona recibe una respuesta en vivo: toma de datos y una nota completa, no una espera. No es la grabación de un residente real.",
      schoolTitle: "Muestra de llamada escuela / padre o madre",
      schoolCaption:
        "Llamada de demostración de un padre o madre en una línea de distrito escolar. Preguntas rutinarias cuando la oficina ya cerró. No es la grabación de una familia real.",
    },
    pillars: {
      title: "Hecho para secretarios, superintendentes y la persona que todavía contesta el teléfono.",
      lead: "El mismo producto cubre el ayuntamiento y la oficina del distrito. Empiece con un número publicado. Amplíe cuando el registro matutino gane el siguiente departamento.",
      items: [
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
          title: "Apoyo de TI en una plataforma visible",
          body: "AI City Phone funciona con Voice AI de GoHighLevel. FortuneCreations ayuda a mapear números, saludos y enrutamiento con su proveedor actual.",
        },
        {
          title: "Empiece con un departamento",
          body: "Secretaría, obras públicas, asistencia o la línea principal fuera de horario. Pruebe la mañana antes de cubrir todo el edificio.",
        },
      ],
    },
    how: {
      title: "Una mesa nocturna que anota las cosas.",
      lead: "Residentes y padres conservan el número que ya conocen. El personal conserva sus mañanas.",
      steps: [
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
    },
    audiences: {
      title: "Un producto, dos puertas de entrada.",
      lead: "Las ciudades pequeñas y los distritos escolares comparten el mismo problema fuera de horario. Los registros se mantienen separados.",
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
      aside:
        "No publicamos casos de estudio con dólares inventados. Si la conversación sirve, hablamos de sus números, sus proveedores y un arranque de un departamento.",
    },
    trust: {
      title: "El 911 nunca se pone en espera. Esta línea no es despacho.",
      lead: "AI City Phone es toma de llamadas fuera de horario y de desborde para líneas no emergentes de ciudad y escuela. No reemplaza al 911, no despacha unidades y no deja esperando a quien tiene una emergencia.",
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
    estimate: {
      title: "Calculadora de estimación",
      lead: "Solo rangos de planificación: no es una cotización, no es un contrato y no se basa en ahorros inventados de otros clientes. Sirve para decidir si vale la pena una conversación.",
      orgLabel: "Organización",
      city: "Ciudad o pueblo pequeño",
      school: "Distrito escolar",
      sizeLabel: "Tamaño",
      citySizes: {
        xs: "Menos de 2,500 residentes",
        s: "2,500–10,000 residentes",
        m: "10,000–25,000 residentes",
        l: "25,000–50,000 residentes",
      },
      schoolSizes: {
        xs: "Menos de 500 estudiantes",
        s: "500–2,000 estudiantes",
        m: "2,000–5,000 estudiantes",
        l: "5,000–10,000 estudiantes",
      },
      coverageLabel: "Cobertura",
      evenings: "Tardes y fines de semana",
      nights: "Noches, fines de semana y días festivos (24/7 fuera de horario)",
      overflow: "Fuera de horario más desborde diurno",
      deptLabel: "Departamentos a cubrir",
      deptHint: "La mayoría empieza con un solo número publicado.",
      monthly: "Rango mensual estimado",
      setup: "Rango estimado de puesta en marcha",
      included: "Inglés + español y la toma segura ante el 911 van en cada estimación.",
      disclaimer:
        "Estas cifras son solo estimaciones de planificación. El uso, el operador y los cargos de comunicación de GoHighLevel varían. No son una cotización ni el resultado de otra ciudad.",
      emailCta: "Enviar este rango por correo",
      emailSubject: "Estimación de planificación de AI City Phone",
    },
    faq: {
      title: "Preguntas que de verdad hacen secretaría y TI",
      items: [
        {
          q: "¿Esto reemplaza al 911?",
          a: "No. AI City Phone no es un punto de respuesta de seguridad pública. A quien tiene una emergencia se le dice que cuelgue y marque 911. Esas llamadas nunca se ponen en espera.",
        },
        {
          q: "¿Cada llamada se atiende en inglés y español?",
          a: "Sí. El saludo y la toma de datos son bilingües. Eso es parte del producto, no una casilla extra escondida en una cotización.",
        },
        {
          q: "¿Qué es un registro matutino?",
          a: "Una lista estructurada de las llamadas de la noche y el fin de semana: quién llamó, idioma, número de devolución y qué pidió, para que el personal empiece el día desde lo escrito, no desde el buzón.",
        },
        {
          q: "¿Necesitamos un departamento de TI propio?",
          a: "No. El producto funciona en GoHighLevel. FortuneCreations ayuda con la puesta en marcha, y su equipo puede tomar el Boot Camp de HighLevel si quiere capacitación de la plataforma primero.",
        },
        {
          q: "¿Qué es el camino de HighLevel Boot Camp?",
          a: "Una clase de incorporación y una prueba de GoHighLevel que pueden empezar antes de un compromiso más largo. Es la forma práctica de ver la plataforma sobre la que está construido AI City Phone. Las ofertas de esa página son de HighLevel; nosotros no inventamos un paquete municipal de solo 30 días.",
        },
        {
          q: "¿Los números de la calculadora son una cotización?",
          a: "No. Son solo estimaciones de planificación: un rango para decidir si vale la pena conversar. No se basan en ahorros inventados de clientes.",
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
      title: "Envíe el número que ya publican. Hablamos de la cobertura.",
      body: "Empiece con un departamento: la línea de secretaría, el número fuera de horario del ayuntamiento o la línea de padres. Sin casos inventados. Sin presión para cubrir cada extensión el primer día.",
      email: "Escribir a fortunecreationsut@froyorobo.com",
      trial: "Pruébelo con un departamento",
      trialNote:
        "Abre la página de HighLevel Boot Camp, el camino de plataforma detrás de AI City Phone.",
    },
    footer: {
      blurb:
        "Atención telefónica con IA para ciudades pequeñas y distritos escolares. Inglés y español. El 911 nunca en espera. Registros matutinos para el personal.",
      legal: "FortuneCreations, LLC",
      domain: "Dominio previsto: aicityphone.com",
      privacy: "Privacidad",
      contact: "Contacto",
    },
    privacy: {
      title: "Privacidad",
      updated: "Última actualización: 20 de septiembre de 2026",
      sections: [
        {
          title: "Quiénes somos",
          body: "AI City Phone lo opera FortuneCreations, LLC. El sitio público previsto es aicityphone.com. Contacto: fortunecreationsut@froyorobo.com.",
        },
        {
          title: "Esto no es un servicio de emergencia",
          body: "No use AI City Phone ni este sitio para pedir servicios de emergencia. Cuelgue y marque 911.",
        },
        {
          title: "Qué recopila este sitio",
          body: "Este sitio de marketing no pide una cuenta. Si nos escribe, recibimos lo que envíe: por lo general nombre, oficina, teléfono y una descripción breve de la línea que quieren cubrir. Eso se usa solo para responder y planear una conversación.",
        },
        {
          title: "Llamadas, grabaciones y registros",
          body: "Cuando una ciudad o un distrito usa AI City Phone, el audio, las transcripciones y los registros matutinos se manejan en GoHighLevel y según las reglas de archivos de esa agencia. FortuneCreations no vende esos registros. La agencia sigue siendo responsable de la retención y de las solicitudes de archivos públicos.",
        },
        {
          title: "HighLevel Boot Camp",
          body: "El enlace “pruébelo con un departamento” abre una página de Boot Camp de GoHighLevel. Ese sitio tiene sus propios términos, privacidad y condiciones de prueba. No controlamos la facturación ni los recargos de comunicación de HighLevel.",
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
