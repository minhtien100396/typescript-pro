"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("lab07");
const fetchAllBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();
    if (data && data.length) {
        const tbody = document.querySelector("#blogList tbody");
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
                
            `);
        });
    }
};
fetchAllBlogs();
