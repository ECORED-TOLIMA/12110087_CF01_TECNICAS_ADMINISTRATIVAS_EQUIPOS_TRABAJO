<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Ruta estratégica: diagnosticar y planificar el equipo de trabajo.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos, principios y herramientas asociados al diagnóstico organizacional, el proceso administrativo y la planificación estratégica del equipo de trabajo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la base de cualquier estrategia efectiva en equipos de trabajo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La alineación de objetivos individuales con la visión corporativa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La eliminación total de los conflictos internos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La implementación de software de última generación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El aumento de la supervisión directa sobre el empleado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La alineación de los objetivos individuales con la visión corporativa evita que los esfuerzos se dispersen y que la productividad se estanque.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué define a la administración dentro de un equipo de trabajo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es un proceso puramente emocional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'CLa coordinación técnica de recursos para la máxima productividad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La imposición de criterios por parte del líder.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un conjunto de acciones aisladas sin propósito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La administración es una ciencia que utiliza la técnica para organizar los recursos y lograr la eficiencia del equipo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿En qué etapa del proceso administrativo se definen la misión y los objetivos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dirección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Planeación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La planeación es el punto de partida donde se anticipan escenarios y se seleccionan las estrategias.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es el objetivo principal de la fase de "Organización"?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir los resultados obtenidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Motivar a los colaboradores mediante incentivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir la visión a largo plazo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Distribuir tareas, responsabilidades y definir la jerarquía.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Esta fase convierte la estrategia en operativa, asignando roles para evitar el caos funcional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué característica define al liderazgo situacional?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplica un estilo único y rígido para todos por igual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evita delegar funciones para mantener el control total.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se adapta al nivel de madurez y competencia de cada colaborador.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se enfoca exclusivamente en el apoyo emocional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El administrador eficiente sabe cuándo instruir, delegar o apoyar según la necesidad del miembro del equipo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cómo se describe la comunicación asertiva en el contexto estratégico?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como un proceso unidireccional del jefe al subordinado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Como una técnica para ocultar los errores operativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Como una herramienta opcional en entornos digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como el elemento que permite el funcionamiento del equipo sin fricciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La comunicación asertiva y la retroalimentación constante mantienen al equipo bien informado, facilitan el trabajo conjunto y evitan los malentendidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es un beneficio directo de optimizar la estructura de roles?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El aumento de la duplicidad de funciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El fomento de la competencia destructiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación de los proyectos transversales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La reducción del estrés organizacional y el agotamiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Al saber qué se espera de cada integrante, el talento se enfoca en actividades de alto valor, sin sobrecargas innecesarias.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el propósito de utilizar indicadores clave (KPI) en la gestión?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Objetivar el éxito y detectar áreas de mejora en tiempo real.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evaluar subjetividades y opiniones personales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar por completo el liderazgo humano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Castigar a los empleados con bajo rendimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los datos permiten realizar ajustes sobre la marcha para mantener la calidad y sostenibilidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué busca el fomento del aprendizaje organizacional?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el tiempo dedicado al trabajo productivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limitar la capacitación solo al personal directivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cerrar brechas de conocimiento y evitar la obsolescencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir la experiencia práctica por teoría pura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Un equipo que no actualiza sus competencias queda obsoleto frente a los retos del futuro.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la manera más adecuada de resolver los conflictos dentro de un equipo de trabajo?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar los desacuerdos hasta que desaparezcan.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proveer protocolos claros para mediar antes de que escalen.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Fomentar la confrontación para medir la fuerza del equipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sancionar a todos los involucrados de manera inmediata.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Abordar las tensiones con neutralidad y soluciones preserva el clima laboral y la confianza.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué papel juega la tecnología en la estrategia administrativa?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es un fin en sí misma, independientemente de la estrategia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplaza la necesidad de tener metas claras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilita tareas rutinarias para permitir la innovación humana.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Es la única responsable del éxito de un equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las herramientas digitales deben servir a la estrategia para potenciar la agilidad y el pensamiento crítico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es el resultado de un sistema de incentivos bien diseñado?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El aumento de la rotación de personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El fin de la necesidad de dirección administrativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La creación de un ambiente de competencia agresiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La retención del talento y el fomento de la colaboración.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El reconocimiento estratégico premia la colaboración y retiene el talento en la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál se considera la "estrategia maestra" en un mundo volátil?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La adaptabilidad ante el cambio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La planeación rígida e inamovible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La centralización absoluta del poder.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La reducción constante de los recursos técnicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La resiliencia permite reconfigurar las tácticas ante las crisis, sin perder la excelencia operativa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué es, esencialmente, el diagnóstico organizacional?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una técnica de castigo para departamentos ineficientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un informe de ventas de carácter externo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un proceso sistemático de análisis para comprender la situación actual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una etapa que se realiza solo al cerrar la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Es una herramienta que evalúa el funcionamiento integral para detectar áreas de mejora.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el propósito principal de generar información confiable en un diagnóstico?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Servir de base para la toma de decisiones estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Justificar el despido masivo de colaboradores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Publicarla en redes sociales para mejorar la imagen.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comparar la empresa con competidores inexistentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El diagnóstico busca datos reales para guiar el camino de la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué analiza un diagnóstico organizacional integral?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solamente el entorno externo de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el área de recursos humanos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Todos los componentes de la organización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo la jerarquía de los altos mandos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El diagnóstico integral ofrece una visión 360 grados de toda la estructura organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la diferencia fundamental entre la función descriptiva y la función valorativa de un indicador?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La función descriptiva utiliza fórmulas matemáticas y la valorativa solo usa lenguaje escrito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La descriptiva aporta datos sobre el estado real y la valorativa añade un "juicio de valor" basado en antecedentes objetivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La descriptiva mide el futuro de la organización y la valorativa analiza el pasado histórico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No existe diferencia, ya que ambas funciones buscan únicamente contar el número de beneficiarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Mientras que la función descriptiva informa sobre hechos (ej. número de becas), la valorativa interpreta si ese desempeño es adecuado frente a una necesidad (ej. becas vs. estudiantes necesitados).',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué característica del indicador asegura que la información sea fácil de obtener, sin restricciones y a un costo razonable?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Independencia y sensibilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pertinencia y no redundancia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disponibilidad y costo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Simplicidad y confiabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La disponibilidad garantiza el acceso a los datos básicos y el costo asegura que la obtención de dicha información sea económicamente viable para la institución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué condición es "absolutamente necesaria" antes de iniciar la construcción de cualquier indicador en una organización pública?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprar un software especializado en análisis de datos masivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tener claridad sobre las definiciones estratégicas (misión, visión y objetivos).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Contratar a un consultor externo para que valide la fórmula de cálculo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Realizar una encuesta de satisfacción a todos los ciudadanos del país.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El indicador debe responder al cumplimiento del plan rector; por lo tanto, sin objetivos estratégicos claros, no existe un eje para medir el progreso de la gestión.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la relación entre el proceso administrativo y los resultados tangibles?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El proceso administrativo garantiza resultados sin necesidad de esfuerzo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Actúa como la hoja de ruta universal para transformar ideas en logros.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Son conceptos totalmente opuestos e independientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El proceso administrativo solo sirve para la teoría académica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las fases de planeación, organización, dirección y control son las que permiten materializar las metas del equipo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad. Sus respuestas demuestran conocimientos sólidos sobre el diagnóstico organizacional, el proceso administrativo y la planificación estratégica del equipo de trabajo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
