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
		// showMemo();
});