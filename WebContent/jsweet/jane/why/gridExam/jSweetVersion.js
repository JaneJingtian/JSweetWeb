require([ "JSweetGrid","JSweetDlg","JSweetForm","text!jsweet/jane/why/gridExam/update/jSweetUpdateForm.html"], function (JsweetGrid,Dlg,Jform,templeteContent) {
    $(document).ready(function () {
        /**@type {JSweetGrid} */ 
        var grid = JsweetGrid({ id: "jsweet_table", templeteId: "each_row"})
        grid.load({
            url: "jswt/updateVersion/fetchTable",
            param: {},
            curPage: 1,
            rowNum: 0
        })
   });
   var dlg;
   function popDialog(){
       var args={
           id:"save_version_dlg",
           content:templeteContent,
           smlSize:"large",
           title:"version information",
           onload:function(e){
               $('#save_version_dlg .jsweet-okay').click(function(){
            //get all the value from the form
            //jquery serialize function: get all the data from the form as key and value;
            var jform = Jform({ id: "version-form" });
            var x = jform.serialize();
            var magicSerialJson = x;
            $.ajax(
                {
                    url: "jswt/jane/paramForm",
                    data: magicSerialJson,
                    type: "post",
                    /*Accept 字段
                    "xml": 返回 XML 文档，可用 jQuery 处理。
					"html": 返回纯文本 HTML 信息；包含的 script 标签会在插入 dom 时执行。
					"script": 返回纯文本 JavaScript 代码。不会自动缓存结果。除非设置了 "cache" 参数。注意：在远程请求时(不在同一个域下)，所有 POST 请求都将转为 GET 请求。（因为将使用 DOM 的 script标签来加载）
					"json": 返回 JSON 数据 。
					"jsonp": JSONP 格式。使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。
					"text": 返回纯文本字符串*/
                    //dataType:"json",
                    success: function (d) {
                        if (d.success) {
                            alert('success')
                        } else {
                            alert('fail')
                        }
                    }, error: function () {
                        alert('error occur')
                    }
                }
            )
            console.info(magicSerialJson);
            alert('closing...')
            dlg.close()
        });
                
           }
       }
       dlg=Dlg(args)
       dlg.modal()
   }
   var onload=function(){
       document.getElementById("test_publish_button").addEventListener("click", popDialog, false);
   }
   onload();
})


