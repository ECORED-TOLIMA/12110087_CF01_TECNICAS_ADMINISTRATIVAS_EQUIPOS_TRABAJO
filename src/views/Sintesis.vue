<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo presenta el diagnóstico y la planificación estratégica como procesos articulados para fortalecer el desempeño de los equipos de trabajo. A partir de las estrategias administrativas y de las etapas del proceso administrativo, se abordan el diagnóstico organizacional, con sus tipos, características, variables y herramientas de análisis; el diseño del plan de acción, con la definición de objetivos, metas, actividades y recursos, y la evaluación mediante indicadores de gestión aplicables al área de talento humano, con el fin de orientar la toma de decisiones informadas y la mejora continua en las organizaciones.
    p A continuación, se presenta el mapa conceptual que organiza de manera visual los ejes temáticos y las relaciones que los articulan:

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual que organiza el componente en cuatro ejes temáticos: estrategias administrativas, diagnóstico organizacional, diseño del plan de acción y evaluación, que se articulan para fortalecer el desempeño del equipo de trabajo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
