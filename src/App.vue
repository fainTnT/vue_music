<template>
  <div id="app">
    <m-header></m-header>
		<tab></tab>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<player></player>
  </div>
</template>
<script>
	import mHeader from 'components/m-header/m-header'
	import tab from 'components/tab/tab'
	import Player from 'components/player/player'
	export default {
		components:{
			mHeader,
			tab,
			Player
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
