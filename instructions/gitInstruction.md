This guid about your actions when you use GitHub VCS(Version Control System).

## Credentials

1. You can change you name and email which display in the author's column in the commits
   * ```git config --global user.name "Mona Lisa"```
   * ```git config --global user.email "mona.lisa@gmail.com"``` 
2. I recommend(you don't have to do it). I usually don't save credential(username and password) in IDE or OS. I always enter username and password before push codes. It allows me to think about it again. Am I doing it right?

## GitHub branches 
A lot of developers usually work on the one project so there is guidance 'how to work in a team'. 
* We're dividing all work into the tasks 
* Each task does own branch

Create the branch on your local machine and switch in this branch :

```git checkout -b <name_of_your_new_branch>```

##Push code to GitHub
1. ```git pull``` (get the actual code from GitHub)
2. Do some changes into code(by IDE or text editor)
3. ```git status``` (you can see your changes by this command)
4. Added files to git
   * ```git add -A``` stages all changes
   * ```git add .``` stages new files and modifications, without deletions
   * ```git add -u``` stages modifications and deletions, without new files
   * Also you can do it by IDE(Intellij Idea or others)
5. Do commit
   * ```git commit -m <message>```
   * or you will an able to do commit by IDE
6. Push changes
   * ```git push origin <name of branch>```
