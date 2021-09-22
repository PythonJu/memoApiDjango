document.getElementById('create_button').addEventListener('click', async () => {
    const createData = document.getElementsByName('create-data');
    const postData = {
        title: createData[0].value,
        content: createData[1].value
    }

		await fetch('http://127.0.0.1:8000/api/memos/',{
				method: 'POST',
				headers: {
						'Content-Type': 'application/json'
				},
				body: JSON.stringify(postData)
		});
		// showToggle();
    createData[0].value = '';
    createData[1].value = '';
	showMemo();
});

// メモ一覧ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 画面が読み込まれたとき
window.addEventListener('load', () => {
    showMemo();
});

async function showMemo(){
    const showMemoArea = document.getElementById('view_memos');
    const res = await fetch('http://127.0.0.1:8000/api/memos/',{
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json'
            }
    });
    const memos = await res.json();
    
    let elements = '';
    showMemoArea.innerHTML = '';

    memos.forEach(memo => {
        elements += `
        <div class="second_content_card">
            <div class="second_content_card_title">
                <p>${memo.title}</p>
            </div>
            <div class="second_content_card_text">
                <p>${memo.content}</p>
            </div>
			<div class="second_content_card_button">
				<a class="second_content_card_button_detail" onclick="showDetail(${memo.id})">詳細</a>
			</div>
        </div>
        `;
    });

    showMemoArea.insertAdjacentHTML('afterbegin', elements);
}

// 詳細ページーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
async function showDetail(id){
    const res = await fetch(`http://127.0.0.1:8000/api/memos/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const memo = await res.json();
    const detailMemo = document.getElementById('detail_memo');
    const element = `
    <div class="main_area_form second_detail_memo">
		<div class="main_area_form_close second_detail_memo_close">
			<button class="main_area_form_close_button second_detail_memo_close_button detail-close-button" id="detail_close_button" onclick="clearDetail()">×</button>
		</div>
		<div class="main_area_form_title">
			<label class="main_area_form_title_label">タイトル</label>
			<div class="main_area_form_title_input">
				<input class="" id="" type="text" name="edit-data" value="${memo.title}">
			</div>
		</div>
		<div class="main_area_form_text">
			<label class="main_area_form_text_label">コンテンツ</label>
			<div class="main_area_form_text_textarea">
				<textarea class="" id="content2" name="edit-data">${memo.content}</textarea>
			</div>
		</div>
		<div class="main_area_form_option">
			<button class="main_area_form_option_edit-button" onclick="editComm(${memo.id})">編集</button>
			<button class="main_area_form_option_delete-button" onclick="deleteComm(${memo.id})">削除</button>
		</div>        
	</div>
    `;

    detailMemo.insertAdjacentHTML('afterbegin', element);
    detailMemo.style.display = 'flex';
}

// 詳細画面各ボタン設定　「×」閉じるボタン　「編集」「削除」ボタン
async function editComm(id){
    const editData = document.getElementsByName('edit-data');
    const putData = {
        title: editData[0].value,
        content: editData[1].value
    };
    await fetch(`http://127.0.0.1:8000/api/memos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(putData)
    });

    showMemo();
    clearDetail();
}

async function deleteComm(id){
    await fetch(`http://127.0.0.1:8000/api/memos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    showMemo();
    clearDetail();
}

function clearDetail(){
    const detailMemo = document.getElementById('detail_memo');
    detailMemo.innerHTML = '';
    detailMemo.style.display = 'none';
}

