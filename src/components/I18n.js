
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
      translation: {
        welcome: "Welcome",
        description: "This is an internationalized app.",
        about_us: "About Us",
        our_work: "Our Work",
        news: "News",
        resources: "Resources",
        events: "Events",
        login_join_free: "Login or Join for Free",
        for_students: "For students",
        for_teachers: "For teachers",
        start_adventure: "Start the Adventure now",
        login: "Login",
        student_companion: "Student Companion Guide",
        teacher_companion: "Teacher Companion Guide",

        // Student Section
        student_title: "The Ultimate Dialogue Adventure",
        student_description:"Join this online adventure to learn the skills of dialogue, explore different perspectives and global topics, and build intercultural connections with young people all over the world! Through this fun and interactive game you will:", 
        student_feature1: "Be awarded badges for completing learning on different topics",
        student_feature2: "Earn points on your way to becoming a dialogue master",
        student_feature3: "Discover ways you can use dialogue in real life with global peers",
        student_feature4: "Practice your skills of dialogue",

        // Teacher Section
        teacher_title: "Access to classroom resources",
        teacher_description: "Explore resources, tools, and trainings to teach and develop the skills and competencies of dialogue in your learning community. Register here to be part of the Generation Global network and receive access to:",
        teacher_feature1: "Downloadable teaching resources, including the Essentials of Dialogue",
        teacher_feature2: "Invite your students and follow their journey through the Ultimate Dialogue Adventure",
        teacher_feature3: "Book video conferences for your students to engage in dialogue with global peers",
        teacher_feature4: "Opportunities for professional development"
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue",
        description: "Ceci est une application internationalisée.",
        about_us: "À propos de nous",
        our_work: "Notre travail",
        news: "Nouvelles",
        resources: "Ressources",
        events: "Événements",
        login_join_free: "Connexion ou Inscription gratuite",
        for_students: "Pour les étudiants",
        for_teachers: "Pour les enseignants",
        start_adventure: "Commencez l'aventure maintenant",
        login: "Connexion",
        student_companion: "Guide de l'étudiant",
        teacher_companion: "Guide de l'enseignant",

        // Student Section
        student_title: "L'aventure de dialogue ultime",
        student_description: "Rejoignez cette aventure en ligne pour apprendre les compétences du dialogue, explorer différentes perspectives et sujets mondiaux, et établir des connexions interculturelles avec des jeunes du monde entier ! Grâce à ce jeu amusant et interactif, vous pourrez :",
        student_feature1: "Recevez des badges pour avoir complété des formations sur différents sujets.",
        student_feature2: "Suivez vos progrès grâce à des tableaux de bord personnalisés.",
        student_feature3: "Collaborez avec vos pairs dans des salles de classe virtuelles.",
        student_feature4: "Accédez à des ressources sélectionnées par des experts.",

        // Teacher Section
        teacher_title: "Accès aux ressources pour la classe",
        teacher_description: "Explorez les ressources, outils et formations pour enseigner et développer les compétences et les capacités du dialogue dans votre communauté d'apprentissage. Inscrivez-vous ici pour faire partie du réseau Generation Global et recevoir un accès à :",
        teacher_feature1: "Ressources pédagogiques téléchargeables, y compris les Essentiels du Dialogue",
        teacher_feature2: "Invitez vos élèves et suivez leur parcours à travers l'Aventure Ultime du Dialogue",
        teacher_feature3: "Réservez des vidéoconférences pour que vos élèves puissent dialoguer avec des pairs mondiaux",
        teacher_feature4: "Opportunités de développement professionnel",
        
      },
    },
    es: {
      translation: {
        welcome: "Bienvenido",
        description: "Esta es una aplicación internacionalizada.",
        about_us: "Sobre nosotros",
        our_work: "Nuestro trabajo",
        news: "Noticias",
        resources: "Recursos",
        events: "Eventos",
        login_join_free: "Iniciar sesión o Registrarse gratis",
        for_students: "Para estudiantes",
        for_teachers: "Para profesores",
        start_adventure: "Comienza la aventura ahora",
        login: "Iniciar sesión",
        student_companion: "Guía para estudiantes",
        teacher_companion: "Guía para profesores",

        // Student Section
        student_title: "La Aventura del Diálogo Definitiva",
        student_description: "¡Únete a esta aventura en línea para aprender las habilidades del diálogo, explorar diferentes perspectivas y temas globales, y construir conexiones interculturales con jóvenes de todo el mundo! A través de este juego divertido e interactivo, podrás:",
        student_feature1: "Recibir insignias por completar el aprendizaje en diferentes temas",
        student_feature2: "Ganar puntos en tu camino para convertirte en un maestro del diálogo",
        student_feature3: "Descubrir formas en las que puedes usar el diálogo en la vida real con compañeros globales",
        student_feature4: "Practicar tus habilidades de diálogo",
        
        
        
        
        
        

        // Teacher Section
        teacher_title: "Acceso a recursos para el aula",
        teacher_description: "Explora recursos, herramientas y formaciones para enseñar y desarrollar las habilidades y competencias del diálogo en tu comunidad de aprendizaje. Regístrate aquí para formar parte de la red Generation Global y recibir acceso a:",
        teacher_feature1: "Recursos didácticos descargables, incluidos los Esenciales del Diálogo",
        teacher_feature2: "Invita a tus estudiantes y sigue su viaje a través de la Aventura del Diálogo Definitiva",
        teacher_feature3: "Reserva videoconferencias para que tus estudiantes interactúen en diálogo con compañeros globales",
        teacher_feature4: "Oportunidades de desarrollo profesional",
      },
    },
  };

i18n
  .use(HttpApi) 
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
  });

export default i18n;
