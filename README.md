
# 🚀 Caching Proxy

`Overview`
Caching Proxy is a lightweight Node.js-based proxy server that caches API responses to optimize performance and reduce redundant network requests. Built with Express, Node-cache, and Axios, it minimizes backend load by efficiently serving repeated requests from cache.

`Features`
- ✅ Fast Caching – Stores responses using node-cache with a configurable TTL
- ✅ Cache Hit/Miss Handling – Reduces API requests by serving cached data
- ✅ CLI-Based Server Start – Easily configurable using yargs
- ✅ Customizable Origin & Port – Define origin server and port dynamically

`Installation`
Clone the repository:
```
git clone https://github.com/kaverapp/Caching-Proxy.git
cd Caching-Proxy
```

`Install dependencies:`
```
npm install
```
`Usage`
Start the Proxy Server

Use the command below to start the server with a specific port and origin URL:
```
node server.js start --p 5000 --o "https://api.example.com"
--p or --port → Defines the port the proxy runs on (default: 8080)
--o or --origin → Defines the origin server for fetching data (default: 8000)
```
`Example:`
```
node server.js start --p 3000 --o "https://jsonplaceholder.typicode.com"
```
`Make API Requests`
Once the server is running, make requests via the proxy:
```
http://localhost:5000/posts
```
If data is cached: "X-Cache: HIT"
If data is fetched from the origin: "X-Cache: MISS"
Configuration
Modify cache TTL (Time-To-Live) in index.js as needed:
```
this.cache = new Nodecache({ stdTTL: 3200 });
```
`Logs`
Real-time logs indicate cache status:

- Cache miss ---> fetching from server
- Cache hit --> fetching from temporary cache.
  
`Dependencies`
- Express – For handling HTTP requests
- Node-cache – For efficient caching
- Axios – For fetching data from origin
- Yargs – For command-line argument parsing
  
`License`
This project is licensed under the Apache License 2.0.

