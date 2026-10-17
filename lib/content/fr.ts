import type { Content } from "./types"
import { certificationLinks, links, previews, rakuten, skills, stack } from "./shared"

export const fr: Content = {
  meta: {
    title: "Sid-Ali Hamdane, Software Test Engineer",
    description:
      "Software Test Engineer et release manager chez Rakuten France. Automatisation des tests web, API et mobile.",
  },
  nav: {
    about: "À propos",
    experience: "Expérience",
    projects: "Projets",
    certifications: "Certifications",
    skills: "Compétences",
    contact: "Contact",
    sections: "Sections",
    language: "Langue",
    theme: { toLight: "Passer au thème clair", toDark: "Passer au thème sombre" },
  },
  hero: {
    role: "Software Test Engineer",
    intro:
      "Je conçois l'automatisation des tests web, API et mobile, et je pilote les mises en production de l'équipe mobile chez Rakuten France.",
    bookCall: "Prendre rendez-vous",
    downloadCv: "Télécharger le CV",
    photoAlt: "Portrait de Sid-Ali Hamdane",
    run: {
      command: "pytest tests/test_sidali.py",
      checks: [
        { name: "test_role", detail: "Software Test Engineer chez Rakuten France depuis 2023" },
        { name: "test_release_speed", detail: "exécution parallèle sur appareils : time-to-production réduit de 80 %" },
        { name: "test_certified", detail: "ISTQB Advanced Test Automation Engineer, 2025" },
        { name: "test_stack", detail: "Selenium, Appium, Playwright, Pytest" },
        { name: "test_background", detail: "Master en Systèmes Embarqués" },
        { name: "test_location", detail: "Paris, France" },
      ],
      summary: (passed, seconds) => `${passed} réussis en ${seconds.replace(".", ",")} s`,
      replay: "Relancer",
    },
  },
  about: {
    title: "À propos",
    paragraphs: [
      "Software Test Engineer chez Rakuten France et diplômé d'un Master en Systèmes Embarqués, je conçois et déploie des solutions de test automatisé pour des applications web end-to-end, API et mobiles.",
      "J'ai dirigé des projets à fort impact, notamment une infrastructure d'appareils permettant l'exécution parallèle des tests, l'automatisation de la validation visuelle des interfaces et une plateforme SaaS interne de gestion des campagnes de test. En parallèle, je développe des projets personnels en systèmes embarqués.",
      "J'aime créer des outils et des systèmes qui rendent les tests plus efficaces, évolutifs et fiables, avec un impact réel sur les mises en production.",
    ],
  },
  experience: {
    title: "Expérience",
    stackLabel: "Technologies utilisées",
    items: [
      {
        period: "2023 – aujourd'hui",
        title: "Software Test Engineer / Release Manager",
        ...rakuten,
        description:
          "Pilotage de l'automatisation des tests au sein de l'équipe Mobile et mise en place de stratégies de test complètes. Conception, développement et maintenance de frameworks de tests automatisés avec Selenium, Appium et Pytest. Maintien du planning de release et supervision de la santé des applications en production. Refonte du projet d'automatisation pour l'exécution parallèle sur plusieurs appareils et versions d'OS, réduisant le time-to-production de 80 % et limitant les bugs en production.",
        technologies: stack.current,
      },
      {
        period: "2023",
        title: "Stagiaire Software Test Engineer",
        ...rakuten,
        description:
          "Automatisation des tests des nouvelles fonctionnalités, maintenance de la base de tests et mise en place d'une validation visuelle des interfaces par traitement d'image avec OpenCV. Conception et exécution de plans de tests pour des applications web et mobiles, avec des tests de régression, d'intégration et de performance sur plusieurs versions.",
        technologies: stack.intern,
      },
    ],
  },
  projects: {
    title: "Projets",
    demo: "Voir le site",
    code: "Code source",
    caseStudy: "Lire l'étude de cas",
    caseStudyLabels: { problem: "Problème", action: "Ce que j'ai fait", result: "Résultat" },
    previewAlt: (title) => `Aperçu de ${title}`,
    items: [
      {
        title: "Lashtest Lab",
        description:
          "Un espace de gestion des tests qui relie la CI, JIRA et Linear pour gérer scénarios Gherkin, exécutions et campagnes. Backend Python, frontend React.",
        technologies: ["Python", "React", "GitHub Actions", "Docker"],
        links: links.lashtestLab,
        preview: previews.lashtestLab,
        caseStudy: {
          problem: "Les équipes n'avaient pas d'endroit unique pour rédiger les scénarios, planifier les exécutions et suivre les campagnes.",
          action: "Conception d'une architecture SaaS avec une modélisation des tests par fonctionnalité et des exécutions traçables.",
          result: "Une base pour centraliser la planification et suivre plus vite l'état des campagnes de test.",
        },
      },
      {
        title: "lashtest",
        description:
          "Une bibliothèque Python pour des tests d'API lisibles : construction fluide des requêtes, assertions riches, stratégies d'authentification, retries et rapports Allure. Publiée sur PyPI.",
        technologies: ["Python", "pytest", "Allure", "lxml", "JSONPath"],
        links: links.lashtest,
        preview: previews.lashtest,
        caseStudy: {
          problem: "Les suites de tests d'API étaient difficiles à lire et à maintenir sur plusieurs services.",
          action: "Création d'une bibliothèque de type DSL avec des builders de requêtes et des chaînes d'assertions réutilisables, plus des modules d'authentification, de retry et de reporting.",
          result: "Moins de code répétitif, et des tests d'API qui se lisent de la même façon d'une équipe à l'autre.",
        },
      },
      {
        title: "ScratchOS",
        description:
          "Un noyau de type Linux écrit de zéro en C et C++ : gestion mémoire, pilotes et système de fichiers.",
        technologies: ["C", "C++", "Assembly", "QEMU"],
        links: links.scratchOs,
        preview: previews.scratchOs,
        caseStudy: {
          problem: "Je voulais comprendre le fonctionnement interne d'un OS au-delà du développement applicatif.",
          action: "Implémentation des composants un par un, avec validation de leur comportement dans QEMU.",
          result: "De meilleures compétences en débogage bas niveau, que j'applique au test logiciel.",
        },
      },
    ],
  },
  certifications: {
    title: "Certifications",
    view: "Voir le certificat",
    items: [
      {
        year: "2025",
        title: "ISTQB Advanced Level : Test Automation Engineer",
        issuer: "International Software Testing Qualifications Board",
        description:
          "Architecture, frameworks et bonnes pratiques pour concevoir, mettre en œuvre et maintenir des solutions de test automatisé.",
        link: certificationLinks.ctal,
      },
      {
        year: "2024",
        title: "ISTQB Certified Tester Foundation Level",
        issuer: "International Software Testing Qualifications Board",
        description: "Les fondamentaux du test : principes, gestion des tests et techniques de test.",
        link: certificationLinks.ctfl,
      },
    ],
  },
  skills: {
    title: "Compétences",
    groups: [
      { title: "Automatisation des tests", skills: skills.automation },
      { title: "Langages", skills: skills.languages },
      { title: "Outils et plateformes", skills: skills.tools },
      { title: "Types de tests", skills: ["API", "Performance", "Sécurité", "Mobile", "End-to-end", "Régression"] },
    ],
  },
  contact: {
    title: "Contact",
    heading: "Travaillons ensemble",
    description:
      "Je suis toujours intéressé par de nouveaux projets et opportunités. Une question, ou simplement envie de dire bonjour ? Écrivez-moi.",
    location: "Paris, France",
    copyEmail: "Copier l'e-mail",
    copied: "E-mail copié",
    bookCall: "Réserver un appel de 30 minutes",
    downloadCv: "Télécharger le CV (PDF)",
  },
  footer: {
    views: (count) => `${count} visites`,
    builtWith: "Construit avec Next.js, testé avec Playwright.",
    source: "Code source sur GitHub",
  },
}
