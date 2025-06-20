
  🔹 Mutability in Python

| Type          | Nature               | Examples              | Notes                          |
| ------------- | -------------------- | --------------------- | ------------------------------ |
|  Mutable    | State can be changed | `list`, `dict`        | Can be modified after creation |
|  Immutable  | Cannot be updated    | `tuple`, `str`, `int` | Faster, thread-safe, hashable  |



  🔹 Programming Paradigms

  1.  Imperative Programming Paradigm 

*  Describes how to perform tasks using statements 
*  Mutable state  is allowed

   Subtypes:

*  Procedural : Code organized into procedures/functions
*  Object-Oriented (OOP) : Uses classes, objects, encapsulation, inheritance
*  Parallel Programming : Multiple processes running simultaneously



  2.  Declarative Programming Paradigm 

*  Describes what to do , not how
* Focuses on  immutability  and  expression evaluation 

   Subtypes:

*  Functional : Pure functions, no side-effects (`map`, `filter`)
*  Logical : Based on rules and facts (e.g., Prolog)
*  Database-Driven : Uses query-based logic (e.g., SQL)



  🔹 Go Language Essentials

  Key Concepts:

*  Goroutines : Lightweight threads managed by Go runtime
*  Concurrency (not parallelism) : Tasks progress independently, not necessarily at the same time
*  Go Scheduler : Manages goroutines using a logical model:  Goroutine ⇨ Machine ⇨ Processor 
*  Garbage Collection : Automatic memory management

  Use Cases:

* CLI tools
* Internal backend services
* High-performance, concurrent network applications



  🔹 Rust Language Essentials

  Strengths:

*  Compile-time safety  (memory, thread-safety)
*  Zero-cost abstractions 
*  Manual memory management  via ownership, borrowing, lifetimes
* Excellent for performance-critical systems

  Weaknesses:

*  Steep learning curve 
*  Manual memory handling  can be error-prone
*  Slower compilation  in large projects

  Memory:

* Allows fine-grained control over  stack  and  heap 
* Uses  smart pointers  (like `Box`, `Rc`, `Arc`) for safer memory operations



  🔹 JavaScript Runtime Model

*  Single-threaded  execution model
* Uses  Event Loop  for concurrency:

  * Handles async operations via  callbacks ,  promises , and  async/await 
  * Non-blocking I/O despite single-thread



  🔹 Git Commands (Quick Reference)

  🔧 Basic Workflow

```bash
git status              Check current status
git add .               Stage all changes
git commit -m "msg"     Commit staged changes
git push -u origin main    Push to remote
```

  🔁 Branching & Switching

```bash
git branch                      List branches
git branch feature/login        Create a new branch
git switch feature/login        Switch to the branch
```

  🔄 Syncing with Remote

```bash
git pull origin main --rebase      Pull and rebase remote changes
git push -u origin main --force    Force-push local changes to remote
```

  🔙 Revert & Reset

```bash
git revert <commit_hash>        Revert a commit (creates new commit)
git reset --hard                Reset to last committed state
```

  📦 Stashing

```bash
git stash -m "message"          Save uncommitted changes
git stash list                  List all stashes
git stash pop                   Apply last stash and remove
git stash drop stash@{2}        Delete specific stash
```

  🔍 History

git log                         View commit history
```
