<template>
	<view id="container">
		index
		<!-- <HeaderNav :Props="Props" @black="black" :title="title" /> -->
		<!-- <view class=""
			style="width: 750rpx;height: 100vh;position: fixed;top: 0rpx; z-index: -1;background-image: linear-gradient(#9ec8fc, #f2f8ff);">
		</view>
		<view class="swiper_container">
			<u-swiper :list="swiperList" indicator indicatorMode="line" circular></u-swiper>
		</view>
		<view class="subject_status_container">
			<u-scroll-list :indicator="false">
				<view v-for="(item, index) in subjectStatus" :key="index" class="">
					<view class="subject_status_item" :style="[{'backgroundColor':(currSelectSubjectStatus==index)?'#458ee6':'#fff'},
						{'color':(currSelectSubjectStatus==index)?'#fff':'#000',}]" @click="clickSubjectStatus(index)">
						{{item.label}}
					</view>
				</view>
			</u-scroll-list>
		</view>
		<view class="subject_status_container">
			<u-scroll-list :indicator="false">
				<view v-for="(item, index) in projectStatus" :key="index" class="">
					<view class="subject_status_item" :style="[{'backgroundColor':(currSelectProjectStatus==index)?'#458ee6':'#fff'},
						{'color':(currSelectProjectStatus==index)?'#fff':'#000',}]" @click="clickProjectStatus(index)">
						{{item.label}}
					</view>
				</view>
			</u-scroll-list>
		</view>
		<view class="subjec_status_container">
			<view class="subjec_status_item" v-for="(item,index) in projectStatus" :style="[{'backgroundColor':(currSelectSubjectStatus==index)?'#458ee6':'#fff'},
				{'color':(currSelectSubjectStatus==index)?'#fff':'#000',}]" @click="clickSubjecStatus(index)">
				{{item.label}}
			</view>
		</view>
		<view class="screening_condition_container">
			<view class="">
				<view class="screening_condition_item" @click="clickSubjectStatus(index)" style="width: 120rpx;">
					<span style="">{{'地区'}}</span>
					<image src="../../static/indexImg/向下三角箭头.png" mode="widthFix"
						style="width: 24rpx;margin-left: 10rpx;"></image>
				</view>
			</view>
			<view class="">
				<view class="screening_condition_item" @click="clickSubjectStatus(index)" style="width: 120rpx;">
					<span>{{'筛选'}}</span>
					<image src="../../static/indexImg/向下三角箭头.png" mode="widthFix"
						style="width: 24rpx;margin-left: 10rpx;"></image>
				</view>
			</view>
			<view class="">
				<view class="screening_condition_item" style="width: 180rpx;color: #458ee6;background-color: #e3eefc;"
					@click="clickSubjecStatus(index)">
					<span>{{'标讯下载'}}</span>
				</view>
			</view>
			<view class="">
				<view class="screening_condition_item" @click="clickSubjectStatus(index)"
					style="width: 180rpx;margin-right: 0rpx;">
					<image src="../../static/indexImg/搜索.png" mode="widthFix" style="width: 24rpx;">
					</image>
					<span>{{'搜索'}}</span>
				</view>
			</view>
		</view>
		<view class="calendar_watch">
			<view class="calendar_title" @click="openCalender()">
				开标日历
			</view>
			<view class="calendar_day">
				<view class="day" v-for="(item,index) in dayList" :key="index" @click="selectThreeDay(index)" :style="[{'backgroundColor':(threeDayIndex==index)?'#458ee6':'#fff'},
						{'color':(threeDayIndex==index)?'#fff':'#000',}]">
					<span>{{item.day}}</span><span class="count">{{item.count}}</span>
				</view>
				<view class="day" @click="clearThreeDayIndex()" style="background-color: orangered;color: #fff;">
					<span>{{'清空'}}</span>
				</view>
			</view>
			<view class="calendar_select" @click="openCalender()">
				<image src="../../static/indexImg/向下三角箭头.png" mode="widthFix" style="width: 24rpx;margin-left: 10rpx ;">
				</image>
			</view>
		</view>
		<view class="project" v-for="(item,index) in projectList" :key="index">
			<image src="../../static/indexImg/已读角标.png" mode="" class="read_icon"></image>
			<view class="project_header">
				<view class="project_header_icon">
					<image src="../../static/indexImg/城市轨道交通工程 (1).png" mode="widthFix" style="width: 88rpx;"></image>
				</view>
				<view class="project_header_title">
					{{item.projectName}}
				</view>
				<view class="project_header_other" @click="">
					<button open-type="share" class="sharebtn">
						<image src="../../static/indexImg/分享.png" mode="widthFix" style="width: 40rpx;"></image>
					</button>
				</view>
			</view>
		</view>
		<u-popup :show="showLoading" mode="center" @close="close" @open="open" bgColor="transparent"
			:overlayOpacity="0.1">
			<view>
				<image src="../../static/加载中.gif" mode="widthFix" style="width: 360rpx;">
				</image>
			</view>
		</u-popup>
		<u-toast ref="myUToast" :z-index="999999"></u-toast>
		<u-calendar title="请选择开标日期" :defaultDate="defaultDateMultiple" :formatter="formatter" :show="showCalendar"
			round="10" @close="showCalendar=false" monthNum="36" ref="calendar"
			:minDate="getYesterdayDate()"></u-calendar> -->
		<view-tabbar :tabIndex="0"></view-tabbar>
		<!-- <view class="tab-bar" v-show="showTabBar === true"></view> -->
	</view>
</template>
<script>
	const d = new Date()
	const year = d.getFullYear()
	let month = d.getMonth() + 1
	month = month < 10 ? `0${month}` : month
	const date = d.getDate()
	import {
		onShareAppMessage
	} from '@dcloudio/uni-app'
	export default {
		data() {
			return {
				showLoading: false,
				title: "XXX",
				Props: {
					imgShow: false, //不传参则默认隐藏状态(false),且使用默认背景色
					statusBarHeight: "", //导航高度(动态获取传参)
					bgColor: "#9ec8fc", //导航栏背景色,不传参则默认#9CF
					capsuleTop: "", //胶囊顶部距离(动态获取传参)
					textColor: "", //导航标题字体颜色(不传默认#FFF)
					iconColor: "", //icon图标颜色(不传默认#FFF)
					blackShow: "true", //是否显示返回字体及icon图标(不传默认显示true)
					backText: "后退", //默认字体(返回)
				},
				swiperList: [{
						url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					},
					{
						url: 'https://cdn.uviewui.com/uview/resources/video.mp4',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东',
						poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png'
					}, {
						url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					}
				],
				subjectStatus: [{
						label: '全部',
						status: 0,
					},
					{
						label: '待开标',
						status: 1,
					},
					{
						label: '延期',
						status: 2,
					},
					{
						label: '流标',
						status: 3,
					},
					{
						label: '公告中',
						status: 4,
					},
					{
						label: '已中标',
						status: 5,
					},
				],
				currSelectSubjectStatus: 0,
				projectStatus: [{
						label: '房建',
						status: 0,
					},
					{
						label: '公路',
						status: 1,
					},
					{
						label: '水利',
						status: 2,
					},
					{
						label: '农田',
						status: 3,
					},
					{
						label: '简易',
						status: 4,
					},
					{
						label: '其他',
						status: 5,
					},
				],
				currSelectProjectStatus: '',
				dayList: [{
						day: 23,
						count: 9
					},
					{
						day: 24,
						count: '99+'
					},
					{
						day: 25,
						count: 3
					},
				],
				showCalendar: false,
				defaultDateMultiple: [`${year}-${month}-${date}`, ],
				threeDayIndex: '3',
				projectList: [{
						"id": 25195,
						"tenderOpeningDate": "2024-06-13 09:30:00",
						"tenderOpeningDeadlineDate": "2024-06-13 09:30:00",
						"provinceCode": 360000,
						"cityCode": 361100,
						"areaCode": 361127,
						"projectName": "余干县梅港乡国道至大山农村道路工程公路工程",
						"bidStatus": 0,
						"counts": 0,
						"tenderOpeningWay": "合理低价法",
						"qualificationLevel": "公路工程三级",
						"tenderDeposit": "9.1",
						"performance": "无",
						"duration": "3个月",
						"createTime": "2024-05-28 16:18:10",
						"updateTime": "2024-06-17 09:23:31",
						"constructorWhether": 0,
						"guaranteeLetterWay": "001",
						"constructorLevel": "公路工程二级",
						"answeringCount": 2,
						"tenderFileUrl": "https://gbt-prod-sh.oss-cn-shanghai.aliyuncs.com/prod/project/1717653548612%E4%BD%99%E5%B9%B2%E5%8E%BF%E6%A2%85%E6%B8%AF%E4%B9%A1%E5%9B%BD%E9%81%93%E8%87%B3%E5%A4%A7%E5%B1%B1%E5%86%9C%E6%9D%91%E9%81%93%E8%B7%AF%E5%B7%A5%E7%A8%8B%E5%85%AC%E8%B7%AF%E5%B7%A5%E7%A8%8B%E6%8B%9B%E6%A0%87%E6%96%87%E4%BB%B6%E6%AD%A3%E6%96%87.pdf",
						"answeringFileUrl": "https://gbt-prod-sh.oss-cn-shanghai.aliyuncs.com/prod/project/1718185726787%E4%BD%99%E5%B9%B2%E5%8E%BF%E6%A2%85%E6%B8%AF%E4%B9%A1%E5%9B%BD%E9%81%93%E8%87%B3%E5%A4%A7%E5%B1%B1%E5%86%9C%E6%9D%91%E9%81%93%E8%B7%AF%E5%B7%A5%E7%A8%8B%E5%85%AC%E8%B7%AF%E5%B7%A5%E7%A8%8B%20%E7%AD%94%E7%96%91%E6%96%87%E4%BB%B6.pdf,https://gbt-prod-sh.oss-cn-shanghai.aliyuncs.com/prod/project/1718356282812%E4%BD%99%E5%B9%B2%E5%8E%BF%E6%A2%85%E6%B8%AF%E4%B9%A1%E5%9B%BD%E9%81%93%E8%87%B3%E5%A4%A7%E5%B1%B1%E5%86%9C%E6%9D%91%E9%81%93%E8%B7%AF%E5%B7%A5%E7%A8%8B%E5%85%AC%E8%B7%AF%E5%B7%A5%E7%A8%8B%E7%AD%94%E7%96%91%E6%96%87%E4%BB%B62.pdf",
						"projectType": 2,
						"creditLevel": "C",
						"insuredName": "余干县农村公路建设指挥部办公室",
						"biddingAgency": "安徽建业工程咨询有限公司",
						"telephone": "15720931266",
						"bidOpeningPlace": "余干县公共资源交易中心",
						"projectNo": "赣2024361127012117Ⅰ类",
						"status": 2,
						"bidCondition": 1,
						"delayTimes": 1,
						"delayTime": "2024-07-08 09:30:00",
						"delayDeadlineTime": "2024-07-08 09:30:00",
						"keyRequirements": "安全员交C证、本人身份证、劳动合同、社保证明",
						"haveTenderFile": 1,
						"attachmentUrl": "",
						"technicalDirector": "公路工程中级职称、本人身份证、劳动合同、社保证明",
						"projectDirector": "建造师证、交B证、本人身份证、劳动合同、社保证明",
						"approveTime": "2024-06-06 14:01:08",
						"tenderDepositPercent": 10,
						"insuredTelephone": "13970336218",
						"insuredAddress": "余干县玉亭镇永安西路 1 号",
						"statusChangeTime": "2024-06-12 17:49:18",
						"isSignUp": 1,
						"offerPrice": 4596994.36,
						"signUpDeadlineTime": "2024-06-13 09:30:00",
						"canRefund": 0,
						"zsFileTime": "2024-07-08 09:00:00",
						"orderByTime": "2024-06-13 09:30:00",
						"projectArea": "江西省/上饶市/余干县",
						"decryptTime": 20,
						"hasSpecialPrice": 0
					},
					{
						"id": 25118,
						"tenderOpeningDate": "2024-06-18 09:30:00",
						"tenderOpeningDeadlineDate": "2024-06-17 17:00:00",
						"provinceCode": 360000,
						"cityCode": 360700,
						"areaCode": 360700,
						"projectName": "[非自动评审]江西省赣州市重点区域森林防火应急道路建设项目赣州经济技术开发区凤岗镇",
						"bidStatus": 0,
						"counts": 0,
						"tenderOpeningWay": "技术评分最低标价法",
						"qualificationLevel": "公路工程三级",
						"tenderDeposit": "4",
						"performance": "无",
						"duration": "3个月",
						"createTime": "2024-05-25 10:18:27",
						"updateTime": "2024-06-21 16:54:17",
						"constructorWhether": 0,
						"guaranteeLetterWay": "001",
						"constructorLevel": "公路工程二级",
						"answeringCount": 2,
						"tenderFileUrl": "https://gbt-prod-sh.oss-cn-shanghai.aliyuncs.com/prod/project/1717659931144%5B%E9%9D%9E%E8%87%AA%E5%8A%A8%E8%AF%84%E5%AE%A1%5D%E6%B1%9F%E8%A5%BF%E7%9C%81%E8%B5%A3%E5 1000 %B7%9E%E5%B8%82%E9%87%8D%E7%82%B9%E5%8C%BA%E5%9F%9F%E6%A3%AE%E6%9E%97%E9%98%B2%E7%81%AB%E5%BA%94%E6%80%A5%E9%81%93%E8%B7%AF%E5%BB%BA%E8%AE%BE%E9%A1%B9%E7%9B%AE%E8%B5%A3%E5%B7%9E%E7%BB%8F%E6%B5%8E%E6%8A%80%E6%9C%AF%E5%BC%80%E5%8F%91%E5%8C%BA%E5%87%A4%E5%B2%97%E9%95%87%E6%8B%9B%E6%A0%87%E6%96%87%E4%BB%B6%E6%AD%A3%E6%96%87.pdf",
						"answeringFileUrl": "https://gbt-prod-sh.oss-cn-shanghai.aliyuncs.com/prod/project/1717753011544%5B%E9%9D%9E%E8%87%AA%E5%8A%A8%E8%AF%84%E5%AE%A1%5D%E6%B1%9F%E8%A5%BF%E7%9C%81%E8%B5%A3%E5%B7%9E%E5%B8%82%E9%87%8D%E7%82%B9%E5%8C%BA%E5%9F%9F%E6%A3%AE%E6%9E%97%E9%98%B2%E7%81%AB%E5%BA%94%E6%80%A5%E9%81%93%E8%B7%AF%E5%BB%BA%E8%AE%BE%E9%A1%B9%E7%9B%AE%E8%B5%A3%E5%B7%9E%E7%BB%8F%E6%B5%8E%E6%8A%80%E6%9C%AF%E5%BC%80%E5%8F%91%E5%8C%BA%E5%87%A4%E5%B2%97%E9%95%87%E6%8B%9B%E6%A0%87%E8%A1%A5%E9%81%97%E4%B9%A6%EF%BC%88%E4%B8%80%EF%BC%89.pdf,https://gbt-prod-sh.oss-cn-shanghai.aliyuncs.com/prod/project/1718960051444%E6%B1%9F%E8%A5%BF%E7%9C%81%E8%B5%A3%E5%B7%9E%E5%B8%82%E9%87%8D%E7%82%B9%E5%8C%BA%E5%9F%9F%E6%A3%AE%E6%9E%97%E9%98%B2%E7%81%AB%E5%BA%94%E6%80%A5%E9%81%93%E8%B7%AF%E5%BB%BA%E8%AE%BE%E9%A1%B9%E7%9B%AE%E8%B5%A3%E5%B7%9E%E7%BB%8F%E6%B5%8E%E6%8A%80%E6%9C%AF%E5%BC%80%E5%8F%91%E5%8C%BA%E5%87%A4%E5%B2%97%E9%95%87%E7%AD%94%E7%96%91%E6%96%87%E4%BB%B62.pdf",
						"projectType": 2,
						"creditLevel": "C",
						"insuredName": "赣州经济技术开发区凤岗镇人民政府",
						"biddingAgency": "赣州永正工程造价咨询有限公司",
						"telephone": "13177978899",
						"bidOpeningPlace": "江西省公共资源交易平台不见面开标大厅",
						"bidAnnouncementTime": "2024-05-25 09:17:08",
						"projectNo": "GZYZ202402-1",
						"status": 2,
						"bidCondition": 1,
						"delayTimes": 2,
						"delayTime": "2024-06-24 09:30:00",
						"delayDeadlineTime": "2024-06-17 17:00:00",
						"announcementLink": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/20240525101827808010.png",
						"haveTenderFile": 1,
						"announcementOriginUrl": "https://www.jxsggzy.cn/jyxx/002002/002002002/20240525/bdcf55d0-e704-4df2-8307-e61a6124abeb.html",
						"attachmentUrl": "",
						"technicalDirector": "公路工程中级职称",
						"projectDirector": "建造师证、交B证",
						"approveTime": "2024-06-06 15:47:54",
						"tenderDepositPercent": 10,
						"insuredTelephone": "19198417095",
						"insuredAddress": "赣州经济技术开发区凤岗镇",
						"statusChangeTime": "2024-06-07 17:38:31",
						"isSignUp": 0,
						"offerPrice": 2000000,
						"signUpDeadlineTime": "2024-06-18 09:30:00",
						"canRefund": 0,
						"orderByTime": "2024-06-18 09:30:00",
						"projectArea": "江西省/赣州市/赣州市",
						"decryptTime": 20,
						"hasSpecialPrice": 0
					},
					{
						"id": 25417,
						"tenderOpeningDate": "2024-06-24 08:30:00",
						"tenderOpeningDeadlineDate": "2024-06-24 08:30:00",
						"provinceCode": 360000,
						"cityCode": 360800,
						"areaCode": 360800,
						"projectName": "吉安四中改造提升工程",
						"bidStatus": 0,
						"counts": 0,
						"tenderOpeningWay": "合理低价法",
						"projectInvestment": 6957.42,
						"qualificationLevel": "建筑工程三级",
						"tenderDeposit": "50",
						"performance": "无",
						"duration": "365",
						"createTime": "2024-06-03 12:10:28",
						"updateTime": "2024-06-21 14:09:26",
						"constructorWhether": 0,
						"guaranteeLetterWay": "001",
						"constructorLevel": "建筑工程二级",
						"projectPayType": "按月支付工程进度款：按工程形象进度付款，每月的25 日前承包人提交已完工程量报告，次月 5 日前发包人按经监理工程师和发包人核定的合同内已完工程量的80%支付工程款；项目完工经竣工验收后,工程竣工结算经财政部门评审后付至评审价的 85%；工程竣工决算付至工程结算价款的 97%；留 3%作为质量保修金，竣工验收合格后每年返还工程结算价的 1.5%，两年还清（不计息）",
						"tenderFileUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717483311083%E5%90%89%E5%AE%89%E5%9B%9B%E4%B8%AD%E6%94%B9%E9%80%A0%E6%8F%90%E5%8D%87%E5%B7%A5%E7%A8%8B%E6%8B%9B%E6%A0%87%E6%96%87%E4%BB%B6%E6%AD%A3%E6%96%87.pdf",
						"reviewFileUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717483313675%E5%90%89%E5%AE%89%E5%9B%9B%E4%B8%AD%E6%94%B9%E9%80%A0%E6%8F%90%E5%8D%87%E5%B7%A5%E7%A8%8B%E8%B5%84%E5%AE%A1%E6%96%87%E4%BB%B6%E6%AD%A3%E6%96%87.pdf",
						"answeringFileUrl": "",
						"projectType": 1,
						" 1000 insuredName": "吉安市第四中学",
						"biddingAgency": "建维咨询(苏州)有限公司",
						"telephone": "18507064193",
						"bidOpeningPlace": "吉安市公共资源交易中心（不见面开标大厅）",
						"projectNo": "360802202405160103-SG001",
						"status": 2,
						"bidCondition": 0,
						"delayTimes": 0,
						"keyRequirements": "三大员（施工员、质量员、安全员）、社保证明",
						"bidNo": "赣建吉市招字【2024】施32号",
						"announcementLink": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/20240603121027604716.png",
						"haveTenderFile": 1,
						"announcementOriginUrl": "https://www.jxsggzy.cn/jyxx/002001/002001001/20240603/d4a19a18-9b09-49b8-a537-491bfb08c211.html",
						"projectListUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717483317413%E5%90%89%E5%AE%89%E5%9B%9B%E4%B8%AD%E6%94%B9%E9%80%A0%E6%8F%90%E5%8D%87%E5%B7%A5%E7%A8%8B%E5%B7%A5%E7%A8%8B%E9%87%8F%E6%B8%85%E5%8D%95.pdf",
						"attachmentUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717483324518%E5%90%89%E5%AE%89%E5%9B%9B%E4%B8%AD%E6%94%B9%E9%80%A0%E6%8F%90%E5%8D%87%E5%B7%A5%E7%A8%8B%E9%99%84%E4%BB%B6%E4%B8%80%EF%BC%9A%E8%87%AA%E6%8A%A5%E4%BB%B7.pdf,https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717483324606%E5%90%89%E5%AE%89%E5%9B%9B%E4%B8%AD%E6%94%B9%E9%80%A0%E6%8F%90%E5%8D%87%E5%B7%A5%E7%A8%8B%E9%99%84%E4%BB%B6%EF%BC%9A%E5%90%89%E5%AE%89%E5%B8%82%E8%90%BD%E5%AE%9E%E2%80%9C%E5%90%89%E8%96%AA%E5%8D%B3%E4%BB%98%E2%80%9D%E5%B7%A5%E4%BC%A4%E4%BF%9D%E9%99%A9%E5%8F%82%E4%BF%9D%E5%92%8C%E6%97%A0%E6%8B%96%E6%AC%A0%E5%86%9C%E6%B0%91%E5%B7%A5%E5%B7%A5%E8%B5%84%E6%89%BF%E8%AF%BA%E4%B9%A6.pdf,https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717483324687%E5%90%89%E5%AE%89%E5%9B%9B%E4%B8%AD%E6%94%B9%E9%80%A0%E6%8F%90%E5%8D%87%E5%B7%A5%E7%A8%8B%E6%8B%9B%E6%A0%87%E6%96%87%E4%BB%B6%E5%85%AC%E5%B9%B3%E7%AB%9E%E4%BA%89%20%E5%AE%A1%E6%9F%A5%E6%89%BF%E8%AF%BA%E5%87%BD.pdf",
						"noticePublicTime": "2024年06月03日至2024年06月24日",
						"tenderControlPrice": 69574222.95,
						"technicalDirector": "无",
						"projectDirector": "建造师证、B证、本人身份证、社保证明",
						"approveTime": "2024-06-04 14:42:52",
						"tenderDepositPercent": 10,
						"insuredTelephone": "13879685513",
						"insuredAddress": "江西省吉安市吉州区吉福路 37 号",
						"isSignUp": 1,
						"offerPrice": 69574222.95,
						"canRefund": 0,
						"zsFileTime": "2024-06-24 23:59:59",
						"orderByTime": "2024-06-24 08:30:00",
						"projectArea": "江西省/吉安市/吉安市",
						"decryptTime": 60,
						"needConstructOrg": 0,
						"hasSpecialPrice": 0
					},
					{
						"id": 25581,
						"tenderOpeningDate": "2024-06-24 08:30:00",
						"provinceCode": 360000,
						"cityCode": 360800,
						"areaCode": 360800,
						"projectName": "红尚佳苑（一期）招标公告第二次",
						"bidStatus": 0,
						"counts": 0,
						"projectInvestment": 25457.156013,
						"qualificationLevel": "建筑工程二级",
						"performance": "无",
						"createTime": "2024-06-05 20:47:48",
						"updateTime": "2024-06-20 16:07:40",
						"guaranteeLetterWay": "",
						"answeringFileUrl": "",
						"projectType": 4,
						"insuredName": "吉安市路家置业发展有限公司",
						"biddingAgency": "吉安市建筑设计规划研究院",
						"telephone": "15170899915",
						"projectNo": "",
						"status": 2,
						"bidCondition": 0,
						"delayTimes": 0,
						"haveTenderFile": 0,
						"announcementOriginUrl": "http://www.jazbtb.cn/doc/2024/05/31/61294.shtml",
						"attachmentUrl": "",
						"noticePublicTime": "2024-05-30 00:00:00",
						"approveTime": "2024-06-20 16:07:40",
						"insuredTelephone": "0796-8351378",
						"isSignUp": 0,
						"remark": "投标人需提供与装配式构建供应商签署的合作协议或合同；企业营业执照以及建设行政主管部门颁发的有效安全生产许可证；拟派出的建造师必须具有一级建筑工程注册建造师证书、本人身份证、B类安全生产考核合格证书；项目部需配备建造师1名、项目技术负责人1名、施工员3名、质量员3名、专职安全生产管理人员3名；提供施工员、质量员有效岗位证书或职业培训合格证，专职安全生产管理人员的C类安全生产考核合格证书；投标企业须提供社保证明材料，社保证明的时限为连续近6个月；投标企业应提供《吉安市落实“吉薪即付”工伤保险参保和无拖欠农民工工资承诺函》；� 1000 �外建设工程施工企业须提供“江西住建云平台”网站登记有效的查询结果截屏；投标人应当将通过“信用中国”网站的查询结果《法人和非法人组织公共信用信息报告》加盖单位公章；本工程不接受联合体投标；本工程招标公告与招标文件内容不一致时，一律以招标文件为准",
						"signUpDeadlineTime": "2024-06-24 08:30:00",
						"canRefund": 0,
						"orderByTime": "2024-06-24 08:30:00",
						"hasSpecialPrice": 0
					},
					{
						"id": 25371,
						"tenderOpeningDate": "2024-06-24 08:30:00",
						"tenderOpeningDeadlineDate": "2024-06-24 08:30:00",
						"provinceCode": 360000,
						"cityCode": 360800,
						"areaCode": 360802,
						"projectName": "2023年吉安购销储备有限公司粮食仓储设施改造提升项目",
						"bidStatus": 0,
						"counts": 0,
						"tenderOpeningWay": "合理低价法",
						"projectInvestment": 718.59,
						"qualificationLevel": "建筑工程三级",
						"tenderDeposit": "14",
						"performance": "无",
						"duration": "60",
						"createTime": "2024-05-31 18:11:06",
						"updateTime": "2024-06-21 09:27:57",
						"constructorWhether": 0,
						"guaranteeLetterWay": "001",
						"constructorLevel": "建筑工程二级",
						"projectPayType": "按月支付工程进度款：按工程形象进度付款，每月的 25 日前承包人提交已完工程量报告，次月 5 日前发包人按经监理工程师和发包人核定的合同内已完工程量的 80%支付工程款;项目完工经竣工验收后，工程竣工结算经财政部门评审后付至评审价的 85%;工程竣工决算付至工程结算价款的 97%;留 3%作为质量保修金，竣工验收合格后每年返还工程结算价的 1.5% ，两年还清(不计息)",
						"tenderFileUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/17174691255802023%E5%B9%B4%E5%90%89%E5%AE%89%E8%B4%AD%E9%94%80%E5%82%A8%E5%A4%87%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%B2%AE%E9%A3%9F%E4%BB%93%E5%82%A8%E8%AE%BE%E6%96%BD%E6%94%B9%E9%80%A0%E6%8F%90%E5%8D%87%E9%A1%B9%E7%9B%AE%E6%8B%9B%E6%A0%87%E6%96%87%E4%BB%B6%E6%AD%A3%E6%96%87.pdf",
						"reviewFileUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/17174691293502023%E5%B9%B4%E5%90%89%E5%AE%89%E8%B4%AD%E9%94%80%E5%82%A8%E5%A4%87%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%B2%AE%E9%A3%9F%E4%BB%93%E5%82%A8%E8%AE%BE%E6%96%BD%E6%94%B9%E9%80%A0%E6%8F%90%E5%8D%87%E9%A1%B9%E7%9B%AE%E8%B5%84%E5%AE%A1%E6%96%87%E4%BB%B6%E6%AD%A3%E6%96%87.pdf",
						"answeringFileUrl": "",
						"projectType": 1,
						"insuredName": "江西省粮油集团吉安购销储备有限公司",
						"biddingAgency": "江西驭达项目管理有限公司",
						"telephone": "0796-8183758",
						"bidOpeningPlace": "吉安市公共资源交易中心不见面开标大厅",
						"projectNo": "360802202312190103-SG001",
						"status": 2,
						"bidCondition": 0,
						"delayTimes": 0,
						"keyRequirements": "三大员（施工员、质量员、安全员）、社保证明",
						"bidNo": "赣建吉区招字【2024】施10号",
						"announcementLink": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/20240531181105581984.png",
						"haveTenderFile": 1,
						"announcementOriginUrl": "https://www.jxsggzy.cn/jyxx/002001/002001001/20240531/a8d0b068-59b0-4d6e-a5f0-fb344b592452.html",
						"projectListUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/17174691352252023%E5%B9%B4%E5%90%89%E5%AE%89%E8%B4%AD%E9%94%80%E5%82%A8%E5%A4%87%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%B2%AE%E9%A3%9F%E4%BB%93%E5%82%A8%E8%AE%BE%E6%96%BD%E6%94%B9%E9%80%A0%E6%8F%90%E5%8D%87%E9%A1%B9%E7%9B%AE%E5%B7%A5%E7%A8%8B%E9%87%8F%E6%B8%85%E5%8D%95.pdf",
						"attachmentUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/17174691499472023%E5%B9%B4%E5%90%89%E5%AE%89%E8%B4%AD%E9%94%80%E5%82%A8%E5%A4%87%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%B2%AE%E9%A3%9F%E4%BB%93%E5%82%A8%E8%AE%BE%E6%96%BD%E6%94%B9%E9%80%A0%E6%8F%90%E5%8D%87%E9%A1%B9%E7%9B%AE%E9%99%84%E4%BB%B6%E4%BA%8C%E5%90%89%E5%AE%89%E4%B8%8D%E8%A7%81%E9%9D%A2%E8%AF%A2%E6%A0%87%E7%B3%BB%E7%BB%9F%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C-%E6%8A%95%E6%A0%87%E4%BA%BA%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C%E3%80%81%E5%90%89%E5%AE%89%E5%B8%82%E4%B8%8D%E8%A7%81%E9%9D%A2%E5%BC%80%E6%A0%87%E5%A4%A7%E5%8E%85.pdf,https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/17174691499922023%E5%B9%B4%E5%90%89%E5%AE ff8 %89%E8%B4%AD%E9%94%80%E5%82%A8%E5%A4%87%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%B2%AE%E9%A3%9F%E4%BB%93%E5%82%A8%E8%AE%BE%E6%96%BD%E6%94%B9%E9%80%A0%E6%8F%90%E5%8D%87%E9%A1%B9%E7%9B%AE%E9%99%84%E4%BB%B6%E4%B8%89%E5%90%89%E5%AE%89%E5%B8%82%E8%90%BD%E5%AE%9E%E2%80%9C%E5%90%89%E8%96%AA%E5%8D%B3%E4%BB%98%E2%80%9D%E5%B7%A5%E4%BC%A4%E4%BF%9D%E9%99%A9%E5%8F%82%E4%BF%9D%E5%92%8C%E6%97%A0%E6%8B%96%E6%AC%A0%E5%86%9C%E6%B0%91%E5%B7%A5%E5%B7%A5%E8%B5%84%E6%89%BF%E8%AF%BA%E4%B9%A6.pdf,https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/17174691499972023%E5%B9%B4%E5%90%89%E5%AE%89%E8%B4%AD%E9%94%80%E5%82%A8%E5%A4%87%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%B2%AE%E9%A3%9F%E4%BB%93%E5%82%A8%E8%AE%BE%E6%96%BD%E6%94%B9%E9%80%A0%E6%8F%90%E5%8D%87%E9%A1%B9%E7%9B%AE%E9%99%84%E4%BB%B6%E4%B8%80%E8%87%AA%E6%8A%A5%E4%BB%B7.pdf,https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/17174691500252023%E5%B9%B4%E5%90%89%E5%AE%89%E8%B4%AD%E9%94%80%E5%82%A8%E5%A4%87%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E7%B2%AE%E9%A3%9F%E4%BB%93%E5%82%A8%E8%AE%BE%E6%96%BD%E6%94%B9%E9%80%A0%E6%8F%90%E5%8D%87%E9%A1%B9%E7%9B%AE%E9%99%84%E4%BB%B6%E5%9B%9B%E6%8B%9B%E6%A0%87%E6%96%87%E4%BB%B6%E5%85%AC%E5%B9%B3%E7%AB%9E%E4%BA%89%E5%AE%A1%E6%9F%A5%E6%89%BF%E8%AF%BA%E5%87%BD.pdf",
						"noticePublicTime": "2024年05月31日至2024年06月24日",
						"tenderControlPrice": 7185885.49,
						"technicalDirector": "/",
						"projectDirector": "建造师证、B证、本人身份证、社保证明",
						"approveTime": "2024-06-04 10:47:16",
						"tenderDepositPercent": 10,
						"insuredTelephone": "15979638889",
						"insuredAddress": "吉安市吉州区",
						"isSignUp": 1,
						"offerPrice": 7185885.49,
						"canRefund": 0,
						"zsFileTime": "2024-06-24 23:59:59",
						"orderByTime": "2024-06-24 08:30:00",
						"projectArea": "江西省/吉安市/吉州区",
						"decryptTime": 60,
						"needConstructOrg": 0,
						"hasSpecialPrice": 0
					},
					{
						"id": 25289,
						"tenderOpeningDate": "2024-06-24 08:30:00",
						"tenderOpeningDeadlineDate": "2024-06-24 08:30:00",
						"provinceCode": 360000,
						"cityCode": 360800,
						"areaCode": 360800,
						"projectName": "红尚佳苑（一期）(网)重发公告第1次",
						"bidStatus": 0,
						"counts": 0,
						"tenderOpeningWay": "合理低价法",
						"projectInvestment": 25457.16,
						"qualificationLevel": "建筑工程二级",
						"tenderDeposit": "50",
						"performance": "无",
						"duration": "830",
						"createTime": "2024-05-30 15:10:46",
						"updateTime": "2024-06-21 12:04:42",
						"constructorWhether": 0,
						"guaranteeLetterWay": "001",
						"constructorLevel": "建筑工程一级",
						"projectPayType": "按月支付工程进度款：按工程形象进度付款，每月的 25 日前承包人提交上月已完工程量报告，次月 5日前发包人按经监理工程师和发包人核定的合同内已完工程量的 80%支付工程款；项目完工经竣工验收后，工程竣工结算经财政部门评审后付至评审价的 85%，工程竣工决算后付至工程结算价款的 97%，留 3%作为质量保修金，竣工验收合格每年返还工程结算价的 1.5%，二年付清（不计息）。",
						"tenderFileUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717382667736%E7%BA%A2%E5%B0%9A%E4%BD%B3%E8%8B%91%EF%BC%88%E4%B8%80%E6%9C%9F%EF%BC%89%28%E7%BD%91%29%E9%87%8D%E5%8F%91%E5%85%AC%E5%91%8A%E7%AC%AC1%E6%AC%A1%E6%8B%9B%E6%A0%87%E6%96%87%E4%BB%B6%E6%AD%A3%E6%96%87.pdf",
						"reviewFileUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717382671253%E7%BA%A2%E5%B0%9A%E4%BD%B3%E8%8B%91%EF%BC%88%E4%B8%80%E6%9C%9F%EF%BC%89%28%E7%BD%91%29%E9%87%8D%E5%8F%91%E5%85%AC%E5%91%8A%E7%AC%AC1%E6%AC%A1%E8%B5%84%E5%AE%A1%E6%96%87%E4%BB%B6%E6%AD%A3%E6%96%87.pdf",
						"answeringFileUrl": "",
						"projectType": 1,
						"insuredName": "吉安市路家置业发展有限公司",
						"biddingAgency": "吉安市建筑设计规划研究院",
						"telephone": "15170899915",
						"bidOpeningPlace": "吉安市公共资源交易中心",
						"projectNo": "360801202009270101-SG003",
						"status": 2,
						"bidCondition": 0,
						"delayTimes": 0,
						"keyRequirements": "三大员（施工员、质量员、安全员）、社保证明",
						"bidNo": "赣建吉市招字【2024】施15-1号",
						"announcementLink": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/20240530151045130082.png",
						"haveTenderFile": 1,
						"announcementOriginUrl": "https://www.jxsggzy.cn/jyxx/002001/002001001/20240530/a465c8df-f9a4-4629-9ed2-7c438a89acfd.html",
						"projectListUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717382675609%E7%BA%A2%E5%B0%9A%E4%BD%B3%E8%8B%91%EF%BC%88%E4%B8%80%E6%9C%9F%EF%BC%89%28%E7%BD%91%29%E9%87%8D%E5%8F%91%E5%85%AC%E5%91%8A%E7%AC%AC1%E6%AC%A1%E5%B7%A5%E7%A8%8B%E9%87%8F%E6%B8%85%E5%8D%95.pdf",
						"attachmentUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717382680672%E7%BA%A2%E5%B0%9A%E4%BD%B3%E8%8B%91%EF%BC%88%E4%B8%80%E6%9C%9F%EF%BC%89%28%E7%BD%91%29%E9%87%8D%E5%8F%91%E5%85%AC%E5%91%8A%E7%AC%AC1%E6%AC%A1%E9%99%84%E4%BB%B61%20%20%E9%9C%80%E8%AF%84%E5%AE%A1%E7%9A%84%E4%B8%BB%E8%A6%81%E8%AE%BE%E5%A4%87%E5%92%8C%E6%9D%90%E6%96%99%E7%94%A8%E9%87%8F%E3%80%81%E4%BB%B7%E6%A0%BC%E5%8F%8A%E5%B7%AE%E4%BB%B7%E6%B1%87%E6%80%BB%E8%A1%A8.pdf,https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717382680735%E7%BA%A2%E5%B0%9A%E4%BD%B3%E8%8B%91%EF%BC%88%E4%B8%80%E6%9C%9F%EF%BC%89%28%E7%BD%91%29%E9%87%8D%E5%8F%91%E5%85%AC%E5%91%8A%E7%AC%AC1%E6%AC%A1%E9%99%84%E4%BB%B62%EF%BC%9A%E5%90%89%E5%AE%89%E5%B8%82%E8%90%BD%E5%AE%9E%E2%80%9C%E5%90%89%E8%96%AA%E5%8D%B3%E4%BB%98%E2%80%9D%E5%B7%A5%E4%BC%A4%E4%BF%9D%E9%99%A9%E5%8F%82%E4%BF%9D%E5%92%8C%E6%97%A0%E6%8B%96%E6%AC%A0%E5%86%9C%E6%B0%91%E5%B7%A5%E5%B7%A5%E8%B5%84%E6%89%BF%E8%AF%BA%E4%B9%A6.pdf,https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717382680758%E7%BA%A2%E5%B0%9A%E4%BD%B3%E8%8B%91%EF%BC%88%E4%B8%80%E6%9C%9F%EF%BC%89%28%E7%BD%91%29%E9%87%8D%E5%8F%91%E5%85%AC%E5%91%8A%E7%AC%AC1%E6%AC%A1%E9%99%84%E4%BB%B63%EF%BC%9A%E6%8B%9B%E6%A0%87%E6%96%87%E4%BB%B6%E5%85%AC%E5%B9%B3%E7%AB%9F%E4%BA%89%E5%AE%A1%E6%9F%A5%E6%89%BF%E8%AF%BA%E5%87%BD.pdf,https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717382681490%E7%BA%A2%E5%B0%9A%E4%BD%B3%E8%8B%91%EF%BC%88%E4%B8%80%E6%9C%9F%EF%BC%89%28%E7%BD%91%29%E9%87%8D%E5%8F%91%E5%85%AC%E5%91%8A%E7%AC%AC1%E6%AC%A1%E9%99%84%E4%BB%B64%EF%BC%9A%E5%90%89%E5%AE%89%E4%B8%8D%E8%A7%81%E9%9D%A2%E8%AF%A2%E6%A0%87%E7%B3%BB%E7%BB%9F%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C.pdf",
						"noticePublicTime": "2024年05月30日至2024年06月24日",
						"tenderControlPrice": 254571560.13,
						"technicalDirector": "建筑工程中级职称、社保证明",
						"projectDirector": "建造师证、B证、本人身份证、社保证明",
						"approveTime": "2024-06-03 10:45:31",
						"tenderDepositPercent": 10,
						"insuredTelephone": "0796-8351378",
						"insuredAddress": "吉安市吉州区",
						"isSignUp": 1,
						"offerPrice": 254571560.13,
						"canRefund": 0,
						"zsFileTime": "2024-06-24 23:59:59",
						"orderByTime": "2024-06-24 08:30:00",
						"projectArea": "江西省/吉安市/吉安市",
						"decryptTime": 60,
						"needConstructOrg": 0,
						"hasSpecialPrice": 0
					},
					{
						"id": 25570,
						"tenderOpeningDate": "2024-06-24 08:30:00",
						"provinceCode": 360000,
						"cityCode": 360800,
						"areaCode": 360802,
						"projectName": "吉安四中改造提升工程",
						"bidStatus": 0,
						"counts": 0,
						"projectInvestment": 6952.66,
						"qualificationLevel": "建筑工程三级",
						"performance": "无",
						"createTime": "2024-06-05 20:47:48",
						"updateTime": "2024-06-20 15:43:54",
						"guaranteeLetterWay": "",
						"answeringFileUrl": "",
						"projectType": 4,
						"insuredName": "吉安市第四中学",
						"biddingAgency": "建维咨询（苏州）有限公司",
						"telephone": "18507064193",
						"projectNo": "赣建吉市招字[2024]施号",
						"status": 2,
						"bidCondition": 0,
						"delayTimes": 0,
						"haveTenderFile": 0,
						"announcementOriginUrl": "http://www.jazbtb.cn/doc/2024/06/04/61346.shtml",
						"attachmentUrl": "",
						"noticePublicTime": "2024-06-03",
						"approveTime": "2024-06-20 15:43:54",
						"insuredTelephone": "13879685513",
						"isSignUp": 0,
						"remark": "企业营业执照;安全生产许可证;技术负责人须提供中级及以上工程师职称证书;外埠来赣施工单位须提供江西住建云平台网站登记有效的查询结果截屏并加盖投标单位公章;企业法定代表人身份证或授权委托书及本人有效身份证;拟派建造师专业建筑工程等级二级建造师电子证书新版二级电子证书不含临时建造师需同时具备B类安全生产考核证;拟派项目部组成人员要求施工员2名质量员1名提供有效岗位证书或职业培训合格证专职 1000 安全员2名提供C类安全生产考核合格证书施工员质量员须为土建专业;投标人需提供本项目的建造师技术负责人三大员施工员质量员及专职安全员的社保证明连续近6个月;投标人应当将通过信用中国网站的查询结果法人和非法人组织公共信用信息报告加盖单位公章作为资格文件在投标文件中体现信用报告生成日期为开标截止时间前7日内有效;投标人需提供与装配式构建供应商签署的省级及以上建设行政主管部门认定的装配式建筑产业基地或产业示范区的合作协议或合同不含其他在建或完工项目的合同协议等;投标保证金进账凭证或电子保函;本项目采用不见面开标系统开标远程异地评标系统评标评标办法采用合理低价法",
						"signUpDeadlineTime": "2024-06-24 08:30:00",
						"canRefund": 0,
						"orderByTime": "2024-06-24 08:30:00",
						"projectArea": "江西省吉安市吉州区",
						"hasSpecialPrice": 0
					},
					{
						"id": 25586,
						"tenderOpeningDate": "2024-06-24 08:30:00",
						"provinceCode": 360000,
						"cityCode": 360800,
						"areaCode": 360802,
						"projectName": "2023年吉安购销储备有限公司粮食仓储设施改造提升项目",
						"bidStatus": 0,
						"counts": 0,
						"projectInvestment": 718.588549,
						"qualificationLevel": "建筑工程三级",
						"performance": "无",
						"createTime": "2024-06-06 08:42:58",
						"updateTime": "2024-06-20 16:10:36",
						"guaranteeLetterWay": "",
						"answeringFileUrl": "",
						"projectType": 4,
						"insuredName": "江西省粮油集团吉安购销储备有限公司",
						"biddingAgency": "江西驭达项目管理有限公司",
						"telephone": "13979677115/0796-8183758",
						"projectNo": "",
						"status": 2,
						"bidCondition": 0,
						"delayTimes": 0,
						"haveTenderFile": 0,
						"announcementOriginUrl": "http://www.jazbtb.cn/doc/2024/06/06/61419.shtml",
						"attachmentUrl": "",
						"noticePublicTime": "2024-06-05",
						"approveTime": "2024-06-20 16:10:36",
						"insuredTelephone": "15979638889",
						"isSignUp": 0,
						"remark": "注册建造师建筑工程二级（含）以上，B类安全生产考核合格证；项目部需配备建造师、施工员、专职安全员、质量员；施工员、质量员土建专业，有效岗位证书或培训合格证书，专职安全员C类安全生产考核合格证；社保证明连续近6个月；信用中国查询结果加盖公章；江西住建云平台登记有效查询结果截屏加盖公章；提供《吉安市落实“吉薪即付”工伤保险参保和无拖欠农民工工资承诺函》；投标保证金140000元；不接受银行保函（纸质）及银行汇票（纸质）；不接受联合体投标；采用远程异地评标系统评标",
						"signUpDeadlineTime": "2024-06-24 08:30:00",
						"canRefund": 0,
						"orderByTime": "2024-06-24 08:30:00",
						"projectArea": "江西省吉安市吉州区",
						"hasSpecialPrice": 0
					},
					{
						"id": 25356,
						"tenderOpeningDate": "2024-06-24 09:00:00",
						"tenderOpeningDeadlineDate": "2024-06-24 09:00:00",
						"provinceCode": 360000,
						"cityCode": 360800,
						"areaCode": 360828,
						"projectName": "万安县弹前至良富农村道路（涧田段）建制村通双车道改造路面工程万安县弹前至良富农村道路（涧田段）建制村通双车道改造路面工程",
						"bidStatus": 0,
						"counts": 0,
						"tenderOpeningWay": "合理低价法",
						"qualificationLevel": "公路工程三级",
						"tenderDeposit": "18",
						"performance": "无",
						"duration": "6个月",
						"createTime": "2024-05-31 16:18:38",
						"updateTime": "2024-06-18 15:58:36",
						"constructorWhether": 0,
						"guaranteeLetterWay": "001",
						"constructorLevel": "公路工程二级",
						"tenderFileUrl": "https://gbt-prod-sh.oss-cn-shanghai.aliyuncs.com/prod/project/1717656981590%E4%B8%87%E5%AE%89%E5%8E%BF%E5%BC%B9%E5%89%8D%E8%87%B3%E8%89%AF%E5%AF%8C%E5%86%9C%E6%9D%91%E9%81%93%E8%B7%AF%EF%BC%88%E6%B6%A7%E7%94%B0%E6%AE%B5%EF%BC%89%E5%BB%BA%E5%88%B6%E6%9D%91%E9%80%9A%E5%8F%8C%E8%BD%A6%E9%81%93%E6%94%B9%E9%80%A0%E8%B7%AF%E9%9D%A2%E5%B7%A5%E7%A8%8B%E6%8B%9B%E6%A0%87%E6%96%87%E4%BB%B6%E6%AD%A3%E6%96%87.pdf",
						"answeringFileUrl": "",
						"projectType": 2,
						"creditLevel": "C",
						"insuredName": "万安县旅游发展有限公司",
						"biddingAgency": "江西卓越工程管理咨询有限公司",
						"telephone": "18370657190",
						"bidOpeningPlace": "吉安市公共资源交易中心万安分中心不见� 1000 ��开标厅",
						"bidAnnouncementTime": "2024-05-31 00:00:00",
						"projectNo": "赣2024360828012245Ⅱ类",
						"status": 2,
						"bidCondition": 0,
						"delayTimes": 0,
						"keyRequirements": "四大员（施工员、质量员、安全员、材料员）、劳动合同、社保证明",
						"announcementLink": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/20240531161838678801.png",
						"haveTenderFile": 1,
						"announcementOriginUrl": "https://www.jxsggzy.cn/jyxx/002002/002002002/20240531/8ee44bad-768a-413e-86f4-dd29377a2a14.html",
						"attachmentUrl": "",
						"technicalDirector": "公路工程中级职称、交B证、社保证明",
						"projectDirector": "建造师证、交B证、本人身份证、社保证明",
						"approveTime": "2024-06-06 14:57:56",
						"tenderDepositPercent": 6,
						"insuredTelephone": "13576838386",
						"insuredAddress": "江西省吉安市万安县商务写字楼 23 层",
						"isSignUp": 0,
						"offerPrice": 9186949,
						"signUpDeadlineTime": "2024-06-24 09:00:00",
						"canRefund": 0,
						"orderByTime": "2024-06-24 09:00:00",
						"projectArea": "江西省/吉安市/万安县",
						"decryptTime": 60,
						"hasSpecialPrice": 0
					},
					{
						"id": 25357,
						"tenderOpeningDate": "2024-06-24 09:00:00",
						"tenderOpeningDeadlineDate": "2024-06-23 16:30:00",
						"provinceCode": 360000,
						"cityCode": 361100,
						"areaCode": 361104,
						"projectName": "上饶市广信区上泸镇污水支管改造工程",
						"bidStatus": 0,
						"counts": 0,
						"tenderOpeningWay": "合理低价法",
						"projectInvestment": 1090.07,
						"qualificationLevel": "市政公用工程三级",
						"tenderDeposit": "20",
						"performance": "资格审查时应提供的证件或证书原件（建筑业企业资质证书为复印件）资格证件企业资质证书、营业执照（加盖企业公章的扫描件或复印件）、安全生产许可证法定代表人或委托代理人法定代表人证书或委托代理人委托书、本人身份证项目负责人拟派建造师注册证书（不含临时）、安全生产考核合格证书(B证)、本人二代有效身份证技术负责人项目技术负责人的中级及以上职称证书（市政工程相关专业）关键岗位人员拟派施工员、持有有效建筑施工企业专职安全生产管理人员证(C证)、质量员、材料员、标准员、机械员、劳务员、资料员岗位证书，所有人员不能为同一人。其他要求1、本工程报名必须从江西省公共资源交易网网上报名。本工程采用《江西省房屋建筑和市政基础设施工程施工招投标评标办法》（赣建招[2017]1号）中的合理低价法评标办法。相关的其他补充要求会在网上及时通知，请各投标人密切留意，否则，因此造成的失误由投标人自负。2、外埠来赣施工单位还应持有江西省建设行政主管部门办理的进赣投标备案通知手续材料原件或根据《关于外省进赣建设工程企业信息登记管理通知》要求办理的企业信息登记并已审核通过的，可提供江西省住建厅官方网站（住建云）“省外进赣企业登记”查询截图复印件加盖单位公章。3、法定代表委托代理人、拟投入的注册建造师（不含临时）、关键岗位人员【施工员、持有有效建筑施工企业专职安全生产管理人员证(C证)、质量员、材料员、标准员、机械员、劳务员、资料员】、技术负责人（具有中级及以上市政工程相关专业职称证书）必须提供开标当月前6个月(含)以上且尚未到期的有效劳动合同和在本企业参加社会基本养老保险正常缴费的社保凭证（建造师因工作单位变更以证书的变更时间为准）。4、拟投入的建造师（不含临时）、关键岗位人员【施工员、持有有效建筑施工企业专职安全生产管理人员证(C证)、质量员、材料员、标准员、机械员、劳务员、资料员，所有人员不得为同一人。本工程注册建造师及关键岗位人员不得为在岗在编的公职人员（是指公务员及本单位以外的事业单位人员，国家财政全额拨款或部分拨款单位工作人员）。建造师不能有其他的在建工程。5、招标人发出中标通知书之前，应当约谈� 1000 ��标人的法定代表人或中标人的建造师并依法签订承诺书。对依法投标、不围标、不串标、不转包、不挂靠以及施工现场的建造师、技术负责人和其他关键岗位人员按照投标承诺到岗履职等行为做出承诺，并报建设行政主管部门；履约承诺书为施工合同专用条款附件之一，与专用条款具有同等法律效力。6、中标人应按“饶人社字【2022】82号”文件规定缴纳农民工工资保障金。7、按“饶建发【2018】30号”文规定，施工企业必须执行建筑工程施工现场关键岗位人员刷脸考勤管理规定（建造师和技术负责人等主要现场人员在施工现场的工作时间每月不得少于20个工作日，并实行施工现场（人像）打卡考勤）。8、本项目不接受联合体投标。9、投标企业提供的证书、材料必须真实有效，且严禁挂靠，如有弄虚作假一经查实，建设行政主管部门将上网公开其不良行为，并按相关规定进行处罚；已中标企业将取消中标资格并没收投标保证金。10、投标人依法投标告知书（详见招标文件）。11、中标企业一律不得转包本工程，所有管理人员和重要施工岗位人员必须为本企业员工，发现有违反本规定行为，招标人可以取消该中标人的中标资格或终止合同且投标保证金或履约保证金一律不予退回，并将违规行为报行政管理部门。12、本工程采用不见面开标，电子化开标及远程异地评标。各投标企业的法定代表授权委托代理人无需到开标现场参与本项目开标活动及无需提供原件查验，但要求能够熟练的操作新点系统，因业务不熟悉而导致的一切后果由投标企业自行承担。上传到电子投标系统的各类证书、证件及其他材料等扫描件应用原件进行彩色扫描。13、根据赣交易函【2023】47号文，请各潜在投标人错峰上传投标文件。14、其他未尽事项详见",
						"duration": "120",
						"createTime": "2024-05-31 17:10:28",
						"updateTime": "2024-06-21 16:25:34",
						"constructorWhether": 0,
						"guaranteeLetterWay": "001",
						"constructorLevel": "市政公用工程二级",
						"projectPayType": "按工程节点支付工程进度款：按《施工合同》约定办法支付",
						"answeringCount": 1,
						"tenderFileUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717465525562%E4%B8%8A%E9%A5%B6%E5%B8%82%E5%B9%BF%E4%BF%A1%E5%8C%BA%E4%B8%8A%E6%B3%B8%E9%95%87%E6%B1%A1%E6%B0%B4%E6%94%AF%E7%AE%A1%E6%94%B9%E9%80%A0%E5%B7%A5%E7%A8%8B%E6%8B%9B%E6%A0%87%E6%96%87%E4%BB%B6%E6%AD%A3%E6%96%87.pdf",
						"reviewFileUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717465527870%E4%B8%8A%E9%A5%B6%E5%B8%82%E5%B9%BF%E4%BF%A1%E5%8C%BA%E4%B8%8A%E6%B3%B8%E9%95%87%E6%B1%A1%E6%B0%B4%E6%94%AF%E7%AE%A1%E6%94%B9%E9%80%A0%E5%B7%A5%E7%A8%8B%E8%B5%84%E5%AE%A1%E6%96%87%E4%BB%B6%E6%AD%A3%E6%96%87.pdf",
						"answeringFileUrl": "https://gbt-prod-sh.oss-cn-shanghai.aliyuncs.com/prod/project/1717751588375%E4%B8%8A%E9%A5%B6%E5%B8%82%E5%B9%BF%E4%BF%A1%E5%8C%BA%E4%B8%8A%E6%B3%B8%E9%95%87%E6%B1%A1%E6%B0%B4%E6%94%AF%E7%AE%A1%E6%94%B9%E9%80%A0%E5%B7%A5%E7%A8%8B%E7%AD%94%E7%96%91%E8%AF%B4%E6%98%8E%E6%96%87%E4%BB%B6.pdf",
						"projectType": 1,
						"insuredName": "上饶市广信水务集团有限公司",
						"biddingAgency": "江西智杰工程管理有限公司",
						"telephone": "15779373356",
						"bidOpeningPlace": "上饶市广信区公共资源交易中心",
						"projectNo": "3611212404020201_SG001",
						"status": 2,
						"bidCondition": 0,
						"delayTimes": 0,
						"keyRequirements": "八大员、劳动合同、社保证明",
						"bidNo": "赣建广信施招字［2024］第003号",
						"announcementLink": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/20240531171027387888.png",
						"haveTenderFile": 1,
						"announcementOriginUrl": "https://www.jxsggzy.cn/jyxx/002001/002001001/20240531/867723ca-33dd-4a9c-8b65-fd4b05331109.html",
						"projectListUrl": "https://gbtdemo.oss-cn-hangzhou.aliyuncs.com/prod/project/1717465532214%E4%B8%8A%E9%A5%B6%E5%B8%82%E5%B9%BF%E4%BF%A1%E5%8C%BA%E4%B8%8A%E6%B3%B8%E9%95%87%E6%B1%A1%E6%B0%B4%E6% 341 94%AF%E7%AE%A1%E6%94%B9%E9%80%A0%E5%B7%A5%E7%A8%8B%E5%B7%A5%E7%A8%8B%E9%87%8F%E6%B8%85%E5%8D%95.pdf",
						"attachmentUrl": "",
						"noticePublicTime": "2024年05月31日至2024年06月23日",
						"tenderControlPrice": 10900715.96,
						"technicalDirector": "技术负责人中级职称、劳动合同、社保证明",
						"projectDirector": "建造师证、B证、本人身份证、劳动合同、社保证明",
						"approveTime": "2024-06-04 09:46:20",
						"tenderDepositPercent": 10,
						"insuredTelephone": "18720082227、15070393597",
						"insuredAddress": "上饶市广信区旭日中大道 39 号博远学府 6 楼",
						"isSignUp": 1,
						"offerPrice": 10900715.96,
						"canRefund": 0,
						"zsFileTime": "2024-06-23 23:59:59",
						"orderByTime": "2024-06-24 09:00:00",
						"projectArea": "江西省/上饶市/广信区",
						"decryptTime": 60,
						"needConstructOrg": 0,
						"hasSpecialPrice": 0
					}
				],
			}
		},
		onLoad() {
			this.Props.statusBarHeight = getApp().globalData.statusBarHeight
			this.Props.capsuleTop = getApp().globalData.capsuleTop
		},
		onReady() {
			// 如果需要兼容微信小程序的话，需要用此写法
			this.$refs.calendar.setFormatter(this.formatter)
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.widthView = 360
			// var allTotal = this.query.page * this.query.pagesize
			// //this.page为加载次数，this.pageSize为每一次加载的数据条数
			// if (allTotal < this.total) {
			//     //this.total为请求数据的总条数。只要现有条数小于总条数就执行一下代码
			//     this.showTotal = true;
			//     this.query.page++;
			//     //加载次数递加
			//     this.getlist() //请求更多数据列表
			// } else {
			//     this.showTotal = false;
			// }
			this.showLoading = true
			setTimeout(() => {
				uni.stopPullDownRefresh(); //停止刷新
				this.showLoading = false
				this.$refs.myUToast.show({
					type: 'success',
					message: '下拉刷新成功！',
				})
			}, 2000)
		},
		methods: {
			onShareAppMessage: function(res) {
				if (res.from === 'button') {
					// 来自页面内转发按钮
					console.log(res);
				}
				return {
					title: '贵哥给你分享了一份内容',
					imageUrl: 'https://img0.baidu.com/it/u=3439507429,4097819702&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',
					path: '/pages/startPage/startIndex?userInviteCode=' + this.userQRcode,
				}
			},
			clearThreeDayIndex() {
				this.threeDayIndex = 4
			},
			selectThreeDay(index) {
				this.threeDayIndex = index
			},
			clickSubjectStatus(index) {
				this.currSelectSubjectStatus = index
			},
			clickProjectStatus(index) {
				this.currSelectProjectStatus = index
			},
			formatter(day) {
				const d = new Date()
				let month = d.getMonth() + 1
				const date = d.getDate()
				if (day.day % 2 == 0) {
					day.bottomInfo = `标数${day.day-1}`
					day.dot = true
				}
				return day
			},
			getYesterdayDate() {
				const today = new Date(); // 当前日期
				const oneYear = 365 * 24 * 60 * 60 * 1000; // 一年的毫秒数

				// 减去一年的毫秒数
				const yesterday = new Date(today.getTime() - oneYear);

				// 格式化日期为YYYY-MM-DD
				const year = yesterday.getFullYear();
				const month = ('0' + (yesterday.getMonth() + 1)).slice(-2); // 月份是从0开始的
				const day = ('0' + yesterday.getDate()).slice(-2);

				return `${year}-${month}-${day}`;
			},
			black() {
				console.log("返回上一页回调事件");
			},
			openCalender() {
				this.showCalendar = true
			}
		}
	}
</script>
<style>
	page {

		/* background-repeat: repeat-y;
		height: 100vh; */
		/* padding: 20rpx; */
	}
</style>
<style lang="scss" scoped>
	.swiper_container {
		padding: 20rpx 20rpx 20rpx 20rpx;
	}

	.subject_status_container {
		padding: 0rpx 20rpx 0rpx 20rpx;
		width: 710rpx;
		overflow: hidden;
		scroll-behavior: smooth;
		// overflow-x: ;
		// background-color: #fff;

	}

	.subject_status_item {
		margin: 0 20rpx 0 0rpx;
		padding: 5rpx;
		border-radius: 10rpx;
		background-color: #fff;
		width: 108rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		font-weight: bold;
		font-size: 26rpx;
	}

	.screening_condition_container {
		width: 710rpx;
		display: flex;
		justify-content: space-between;
		// margin: 20rpx 0 0 0;
		padding: 0 20rpx;
	}

	.screening_condition_item {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 20rpx 0 0rpx;
		padding: 5rpx;
		border-radius: 40rpx;
		background-color: #fff;
		color: #a1a1a1;
		width: 150rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		font-size: 24rpx;
	}

	.project {
		position: relative;
		margin: 20rpx;
		padding: 20rpx;
		width: 670rpx;
		height: 800rpx;
		background-color: #fff;
		border-radius: 10rpx;

		.read_icon {
			position: absolute;
			top: 0;
			right: 0;
			width: 60rpx;
			height: 60rpx;
			z-index: 10;
		}

		.project_header {
			display: flex;
			justify-content: space-around;
			align-items: center;

			.project_header_icon {
				width: 88rpx;
				height: 88rpx;
				background-color: #b6d1f2;
			}

			.project_header_title {
				width: 500rpx;
				font-size: 28rpx;
				font-weight: bold;
			}

			.project_header_other {
				width: 60rpx;
				height: 88rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}

	.sharebtn::after {
		content: '';
		border: none;
		background-color: #fff;
		background-size: 100%;
		background-image: url('https://img0.baidu.com/it/u=2725458586,1371498662&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500');
		background-repeat: no-repeat;
	}

	.calendar_watch {
		display: flex;
		align-items: center;
		width: 710rpx;
		height: 60rpx;
		margin: 20rpx;
		background-color: #f7eee2;
		border-radius: 6rpx;
		font-size: 28rpx;

		.calendar_title {
			width: 200rpx;
			height: 60rpx;
			border-radius: 6rpx;
			color: #fff;
			line-height: 60rpx;
			text-align: center;
			background-color: #f9ae3d;
		}

		.calendar_day {

			display: flex;
			justify-content: space-around;
			width: 450rpx;
			height: 60rpx;
			border-radius: 6rpx;
			color: #fff;
			line-height: 60rpx;
			text-align: center;

			.day {
				position: relative;
				width: 100rpx;
				height: 48rpx;
				margin: 6rpx 0;
				line-height: 48rpx;
				border-radius: 10rpx;
				text-align: center;
				background-color: #ffffff;
				color: #000;

				.count {
					position: absolute;
					top: -18rpx;
					right: -9rpx;
					background-color: #f9ae3d;
					font-size: 24rpx;
					line-height: 32rpx;
					width: 50rpx;
					height: 32rpx;
					border-radius: 20rpx;
					color: #ffffff;
				}
			}

			.calendar_select {
				width: 40rpx;
				height: 60rpx;
				background-color: #f7eee2;
			}
		}

		.clear {
			background-color: orangered;
			color: #fff;
		}
	}

	/deep/ .u-calendar-month__days__day__select__buttom-info {
		color: red !important;
	}
</style>