webpackJsonp(["app/js/testpaper-manage/result/index"],{dfaa2bbe92abe6014897:function(a,e,t){"use strict";var r=echarts.init(document.getElementById("line-data")),n=$.parseJSON($("#data").val());r.setOption({color:["#0E4D93","#687F92"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{bottom:"5%",containLabel:!0},xAxis:[{type:"category",name:Translator.trans("testpaper_manage.result_graph.score_distribution"),nameLocation:"middle",nameGap:25,data:n.xScore,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",name:Translator.trans("testpaper_manage.result_graph.person_num"),minInterval:1}],series:[{name:Translator.trans("testpaper_manage.result_graph.first_score_num"),type:"bar",data:n.yFirstNum},{name:Translator.trans("testpaper_manage.result_graph.max_score_num"),type:"bar",data:n.yMaxNum}]})}},["dfaa2bbe92abe6014897"]);