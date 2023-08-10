# ring ⚡
ring is a command line git helper for committing with different authors ⚡

## Installation ⚡
You can install easily with npm:

``npm i -g zap-ring``

## Setup ⚡
You can setup your git-related accounts by running the following commands and filling in your data:



``ring default --name "Example Name" --mail "mail@example.com" --pw "example_pwd"`` 
- this will setup a default user for all git related projects
  
``ring add --name "Example Name" --mail "mail@example.com" --pw "example_pwd" --alias "main"`` 
- this will add a new user to your local ring configuration

``ring use "main"`` 
- this will setup your selected git user for your current project

## Note ⚡
**Ring will modify your global git configuration!** If you're unsure about your currently setup git users on your machine, make sure to have a look at your
global git installation and maybe make a backup of your current files, if you want to go back to your "vanilla" git installation.

## Support ⚡
Make sure to label your questions in the issues section of this repo with the "question" tag!
