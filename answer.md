# Understanding Project Management in NodeJS

## a. Package Managers

### What is a package manager?

A package manager is a tool that helps developers install, update, remove, and manage external libraries (also called packages or dependencies) that a project needs. Instead of writing everything from scratch, we reuse existing code written by others and manage it easily using a package manager.

Example:
If a backend project needs to handle HTTP requests, we can install an existing package like express instead of building everything manually.

### Why do we need package managers in backend development?

In backend development, applications depend on many libraries for tasks such as routing, database connection, authentication, logging, and security. A package manager helps to:

* Save development time by reusing reliable libraries
* Maintain consistent versions of dependencies
* Easily share the project with other developers
* Automate installation of required packages

### Problems faced if package managers are not used

If package managers are not used, developers may face several issues:

* Manual downloading and copying of libraries
* Version mismatch between team members
* Difficulty in updating or removing libraries
* Hard to reproduce the same project setup on another system
* Increased chances of bugs and dependency conflicts

---

## b. NPM (Node Package Manager)

### What is NPM?

NPM is the default package manager for Node.js. It is used to install and manage JavaScript packages required for Node.js applications. NPM comes bundled with Node.js, so it is automatically available after installing Node.js.

### Why is NPM important for Node.js applications?

NPM is important because it:

* Provides access to a huge online registry of open-source packages
* Manages project dependencies efficiently
* Helps maintain consistent project structure
* Supports scripts for running tasks like testing and building

Without NPM, managing Node.js projects would be slow and error-prone.

### How NPM helps in managing dependencies

NPM keeps track of all dependencies in a file called package.json. When we install a package using NPM, it:

* Downloads the package
* Stores it inside the node_modules folder
* Updates package.json with dependency details
* Locks exact versions using package-lock.json

Example command:
npm install express

---

## c. Backend Project Initialization

### What is the command used to initialize a backend (Node.js) project?

The command used to initialize a Node.js backend project is:

npm init

### Explain what npm init and npm init -y do

npm init:

* Starts an interactive process
* Asks questions like project name, version, description, entry file, author, and license
* Creates a package.json file based on the answers

npm init -y:

* Skips all questions
* Automatically creates package.json with default values
* Useful when you want to quickly set up a project

---

## d. Files and Folders Created After Project Initialization

### package.json

package.json is the most important file in a Node.js project. It:

* Stores project metadata (name, version, description)
* Lists dependencies and their versions
* Contains scripts to run the project
* Helps others understand how the project works

### node_modules

node_modules is a folder that contains all installed dependencies. Each package installed using NPM is stored here along with its internal dependencies.

This folder can become very large and is automatically generated.

### package-lock.json

package-lock.json stores the exact versions of all installed dependencies and their sub-dependencies. It ensures that:

* The same dependency versions are installed on every machine
* The application behaves consistently across environments

---

## GitHub Best Practices

### Files/folders that should not be pushed to GitHub and why

* node_modules: It is very large and can be recreated using npm install
* .env files: They may contain sensitive information like API keys and passwords

These files are usually added to .gitignore.

### Files that must be committed and why

* package.json: Required to know project details and dependencies
* package-lock.json: Ensures consistent dependency versions
* Source code files (like app.js): Contains the actual application logic

Committing these files allows others to clone the project and run it successfully.
