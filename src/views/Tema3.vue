<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Diseño del plan de acción
      
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #FECE81 !important")
        .bloque-texto-g__img.img-bg-01
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") El diseño del plan de acción es la etapa en la que el diagnóstico se transforma en decisiones concretas. Una vez que el equipo conoce su situación y define sus prioridades, necesita organizar de manera ordenada las acciones que le permitirán alcanzar los objetivos propuestos. El plan de acción cumple esa función, pues traduce el análisis estratégico en un conjunto de tareas claras, con responsables y tiempos definidos. 

      p Un plan de acción puede involucrar a varias áreas o departamentos, según el tipo de resultados que se proyecte alcanzar. Por ello, requiere definir con precisión los responsables, los tiempos de ejecución, los recursos y los instrumentos de medición que garantizan su efectividad. Cuando se elabora de forma participativa, cada integrante comprende su papel y asume el compromiso con las metas comunes.
      p.mb-4 Para cumplir su propósito, todo plan de acción se estructura a partir de una serie de elementos que responden a preguntas clave sobre qué se hará y cómo se logrará:

      .row.justify-content-center.mb-4
        .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-02.svg', alt='')
        .col.col-lg-9.col-12.order-lg-2.order-2
          .row.mb-0
            .cajon.cajon.C05.px-4.py-3.mb-0
              ul.lista-ul.mb-0
                li.mb-4 
                  i.lista-ul__vineta
                  span #[b Objetivos y metas:] definen qué se quiere lograr y en qué medida; expresan el resultado esperado de forma clara y verificable.
                li.mb-4 
                  i.lista-ul__vineta
                  span #[b Actividades y tareas:] precisan las acciones concretas que se deben ejecutar para alcanzar cada meta.
                li.mb-4 
                  i.lista-ul__vineta
                  span #[b Responsables:] indican quién se encarga de cada acción, lo que asegura la rendición de cuentas.
                li.mb-4 
                  i.lista-ul__vineta
                  span #[b Tiempos de ejecución:] establecen cuándo inicia y termina cada actividad, con el fin de ordenar el trabajo.
                li.mb-4 
                  i.lista-ul__vineta
                  span #[b Recursos:] determinan con qué se cuenta, ya sean humanos, materiales, financieros o tecnológicos.
                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span #[b Indicadores de seguimiento:] permiten medir el avance y verificar el cumplimiento del plan. 
      
      .row.justify-content-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/intro/img-02.svg', alt='')
        .col.col-lg-11.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") Estos elementos convierten el plan de acción en una guía práctica y verificable, articulan lo que se quiere lograr: con quién, cómo, cuándo y con qué recursos se hará. Su definición precisa evita la improvisación y facilita el seguimiento, de modo que el plan se mantenga como una herramienta viva de gestión y no como un documento estático.

      p.mb-4 La comprensión del diseño del plan de acción se fortalece a través del siguiente recurso de audio, en el que se explican de manera clara el momento en que se elabora, los seis elementos que lo componen y las condiciones que aseguran su cumplimiento:

      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .podcast-recurso.podcast-recurso--final
            .podcast-recurso__imagen
              img(src='@/assets/curso/temas/t3/img-03.svg', alt='Imagen decorativa')

            .podcast-recurso__contenido
              .podcast-recurso__audio
                .podcast-recurso__info
                  h5.mb-1 Diseño del plan de acción
                  span {{ tiempoActual }} / {{ duracionAudio }}

                .podcast-recurso__barra(@click="cambiarTiempoAudio")
                  .podcast-recurso__progreso(:style="{ width: progresoAudio + '%' }")

                button.podcast-recurso__boton(type="button" @click="reproducirPodcast")
                  i(:class="reproduciendoPodcast ? 'fas fa-pause' : 'fas fa-volume-up'")

              audio(
                ref="audioPodcast"
                :src="audioPodcast"
                @timeupdate="actualizarProgresoAudio"
                @loadedmetadata="cargarDuracionAudio"
                @ended="finalizarPodcast"
              )

      p Reconocido el propósito del plan de acción y los elementos que lo integran, el paso siguiente consiste en precisar su concepto y las características que lo diferencian de otros documentos de planeación. Ese es el objeto del siguiente apartado.

      Separador

      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1 Concepto y características

      p.mb-4 El plan de acción es un instrumento de gestión que organiza, de forma estructurada, las acciones necesarias para alcanzar los objetivos definidos a partir del diagnóstico. Funciona como una guía práctica que responde a cuatro preguntas esenciales: 

      .row.justify-content-center.mb-4.recurso-preguntas-equipo
        .col-lg-3.col-md-6.col-12.mb-4
          .recurso-preguntas-equipo__item
            .recurso-preguntas-equipo__numero
              span 1
            h5.mb-0 ¿Qué se va a hacer?

        .col-lg-3.col-md-6.col-12.mb-4
          .recurso-preguntas-equipo__item
            .recurso-preguntas-equipo__numero
              span 2
            h5.mb-0 ¿Cómo se hará?

        .col-lg-3.col-md-6.col-12.mb-4
          .recurso-preguntas-equipo__item
            .recurso-preguntas-equipo__numero
              span 3
            h5.mb-0 ¿Quién será responsable?

        .col-lg-3.col-md-6.col-12.mb-4
          .recurso-preguntas-equipo__item
            .recurso-preguntas-equipo__numero
              span 4
            h5.mb-0 ¿En qué tiempo se ejecutará?

      .row.justify-content-center.mb-4
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          p Al responder estas cuatro preguntas, el plan de acción convierte el análisis del diagnóstico en resultados concretos y medibles. Así, ordena el trabajo del equipo, evita la improvisación y asigna a cada integrante un papel definido dentro de un propósito común. Su elaboración cuidadosa marca la diferencia entre una simple intención y una acción efectiva. Para cumplir ese propósito, un plan de acción debe reunir ciertas características que garantizan su claridad y su utilidad. Entre las principales se destacan las siguientes:
          .cajon.cajon.C05.px-4.py-3.mb-0
            ul.lista-ul--color.mb-0
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Claro:] se comprende con facilidad por parte de todos los integrantes del equipo.
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Coherente:] sus acciones se alinean con los objetivos estratégicos definidos.
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Realista:] considera las capacidades y los recursos realmente disponibles.
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Flexible:] se adapta a los cambios o imprevistos del entorno.
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Orientado a resultados:] cada acción apunta al logro de metas específicas.
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Participativo:] involucra a los integrantes en su elaboración, lo que fortalece el compromiso.
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Evaluable:] permite el seguimiento mediante indicadores que miden su avance.
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-04.png', alt='')

      p.mb-4 Estas características hacen del plan de acción una herramienta dinámica de gestión y no un documento estático. Para organizar sus elementos, se emplea un formato como el siguiente, que reúne en un solo instrumento las metas, las actividades, los recursos, los tiempos y los responsables:

      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 1.
            span Plan de acción
          .tabla-a.color-acento-contenido.mb-4.tabla-plan-accion
            table
              thead
                tr(data-aos="fade-right")
                  th(
                    colspan="6"
                    style="background-color: #75D1D8; color: #12263F; text-align: center; font-weight: 700; padding: .9rem;"
                  ) Objetivo
                tr(data-aos="fade-right")
                  th(style="width: 16%; background-color: #F6F6F6;") Metas
                  th(style="width: 16%; background-color: #F6F6F6;") Actividades
                  th(style="width: 16%; background-color: #F6F6F6;") Tareas
                  th(style="width: 16%; background-color: #F6F6F6;") Recursos
                  th(style="width: 16%; background-color: #F6F6F6;") Duración o tiempo de ejecución
                  th(style="width: 16%; background-color: #F6F6F6;") Responsables
              tbody
                tr(data-aos="fade-right")
                  td -
                  td -
                  td -
                  td -
                  td -
                  td -
                tr(data-aos="fade-right")
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                tr(data-aos="fade-right")
                  td -
                  td -
                  td -
                  td -
                  td -
                  td -
                tr(data-aos="fade-right")
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                tr(data-aos="fade-right")
                  td -
                  td -
                  td -
                  td -
                  td -
                  td -
                tr(data-aos="fade-right")
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                tr(data-aos="fade-right")
                  td -
                  td -
                  td -
                  td -
                  td -
                  td -
                tr(data-aos="fade-right")
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                tr(data-aos="fade-right")
                  td -
                  td -
                  td -
                  td -
                  td -
                  td -
                tr(data-aos="fade-right")
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -
                  td(style="background-color: #F6F6F6;") -

      .row.justify-content-center.mb-4
        .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-05.svg', alt='')
        .col.col-lg-9.col-12.order-lg-2.order-2
          .row.mb-0
            .cajon.cajon.C01.px-4.py-4.mb-4
              p.mb-0 El proceso de elaboración del plan de acción inicia con la definición clara del objetivo estratégico que se pretende alcanzar, el cual orienta todas las decisiones posteriores. A partir de este objetivo, se realiza la desagregación en metas específicas, permitiendo dividir el propósito general en resultados concretos y medibles. 
            .col-lg-12.col-12
              p Una vez definidas las metas, las actividades y las tareas, el plan precisa los recursos que se deben movilizar para ejecutarlas, junto con los tiempos y los responsables. Identificarlos con anticipación garantiza que el plan sea estructurado, viable y ajustado a las capacidades del equipo. Según su naturaleza, estos recursos se clasifican así:

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C05.px-4.py-3
            ul.lista-ul--color.mb-0
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Entrevistas y encuestas:] Recursos humanos: las personas que ejecutan las actividades, con sus competencias y responsabilidades.
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Recursos materiales:] los insumos, las herramientas y los equipos necesarios para el trabajo.
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Recursos financieros:] el presupuesto disponible para cubrir los costos que impliquen las acciones.
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Recursos tecnológicos:] las plataformas, los programas y los medios digitales que apoyan la ejecución.

      p A cada recurso se le asigna un tiempo de ejecución y un responsable, de modo que el plan quede completo y listo para llevarse a la práctica.
      p.mb-4 La implementación y ejecución del plan de acción implica llevar a la práctica lo previamente planificado, asegurando que cada actividad y tarea se desarrolle conforme a lo establecido. En esta etapa es fundamental la coordinación entre los miembros del equipo, la asignación clara de responsabilidades y la disponibilidad oportuna de los recursos. 

      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .recurso-info-azul
            .recurso-info-azul__icono
              img(src='@/assets/curso/temas/t2/img-18.svg', alt='Imagen decorativa')

            .recurso-info-azul__contenido
              p.mb-0 La ejecución requiere, además, una comunicación efectiva que permita resolver los imprevistos y ajustar las acciones cuando sea necesario. De esta manera, el plan deja de ser un documento teórico y se convierte en una herramienta dinámica que guía el accionar del equipo hacia el logro de los objetivos propuestos.

      .row.justify-content-center.mb-4
        .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          p Finalmente, el monitoreo y seguimiento del plan de acción permiten evaluar de manera continua el avance en la ejecución de las tareas, el cumplimiento de las actividades y el uso adecuado de los recursos. Este proceso implica verificar si los tiempos se están respetando, si los responsables están cumpliendo sus funciones y si las acciones están generando los resultados esperados. 
          .row.mb-4.recuadro-equipo-rosa.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure.mb-0
                img(src='@/assets/curso/temas/t3/img-07.svg', alt='').recuadro-equipo-rosa__icono
            .col-lg-10.col-12
              p.mb-0 El monitoreo facilita la identificación de desviaciones o dificultades, permitiendo implementar acciones correctivas oportunas. Asimismo, contribuye a valorar la efectividad del plan, fortalecer la gestión del equipo y promover una cultura de mejora continua, basada en el análisis y la toma de decisiones informadas.
          .row.mb-0
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/intro/img-02.svg', alt='')
            .col-lg-10.col-12
              p.mb-0 Comprender el concepto, las características y el ciclo del plan de acción sienta las bases para elaborarlo con rigor. Ahora bien, estructurarlo de manera ordenada y eficaz requiere el uso de técnicas y metodologías específicas que facilitan su formulación. Estas técnicas de elaboración, que ayudan a convertir los objetivos en acciones concretas, se desarrollan en el siguiente apartado.
        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-06.png', alt='')

      Separador

      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.2 Técnicas de elaboración

      p.mb-4 Las técnicas de elaboración son enfoques estructurados que facilitan la formulación ordenada y coherente del plan de acción. Uno de los más utilizados es el criterio SMART, que orienta la redacción de los objetivos para que sean específicos, medibles, alcanzables, relevantes y definidos en el tiempo. Aplicar este criterio ayuda a que cada meta quede bien delimitada y a que sea posible verificar su cumplimiento.

      .row.justify-content-center
        .col-lg-10
          .box___style_1.box___style_1--sin-img-console(data-aos="zoom-in").mb-4
            .row.align-items-stretch
              .col-xl.fit___box_container
                p.mb-0 A partir de objetivos claros, la descomposición de objetivos en actividades permite dividir los propósitos generales en tareas específicas y alcanzables. Para organizarlas en el tiempo se emplean herramientas como los cronogramas, los diagramas de Gantt y las matrices de planificación, que muestran la secuencia de las actividades, sus plazos y los responsables asignados.
              .col-xl-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t3/img-08.svg', alt='').m-auto

      .row.justify-content-center
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-09.svg', alt='')
        .col.col-lg-11.col-12.order-lg-2.order-2
          p(data-aos="fade-down") Otra técnica clave es la priorización de acciones, que determina qué actividades deben ejecutarse primero según su importancia y su urgencia. Apoyada en matrices de valoración o en el análisis de impacto, facilita la toma de decisiones y optimiza el uso de los recursos disponibles.
          p(data-aos="fade-down") Junto con las anteriores, existen otras técnicas que apoyan la planificación según el objetivo que se persiga. Entre las más útiles se encuentran las siguientes:

      .row.justify-content-center.align-items-center.mb-4.slyder-etapas-bg(data-aos="flip-up")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t3/img-10.svg' alt='')
            h4.text-center Mapa mental
            p Organiza de forma visual las ideas, las tareas y los conceptos alrededor de un tema central, lo que ofrece una mirada integral del plan y estimula la creatividad. Por ejemplo, un equipo de una biblioteca pública de Medellín puede trazar un mapa mental para planear una feria del libro y distribuir sus actividades. 
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t3/img-11.svg' alt='')
            h4.text-center Técnica PERT
            p Estima el tiempo necesario para completar las tareas de un proyecto e identifica los caminos críticos, es decir, las actividades que no pueden retrasarse. Por ejemplo, una constructora de Cartagena puede aplicarla para calcular la duración de una obra y detectar qué etapas condicionan la fecha de entrega. 
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t3/img-12.svg' alt='')
            h4.text-center Diagrama de Ishikawa (causa y efecto)
            p Representa de forma visual las posibles causas de un problema, agrupadas por categorías, para facilitar su análisis y su solución. Por ejemplo, un restaurante de Cali puede usarlo para descubrir por qué se demoran los pedidos y hallar las causas en el personal, los procesos o los insumos. 
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t3/img-13.svg' alt='')
            h4.text-center Análisis de campo de fuerzas
            p Evalúa las fuerzas que impulsan un cambio y las que lo frenan, con el fin de tomar decisiones informadas y reforzar las condiciones favorables. Por ejemplo, una cooperativa de Nariño que quiere adoptar un nuevo #[em software] puede sopesar el interés del equipo frente a la resistencia por falta de capacitación.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t3/img-14.svg' alt='')
            h4.text-center Análisis de brechas (GAP)
            p Compara la situación actual con los resultados deseados y traza una hoja de ruta para cerrar la diferencia. Por ejemplo, una empresa de #[em call center] de Barranquilla puede medir la brecha entre el tiempo de respuesta actual y el que espera el cliente, y definir acciones para reducirla. 
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t3/img-15.svg' alt='')
            h4.text-center Análisis costo-beneficio
            p Valora los beneficios de una acción frente a sus costos para decidir si conviene ejecutarla. Por ejemplo, una pyme de Bogotá que evalúa comprar una máquina puede comparar su precio y mantenimiento con el ahorro de tiempo y el aumento de producción que generaría. 
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t3/img-16.svg' alt='')
            h4.text-center Planificación de escenarios
            p Anticipa varios futuros posibles y prepara estrategias flexibles para responder a cada uno. Por ejemplo, una empresa de turismo del Eje Cafetero puede prever escenarios de alta y baja demanda según el clima o la temporada, y planear su personal y sus recursos para ambos casos.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C03.px-4.py-3
            p.mb-0 La elección de la técnica depende del objetivo del plan y de las condiciones del equipo; con frecuencia, combinar varias produce mejores resultados. Conviene, además, aplicar técnicas participativas, como la lluvia de ideas o los talleres colaborativos, que recogen los aportes de los integrantes, enriquecen el plan y fortalecen el compromiso con las acciones definidas. Una vez seleccionadas las técnicas, el paso siguiente consiste en definir con precisión los objetivos y las metas, tema que se desarrolla a continuación.

      Separador

      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.3 Definición de objetivos y metas

      p La definición de objetivos y metas es un componente esencial del plan de acción, ya que establece el rumbo que debe seguir el equipo de trabajo. Los objetivos representan los resultados generales que se desean alcanzar, mientras que las metas son expresiones más específicas, cuantificables y medibles que permiten evaluar el grado de cumplimiento de dichos objetivos.
      p.mb-4 Para que resulten efectivos, los objetivos y las metas deben reunir ciertos criterios que garantizan su claridad y su viabilidad:

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C05.px-4.py-3
            ul.lista-ul--color.mb-0
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Claros:] se formulan con precisión, de modo que todos los integrantes comprendan qué se quiere lograr.
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Medibles:] incluyen una cantidad o un indicador que permite verificar su cumplimiento.
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Alcanzables:] son retadores, pero posibles según las capacidades y los recursos del equipo.
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Relevantes:] responden a las necesidades identificadas en el diagnóstico y aportan a la estrategia.
              li 
                <i class="fa-solid fa-certificate"></i>
                span #[b Definidos en el tiempo:] establecen un plazo concreto para su consecución

      .row.justify-content-center
        .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-17.png', alt='')
        .col.col-lg-9.col-12.order-lg-2.order-2
          p Esta claridad permite que todos los integrantes del equipo comprendan qué se espera lograr, evitando confusiones o interpretaciones erróneas. Además, deben estar alineados con las necesidades identificadas en el diagnóstico organizacional.
          .recurso-herramientas-analisis
            .recurso-herramientas-analisis__item.recurso-herramientas-analisis__item--amarillo
              p.mb-0 La correcta formulación de objetivos también implica que estos sean retadores pero realistas, es decir, que motiven al equipo a mejorar su desempeño sin generar frustración por ser inalcanzables. En este sentido, es importante considerar las capacidades del equipo y los recursos disponibles para asegurar su viabilidad.

            .recurso-herramientas-analisis__item.recurso-herramientas-analisis__item--salmon
              p.mb-0 Definidos los objetivos y las metas, el equipo cuenta con un rumbo claro; sin embargo, alcanzarlos exige organizar en el tiempo las acciones que conducen a ellos. Determinar cuándo, en qué orden y en qué condiciones se ejecuta cada actividad es el propósito de la programación, tema que se desarrolla en el siguiente apartado.

      Separador

      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.4 Programación de actividades

      .row.justify-content-center.mb-4.recurso-programacion
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure.mb-0.recurso-programacion__figure
            img(src='@/assets/curso/temas/t3/img-18.png', alt='Imagen decorativa')

        .col.col-lg-8.col-12.order-lg-2.order-2
          .recurso-programacion__cajon
            .recurso-programacion__icono
              img(src='@/assets/curso/temas/t3/img-20.svg', alt='Imagen decorativa')

            p.mb-0 La programación de actividades consiste en organizar de manera secuencial y lógica las acciones que deben ejecutarse para cumplir los objetivos del plan. Este proceso implica establecer tiempos, responsables y condiciones de ejecución, permitiendo una adecuada gestión del trabajo dentro del equipo.

      p.mb-4 Una adecuada programación facilita la coordinación de esfuerzos, evita la duplicidad de tareas y optimiza el uso del tiempo. Además, permite identificar dependencias entre actividades, es decir, aquellas tareas que deben realizarse antes que otras, lo cual es clave para asegurar la continuidad del proceso.

      .row.justify-content-center
        .col-lg-10
          .box___style_1.box___style_1--sin-img-console(data-aos="zoom-in").mb-4
            .row.align-items-stretch
              .col-xl.fit___box_container
                p.mb-0 Dentro de la programación es importante definir fechas de inicio y finalización, así como establecer responsables claros para cada actividad. Esto fortalece la rendición de cuentas y el compromiso individual y colectivo, elementos fundamentales para el éxito del plan de acción.
              .col-xl-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t3/img-19.svg', alt='').m-auto

      p Finalmente, la programación debe ser flexible y ajustable, permitiendo realizar modificaciones en función de cambios en el entorno o en las condiciones del equipo. Esto garantiza que el plan se mantenga vigente y pertinente, favoreciendo su ejecución efectiva.
      p.mb-4 Los aspectos más relevantes al realizar la programación de actividades son:

      TabsC.color-acento-botones.mb-4.tabs-actividades
        .py-3.py-md-4(titulo="Selección de actividades estratégicas")
          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t3/img-21.png', alt='Texto que describa la imagen')
            .col-md-6
              p Consiste en identificar y elegir las acciones que generan mayor impacto en el logro de los objetivos, ya que no todas tienen la misma importancia. Requiere analizar las necesidades del equipo y alinear las actividades con la estrategia y con las prioridades del diagnóstico. Cuando se realiza de forma participativa, optimiza los recursos, evita las tareas innecesarias y fortalece el compromiso del equipo.
              p #[b Ejemplo 1:] una fundación social de Cali, con recursos limitados, elige las jornadas de formación que más benefician a la comunidad y aplaza las actividades administrativas menos urgentes.
              p #[b Ejemplo 2:] un equipo de ventas en Bogotá concentra sus esfuerzos en los clientes de mayor volumen, en lugar de atender por igual a todos los contactos.

        .py-3.py-md-4(titulo="Priorización según necesidades del equipo")
          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/t3/img-22.png', alt='Texto que describa la imagen')
            .col-md-6
              p Establece el orden de ejecución de las tareas según su importancia y su urgencia, de modo que el equipo concentre sus esfuerzos donde generan mayor impacto. Para priorizar bien, se consideran la disponibilidad de recursos, el tiempo requerido, el nivel de impacto y las consecuencias de no ejecutar una acción. Así se decide con criterio, se gestiona mejor el tiempo y se reduce la sobrecarga.
              p #[b Ejemplo 1:] en una clínica de Medellín, el equipo atiende primero los casos urgentes y programa después los trámites administrativos.
              p #[b Ejemplo 2:] una empresa de #[em software] en Pereira ejecuta primero las tareas que condicionan la entrega del producto y deja para después las mejoras opcionales.

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .cajon.cajon.C05.color-secundario.px-4.py-3
            p.mb-0(data-aos="fade-down") Seleccionar y priorizar las actividades permite que el equipo invierta su tiempo y sus recursos en lo que realmente importa. Ambas decisiones, tomadas con criterio y de forma participativa, ordenan el trabajo, evitan la dispersión de los esfuerzos y aumentan las probabilidades de alcanzar los objetivos del plan.
      
      p Ahora bien, llevar a la práctica esta organización resulta más sencillo con el apoyo de la tecnología. Hoy existen herramientas digitales que permiten programar, asignar y hacer seguimiento a las tareas del equipo desde un mismo lugar. En el siguiente apartado se presentan algunas de las más utilizadas, junto con sus principales funciones.

      Separador

      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.5 Herramientas de gestión de tareas

      .row.justify-content-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-09.svg', alt='')
        .col.col-lg-11.col-12.order-lg-2.order-2
          p(data-aos="fade-down") Estas herramientas están inspiradas en metodologías ágiles; son programas basados en tableros, listas y tarjetas muy similares, y cada uno tiene sus particularidades, ventajas y desventajas. Este tipo de programas han incrementado su popularidad en busca de una administración efectiva de la carga de trabajo. Herramientas como: Trello, Asana, Notion y muchas otras, se han convertido en el centro de productividad de todo tipo de empresas.

      p.mb-4 A continuación, se presenta un comparativo de algunas de estas herramientas para facilitar su elección.

      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 2.
            span Comparativo de mejores #[em softwares] de gestión de tareas
          .tabla-a.color-acento-contenido.mb-4.tabla-plan-accion.tabla-softwares
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 16%; background-color: #6ED3DB;") #[em Software]
                  th(style="width: 16%; background-color: #6ED3DB;") Enfoque
                  th(style="width: 16%; background-color: #6ED3DB;") Puntos fuertes
                  th(style="width: 16%; background-color: #6ED3DB;") Puntos débiles
                  th(style="width: 16%; background-color: #6ED3DB;") App
                  th(style="width: 16%; background-color: #6ED3DB;") Precio
              tbody
                tr(data-aos="fade-right")
                  td Asana
                  td Equipos medianos y grandes
                  td Robusto, automatización avanzada
                  td Complejo para equipos pequeños
                  td Android/iOS
                  td Desde 10,99 €
                tr(data-aos="fade-right")
                  td(style="background-color: #F6F6F6;") Trello
                  td(style="background-color: #F6F6F6;") Equipos pequeños y medianos
                  td(style="background-color: #F6F6F6;") Intuitivo, visual, fácil de usar
                  td(style="background-color: #F6F6F6;") Limitado para proyectos complejos
                  td(style="background-color: #F6F6F6;") Android/iOS
                  td(style="background-color: #F6F6F6;") Desde 5 €
                tr(data-aos="fade-right")
                  td ClickUp
                  td Todo tipo de equipos
                  td Versátil, innovador, IA integrada
                  td Cantidad de opciones abrumadora
                  td Android/iOS
                  td Desde 7 €
                tr(data-aos="fade-right")
                  td(style="background-color: #F6F6F6;") Notion
                  td(style="background-color: #F6F6F6;") Equipos creativos
                  td(style="background-color: #F6F6F6;") Altamente personalizable
                  td(style="background-color: #F6F6F6;") Curva de aprendizaje elevada
                  td(style="background-color: #F6F6F6;") Android/iOS
                  td(style="background-color: #F6F6F6;") Desde 8 €
                tr(data-aos="fade-right")
                  td Brevo
                  td Equipos de #[em marketing]
                  td Integración con #[em marketing]
                  td Limitado fuera del #[em marketing.]
                  td Android/iOS
                  td Desde 6,33 €
                tr(data-aos="fade-right")
                  td(style="background-color: #F6F6F6;") Monday
                  td(style="background-color: #F6F6F6;") Equipos visuales
                  td(style="background-color: #F6F6F6;") Interfaz visual personalizable
                  td(style="background-color: #F6F6F6;") Configuración inicial, precio elevado
                  td(style="background-color: #F6F6F6;") Android/iOS
                  td(style="background-color: #F6F6F6;") Desde 9 €
                tr(data-aos="fade-right")
                  td Todoist
                  td Individuos y equipos pequeños
                  td Simple, intuitivo.
                  td Limitado para proyectos grandes
                  td Android/iOS
                  td Desde 4 €
                tr(data-aos="fade-right")
                  td(style="background-color: #F6F6F6;") Basecamp
                  td(style="background-color: #F6F6F6;") Equipos remotos
                  td(style="background-color: #F6F6F6;") Comunicación centralizada.
                  td(style="background-color: #F6F6F6;") Menos flexible que otros
                  td(style="background-color: #F6F6F6;") Android/iOS
                  td(style="background-color: #F6F6F6;") Desde 15 €
                tr(data-aos="fade-right")
                  td Microsoft To Do
                  td Todo tipo de usuarios
                  td Integración con Office.
                  td Interfaz clásica, pocas funciones avanzadas
                  td Android/iOS
                  td Gratuito (incluido en Microsoft 365)
                tr(data-aos="fade-right")
                  td(style="background-color: #F6F6F6;") Jira
                  td(style="background-color: #F6F6F6;") Equipos de desarrollo
                  td(style="background-color: #F6F6F6;") Potente para desarrollo ágil
                  td(style="background-color: #F6F6F6;") Complejo para otros usos
                  td(style="background-color: #F6F6F6;") Android/iOS
                  td(style="background-color: #F6F6F6;") Desde 7,50 €
            figcaption Fuente: adaptada de Dobaño (2025).

      .row.justify-content-start.mb-4.recurso-titulo-equipo
        .col-lg-4.col-md-7.col-12
          .recurso-titulo-equipo__contenedor
            .recurso-titulo-equipo__icono
              img(src='@/assets/curso/temas/t1/icono.svg', alt='Icono decorativo')

            .recurso-titulo-equipo__texto
              h4.mb-0 Principales funciones de un #[em software] de gestión de tareas

            .recurso-titulo-equipo__barra

      .row.justify-content-center.mb-4
        .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          p Un #[em software] de gestión de tareas es una herramienta digital diseñada para ayudar a individuos y equipos de trabajo a planificar, organizar y dar seguimiento a sus tareas y proyectos de manera eficiente. Estas aplicaciones permiten crear, asignar y monitorizar tareas, establecer fechas límite y prioridades, además de facilitar la colaboración entre miembros del equipo.
          .cajon.cajon.C04.px-4.py-3
            p Sin importar el tipo de equipo que se conforme, organizarse y gestionar las tareas es una de las claves para ser productivos, alcanzar los objetivos, mejorar la comunicación y cumplir con los plazos de entrega, es decir, las fechas límite en las que un trabajo debe estar terminado, conocidas en inglés como #[em deadlines].
        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-23.svg', alt='')

      p.mb-4 Los programas de gestión de tareas permiten diseñar una metodología de trabajo fluida gracias a funcionalidades como:

      .recurso-kanban-full.mb-5
        .container
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-9.col-12
              .recurso-kanban-full__cajon.recurso-kanban-full__cajon--borde
                ul.lista-ul.mb-0
                  li 
                    i.lista-ul__vineta
                    span #[b Tareas:] crear, organizar y asignar tareas individuales o grupales, estableciendo prioridades y fechas límite para cada una de ellas.
                  li 
                    i.lista-ul__vineta
                    span #[b Plazos:] establecer fechas límite y duraciones para las tareas, permitiendo una mejor gestión del tiempo y el cumplimiento de los objetivos del proyecto.
                  li 
                    i.lista-ul__vineta
                    span #[b Tableros:] visualizar y organizar el trabajo en formato Kanban u otras vistas personalizables, permitiendo una gestión visual e intuitiva del flujo de trabajo.
                  li 
                    i.lista-ul__vineta
                    span #[b Calendarios:] planificar y visualizar las tareas en un formato de calendario, permitiendo una mejor organización temporal y la identificación de posibles conflictos o sobrecargas de trabajo.
                  li 
                    i.lista-ul__vineta
                    span #[b Seguimiento:] monitorizar el progreso de las tareas en tiempo real, con actualizaciones automáticas y notificaciones sobre cambios importantes.
                  li.mb-0 
                    i.lista-ul__vineta
                    span #[b Documentos:] adjuntar y almacenar archivos relevantes para las tareas, como documentos de referencia, imágenes o recursos necesarios para completar el trabajo.
                
            .col-lg-3.col-md-6.col-10.d-none.d-lg-block
              figure.mb-0.recurso-kanban-full__img
                img(src='@/assets/curso/temas/t3/img-24.svg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-6.col-10.d-none.d-lg-block
              figure.mb-0.recurso-kanban-full__img
                img(src='@/assets/curso/temas/t3/img-25.svg', alt='Imagen decorativa')

            .col-lg-9.col-12
              .recurso-kanban-full__cajon
                ul.lista-ul.mb-0
                  li 
                    i.lista-ul__vineta
                    span #[b Colaboración:] facilitar la comunicación entre miembros del equipo mediante comentarios, menciones y compartición de archivos.
                  li 
                    i.lista-ul__vineta
                    span #[b Automatización:] crear flujos de trabajo automatizados para tareas repetitivas, como notificaciones, actualizaciones de estado o asignaciones, ahorrando tiempo y reduciendo errores manuales.
                  li 
                    i.lista-ul__vineta
                    span #[b Integración:] conectar el #[em software] con otras herramientas y servicios utilizados por el equipo, como almacenamiento en la nube, correo electrónico o aplicaciones de comunicación, creando un ecosistema de trabajo más eficiente y centralizado
                  li 
                    i.lista-ul__vineta
                    span #[b Interfaz:] diseño intuitivo y fácil de usar que permite a los usuarios navegar y utilizar las funciones del #[em software] de manera eficiente, con una curva de aprendizaje mínima y una experiencia de usuario optimizada.
                  li 
                    i.lista-ul__vineta
                    span #[b Flexibilidad:] capacidad de adaptación a diferentes metodologías de trabajo y necesidades, permitiendo personalizar flujos de trabajo, vistas y campos según los requisitos particulares de cada proyecto u organización.
                  li.mb-0 
                    i.lista-ul__vineta
                    span #[b App móvil:] acceso a las funcionalidades principales desde dispositivos móviles, permitiendo gestionar tareas y proyectos en cualquier momento y lugar.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C05.color-secundario.px-4.py-3
            p.mb-0(data-aos="fade-down") Estas funcionalidades convierten a los programas de gestión de tareas en aliados del trabajo en equipo, pues centralizan la información, agilizan la coordinación y facilitan el seguimiento del plan. Su aprovechamiento, sin embargo, depende de contar con los medios adecuados para ponerlos en marcha. Por eso, el último paso del diseño del plan consiste en proyectar los recursos necesarios para su ejecución.

      Separador

      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.6 Proyección de recursos

      .row.justify-content-center.mb-4
        .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t3/img-26.png', alt='')
        .col.col-lg-9.col-12.order-lg-2.order-2
          .row.mb-0
            p.mb-4 La proyección de recursos es el proceso mediante el cual se identifican y planifican los recursos necesarios para la ejecución del plan de acción. Estos recursos pueden ser humanos, materiales, financieros o tecnológicos, y su adecuada gestión es fundamental para el éxito del plan.
            .cajon.cajon.C07.px-4.py-4.mb-4
              p.mb-0 Este proceso implica estimar la cantidad, calidad y disponibilidad de los recursos requeridos, así como definir cómo serán utilizados y distribuidos. Una correcta proyección permite evitar desperdicios, optimizar el uso de los recursos y garantizar su disponibilidad en el momento oportuno.
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/intro/img-02.svg', alt='')
            .col-lg-10.col-12
              p La proyección de recursos también facilita la toma de decisiones, pues permite anticipar las necesidades y prever las posibles limitaciones. De este modo, contribuye a reducir los riesgos y a mejorar la eficiencia en la ejecución del plan.

      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .recurso-info-azul
            .recurso-info-azul__icono
              img(src='@/assets/curso/temas/t2/img-18.svg', alt='Imagen decorativa')

            .recurso-info-azul__contenido
              p.mb-0 Para que resulte útil, la proyección de recursos debe ser realista y ajustarse a las capacidades del equipo. Planear con lo que realmente se dispone garantiza la viabilidad del plan de acción y favorece el logro de los objetivos establecidos.
      
      p.mb-2 La proyección incide, en especial, en dos tipos de recursos que conviene planificar con cuidado:
      
      .row.justify-content-center.mb-2.recurso-recursos-bg
        .col-lg-10.col-12
          .tarjeta--container.row.mb-4
            .col-md.tarjeta.color-primario.verde.p-5
              .row.justify-content-center.mb-4
                .col-4
                  figure
                    img(src='@/assets/curso/temas/t3/img-27.svg', alt='')          
              h3.text-center Recursos humanos
              p.mb-0 Roles y perfiles. Son las personas que ejecutan las actividades del plan, por lo que constituyen su elemento más importante. Definir los roles implica asignar responsabilidades claras a cada integrante, lo que evita conflictos y duplicidades; definir los perfiles supone precisar las competencias, las habilidades y los conocimientos que exige cada tarea. Una buena gestión del talento fortalece el trabajo en equipo y aumenta la productividad. Por ejemplo, una constructora de Cali asigna un residente de obra, maestros y ayudantes según la experiencia que requiere cada etapa.

            .col-md.tarjeta.color-acento-botones.naranja.p-5
              .row.justify-content-center.mb-4
                .col-4
                  figure
                    img(src='@/assets/curso/temas/t3/img-28.svg', alt='')          
              h3.text-center Recursos materiales
              p.mb-0 Planificación y asignación. Comprenden los insumos, las herramientas y los equipos necesarios para ejecutar las actividades. Planificarlos implica determinar qué materiales se requieren, en qué cantidad y en qué momento, lo que evita interrupciones y optimiza el uso de lo disponible; asignarlos consiste en distribuirlos de modo que cada actividad cuente con lo indispensable. Una gestión adecuada mejora la calidad del trabajo y reduce los costos. Por ejemplo, un restaurante de Cartagena calcula los insumos de cada jornada y los distribuye entre la cocina y el servicio.

      .row.justify-content-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/intro/img-02.svg', alt='')
        .col.col-lg-11.col-12.order-lg-2.order-2
          p(data-aos="fade-down") Prever el talento humano y los medios materiales evita las improvisaciones y los sobrecostos durante la ejecución. Cuando los recursos se ajustan a las capacidades reales del equipo, el plan de acción gana viabilidad y el logro de los objetivos se vuelve más probable.
          p(data-aos="fade-down") Con el plan de acción diseñado y sus recursos proyectados, resta comprobar que todo el proceso funcione y produzca los resultados esperados. Verificar el cumplimiento de las metas y el desempeño del equipo es tarea de la evaluación, que se apoya en indicadores de gestión. Este es el propósito del último tema del componente.

</template>

<script>
export default {
  name: 'Tema3',

  data() {
    return {
      audioPodcast: `${import.meta.env.BASE_URL}audios/podcast-sentido-pertenencia.mp3`,
      reproduciendoPodcast: false,
      progresoAudio: 0,
      tiempoActual: '0:00',
      duracionAudio: '0:00',
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },

  updated() {
    this.$aosRefresh()
  },

  methods: {
    reproducirPodcast() {
      const audio = this.$refs.audioPodcast

      if (!audio) return

      if (audio.paused) {
        audio.play()
        this.reproduciendoPodcast = true
      } else {
        audio.pause()
        this.reproduciendoPodcast = false
      }
    },

    actualizarProgresoAudio() {
      const audio = this.$refs.audioPodcast

      if (!audio || !audio.duration) return

      this.progresoAudio = (audio.currentTime / audio.duration) * 100
      this.tiempoActual = this.formatearTiempo(audio.currentTime)
    },

    cargarDuracionAudio() {
      const audio = this.$refs.audioPodcast

      if (!audio || !audio.duration) return

      this.duracionAudio = this.formatearTiempo(audio.duration)
    },

    cambiarTiempoAudio(event) {
      const audio = this.$refs.audioPodcast

      if (!audio || !audio.duration) return

      const barra = event.currentTarget
      const rect = barra.getBoundingClientRect()
      const clickX = event.clientX - rect.left
      const porcentaje = clickX / rect.width

      audio.currentTime = porcentaje * audio.duration
    },

    finalizarPodcast() {
      this.reproduciendoPodcast = false
      this.progresoAudio = 0
      this.tiempoActual = '0:00'
    },

    formatearTiempo(segundos) {
      const minutos = Math.floor(segundos / 60)
      const segundosRestantes = Math.floor(segundos % 60)

      return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`
    },
  },
}
</script>

<style lang="sass"></style>
