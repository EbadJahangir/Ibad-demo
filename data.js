/* Central profile and portfolio content. Edit verified details here. */
window.PORTFOLIO_DATA = {
  profile: {
    name: "Ibad Jahangir",
    headline: "AI & Software Developer",
    supporting: "Aspiring Data Analyst | Mathematician",
    tagline: "Where Mathematics Meets Technology.",
    description: "Exploring Artificial Intelligence, building practical software, and transforming ideas into intelligent digital solutions.",
    location: "Multan, Pakistan",
    email: "ibadjahangir8100@gmail.com",
    github: "https://github.com/EbadJahangir",
    linkedin: "",
    phone: "",
    photo: "",
    cv: ""
  },
  about: [
    "I am Ibad Jahangir, an AI & Software Developer and Mathematician with a strong interest in Artificial Intelligence, Software Development, and Data Analytics.",
    "I enjoy exploring the connection between logical reasoning, analytical thinking, and modern technology.",
    "I work on building practical software applications, experimenting with AI-powered solutions, developing backend systems, and working with databases.",
    "My goal is to transform ideas into meaningful digital products while continuously exploring emerging technologies and improving my technical capabilities."
  ],
  skills: [
    { title: "Programming & Development", code: "01 / CODE", description: "Languages and foundations for building useful digital experiences.", items: ["Python","HTML5","CSS3","JavaScript","SQL"] },
    { title: "Backend & Database", code: "02 / SYSTEMS", description: "Server-side logic and structured data systems that power applications.", items: ["Flask","PostgreSQL","Backend Development","Database Management"] },
    { title: "Artificial Intelligence", code: "03 / INTELLIGENCE", description: "Exploring AI-assisted workflows, intelligent applications, and automation.", items: ["AI Tools","AI-Assisted Development","AI-Powered Application Development","Prompt Engineering","AI Product Experimentation","Automation Concepts"] }
  ],
  capabilities: [
    { title: "AI-Powered Applications", description: "Exploring practical AI-assisted tools and workspace concepts that bring useful capabilities into a unified product experience.", project: "orvexa", seen: "ORVEXA" },
    { title: "Backend & Database Systems", description: "Building Flask-based application back ends and working with relational PostgreSQL data, validation, and business rules.", project: "hms", seen: "Hospital Management System" },
    { title: "Data-Driven Software", description: "Organizing records and operational information into structured workflows, reports, and useful application views.", project: "hms", seen: "Hospital Management System" }
  ],
  projects: [
    {
      id: "orvexa", number: "01", name: "ORVEXA", subtitle: "AI Workspace",
      description: "An AI-powered workspace concept designed to bring intelligent assistance and productivity capabilities together in one environment.",
      status: "In Development", statusType: "progress",
      stack: [],
      overview: "ORVEXA is an AI workspace product being developed as a unified environment for intelligent assistance and productivity workflows. Its repository and implementation details were not available for independent verification during this portfolio update.",
      problem: "The product direction explores how related AI and productivity workflows could be organized within one coherent workspace.",
      workflow: ["Explore product needs","Design workspace workflows","Develop and integrate capabilities","Refine the product"],
      implemented: ["Product direction and workspace concept"],
      developing: ["Overall product development"],
      planned: ["AI Chat","Document Management","Research Workspace","Task Management","Automations","AI Agents","Knowledge Base","Settings"],
      github: "", live: "", visual: "workspace"
    },
    {
      id: "hms", number: "02", name: "Hospital Management", subtitle: "System",
      description: "A database-driven hospital management application for patient records, doctors, departments, appointments, prescriptions, billing, pharmacy, and reporting workflows.",
      status: "Implemented modules documented", statusType: "built",
      stack: ["Python","Flask","PostgreSQL","Vanilla JavaScript","Pytest"],
      overview: "A full-stack web application for a small hospital. Flask serves the JSON API and frontend, while PostgreSQL stores structured application data. The repository documentation describes role-aware workflows across clinical administration and operational modules.",
      problem: "A hospital needs consistent digital workflows for patient information, appointments, prescriptions, payments, medicine stock, and operational reporting.",
      workflow: ["Staff enter and manage records","Flask validates requests and applies business rules","PostgreSQL stores transactional data","Role-scoped views and reports present information"],
      implemented: ["Session authentication, CSRF protection and role-based access","Patients, doctors and departments","Appointments with double-booking prevention","Prescriptions linked to appointments","Appointment-based billing and payment receipts","Pharmacy, stock movements and point-of-sale sales","Dashboard, reports, CSV export and audit log"],
      developing: [],
      planned: [],
      github: "", live: "", visual: "hospital"
    }
  ],
  education: { degree: "BS Mathematics", institution: "Bahauddin Zakariya University (BZU)", department: "Department of Mathematics", location: "Multan, Pakistan", semester: "5th Semester" },
  interests: [
    ["Artificial Intelligence","Exploring intelligent systems and practical AI use cases."],
    ["Software Engineering","Thinking about maintainable, useful software systems."],
    ["Data Analytics","Finding structure, patterns, and meaning in data."],
    ["Python Development","Using Python to explore ideas and build applications."],
    ["Database Systems","Designing structured data and reliable information flows."],
    ["Automation","Exploring ways to simplify repeatable workflows."],
    ["Practical AI Applications","Turning AI capabilities into helpful product experiences."],
    ["Mathematical Problem-Solving","Applying structured reasoning to complex questions."]
  ],
  credentials: [],
  showCredentials: false
};