<template>
	<view class="header-nav-box"
		:style="{'height':Props.imgShow?'':Props.statusBarHeight+'px','background':Props.imgShow?'':Props.bgColor||'#9cf'}">
		<!-- 是否使用图片背景 false -->
		<image v-if="Props.imgShow||false" :src="imgUrl||'https://pic1.zhimg.com/70/v2-5e7547d016199cefb6bd0562621bbac1_1440w.avis?source=172ae18b&biz_tag=Post'" mode="scaleToFill"
			style="width: 100%; height: 400rpx;" />
		<!-- 导航内容 -->
		<view class="nav-box-item" :style="{'top':Props.capsuleTop+'px','color':Props.textColor||'#FFF'}">
			<view class="back" v-if="Props.blackShow||true" @click="back">
				<uni-icons type="back" size="18" :color="Props.iconColor||'#FFF'" />
				<block>{{Props.backText||'返回'}}</block>
			</view>
			<view class="title">
				<block>{{title}}</block>
			</view>
		</view>
		<!-- 自定义内容插槽 -->
		<slot name="content"></slot>
	</view>
</template>
 
<script>
	export default {
		name: "HeaderNav",
		data() {
			return {};
		},
		props: {
			Props: {
				type: Object,
				default: () => {}
			},
			title: {
				type: String,
				default: '默认标题'
			}
		},
		methods: {
			// 返回按钮回调函数
			back() {
				uni.navigateBack({
					data: 1
				})
				this.$emit('back')
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