
var name = "周小珍,高珊,郑雨,卢承彦,刘萍,陈欣,陈薇菲,何燕,魏彩霞,肖庆尧,肖庆尧,庞颖慧,彭玉洁,彭玉洁,李丹华,张秋婷,李菊峰,田艳,柏雪,王建美,宋旋,罗敏,刘梦云,张荣芝,张小琴,王凌,潘晓文,陈咏微,张勇,梁芸,朱晏萱,刘小凡,张体会,张雪梅,曹丽娟,杨阳,孟宪,吴芳,李杰,侯佳,左冬梅,欧阳利珍,贺彩娟,李响,马明莉,于云霞,黄诗慧,单方秋,庞婷婷,翟惠贞,汪小娟,马剑,毛荆晶,谷雨倩,杨爱晶,孔婵,张妍,朱怡,朱怡,朱怡,朱怡,熊敏,刘俊琪,杨阳,谷雨倩,田枫,王佩仪,方芳,缪蕙,杨立星,杨立星,张菲菲,朱志飞,吴秀静,刘秀云,刘朝广";
var nameArr = name.split(",");


var num = "20171085031,20171046727,20171087478,20171087823,20171087818,20171087890,20171087894,20171087914,20171087931,20171088235,20171088252,20171088236,20171088237,20171088482,20171088238,20171088240,20171088242,20171088243,20171088246,20171088247,20171088248,20171088249,20171088250,20171088251,20171088254,20171088255,20171088256,20171088257,20171088258,20171088260,20171088261,20171088262,20171088263,20171088264,20171088265,20171088266,20171088267,20171088268,20171088269,20171088270,20171088271,20171088272,20171088274,20171088275,20171088276,20171088277,20171088278,20171088281,20171088282,20171088357,20171088358,20171088359,20171088362,20171088364,20171088365,20171088370,20171088372,20171088373,20171088374,20171088375,20171088376,20171088377,20171088378,20171088379,20171088380,20171088381,20171088382,20171088383,20171088384,20171088475,20171088476,20171088477,20171088478,20171088479,20171088480,20171088481";

var numArr = num.split(","); 


  


function findNum(name, index) {

	var userName = document.getElementById("recName").value; 
	

	 if(name == userName && userName != ""){
		
	 	var ans = numArr[index];
	 	return ans; 
	}
	else{
		return "n";
	}

	


	// var position = nameArr.indexOf(userName);
	// if(position!=-1){
	// 	var ans = numArr[position];
	// 	document.getElementById("name").innerHTML = ans;
	// }
	// else{
	// 	document.getElementById("name").innerHTML = "没有找到对应单号。";
	// }

}

function getNum(){
	// document.getElementById("name").innerHTML = nameArr.map(findNum);
	var arrAns = nameArr.map(findNum);
	var ans = [];
	var j = 0;
	for(var i =0; i<arrAns.length; i++){
		
		if(arrAns[i] != "n"){
			
			ans[j] = arrAns[i];
			j++;
		}
	}
	if(ans.length==0){
		document.getElementById("name").innerHTML = "没有找到对应单号";
	}
	else{
		document.getElementById("name").innerHTML ="单号： "+ ans;
		// for(i=0; i<ans.length; i++){
		// 	var m = ans[i].indexOf("1000");
		// 	var n = ans[i].indexOf("2017");
		// 	if(n == 0){
				document.getElementById("quanqiu").innerHTML ="<br>请复制单号后点击以下链接查询快递信息<p style=\"color:orange;\"><a href='http://www.zdwex.com/'><u>http://www.zdwex.com</u></a></p>";
			// }
			
			// if(m == 0){
			// 	document.getElementById("tianma").innerHTML ="<br>以1000开头的天马快递新单号请复制单号后点击<p style=\"color:blue;\"><a href='http://www.worldcps.com'><u>http://www.worldcps.com</u></a></p>";
			// }

		// }
		
	}
	
}

