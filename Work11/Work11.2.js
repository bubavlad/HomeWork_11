// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const userId = new URL(location.href).searchParams.get('id');

const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();

    const wrap = document.getElementById('wrap');

    const ul = document.createElement('ul');
    const id = document.createElement('li');
    const username = document.createElement('li');
    const email = document.createElement('li');
    const phone = document.createElement('li');
    const street = document.createElement('li');
    const suite = document.createElement('li');
    const city = document.createElement('li');
    const zipcode = document.createElement('li');
    const lat = document.createElement('li');
    const lng = document.createElement('li');
    const website = document.createElement('li');
    const companyName = document.createElement('li');
    const catchPhrase = document.createElement('li');
    const bs = document.createElement('li');

    id.innerText = `id: ${user.id}`;
    username.innerText = `username: ${user.username}`;
    email.innerText = `email: ${user.email}`;
    phone.innerText = `phone: ${user.phone}`;
    street.innerText = `street: ${user.address.street}`;
    suite.innerText = `suite: ${user.address.suite}`;
    city.innerText = `city: ${user.address.city}`;
    zipcode.innerText = `zipcode: ${user.address.zipcode}`;
    lat.innerText = `lat: ${user.address.geo.lat}`;
    lng.innerText = `lng: ${user.address.geo.lng}`;
    website.innerText = `website: ${user.website}`;
    companyName.innerText = `companyName: ${user.company.name}`;
    catchPhrase.innerText = `catchPhrase: ${user.company.catchPhrase}`;
    bs.innerText = `bs: ${user.company.bs}`;

    ul.append(id, username, email, phone, street, suite, city, zipcode, lat, lng, website, companyName, catchPhrase, bs);
    wrap.appendChild(ul);

}
void fetchData();