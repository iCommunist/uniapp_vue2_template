<template>
	<view class="">
		<view class="header-nav-box"
			:style="{'height':Props.imgShow?'':(Props.statusBarHeight+Props.customHeight)+'px','background':Props.imgShow?'':Props.bgColor||'#9cf'}">
			<!-- 是否使用图片背景 false -->
			<image v-if="Props.imgShow||false"
				:src="imgUrl||'https://pic1.zhimg.com/70/v2-5e7547d016199cefb6bd0562621bbac1_1440w.avis?source=172ae18b&biz_tag=Post'"
				mode="scaleToFill" style="width: 100%; height: 400rpx;" />
			<video v-if="Props.videoIsShow||false" class="hide-progress-bar" src="https://www.runoob.com/try/demo_source/mov_bbb.mp4"
				style="width:750rpx" autoplay="true" loop muted="true" controls></video>
			<!-- 其余代码内容 -->
			
			<!-- 导航内容 -->
			<view class="nav-box-item" :style="{'top':Props.capsuleTop+'px','color':Props.textColor||'#FFF'}">
				<view class="back" v-if="Props.blackShow||true" @click="back">
					<uni-icons type="back" size="18" :color="Props.iconColor||'#FFF'" />
					<block>{{Props.backText||'返回'}}</block>
				</view>
				<view class="title">
					<block>{{title||'默认标题'}}</block>
				</view>
			</view>
			<!-- 自定义内容插槽 -->
			<slot name="content"></slot>
			<!-- <u-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></u-button> -->
		</view>
		<u-calendar :show="showCalendar" showLunar round="5" @close="close_u_calendar" @confirm="confirm_u_calendar"
			show-confirm="true"></u-calendar>
		<u-toast ref="myUToast" :z-index="999999"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showCalendar: true,
				Props: {
					imgShow: false, //不传参则默认隐藏状态(false),且使用默认背景色(可选true/false)
					videoIsShow:false,
					statusBarHeight: "", //导航高度(动态获取传参)
					customHeight: 0,
					bgColor: "pink", //导航栏背景色,不传参则默认#9CF
					capsuleTop: "", //胶囊顶部距离(动态获取传参)
					textColor: "", //导航标题字体颜色(不传默认#FFF)
					iconColor: "pink", //icon图标颜色(不传默认#FFF)
					blackShow: "", //是否显示返回字体及icon图标(不传默认显示true)
					backText: "返回", //默认字体(返回)
				}
			}
		},
		mounted: function() {
			let custom = uni.getMenuButtonBoundingClientRect() //获取右上角胶囊信息
			let system = uni.getSystemInfoSync() //获取设备信息

			this.Props.statusBarHeight = system.statusBarHeight + system.safeArea.top
			this.Props.capsuleTop = custom.top

			console.log(custom, system, )
			console.log(this.Props.statusBarHeight, this.Props.capsuleTop)
		},
		methods: {
			confirm_u_calendar(e) {
				console.log(e[0], this.$refs.myUToast)
				this.$refs.myUToast.show({
					type: 'success',
					message: e[0],
				})
				this.showCalendar = false
			},
			close_u_calendar() {
				this.showCalendar = false
			}
		}
	}
</script>

<style lang="scss">
	.header-nav-box {
		position: relative;

		.nav-box-item {
			height: 54rpx;
			position: absolute;
			display: flex;
			align-items: center;
			font-size: 34rpx;
			width: 100%;

			.back {
				width: 25%;
				padding-left: 10rpx
			}

			.title {
				width: 49%;
				text-align: center;
			}
		}
	}
</style>
<style>
	.hide-progress-bar::-webkit-media-controls-timeline {
		display: none;
	}

	.hide-progress-bar::-moz-media-controls-timeline {
		display: none;
	}

	.hide-progress-bar::-ms-media-controls-timeline {
		display: none;
	}
</style>