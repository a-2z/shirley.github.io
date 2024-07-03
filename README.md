## 🚀 Quick start

## Setting up your environment
This project uses [Gatsby](https://www.gatsbyjs.com/), a lightweight, React-based framework for building static websites. To get started with Gatsby, do the following:
### Windows
```
# Install fast node package manager
winget install Schniz.fnm

# Open a *new* powershell terminal and run
fnm use --install-if-missing 20
```
Now, you should have node installed locally. To add it to your search path, modify your PowerShell profile with
```
# Open profile file in any text editor, code is vscode.
code $profile
# Append the following to your profile
fnm env --use-on-cd | Out-String | Invoke-Expression
```
Install Gatsby
```
npm install -g gatsby-cli
```

### All other platforms
To install Node.js, please follow this [guide](https://nodejs.org/en/download/package-manager).

Install Gatsby
```
npm install -g gatsby-cli
```

## Getting Started with Development
1. Install an IDE of your choice--preferably one with good JS/React support.
2. Clone this repository
3. `cd shirley.github.io`
4. Install or Update all dependencies with `npm install`
5. Start a development server with `gatsby develop`
6. Make your changes!

## Submitting changes
1. Compile the code for production with `npm run build`
2. Commit your changes
3. Open a pull request
