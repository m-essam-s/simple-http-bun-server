const PORT = 3003;

Bun.serve({
    port: PORT,
    routes: {
        "/": () => new Response("Welcome to the user API!"),
    },
});

console.log(`Server running at http://localhost:${PORT}`);