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
        "/users/:id/info": req => {
            const user = users.find(user => user.id === Number(req.params.id));
            return user ? Response.json(user) : new Response("User not found", { status: 404 });
        },
        "/users/create": async req => {
            const body = await req.json();
            const { name } = body as { name: string };
            if (!name) {
                return new Response("Name is required", { status: 400 });
            }
            const newUser = { id: users.length + 1, name };
            users.push(newUser);
            return Response.json(newUser, { status: 201 });
        },
    },
});

console.log(`Server running at http://localhost:${PORT}`);