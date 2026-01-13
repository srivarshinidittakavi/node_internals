# Node.js Architecture

Node.js is a runtime environment that allows JavaScript to run outside the browser. It is designed for building fast, scalable, and non-blocking network applications. Its architecture is event-driven and asynchronous by nature.

---

## JavaScript Engine (V8)

* V8 is the JavaScript engine developed by Google and written in C++.
* It compiles JavaScript code directly into machine code instead of interpreting it line by line.
* This compilation makes execution very fast.
* Node.js uses V8 to execute JavaScript code on the server side.
* V8 also handles memory management using garbage collection.

---

## Node.js Core APIs

* Core APIs are built-in modules provided by Node.js.
* Examples include `fs`, `http`, `path`, `os`, `crypto`, and `events`.
* These APIs allow interaction with the file system, network, operating system, and other system-level features.
* They are written mostly in JavaScript, with some parts implemented in C++.

---

## Native Bindings

* Native bindings act as a bridge between JavaScript and C++ code.
* They allow JavaScript to access low-level system functionality.
* Node.js core APIs use native bindings to communicate with the underlying C++ libraries.
* This is how JavaScript code can perform operations like file I/O or networking efficiently.

---

## Event Loop

* The event loop is the heart of Node.js asynchronous behavior.
* It continuously checks for pending tasks and executes them when the call stack is empty.
* Instead of blocking the main thread, long-running operations are handled asynchronously.
* The event loop ensures high performance and scalability.

---

## libuv

### What is libuv?

* libuv is a C library that provides asynchronous I/O capabilities.
* It is used internally by Node.js to manage non-blocking operations.
* libuv works across different operating systems, providing a consistent API.

### Why Node.js needs libuv

* JavaScript itself does not handle low-level system operations.
* Node.js needs libuv to manage file system access, networking, timers, and async tasks.
* libuv enables Node.js to remain single-threaded while still handling heavy I/O efficiently.

### Responsibilities of libuv

* Managing the event loop
* Handling asynchronous I/O operations
* Providing a thread pool
* Managing timers and callbacks
* Supporting cross-platform behavior

---

## Thread Pool

### What is a thread pool?

* A thread pool is a collection of worker threads used to perform background tasks.
* These threads handle operations that cannot be performed asynchronously by the OS.

### Why Node.js uses a thread pool

* Some tasks are CPU-intensive or blocking in nature.
* Executing them on the main thread would block the event loop.
* The thread pool allows these tasks to run in parallel without affecting responsiveness.

### Operations handled by the thread pool

* File system operations (read/write)
* Cryptographic operations
* Compression and decompression
* DNS lookups

---

## Worker Threads

### What are worker threads?

* Worker threads are separate JavaScript execution threads.
* They allow running JavaScript code in parallel.
* Each worker has its own event loop and memory space.

### Why are worker threads needed?

* Node.js main thread is not suitable for CPU-heavy tasks.
* Worker threads help offload heavy computations.
* They improve performance for CPU-bound applications.

### Difference between thread pool and worker threads

* Thread pool threads are managed internally by libuv and cannot run JavaScript directly.
* Worker threads are explicitly created by developers and can execute JavaScript code.
* Thread pool is mainly for I/O-related tasks, while worker threads are for CPU-intensive logic.

---

## Event Loop Queues

### Macro Task Queue

* Contains tasks scheduled for future execution.
* Examples include:

  * `setTimeout`
  * `setInterval`
  * I/O callbacks
  * `setImmediate`

### Micro Task Queue

* Contains tasks that must be executed immediately after the current operation.
* Examples include:

  * `Promise.then()`
  * `Promise.catch()`
  * `process.nextTick()`

### Execution Priority

* Micro task queue has higher priority than macro task queue.
* After executing the current call stack, Node.js first clears the micro task queue.
* Only after that does it move to the macro task queue.

---

## Summary

* Node.js uses a single-threaded, event-driven architecture.
* V8 executes JavaScript efficiently.
* libuv enables non-blocking I/O and async behavior.
* Thread pool and worker threads help manage heavy tasks.
* Event loop queues control execution order and performance.
