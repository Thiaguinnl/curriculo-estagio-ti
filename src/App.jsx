import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Formacao from './components/Formacao'
import Projetos from './components/Projetos'
import Dados from './components/Dados'
import Contato from './components/Contato'
import { useState } from 'react'
import './App.css'

const translations = {
  pt: {
    header: {
      navItems: [
        { href: '#inicio', label: 'Início' },
        { href: '#sobre', label: 'Sobre' },
        { href: '#formacao', label: 'Formação' },
        { href: '#projetos', label: 'Projetos' },
        { href: '#dados', label: 'Dados' },
      ],
      contact: 'Contato',
      menuAriaLabel: 'Menu',
      languageAriaLabel: 'Selecionar idioma',
    },
    hero: {
      greeting: 'Olá, visitante!',
      greetingIconAlt: 'Ícone animado sorrindo',
      titlePrefix: 'Meu nome é',
      subtitle: 'Aspirante a programador · Buscando estágio em TI',
      bio: 'Universitário dedicado em constante aprendizado, buscando oportunidades na área de programação para aprimorar habilidades técnicas e adquirir experiência prática.',
      socialLabels: { email: 'E-mail', github: 'GitHub', instagram: 'Instagram' },
      codeSegments: [
        { text: 'const', className: 'code-key' },
        { text: ' dev = { ', className: '' },
        { text: 'nome: ', className: '' },
        { text: '"Thiago"', className: 'code-string' },
        { text: ', ', className: '' },
        { text: 'foco: ', className: '' },
        { text: '"Estágio em TI"', className: 'code-string' },
        { text: ', ', className: '' },
        { text: 'stack: [', className: '' },
        { text: '"React"', className: 'code-string' },
        { text: ', ', className: '' },
        { text: '"JavaScript"', className: 'code-string' },
        { text: '] ', className: '' },
        { text: '};', className: '' },
      ],
    },
    sobre: {
      sectionTitle: 'Sobre',
      cards: [
        {
          icon: 'img/display-code.png',
          alt: 'Ícone representando programação',
          title: 'Programador',
          description:
            'Ensino Médio completo no Colégio Educare - Betim. Cursando o primeiro período de Sistemas de Informação na PUC Minas - Betim. Atualmente dedicando-se ao trabalho de balconista na Drogaria Grandim - Betim.',
        },
        {
          icon: 'img/employee-man-alt.png',
          alt: 'Ícone representando experiência profissional',
          title: 'Mundo do Trabalho',
          description:
            'Pessoa divertida e compromissada, com boa capacidade de lidar com exigências em grupos e com superiores. Habilidades em dedicação e êxito laboral, buscando ser um diferencial na empresa.',
        },
        {
          icon: 'img/talent-alt.png',
          alt: 'Ícone representando habilidades pessoais',
          title: 'Habilidades',
          description:
            'Boa comunicação e empatia no atendimento ao cliente. Português nativo e inglês intermediário. Proatividade, organização e atenção aos detalhes para fazer a diferença na sua empresa.',
        },
      ],
    },
    formacao: {
      sectionTitle: 'Formação',
      items: [
        {
          instituicao: 'PUC Minas - Betim',
          curso: 'Sistemas de Informação',
          periodo: '3º período (em andamento)',
          tipo: 'Graduação',
        },
        {
          instituicao: 'Colégio Educare - Betim',
          curso: 'Ensino Médio',
          periodo: 'Completo',
          tipo: 'Ensino Médio',
        },
      ],
    },
    projetos: {
      sectionTitle: 'Projetos',
      subtitle: 'Alguns projetos que desenvolvi — com demo, código e detalhes técnicos.',
      labels: {
        noDemoTitle: 'Demo não disponível',
        noDemoText:
          'Esse projeto está finalizado, mas ainda não está hospedado. Você pode ver o código no GitHub e ler os detalhes técnicos ao lado.',
        stack: 'Stack',
        problemSolved: 'Problema resolvido',
        technicalDecisions: 'Decisões técnicas',
        challenges: 'Desafios',
        openInNewTab: 'Abrir em nova aba',
        viewDemo: 'Ver Demo',
        viewCode: 'Ver Código',
        viewDetails: 'Ver Detalhes',
        viewCodeOnGithub: 'Ver código no GitHub',
        modalFallbackTitle: 'Projeto',
        demoTitlePrefix: 'Demo:',
        noOnlineDemoTitle: 'Sem demo online (abre detalhes)',
        openDemoTitle: 'Abrir demo',
      },
      projects: [
        {
          id: 'projeto-1',
          title: 'Recipe Master',
          subtitle: 'Site culinário feito no 1º período',
          stack: ['HTML', 'CSS', 'JavaScript'],
          thumb: 'img/recipethumb.png',
          bullets: [
            'Site de receitas pensado para ser prático e fácil de usar.',
            'Permite que os usuários encontrem, adicionem e organizem receitas de forma intuitiva.',
            'Facilita o dia a dia de quem cozinha, reunindo receitas de forma acessível.',
            'Aprimorei habilidades em design funcional e organização de conteúdos digitais.',
          ],
          demoUrl: 'https://thiaguinnl.github.io/RecipeMaster/',
          codeUrl: 'https://github.com/Thiaguinnl/RecipeMaster',
          details: {
            problema:
              'Trabalho de Disciplina de Interfaces Web (DIW) realizado com o intuito de ajudar cozinheiros e reunir das mais diversas receitas, além de ter sido meu primeiro desenvolvimento web.',
            decisoes: [
              'Estruturei componentes/partes para facilitar manutenção',
              'Cuidei de responsividade e acessibilidade básica',
            ],
            desafios: ['Layout responsivo', 'Organização do código'],
          },
        },
        {
          id: 'projeto-2',
          title: 'Helpstress',
          subtitle:
            'Plataforma digital de apoio à saúde mental, com foco em suporte a pessoas com ansiedade.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          thumb: 'img/helpstressthumb.png',
          bullets: [
            'Criei uma aba de comunidade interativa, permitindo que usuários compartilhem experiências e acessem conteúdos confiáveis.',
            'Estruturei seções de artigos médicos e dicas práticas, facilitando o acesso a informações sobre saúde mental.',
            'Foco na experiência do usuário, com navegação clara, intuitiva e recursos de interação amigáveis.',
            'Projeto contribui para reduzir barreiras de informação e promover bem-estar digital, ao fornecer suporte seguro e acessível.',
          ],
          demoUrl: 'https://helpstress.netlify.app/',
          codeUrl: 'https://github.com/Thiaguinnl/HelpstressFrontend',
          details: {
            problema:
              'Criar uma plataforma acessível que ajude pessoas com ansiedade a encontrarem informação confiável, dicas práticas e um espaço de apoio em um só lugar.',
            decisoes: [
              'Organizei o conteúdo em seções bem definidas (informações, dicas, comunidade) para reduzir a sobrecarga cognitiva do usuário.',
              'Implementei interações em JavaScript pensando em fluidez, evitando distrações excessivas em um contexto sensível.',
            ],
            desafios: [
              'Encontrar um equilíbrio entre visual acolhedor e clareza de informação, sem poluir a interface.',
              'Organizar o fluxo de navegação para que o usuário encontre rapidamente o que precisa em momentos de ansiedade.',
            ],
          },
        },
      ],
    },
    dados: {
      sectionTitle: 'Dados Pessoais',
      personalData: [
        { label: 'Nome', value: 'Thiago Grandim das Mercês' },
        { label: 'Idade', value: '19 anos' },
        { label: 'Estado Civil', value: 'Solteiro' },
        { label: 'Endereço', value: 'Rua Afro Domigos, Filadélfia, Betim - MG' },
        { label: 'Telefone', value: '+55 (31) 98246-5473' },
        { label: 'Idiomas', value: 'Português BR (nativo) e Inglês (intermediário)' },
      ],
      quote:
        '"Sou um universitário dedicado e em constante aprendizado, buscando oportunidades na área de programação para aprimorar minhas habilidades técnicas e adquirir experiência prática. Tenho grande interesse em resolver problemas, aprender novas tecnologias e contribuir de forma proativa para a equipe. Meu objetivo é estagiar em uma empresa onde possa crescer profissionalmente e agregar valor com meu comprometimento e vontade de evoluir."',
    },
    contato: {
      sectionTitle: 'Contato',
      subtitle: 'Entre em contato para oportunidades de estágio em TI',
      items: [
        {
          href: 'https://wa.me/5531982465473',
          src: 'img/wired-flat-2627-logo-circle-whatsapp-hover-roll.json',
          label: 'WhatsApp',
        },
        {
          href: 'mailto:thiagograndim.m@gmail.com',
          src: 'img/wired-outline-1141-email-hover-spin.json',
          label: 'E-mail',
        },
        {
          href: 'https://www.instagram.com/thiaguinnl/',
          src: 'img/wired-flat-2626-logo-circle-instagram-hover-roll.json',
          label: 'Instagram',
        },
      ],
    },
    modal: { close: 'Fechar', closeModal: 'Fechar modal' },
  },
  en: {
    header: {
      navItems: [
        { href: '#inicio', label: 'Home' },
        { href: '#sobre', label: 'About' },
        { href: '#formacao', label: 'Education' },
        { href: '#projetos', label: 'Projects' },
        { href: '#dados', label: 'Profile' },
      ],
      contact: 'Contact',
      menuAriaLabel: 'Menu',
      languageAriaLabel: 'Select language',
    },
    hero: {
      greeting: 'Hello, visitor!',
      greetingIconAlt: 'Smiling animated icon',
      titlePrefix: 'My name is',
      subtitle: 'Aspiring developer · Looking for an IT internship',
      bio: 'Dedicated undergraduate continuously learning and seeking opportunities in programming to improve technical skills and gain practical experience.',
      socialLabels: { email: 'Email', github: 'GitHub', instagram: 'Instagram' },
      codeSegments: [
        { text: 'const', className: 'code-key' },
        { text: ' dev = { ', className: '' },
        { text: 'name: ', className: '' },
        { text: '"Thiago"', className: 'code-string' },
        { text: ', ', className: '' },
        { text: 'focus: ', className: '' },
        { text: '"IT Internship"', className: 'code-string' },
        { text: ', ', className: '' },
        { text: 'stack: [', className: '' },
        { text: '"React"', className: 'code-string' },
        { text: ', ', className: '' },
        { text: '"JavaScript"', className: 'code-string' },
        { text: '] ', className: '' },
        { text: '};', className: '' },
      ],
    },
    sobre: {
      sectionTitle: 'About',
      cards: [
        {
          icon: 'img/display-code.png',
          alt: 'Icon representing programming',
          title: 'Developer',
          description:
            'High school graduate from Educare School - Betim. Currently in the first semester of Information Systems at PUC Minas - Betim. At the moment, I work as a clerk at Drogaria Grandim - Betim.',
        },
        {
          icon: 'img/employee-man-alt.png',
          alt: 'Icon representing professional experience',
          title: 'Work Profile',
          description:
            'Fun and committed person, with strong ability to handle team demands and work with leadership. Focused on dedication and job excellence, aiming to be a positive difference in the company.',
        },
        {
          icon: 'img/talent-alt.png',
          alt: 'Icon representing personal skills',
          title: 'Skills',
          description:
            'Strong communication and empathy in customer service. Native Portuguese and intermediate English. Proactive, organized, and detail-oriented to make a real impact in your company.',
        },
      ],
    },
    formacao: {
      sectionTitle: 'Education',
      items: [
        {
          instituicao: 'PUC Minas - Betim',
          curso: 'Information Systems',
          periodo: '3rd semester (in progress)',
          tipo: "Bachelor's Degree",
        },
        {
          instituicao: 'Educare School - Betim',
          curso: 'High School',
          periodo: 'Completed',
          tipo: 'High School',
        },
      ],
    },
    projetos: {
      sectionTitle: 'Projects',
      subtitle: 'Some projects I built — with demo, source code, and technical details.',
      labels: {
        noDemoTitle: 'Demo unavailable',
        noDemoText:
          'This project is finished but not deployed yet. You can check the source code on GitHub and read technical details on the side panel.',
        stack: 'Stack',
        problemSolved: 'Problem solved',
        technicalDecisions: 'Technical decisions',
        challenges: 'Challenges',
        openInNewTab: 'Open in new tab',
        viewDemo: 'View Demo',
        viewCode: 'View Code',
        viewDetails: 'View Details',
        viewCodeOnGithub: 'View code on GitHub',
        modalFallbackTitle: 'Project',
        demoTitlePrefix: 'Demo:',
        noOnlineDemoTitle: 'No online demo (opens details)',
        openDemoTitle: 'Open demo',
      },
      projects: [
        {
          id: 'projeto-1',
          title: 'Recipe Master',
          subtitle: 'Cooking website built during the 1st semester',
          stack: ['HTML', 'CSS', 'JavaScript'],
          thumb: 'img/recipethumb.png',
          bullets: [
            'Recipe website designed to be practical and easy to use.',
            'Allows users to find, add, and organize recipes in an intuitive way.',
            'Makes everyday cooking easier by gathering recipes in an accessible format.',
            'Improved my skills in functional design and digital content organization.',
          ],
          demoUrl: 'https://thiaguinnl.github.io/RecipeMaster/',
          codeUrl: 'https://github.com/Thiaguinnl/RecipeMaster',
          details: {
            problema:
              'A Web Interfaces (DIW) course project created to help cooks gather all kinds of recipes, and it was also my first web development project.',
            decisoes: [
              'I structured components/sections to simplify maintenance',
              'I focused on responsiveness and basic accessibility',
            ],
            desafios: ['Responsive layout', 'Code organization'],
          },
        },
        {
          id: 'projeto-2',
          title: 'Helpstress',
          subtitle:
            'Digital mental health support platform focused on helping people with anxiety.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          thumb: 'img/helpstressthumb.png',
          bullets: [
            'Built an interactive community section so users can share experiences and access reliable content.',
            'Structured medical articles and practical tips sections to make mental health information easier to access.',
            'Focused on user experience with clear navigation, intuitive flow, and friendly interaction resources.',
            'The project helps reduce information barriers and promotes digital well-being by offering safe and accessible support.',
          ],
          demoUrl: 'https://helpstress.netlify.app/',
          codeUrl: 'https://github.com/Thiaguinnl/HelpstressFrontend',
          details: {
            problema:
              'Create an accessible platform that helps people with anxiety find reliable information, practical tips, and a support space in one place.',
            decisoes: [
              'Organized content into clearly defined sections (information, tips, community) to reduce the user cognitive load.',
              'Implemented JavaScript interactions with fluidity in mind, avoiding excessive distractions in a sensitive context.',
            ],
            desafios: [
              'Finding a balance between a welcoming visual style and information clarity without cluttering the interface.',
              'Designing the navigation flow so users can quickly find what they need during anxiety moments.',
            ],
          },
        },
      ],
    },
    dados: {
      sectionTitle: 'Personal Info',
      personalData: [
        { label: 'Name', value: 'Thiago Grandim das Merces' },
        { label: 'Age', value: '19 years old' },
        { label: 'Marital Status', value: 'Single' },
        { label: 'Address', value: 'Afro Domigos Street, Filadelfia, Betim - MG, Brazil' },
        { label: 'Phone', value: '+55 (31) 98246-5473' },
        { label: 'Languages', value: 'Brazilian Portuguese (native) and English (intermediate)' },
      ],
      quote:
        '"I am a dedicated undergraduate in continuous learning, seeking opportunities in programming to improve my technical skills and gain practical experience. I have a strong interest in solving problems, learning new technologies, and proactively contributing to the team. My goal is to intern at a company where I can grow professionally and add value through commitment and willingness to evolve."',
    },
    contato: {
      sectionTitle: 'Contact',
      subtitle: 'Get in touch for IT internship opportunities',
      items: [
        {
          href: 'https://wa.me/5531982465473',
          src: 'img/wired-flat-2627-logo-circle-whatsapp-hover-roll.json',
          label: 'WhatsApp',
        },
        {
          href: 'mailto:thiagograndim.m@gmail.com',
          src: 'img/wired-outline-1141-email-hover-spin.json',
          label: 'Email',
        },
        {
          href: 'https://www.instagram.com/thiaguinnl/',
          src: 'img/wired-flat-2626-logo-circle-instagram-hover-roll.json',
          label: 'Instagram',
        },
      ],
    },
    modal: { close: 'Close', closeModal: 'Close modal' },
  },
}

function App() {
  const [language, setLanguage] = useState('pt')
  const content = translations[language]

  return (
    <>
      <Header language={language} setLanguage={setLanguage} content={content.header} />
      <main>
        <Hero content={content.hero} />
        <Sobre content={content.sobre} />
        <Formacao content={content.formacao} />
        <Projetos content={content.projetos} modalContent={content.modal} />
        <Dados content={content.dados} />
        <Contato content={content.contato} />
      </main>
    </>
  )
}

export default App
