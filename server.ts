const PORT = 3003;

type User = { id: number; name: string };

const users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];

Bun.serve({
    port: PORT,
    routes: {
        "/": () => new Response("Welcome to the user API!"),
        "/users": () => Response.json(users),
    },
});

console.log(`Server running at http://localhost:${PORT}`);