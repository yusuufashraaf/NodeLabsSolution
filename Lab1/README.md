# 🧪 Lab: JavaScript Warm-Up & Node.js File Operations

This lab combines two important areas of JavaScript development:

1. **Core JavaScript practices** with array methods and object manipulation
2. **File operations in Node.js** (sync and async) using the `fs` module

---

## 📁 Included Files

| File                | Description                                                     |
| ------------------- | --------------------------------------------------------------- |
| `warmup.js`         | JavaScript array/object manipulation exercises                  |
| `fileOperations.js` | Sync and async file handling for student data (`students.json`) |
| `students.json`     | Data file used to store student records (auto-created)          |

---

## Sync vs Async File Operations

| **Aspect**           | **Synchronous (Sync)**                     | **Asynchronous (Async)**                       |
| -------------------- | ------------------------------------------ | ---------------------------------------------- |
| **Execution**        | Blocking (waits for operation to complete) | Non-blocking (continues other tasks)           |
| **Complexity**       | Simple                                     | More complex |
| **Performance**      | Poor for large-scale apps                  | High performance under load                    |
| **Use Case**         | CLI tools, scripts                         | Web servers, real-time apps                    |
| **Example Function** | `fs.readFileSync()`                        | `fs.promises.readFile()` or `fs.readFile()`    |
