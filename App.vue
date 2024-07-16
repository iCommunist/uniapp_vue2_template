<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
<script>
	export default {
		globalData: {
			statusBarHeight: "", //导航栏高度
			capsuleTop: "", //胶囊距离顶部位置
			capsuleHeight: "", //胶囊高度
			deviceSysInfo: {} //设备系统信息
		},
		onLaunch: function() {
			let custom = uni.getMenuButtonBoundingClientRect() //获取右上角胶囊信息
			let system = uni.getSystemInfoSync() //获取设备信息
			console.log(custom)
			console.log(system)
			this.deviceSysInfo = system
			this.globalData.statusBarHeight = system.statusBarHeight + system.safeArea.top
			this.globalData.capsuleTop = custom.top
			console.log(this.globalData)
		},
		onShow: function() {
			uni.hideTabBar({
				animation:false
			})
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>