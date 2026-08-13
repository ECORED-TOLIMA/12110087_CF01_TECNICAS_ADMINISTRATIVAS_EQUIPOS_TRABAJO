<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción

      p.mb-4 Los equipos de trabajo constituyen el eje sobre el cual las organizaciones alcanzan sus objetivos. No obstante, su desempeño efectivo depende de la capacidad de comprender su situación real y de planificar con criterio las acciones que lo fortalecen. En la práctica, muchas dificultades se originan en la ausencia de un diagnóstico riguroso y de un plan de acción coherente: la dispersión de los esfuerzos, la duplicidad de funciones o la toma de decisiones sin información suficiente. Estas omisiones limitan la productividad y debilitan la cohesión del equipo.

      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/intro/img-01.png', alt='')
        .col.col-lg-8.col-12.order-lg-2.order-2
          .row.mb-0
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/intro/img-02.svg', alt='')
            .col-lg-10.col-12
              p En este contexto, el diagnóstico organizacional y la planificación estratégica se articulan como procesos complementarios dentro del proceso administrativo: planeación, organización, dirección y control. El diagnóstico permite reconocer las fortalezas, las debilidades, las oportunidades y las amenazas del equipo mediante herramientas de análisis; la planificación, por su parte, traduce ese análisis en objetivos, metas y acciones concretas. La correcta aplicación de ambos exige que quien coordina el equipo conozca sus fundamentos y los adapte a cada contexto.
            .cajon.cajon.C01.px-4.py-4
              p.mb-0 Este componente formativo tiene como propósito brindar al aprendiz una comprensión integral del diagnóstico y la planificación estratégica del equipo de trabajo, abordando las estrategias administrativas, los fundamentos del diagnóstico organizacional, el diseño del plan de acción y la evaluación mediante indicadores de gestión. El estudio de estos contenidos busca fortalecer la capacidad de analizar, planificar y evaluar el desempeño del equipo en situaciones laborales reales, orientando la toma de decisiones informadas y la mejora continua.
      
      p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

      .row.justify-content-center.align-items-center           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
