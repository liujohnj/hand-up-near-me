# GitHub Use Case Walk-through (for GitHub beginners)
The GitHub commands below are just the ones that I use for the particular use case described.  There probably are other ways of doing things (possibly more correctly); these are just the ones that I am using right now.  This guide is written for someone who understands what GitHub is but perhaps is not confident as to the right commands to use and is afraid of breaking something.  *Disclaimer:*  Up until a couple weeks ago, this described me.  Although I'm still a GitHub beginner, at least the fear has dissipated.

**Scenario:**  You are an existing collaborator on a GitHub repository, and on this GitHub repository you already have a remote (i.e., you can see it on GitHub.com) branch that's already been created named `my-branch`.  There is an existing codebase package on the `main` branch (but which in reality can be anywhere in GitHub) that you want to clone (i.e., download a copy of) onto you local machine (e.g., on you laptop).  You then want to make modifications to it locally and push changes to the remote `my-branch` branch.  You then can continue to work on this codebase, pushing my changes periodically, until you later are ready to make a merge pull request (i.e., request that your changes be incorporated into the `main` branch).  Although it should not matter, for the purposes of the steps below, you are on a Windows laptop and using Visual Studio Code.


**Steps:**
- On your local machine *that already has git installed on it*, from a terminal window inside Visual Studio Code or any terminal window (e.g., PowerShell), create a project folder that will contain all the files you want to download, e.g., C:\Users\John\projects\my-project.  
`> mkdir C:\Users\john\projects\my-project`
- Change directories into this new folder.  
`> cd C:\Users\John\projects\my-project`
- If you are in VS Code, it wouldn't hurt to make sure you open this new folder in the appropriate view so that you can see your file and folder structure in the left EXPLORER pane.
- Navigate to the page for the GitHub remote repository you desire to clone.  To the far right of the name of the branch, click on the green button labeled `Code`.  To the right of an HTTPS URL that appears just below, click on the clipboard icon to copy this URL to your clipboard.  This URL is the location of a .git folder that contains all the necessary information one requires to participate locally in version control for this repo.  On a side note, it does not matter what branch you are in when you click on the green button; there is only one .git folder for each repository.
-  Return to your terminal window and from the command line, clone the repository, e.g.:  
`> git clone https://github.com/liujohnj/hand-up-near-me.git`
- Now, if you check your directory, you will see a single folder (named the same as the repository) containing the cloned project.  Change directories into this folder.  
`> cd hand-up-near-me`
- After running the command below, you should see that there is only one branch listed, that of `*main`.  The * character signifies that this is the branch you are on right now (locally).  
`> git branch`
- Checkout your pre-existing branch.  
`> git checkout my-branch`
- Now, if you run `git branch` again, you will see that two branches are listed, `main` and `*my-branch`.  This time, the * appears in front of `my-branch` since you have switched to this branch.   If you check your directory, the files and folders will be the same since you have not modified anything yet.
- To switch back and forth, just run commands such as:  
`> git branch main`  
`> git branch my-branch`
- Make sure you only make edits while in your own branch locally.  Once you are done, you now are ready to start the process of uploading these changes to the remote repository.  Begin by checking the status of your change.  
`> git status`
- This will provide you with a list of files you modified.  If you are in VS Code, you may see these in the color red.
- You can prepare all these files for pushing with a single command.  
`> git add .`
- Alternatively, you could have singled out one or more certain files, e.g., `git add oneFile.c anotherFile.h`
- Now, if you run `git status`, the files you indicated you wanted to add will have their status changed (and may appear in green).
- Commit these files and provide a short Git message (e.g., 'Initial commit' if you are adding a new file or 'Add new setter function' if you are just modifying something).  I believe that the correct convention is to write the message in the imperative (e.g., 'Fix bug' and not 'Fixed bug').  The messages make more sense if you are making small commits frequently.  
` git commit -m 'Initial commit'`
- Push everything to the remote repository.  
`> git push`
- If you get an error message, assuming it makes sense, just follow the recommendation given to you, e.g., `git push --set-upstream origin alpha my-project/hand-up-near-me`.  You may or may not see this message and I am going off memory here.
- If you go look on GitHub.com, you will now see that your changes are pushed to your remote branch.
- Happy coding!

 I may add more use cases with more common GitHub commands as time goes on, like how to do a merge pull request for `main` or what to do when more than one person is working on the same branch.

 *Most definitely please let me know if you see any errors in the above instructions.*
