<template>
	<view>
		<div class="spinnerContainer">
			<div class="spinner"></div>
			<div class="loader">
				<!-- <p>loading</p> -->
				<div class="words">
					<span class="word">加载中</span>
					<!-- <span class="word">在</span>
					<span class="word">加</span>
					<span class="word">载</span>
					<span class="word">中</span> -->
				</div>
			</div>
		</div>
	</view>
</template>

<script>

</script>
<style scoped lang="scss">
	.spinnerContainer {
		width: 100%;
		height: 100%;
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
		// border-right-color: #ff6600;
		border-right-color: #2ba0ff;
		-webkit-animation: tri-spinner 2.5s infinite linear;
		animation: tri-spinner 2.5s infinite linear;
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
		font-family: "Poppins", sans-serif;
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
		text-align: center;
		display: block;
		height: 100%;
		padding-left: 6px;
		color: #299fff;
		font-size: 30rpx;
		// -webkit-animation: cycle-words 5s infinite;
		// animation: cycle-words 5s infinite;
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
</style>