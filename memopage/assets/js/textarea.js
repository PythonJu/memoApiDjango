//textareaの要素取得
let textarea = document.getElementById('content');
//textareaのデフォルトの要素の高さを取得
let ch = textarea.clientHeight;

//textareaのinputイベント
textarea.addEventListener('input', ()=>{
    //textareaの高さを再設定（デフォルトの高さから計算するため）
    textarea.style.height = ch + 'px';
    //textareaの入力内容の高さを取得
    let sh = textarea.scrollHeight;
    //textareaの高さに入力内容の高さを設定
    textarea.style.height = sh + 'px';
});