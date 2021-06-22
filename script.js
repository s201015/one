/*//日付けに関する命令を扱えるようにする
var date = new Date();
//年、月、日を取得
var year = date.getFullYear();
var month = date.getMonth() + 1 ;
var day = date.getDate();
//日本の表記にする
var today = year +"年"+month+"月"+day+"日";
document.writeln(today);
//曜日を取得
var weekday = date.getDay();
if(weekday == 0){
  document.writeln("日曜日");
} else if(weekday == 1){
  document.writeln("月曜日");
} else if(weekday == 2){
  document.writeln("火曜日");
} else if(weekday == 3){
  document.writeln("水曜日");
} else if(weekday == 4){
  document.writeln("木曜日");
} else if(weekday == 5){
  document.writeln("金曜日");
} else if(weekday == 6){
  document.writeln("土曜日");
} else {
  document.writeln("エラー！");
}
//↑利用時の年月を取得するプログラム
*/