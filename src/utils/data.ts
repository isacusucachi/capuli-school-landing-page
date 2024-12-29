import servicesImage1 from "../assets/images/machupicchu.webp";
import servicesImage2 from "../assets/images/huaypo.jpg";
import aboutImage from "../assets/images/hero2.jpg";
import contactImage from "../assets/images/dev-with-c-1.webp";
import merci from "../assets/images/teachers/merci.jpg";
import jeane from "../assets/images/teachers/jeane.jpg";
import ramiro from "../assets/images/teachers/ramiro.png";
import sara from "../assets/images/teachers/sara.jpg";
import yorka from "../assets/images/teachers/yorka.png";

const about = {
  title: "NOSOTROS",
  description:
    "Capulí School te enseña cómo hablar y entender el español a través de lecciones enfocadas en la conversación y gramática, además de recibir información sobre la cultura andina, la cultura más tradicional de Sudamérica. En Capulí School también puedes aprender el Quechua, el idioma de los incas, el idioma nativo más importante de Latinoamérica.",
  img: aboutImage,
};

const contact = {
  title: "CONTACTO",
  description:
    "Estamos aquí para ayudarte a dar el primer paso en tu viaje de aprendizaje. Si tienes preguntas sobre nuestros cursos de español o quechua, o necesitas más información sobre nuestras clases, no dudes en ponerte en contacto con nosotros.",
  email: "capulischool@gmail.com",
  emailIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>`,
  phone1: "+51 965 866364",
  phone2: "+51 963 359691",
  phoneIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
</svg>`,
  schedule: "8am. a 8pm.",
  scheduleIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
  <path fill-rule="evenodd" d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z" clip-rule="evenodd" />
</svg>`,
  img: contactImage,
  alt: "",
};

const services = [
  {
    title: "Lecciones de Español",
    description:
      "Ofrecemos lecciones de español privadas con profesores que conocen la gramática y las estrategias de enseñanza, además pueden enseñarte sobre la cultura andina. La enseñanza del español está dividida en los tres niveles:",
    levels: ["Básico", "Intermedio", "Avanzado"],
    img: servicesImage1,
  },
  {
    title: "Lecciones de Quechua",
    description:
      "Ofrecemos lecciones de quechua privadas con profesores nativos y descendientes de los incas. La enseñanza del quechua está dividida en tres niveles:",
    levels: ["Básico", "Intermedio", "Avanzado"],
    img: servicesImage2,
  },
];

const teachers = [
  {
    img: jeane,
    alt: "Foto de profesora Jeane",
    name: "Jeane",
    title: "Profesora de Español",
  },
  {
    img: sara,
    alt: "Foto de profesora Sara",
    name: "Sara",
    title: "Profesora de Español",
  },
  {
    img: yorka,
    alt: "Foto de profesora Yorka",
    name: "Yorka",
    title: "Profesora de Español",
  },
  {
    img: merci,
    alt: "Foto de profesora Merci",
    name: "Merci",
    title: "Profesora de Español",
  },
  {
    img: ramiro,
    alt: "Foto de profesora Ramiro",
    name: "Ramiro",
    title: "Profesora de Quechua",
  },
];

const faqs = [
  {
    question: "¿Qué idiomas puedo aprender en Capulí School?",
    answer:
      "Ofrecemos lecciones de español y quechua, ambos divididos en tres niveles: Básico, Intermedio y Avanzado.",
  },
  {
    question: "¿Cómo funcionan las clases virtuales?",
    answer:
      "Nuestras clases son personalizadas y se realizan a través de plataformas en línea con profesores nativos, quienes adaptan las lecciones a tus necesidades.",
  },
  {
    question: " ¿Quiénes son los profesores?",
    answer:
      "Contamos con un equipo de profesores nativos y expertos, especializados en la enseñanza del español y quechua. Además, tienen amplio conocimiento de la cultura andina.",
  },
  {
    question: "Cuánto tiempo dura cada curso?",
    answer:
      "La duración depende del paquete que elijas y de tus metas de aprendizaje. Ofrecemos clases flexibles adaptadas a tu ritmo.",
  },
  {
    question: "¿Se enseña gramática y conversación?",
    answer:
      "Sí, nuestras lecciones están diseñadas para equilibrar gramática, conversación y comprensión cultural.",
  },
  {
    question: "¿Puedo aprender sobre la cultura andina en las clases?",
    answer:
      "Por supuesto. Nuestras lecciones incluyen información sobre la rica cultura andina, tradiciones y su relación con los idiomas.",
  },
  {
    question: "¿Ofrecen clases grupales o solo individuales?",
    answer:
      "Ofrecemos ambas opciones. Puedes optar por clases privadas para mayor personalización o grupales para interactuar con otros estudiantes.",
  },
  {
    question: "¿Cómo puedo registrarme?",
    answer:
      "Puedes ponerte en contacto a traves nuestra página web o escribirnos directamente a capulischool@gmail.com.",
  },
  {
    question: "¿Cómo se realiza el pago?",
    answer:
      "Aceptamos pagos mediante transferencia bancaria y otros métodos digitales. Al registrarte, te enviaremos los detalles para completar el pago.",
  },
  {
    question: "¿Tienen algún programa de certificación?",
    answer:
      "Sí, al finalizar cada nivel, recibirás un certificado que avala tu progreso y logros en el idioma aprendido.",
  },
];

export { about, services, teachers, contact, faqs };
