// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)


const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    const wrap = document.getElementById('wrap');

    const list = document.createElement('ul');
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a')
        li.innerText = `${data[i].id} - ${data[i].name} - `;
        a.innerText = `user-details.html?id=${data[i].id}`;
        a.href = `user-details.html?id=${data[i].id}`;
        li.appendChild(a);
        list.appendChild(li);
    }
    wrap.appendChild(list);
}
void fetchData()




// const fetchData = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             const wrap = document.getElementById('wrap');
//
//             const list = document.createElement('ul');
//             for (let i = 0; i < data.length; i++) {
//                 const li = document.createElement('li');
//                 const a = document.createElement('a')
//                 li.innerText = `${data[i].id} - ${data[i].name} - `;
//                 a.innerText = `user-details.html?id=${data[i].id}`;
//                 a.href = `user-details.html?id=${data[i].id}`;
//                 li.appendChild(a);
//                 list.appendChild(li);
//             }
//             wrap.appendChild(list)
//         });
// }
// fetchData()