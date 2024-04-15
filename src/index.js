import { createServer } from "http";
import { index } from "./pages/index.js";

const server = createServer();

async function getPinnedRepos() {
  const accessToken = process.env.GH_TOKEN;
  const username = "mustafashen";
  const query = `
  {
    user(login: "${username}") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          url
          name
          description
          languages(first: 3) {
            nodes {
              name
            }
          }
        }
      }
    }
    }
  }
  `;
  const apiUrl = `https://api.github.com/graphql`;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })

  const body = await response.json();
  return body.data.user.pinnedItems.nodes
}

async function handleRoute(req, res) {
  const routes = {
    "/": {
      GET: async (req, res) => {
        const pinnedRepos = await getPinnedRepos();
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(index(pinnedRepos));
      },
    },
  };

  try {
    const route = routes[req.url];
    if (route) {
      const method = req.method.toUpperCase();
      const handler = route[method];
      if (handler) {
        await handler(req, res);
      } else throw new Error("Method not allowed");
    } else throw new Error("Route not found");
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(error.message);
  }
}

async function handleRequest(req, res) {
  handleRoute(req, res);
}

server.on("request", (req, res) => {
  handleRequest(req, res);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
