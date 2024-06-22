<template>
	<view>
		<LoadingA style="position: fixed;left: 50%;
top: 50%;

transform: translate(-50%, -50%);"></LoadingA>
		<u-button type="primary" shape="circle" text="按钮形状" @click="click"></u-button>
		<u-toast ref="uToast"></u-toast>
		<!-- <image src="../../static/1.gif" mode="widthFix" v-if="show" style="width: 100px;"></image> -->
	</view>
</template>

<script>
	import LoadingA from '@/components/loadingA.vue'
	export default {
		components: {
			LoadingA: LoadingA,
		},
		data() {
			return {
				show: false
			}
		},
		methods: {
			click() {
				this.show = !this.show
				this.$refs.uToast.show({
					loading: true,
					type: 'loading',
					message: "正在加载",
					icon: true,
					duration: 5000
				})
			},
		}
	}
</script>

<style>
	page {
		background-color: antiquewhite;
	}
</style>
<!-- <template>
  <view>
    <div class="spinnerContainer">
      <div class="spinner"></div>
      <div class="loader">
        <p>loading</p>
        <div class="words">
          <span class="word">posts</span>
          <span class="word">images</span>
          <span class="word">followers</span>
          <span class="word">hashtags</span>
          <span class="word">posts</span>
        </div>
      </div>
    </div>
  </view>
</template>
 
<script>
 
</script>
<style scoped lang="scss">
.spinnerContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
 
.spinner {
  width: 56px;
  height: 56px;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: #ff6600;
  -webkit-animation: tri-spinner 1s infinite linear;
          animation: tri-spinner 1s infinite linear;
}
 
.spinner::before,
.spinner::after {
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  -webkit-animation: tri-spinner 2s infinite;
          animation: tri-spinner 2s infinite;
}
 
.spinner::after {
  margin: 8px;
  -webkit-animation-duration: 3s;
          animation-duration: 3s;
}
 
@-webkit-keyframes tri-spinner {
  100% {
    -webkit-transform: rotate(1turn);
            transform: rotate(1turn);
  }
}
 
@keyframes tri-spinner {
  100% {
    -webkit-transform: rotate(1turn);
            transform: rotate(1turn);
  }
}
 
.loader {
  color: #4a4a4a;
  font-family: "Poppins",sans-serif;
  font-weight: 500;
  font-size: 25px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 40px;
  padding: 10px 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 8px;
}
 
.words {
  overflow: hidden;
}
 
.word {
  display: block;
  height: 100%;
  padding-left: 6px;
  color: #299fff;
  -webkit-animation: cycle-words 5s infinite;
          animation: cycle-words 5s infinite;
}
 
@-webkit-keyframes cycle-words {
  10% {
    -webkit-transform: translateY(-105%);
    transform: translateY(-105%);
  }
 
  25% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
 
  35% {
    -webkit-transform: translateY(-205%);
    transform: translateY(-205%);
  }
 
  50% {
    -webkit-transform: translateY(-200%);
    transform: translateY(-200%);
  }
 
  60% {
    -webkit-transform: translateY(-305%);
    transform: translateY(-305%);
  }
 
  75% {
    -webkit-transform: translateY(-300%);
    transform: translateY(-300%);
  }
 
  85% {
    -webkit-transform: translateY(-405%);
    transform: translateY(-405%);
  }
 
  100% {
    -webkit-transform: translateY(-400%);
    transform: translateY(-400%);
  }
}
 
@keyframes cycle-words {
  10% {
    -webkit-transform: translateY(-105%);
    transform: translateY(-105%);
  }
 
  25% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
 
  35% {
    -webkit-transform: translateY(-205%);
    transform: translateY(-205%);
  }
 
  50% {
    -webkit-transform: translateY(-200%);
    transform: translateY(-200%);
  }
 
  60% {
    -webkit-transform: translateY(-305%);
    transform: translateY(-305%);
  }
 
  75% {
    -webkit-transform: translateY(-300%);
    transform: translateY(-300%);
  }
 
  85% {
    -webkit-transform: translateY(-405%);
    transform: translateY(-405%);
  }
 
  100% {
    -webkit-transform: translateY(-400%);
    transform: translateY(-400%);
  }
}
 
</style> -->