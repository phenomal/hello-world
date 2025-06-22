// home.page.ts
export const homeLocators = {
  navHome: 'a[href="/home"]',
  navResume: 'a[href="/resume"]',
  navProjects: 'a[href="/projects"]',
  navGitHub: 'a[href="https://github.com/phenomal/hello-world"]',
  linkedIn: 'a[href="https://www.linkedin.com/in/anthonydavisqa"]',
  mainHeading: 'h1',
  subtitle: 'p:has-text("Director of Quality Assurance")',
  sectionHeadings: 'h5',
  footer: 'footer p, contentinfo p'
};

// resume.page.ts
export const resumeLocators = {
  ...homeLocators,
  skillsHeading: 'h2:has-text("Skills")',
  skillsList: 'h2:has-text("Skills") + ul',
  educationHeading: 'h2:has-text("Education")',
  certificationsHeading: 'h2:has-text("Certifications")',
  programmingHeading: 'h2:has-text("Programming Languages & Tools")',
  experienceHeading: 'h2:has-text("Experience")',
  jobEntries: 'h4'
};

// projects.page.ts
export const projectsLocators = {
  ...homeLocators,
  mainHeading: 'h1:has-text("Anthony\'s Portfolio")',
  websiteSection: 'h1:has-text("this website")',
  uspsSection: 'h1:has-text("usps.com automation demo")',
  projectImages: 'img'
};