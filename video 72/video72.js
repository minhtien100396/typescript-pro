console.log("video72")

const fetchAllBlog = async () => {
    const res = await fetch("http://localhost:8000/blogs")
    const data = await res.json()
    if (data && data.length) {
        const tbody = document.querySelector("#blogList tbody")
        data.forEach((item, index) => {
            tbody.innerHTML += (`
            <tr>
                    <td style="border: 1px solid black; padding: 8px; text-align: center;">
                        ${item.id}
                    </td>
                    <td style="border: 1px solid black; padding: 8px;">
                        ${item.title}
                    </td>
                    <td style="border: 1px solid black; padding: 8px;">
                        ${item.author}
                    </td>
                    <td style="border: 1px solid black; padding: 8px;">
                        ${item.content}
                    </td>
                    <td style="border: 1px solid black; padding: 8px; text-align: center;">
                       <button data-id = ${item.id} 
                       class = "btn-blog"
                       >
                            Xóa
                       </button> 
                    </td>
                </tr>    
                
            `)
        })
    }
}

const handleAddNewBlog = () => {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const content = document.getElementById("content");
    const btnCreateBlog = document.getElementById("btnBlog");

    btnCreateBlog.addEventListener("click", async () => {
        const rawResponse = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title.value, author: author.value, content: content.value })
        })
        const data = await rawResponse.json();
        addNewRowEnd(data)

    })
}

const addNewRowEnd = (item) => {
    const tableBody = document.querySelector('#blogList tbody');
    // Tạo phần tử dòng mới
    const newRow = document.createElement('tr');
    // Gán HTML cho dòng
    newRow.innerHTML =
        `
            <tr>
                <td style="border: 1px solid black; padding: 8px; text-align: center;">
                    ${item.id}
                </td>
                <td style="border: 1px solid black; padding: 8px;">
                    ${item.title}
                </td>
                <td style="border: 1px solid black; padding: 8px;">
                    ${item.author}
                </td>
                <td style="border: 1px solid black; padding: 8px;">
                    ${item.content}
                </td>
                <td style="border: 1px solid black; padding: 8px; text-align: center;">
                    <button data-id = ${item.id} 
                    class = "btn-blog"
                    >
                        Xóa
                    </button> 
                </td>
            </tr>
        `;
    // Thêm dòng vào cuối bảng
    tableBody.appendChild(newRow);

    const btn = document.querySelector(`[data-id="${item.id}"]`);

    if (btn) {
        btn.addEventListener("click", async () => {
            const id = btn.getAttribute("data-id")
            const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            const row = btn.closest('tr');
            row.remove();
        })
    }


}

const handleDeleteBtns = () => {
    const deleteBtns = document.querySelectorAll(".btn-blog");
    if (deleteBtns) {
        deleteBtns.forEach((btn, index) => {
            btn.addEventListener("click", async () => {
                const id = btn.getAttribute("data-id")
                const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                })
                const row = btn.closest('tr');
                row.remove();
            })
        })
    }
}



const handleDeleteTodo = async (id, btn) => {

}

fetchAllBlog().then(() => {
    handleDeleteBtns();
});
handleAddNewBlog();
