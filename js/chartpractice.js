var ctx=document.getElementById('canvas').getContext('2d');
 var myChart = new Chart(ctx,{
 	type:'line',
 	data:{
 		//X坐标数据
 	labels:[2,4,6,8,10,12,14,16,18,20,22,24],
 	datasets:[{
 	  //名称
 	  'label':'外网',
 	  //线围起来面积是否有颜色
 	  fill:false,
 	  //点的颜色
      backgroundColor:'#666',
      //线的颜色
	  borderColor: '#666',
      
      //是否是直线 0是直线,1是曲线
      /*"lineTension":0,*/
      //y坐标的数据
      data:[1,2,3,4,5,5,6,7,8,8,9,9]
 	},{
 	  'label':'内网',
 	  fill:false,
 	  borderColor:"rgba(198,161,161,1)",
 	  backgroundColor:"#EC6B4E",
      //y坐标的数据
      data:[2,2,1,4,2,4,5,7,8,8,4,3]
 	}]
 	},
 	options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});