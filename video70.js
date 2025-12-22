console.log("video 70")

//random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const nameElement = document.getElementById("name");

const btnSaveElement = document.getElementById("btnSave");

if (btnSaveElement) {
    btnSaveElement.addEventListener("click", () => {
        const myTodo = {
            id: getRandomInt(1, 1000),
            name: nameElement.value
        }

        const currentTodoStr = localStorage.getItem("todo");

        if (currentTodoStr) {
            const currentTodo = JSON.parse(currentTodoStr)
            currentTodo.push(myTodo)
            localStorage.setItem("todo", JSON.stringify(currentTodo))
        } else {
            localStorage.setItem("todo", JSON.stringify([myTodo]))

        }

        window.location.href = "video70.html"


    })
}
const todoListStr = localStorage.getItem("todo")
const todoList = JSON.parse(todoListStr);
const tbody = document.querySelector("#todoList tbody")

const fetchDataTable = () => {
    if (todoListStr) {
        if (todoList && todoList.length) {
            todoList.forEach((item, index) => {
                tbody.innerHTML += (`
                <tr>
                    <td style="border: 1px solid black; padding: 8px; text-align: center;">
                        ${item.id}
                    </td>
                    <td style="border: 1px solid black; padding: 8px;">
                        ${item.name}
                    </td>
                    <td style="border: 1px solid black; padding: 8px; text-align: center;">
                       <button data-id = ${item.id} 
                       class = "btn-delete"
                       >
                            Xóa
                       </button> 
                    </td>
                </tr>
                    
                `)
            })
        }
    }
}

if (tbody) {
    fetchDataTable();
}


const deleteBtns = document.querySelectorAll(".btn-delete");
if (deleteBtns) {
    deleteBtns.forEach((btn, index) => {
        console.log(btn)
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id")
            handleDeleteTodo(id)
        })
    })
}

const handleDeleteTodo = (id) => {
    const todoList = JSON.parse(localStorage.getItem("todo"));
    if (todoList && todoList.length) {
        const newTodo = todoList.filter((item, index) => {
            return item.id != id
        });
        localStorage.setItem("todo", JSON.stringify(newTodo));
        window.location.reload();
    }
}


