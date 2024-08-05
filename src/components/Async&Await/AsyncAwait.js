export default async function AsyncAwait() {
    let users = []
	await fetch("https://jsonplaceholder.typicode.com/users")
		.then((response) => response.json())
		.then((response) => { users = response});

    return users; 
}
