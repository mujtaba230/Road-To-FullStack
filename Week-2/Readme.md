
---

### 🔹 **Data Structures**

**1. List (Python)**

* Types: Singly, Doubly, Circular
* Operations: `append` O(1), `insert/delete` O(n)

**2. Array**

* Fixed size, O(1) access
* Insert/Delete: O(n)

**3. Stack (LIFO)**

* Ops: `push`, `pop`, `peek`
* Use: Parsing, backtracking, undo

**4. Queue (FIFO)**

* Ops: `enqueue`, `dequeue`
* Types: Circular, Deque, Priority Queue

**5. Maps / Hash Tables**

* Key-value pairs
* Collision Handling: Chaining, Open Addressing (Linear, Quadratic, Double Hashing)

---

### 🔹 **Algorithms**

**1. Divide & Conquer**

* Use: Independent subproblems
* Examples: Merge Sort, Quick Sort, Binary Search

**2. Greedy**

* Principle: Local optimum = Global optimum
* Works When: Greedy-choice + Optimal substructure
* Use: Dijkstra, Kruskal, Prim
* Fails: 0/1 Knapsack, Coin Change

**3. Recursion**

* Best for: Trees, Backtracking
* Risk: Stack overflow if no base case

**4. Optimization**

* Top-Down (Memoization), Bottom-Up (DP Tabulation)
* Example: LCS

---

### 🔹 **Searching**

| Algorithm     | Best | Worst    | Data Type |
| ------------- | ---- | -------- | --------- |
| Linear Search | O(1) | O(n)     | Unsorted  |
| Binary Search | O(1) | O(log n) | Sorted    |

---

### 🔹 **Sorting**

| Algo           | Best       | Worst      | Stable | Space    | Notes                  |
| -------------- | ---------- | ---------- | ------ | -------- | ---------------------- |
| Bubble Sort    | O(n)       | O(n²)      | Yes    | O(1)     | Adjacent swaps         |
| Selection Sort | O(n²)      | O(n²)      | No     | O(1)     | Min from unsorted      |
| Insertion Sort | O(n)       | O(n²)      | Yes    | O(1)     | Good for nearly sorted |
| Merge Sort     | O(n log n) | O(n log n) | Yes    | O(n)     | Divide and merge       |
| Quick Sort     | O(n log n) | O(n²)      | No     | O(log n) | Pivot-based, in-place  |
| Heap Sort      | O(n log n) | O(n log n) | No     | O(1)     | Uses heap, in-place    |

---

## 🧹 **Clean Code Principles (Robert C. Martin)**

**🔸 Naming**

* Descriptive, searchable, and consistent
* Avoid prefixes like `strName`, use contextual clarity

**🔸 Formatting**

* Small, focused functions
* Use blank lines for logical separation
* Keep line length \~120 chars
* Group related code vertically

---

# ✅ **JavaScript Error Handling Cheat Sheet**

---

### 🔹 **1. try / catch / finally**

```javascript
try {
  riskyCode();
} catch (err) {
  console.log(err.message);
} finally {
  console.log("Always runs");
}
```

---

### 🔹 **2. throw (Custom Errors)**

```javascript
if (age < 18) throw new Error("Underage");
```

Creates an **Error object** with `name` and `message`.

---

### 🔹 **3. Common Error Types**

| Name             | When It Occurs           |
| ---------------- | ------------------------ |
| `EvalError`      | Improper use of `eval()` |
| `RangeError`     | Number out of range      |
| `ReferenceError` | Undefined variable       |
| `SyntaxError`    | Invalid code syntax      |
| `TypeError`      | Invalid type operation   |
| `URIError`       | `decodeURI()` issues     |

---

### 🔹 **4. Input / HTML Validation**

**HTML**:

```html
<input type="email" required />
<input type="number" min="18" />
```

**JS**:

```javascript
if (!email.includes("@")) throw new Error("Invalid email");
```

---

### 🔹 **5. Error-First Callbacks**

```javascript
fs.readFile("file.txt", (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});
```

---

### 🔹 **6. Callback Hell**

Nested callbacks become unreadable:

```javascript
task1(() => {
  task2(() => {
    task3(() => {
      // ...
    });
  });
});
```

✅ **Solutions**:

* Use **Promises**
* Use **Async/Await**
* Break into modular functions

