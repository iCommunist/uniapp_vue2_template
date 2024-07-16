<template>
	<view>
		addimg
		<button @click="nav">nav</button>
		<view-tabbar :tabIndex="2"></view-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			nav(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style>

</style>
