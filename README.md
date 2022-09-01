Steps to create a deploy with React:

1- Create a new repository on GitHub, it must be public

2- Install gh-pages in your react project with the command

nmp install gh-pages --save-dev

3- Go into package.json and add the following in the configuration

In the first section
"homepages": "http://{username-github}.github.io/{repository-name}"

In the scripts section.
"predeploy": "npm run build",
"deploy": "gh-pages -d build": "gh-pages -d build".

4- Then run the following commands in the project

npm run build
npm run deploy

5- Next, you must upload the project to the repository, so you must type the following commands

git init 

git remote add origin https://github.com/{username-github}/{repository-name}.git

git add .
git commit -m "{description}"
git pull
git push -u source master

Finally, enter the address provided in GitHub Pages in your browser 

https://{username-github}.github.io/{repository-name}/
