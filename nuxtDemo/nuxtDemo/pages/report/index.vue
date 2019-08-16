<template>
  <div class="page-container default">
    <project-info class="layout-panel" />
    <overview-charts />
  </div>
</template>

<script>
import InitPage from '~/components/InitPageReport'
import ProjectInfo from '~/components/ProjectInfo'
import OverviewCharts from '~/components/overview/OverviewCharts'
export default {
  head: {
    title: '监控总览'
  },
  components: {
    ProjectInfo,
    OverviewCharts
  },
  mixins: [InitPage]
}
</script>

<style>

</style>
