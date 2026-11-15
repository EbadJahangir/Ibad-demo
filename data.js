/* Central profile and portfolio content. Edit verified details here. */
window.PORTFOLIO_DATA = {
  profile: {
    name: "Ibad Jahangir",
    headline: "AI & Software Developer | Aspiring Data Analyst | Mathematics background",
    supporting: "Aspiring Data Analyst | Mathematics background",
    tagline: "Where Mathematics Meets Technology.",
    description: "I build practical software, explore AI-assisted workflows, and work with data-backed applications.",
    location: "Multan, Pakistan",
    email: "ibadjahangir8100@gmail.com",
    github: "https://github.com/EbadJahangir",
    linkedin: "https://www.linkedin.com/in/ibad-jahangir-a57148356",
    phone: "",
    photo: "",
    cv: "",
    availability: "Available for freelance projects and collaborations in AI, software and data."
  },
  about: [
    "I build practical software applications and explore AI-assisted workflows and data-driven systems.",
    "My work focuses on backend development, relational databases, application workflows, and making information more useful through clear software.",
    "I enjoy turning real-world requirements into maintainable digital tools while continuing to strengthen my software development and analytics skills."
  ],
  skills: [
    { title: "Programming & Development", code: "01 / CODE", description: "Languages and foundations for building useful digital experiences.", items: ["Python","HTML5","CSS3","JavaScript","SQL"] },
    { title: "Backend & Database", code: "02 / SYSTEMS", description: "Server-side logic and structured data systems that power applications.", items: ["Flask","PostgreSQL","Backend Development","Database Management"] },
    { title: "Artificial Intelligence", code: "03 / INTELLIGENCE", description: "Exploring AI-assisted workflows, intelligent applications, and automation.", items: ["AI Tools","AI-Assisted Development","AI-Powered Application Development","Prompt Engineering","AI Product Experimentation","Automation Concepts"] }
  ],
  capabilities: [
    { title: "AI-Powered Applications", description: "Exploring practical AI-assisted tools and workspace concepts that bring useful capabilities into a unified product experience.", project: "orvexa", seen: "ORVEXA" },
    { title: "Backend & Database Systems", description: "Building Flask-based application back ends and working with relational PostgreSQL data, validation, and business rules.", project: "hms", seen: "Hospital Management System" },
    { title: "Data-Driven Software", description: "Organizing records and operational information into structured workflows, operational reports, and role-scoped application views.", project: "hms", seen: "Hospital Management System" }
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
      developing: ["Overall product development"],
      planned: ["AI Chat","Document Management","Research Workspace","Task Management","Automations","AI Agents","Knowledge Base","Settings"],
      repoUrl: "", live: "", screenshots: [], visual: "workspace"
    },
    {
      id: "hms", number: "02", name: "Hospital Management", subtitle: "System",
      description: "A database-driven hospital management application for patient records, doctors, departments, appointments, prescriptions, billing, pharmacy, stock, reporting, and role-scoped views.",
      status: "Working", statusType: "built",
      stack: ["Python","Flask","PostgreSQL","Vanilla JavaScript","Pytest"],
      overview: "A database-driven hospital management application for patient records, doctors, departments, appointments, prescriptions, billing, pharmacy, stock, reporting, and role-scoped views.",
      problem: "A hospital needs consistent digital workflows for patient information, appointments, prescriptions, payments, medicine stock, and operational reporting.",
      workflow: ["Staff enter and manage records","Flask validates requests and applies business rules","PostgreSQL stores transactional data","Role-scoped views and reports present information"],
      implemented: ["Dashboard","Patients","Doctors","Departments","Appointments","Prescriptions","Billing","Pharmacy Management","Stock Management","Reporting","Role-scoped views"],
      developing: [],
      planned: [],
      repoUrl: "", live: "", screenshots: [], visual: "hospital"
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
  showCredentials: false,
  formEndpoint: ""
};