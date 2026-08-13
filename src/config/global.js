export default {
  global: {
    Name: 'Diagnóstico y planificación estratégica del equipo de trabajo',
    Description:
      'El componente formativo desarrolla la capacidad de diagnosticar la situación de un equipo de trabajo y planificar estratégicamente su fortalecimiento. Aborda el proceso administrativo, el diagnóstico organizacional, el diseño del plan de acción y la evaluación mediante indicadores de gestión, con el fin de optimizar el desempeño del equipo y orientar la toma de decisiones en las organizaciones.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estrategias administrativas en equipos de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'El proceso administrativo y las estrategias de gestión',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'El trabajo en equipo',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos del diagnóstico organizacional ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y tipos de diagnóstico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características y elementos clave',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Variables de análisis organizacional',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Herramientas de análisis',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Análisis interno y externo del equipo',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño del plan de acción ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de elaboración',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Definición de objetivos y metas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Programación de actividades',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Herramientas de gestión de tareas',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Proyección de recursos',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Evaluación del diagnóstico y planeación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Indicador',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Construcción de indicadores',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Indicadores aplicables al área de talento humano',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Diagnóstico organizacional',
      significado:
        'proceso sistemático de análisis mediante el cual se examina la situación actual de una organización o de un equipo de trabajo, con el fin de identificar sus fortalezas, debilidades, oportunidades y amenazas, y orientar la toma de decisiones.',
    },
    {
      termino: 'Ficha técnica del indicador',
      significado:
        'documento que estandariza la medición y reúne en un solo formato el nombre, el objetivo, la fórmula de cálculo, la unidad de medida, la periodicidad, la fuente de datos, el responsable, la meta y el rango de tolerancia.',
    },
    {
      termino: 'FODA',
      significado:
        'matriz que clasifica los hallazgos del diagnóstico según su origen, interno o externo, y su carácter, positivo o negativo: fortalezas, oportunidades, debilidades y amenazas. Su versión cruzada relaciona los factores internos con los externos para generar estrategias.',
    },
    {
      termino: 'Indicador',
      significado:
        'unidad de medida cuantitativa o cualitativa que permite evaluar el desempeño, verificar el logro de las metas y monitorear los cambios en procesos, proyectos o políticas.',
    },
    {
      termino: 'Línea base',
      significado:
        'valor que registra un indicador al inicio del período de medición y que sirve como punto de partida para calcular el avance y establecer la meta.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'enfoque de gestión que busca optimizar de manera permanente los procesos, los productos y los servicios mediante cambios pequeños, progresivos y sostenidos en el tiempo.',
    },
    {
      termino: 'PERT',
      significado:
        'técnica de programación que estima el tiempo necesario para completar las tareas de un proyecto e identifica los caminos críticos, es decir, las actividades que no pueden retrasarse sin afectar la fecha final.',
    },
    {
      termino: 'Rango de tolerancia',
      significado:
        'conjunto de intervalos que clasifican el resultado obtenido según su nivel de cumplimiento, por lo general en excelente, aceptable e inaceptable.',
    },
  ],
  referencias: [
    {
      referencia:
        'Dobaño, R. (2025). Los 10 mejores softwares de gestión de tareas en 2025. Quipu – TeamSystem.',
    },
    {
      referencia:
        'Empresa Actual. (2023). Indicadores de recursos humanos, no prescindas de ellos.',
    },
    {
      referencia:
        'Función Pública. (2018). Guía para la construcción y análisis de indicadores de gestión (versión 4). Departamento Administrativo de la Función Pública.',
    },
    {
      referencia:
        'OCC Solutions. (s. f.). Diagnóstico organizacional: qué es, elementos y cómo realizarlo.',
    },
    {
      referencia:
        'Ortega, C. (s. f.). Herramientas de plan de acción: qué es y elementos clave. QuestionPro.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz ',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
