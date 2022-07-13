export enum NetWork { 
    API_KEY = '',
    API_URL = '',
    PARAMS = '?apikey=',
    WEATHER_URL = 'http://api.map.baidu.com/telematics/v3/weather?location=%E4%B8%8A%E6%B5%B7&output=json&ak=6tYzTvGZSOpYB5Oc2YGGOKt8',
    REQUEST_URL =  '?apikey=',
    HN_ITEM_ENDPOINT = 'https://hacker-news.firebaseio.com/v0/item/',

    TASK_LIST_URL = '/bpm/task/personalTasks.do?',
    VIEW_TASK_URL = '/bpm/task/viewTaskForm.do?',
    COMPLETE_TASK_URL = '/bpm/task/completeTask.do?',
    
    REQUEST_TASK_LIST_URL = '/bpm/task/personalTasks.do?',
    REQUEST_VIEW_TASK_URL ='/bpm/task/viewTaskForm.do?',
    REQUEST_COMPLETE_TASK_URL = '/bpm/task/completeTask.do?',


    IP = 'http://192.168.160.84:8081',

    LOGIN_URL = '/bpm/task/login.do?', //登录
    NOTICE_URL = '/bpm/task/findAllCmsArticle.do',//公告通知
    NOTICE_DETIAL_URL = '/bpm/task/cms-article-view.do?id=',//公告通知详情
    OFFICE_MYCREATED_URL = '/bpm/task/listProcessInstances.do?',//我发起的接口
    OFFICE_CREATED = OFFICE_MYCREATED_URL,
    SEARCH_ADDRESSLIST_URL = '/bpm/task/findAddressByUserName.do?',//查询通讯录
    OFFICE_IAPPROVALLIST_URL = '/bpm/task/historyTasks.do?',//我的审批列表
    OFFICE_IAPPROVALLIST = OFFICE_IAPPROVALLIST_URL,
    SEARCH_AGENT_URL = '/bpm/task/delegatedTasks.do?',//我的代理列表
    TASKCOUNT_URL = '/bpm/task/personalTasksCount.do?',//待办任务数
    TASKLIST_URL = '/bpm/task/personalTasks.do?',//待办任务列表
    TASKDETAIL_URL = '/bpm/task/viewProcessTaskDeatil.do?',//待办任务详情
    VIEWTASKFROM_URL = '/bpm/task/viewTaskForm.do?',//获取审批任务详情
    APPROVAL_TASK = '/bpm/task/completeTask.do?',//审批提交
    SHOWTASKDETAL_URL = '/bpm/task/viewProcessTaskDeatil.do?',//我的审批->审批详情
    EDIT_USER_INFO_URL = "/bpm/task/edtiUser.do?",//修改用户信息接口
    OFFICE_MOUDEL_URL = "/bpm/task/bpmType.do",//office  模块列表
    OFFICE_LIST_URL = "/bpm/task/bpmProcess.do?id=",
    OFFICE_LIST_DETAIL_URL = "/bpm/task/viewStartForm.do?bpmProcessId=",//office 办公列表详情
    OFFICE_LIST_DETAILCOMMIT_URL = "/bpm/task/startProcessInstance.do?userId=",
    OFFICE_LIST_UPLOADFILE_URL = "/bpm/task/fileUpload.do",//office 办公附件上传接口
    OFFICE_LIST_DOWNLOADFILE_URL = "/bpm/task/downFile.do?model=form&width=0&path=",//office 办公附件下载
    PHOTO_DOWN = "/bpm/task/downFile.do?model=avatar&userId=",
    PHONENUMBER_EMAIL_GET = '/bpm/task/findPersonInfo.do?userName=',//office 邮箱电话信息下载
    NEW_GET = '/bpm/task/newsData.do',//新闻轮播图片列表
    NEW_GETIMAGE='/bpm/task/newsImage.do?path=',//新闻轮播图片地址
    LINK_TASK='/bpm/task/viewProcessTaskDeatilByLinkedProcessNo.do?',//关联单
    GET_NEWVERSION_URL='/bpm/task/findLatestVersionByPlatform.do?platform=',//获取版本号
    ME_HELP = '/BPM-H5/app.html',//帮助与反馈
    ME_VERSION = '/BPM-H5/versions.html',//版本信息
    APPROVAL_DEAL_WITH_BUTTON = '/bpm/task/processNodeButtons.do?humanTaskId=',//转办功能列表
    APPROVAL_DEAL_WITH = '/bpm/task/processingTask.do?',//转办功能执行
    APPROVAL_DEAL_WITH_STAFF = '/bpm/task/findUserByData.do?',//转办人员列表
    MESSAGE_URL = '/bpm/task/findMessageByUser.do?userId=',//消息通知


    CONTACT_TYPE_URL = '/bpm/task/findTaskType.do',//工作联系单 业务类型 
    CONTACT_DETAIL_URL = '/bpm/task/lookWorkMenu.do?id=',//工作联系单 详情
    CONTACT_LIST_URL = '/bpm/task/findWorkMenu.do?',//{ /*userId=&pageNo=&title=&taskStatus=*/ }工作联系单 列表 
    CONTACT_CREAT_URL = '/bpm/task/saveWorkMenu.do',//工作联系单 创建 
    CONTACT_FOLLOW_URL = '/bpm/task/saveFollow.do',//工作联系单 跟进
    CONTACT_REPORT_URL = '/bpm/task/saveReport.do',//工作联系单 汇报

}