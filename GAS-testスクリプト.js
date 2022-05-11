function myFunction() {　// この動画をもとにしている。https://www.youtube.com/watch?v=fi53TZUeDmo

// 対象のスプレッドシートで 拡張機能　> Apps Script でGASを開いたシート。
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();
var rows = sheet.getLastRow()-1;　// -1 は、対象の行を指定した値。この場合「B」行から対象としている。
var datas = sheet.getRange(2,1,rows,4).getValues();　// 2,1,rows,5 は、範囲を指定する値。「2,1」は【A2】を指定している。　例「3,2」だったら【B3】を指定という感じ。　「rows」は【開始行】を指定している。つまり「B」行。　「4」は【D列】を指定している。　この辺りにも詳しい内容が記載してます⇒https://qiita.com/sakaimo/items/ba5594208c254fa528dc


var object = {}; // object は「箱(グループ)」を作っているイメージ。

for(var i=0; i<datas.length; i++){　// for(初期化式; 条件式; 増減式) { ←このような式になる。https://tonari-it.com/gas-for/ 「0」は【A列】を指しています。


  var key = datas[i][0];　// keyは、値を返す際のキーとして指定するという意味。[i][0]⇒A列をキーとしている。
  var value = datas[i][3];　// valueは、上記キーに対して対象の値を返すという意味。[i][3]⇒D列を値としている。
  object[key] = value;　// キーを軸に値を返す。という意味、、
} 

Logger.log(object);　//　ログとして出力するという意味。

return object

// シートに書き込みたい。ここから
var sheet_id = "1PDodWmn51e1S39msZEveJBydCdHBYjtRzu5acn9L0Ow";  // SpreadSheetID
var sheet_name = "出力結果";

}
