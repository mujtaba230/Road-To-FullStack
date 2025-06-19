Here's your professionally formatted "Data Structures & Algorithms Cheat Sheet" for clarity, maintainability, and quick revision:
🔹 Data Structures

 1. List
  Types:   (Singly, Doubly, Circular)
  In Python, lists are dynamic arrays.
    Common operations:   Append ($O(1)$ amortized), Insert/Delete ($O(n)$)

 2. Array
  Fixed-size container.
    Insertion/Deletion:   O(n)
    Access:   O(1)

3. Stack
    LIFO   (Last-In, First-Out)
    Operations:   `push`, `pop`, `peek`
    Use Cases:   Expression parsing, backtracking, undo functionality

4. Queue
    FIFO   (First-In, First-Out)
    Operations:   `enqueue`, `dequeue`
    Variants:   Circular Queue, Deque, Priority Queue

5. Maps (Hash Tables)
  Key-value storage.
    Collision Resolution:  
      Chaining (using linked lists)
        Open Addressing:  
          Linear Probing
          Quadratic Probing
          Double Hashing


🔹 Algorithms

1. Divide and Conquer
    Use Case:   Problems with independent subproblems.
    Examples:   Merge Sort, Quick Sort, Binary Search
    Time Efficiency:   $O(\log n)$ improvements
    Caveat:   Recursive overhead

2. Greedy Approach
    Use for:   Optimization problems
    Principle:   Choose locally optimal at every step.
    Works When:   Greedy-choice property + Optimal substructure hold
    Examples:   Dijkstra, Kruskal’s, Prim’s, Huffman Coding, Activity Selection
    Fails In:   Coin Change, 0/1 Knapsack

3. Recursion
    Best For:   Trees, Backtracking, Math
    Examples:   Tree Traversals (Inorder, Preorder, Postorder)
    Time Complexity:   Depends on branching factor
    Caveat:   Stack Overflow risk if base case not handled

4. Optimization Techniques
  Top-Down (with recursion)
  Bottom-Up (Dynamic Programming tabulation)
    Memoization:   Store results of expensive function calls
    Example:   LCS (Longest Common Subsequence)


🔹 Searching Algorithms

  Linear Search   | $O(1)$      | $O(n)$       | $O(1)$  | Unsorted data |
  Binary Search   | $O(1)$      | $O(\log n)$  | $O(1)$  | Sorted data only |



🔹 Sorting Algorithms

    Bubble Sort  
      Best: $O(n)$
      Worst: $O(n^2)$
      Space: $O(1)$
      Stable: Yes
      Notes: Swaps adjacent elements.

    Selection Sort  
      Best: $O(n^2)$
      Worst: $O(n^2)$
      Space: $O(1)$
      Stable: No
      Notes: Selects minimum from unsorted portion.

    Insertion Sort  
      Best: $O(n)$
      Worst: $O(n^2)$
      Space: $O(1)$
      Stable: Yes
      Notes: Efficient if nearly sorted.

    Merge Sort  
      Best: $O(n \log n)$
      Worst: $O(n \log n)$
      Space: $O(1)$  (implies extra space if not in-place)
      Stable: Yes
      Notes: Divide and Merge strategy.

    Quick Sort  
      Best: $O(n \log n)$
      Worst: $O(n^2)$
      Space: $O(\log n)$
      Stable: No
      Notes: In-place, uses a pivot.

    Heap Sort  
      Best: $O(n \log n)$
      Worst: $O(n \log n)$
      Space: $O(1)$
      Stable: No
      Notes: In-place, based on heap structure.

 🧹 Clean Code Principles (Robert C. Martin)

✅ Naming (Chapter 2)
  Use   clear and descriptive names  .
  Prefer pronounceable and searchable identifiers.
  Maintain   consistent vocabulary   throughout the codebase.
  Avoid type prefixes like `strName`, `iValue`.
  Add   contextual clarity   to prevent ambiguity.
  Good names eliminate the need for redundant comments.

✅ Formatting (Chapter 5)
  Code should read like a story.
  Keep functions short and focused (ideally under 20 lines).
  Use blank lines to   separate logical sections  .
  Limit line length (~120 characters).
  Follow consistent   indentation and team conventions  .
  Group related code vertically for better readability.
  Clean formatting improves both readability and maintainability.


⚙️ Error Handling in JavaScript

  Use `try...catch` for synchronous code.
  For asynchronous code, use `.catch()` or `try...await...catch`.
  Always handle potential exceptions (network errors, JSON parse errors, etc.)
  Avoid empty `catch` blocks.
  Log   meaningful error messages  .
  Gracefully degrade the user experience on errors.
