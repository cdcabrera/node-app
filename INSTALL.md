# Installation

Just starting out and managed to only find a bunch of 
blog posts that always seem about halfway complete 
before they start, this is for you... 


## Install the tools...

You can choose to follow or NOT follow these directions, DISCLAIMER: ```If you mess up your computer that's on you...```

Mac Installation...

1) (OPTIONAL) Open the Terminal application and run:
   ```bash
   $ git -v
   ```
   You should automatically be asked if you want to install the developer tools, hit ```ok```.
   
   > ALTERNATIVE: If you decided you didn't want Git, no problem, just continue on.

2) [To setup NodeJs, go here and download it... and run the package installer for MacOS Installer (.pkg)](https://nodejs.org/en/)
   Install it like you would any Mac application.

3) [To setup Docker, go here and download it... and run the package installer for MacOs Installer](https://www.docker.com/)
    Install it like you would any Mac application.


## Install the app on a Mac...

Recommending that you fork and clone the repo locally, but you don't need to, instead just follow the ```ALTERNATIVEs``` listed below any steps.

1) (OPTIONAL) Open the Terminal and clone the repo to your computer
    ```bash
    $ git clone https://github.com/cdcabrera/node-app.git
    ```
    
    > ALTERNATIVE: Just download the repository ```zip``` package from GitHub, open/expand it, then start at step 2 instead.

2) Next use the Terminal to navigate over to the downloaded repository and we'll install the Node packages.
    ```bash
    $ cd [PATH-TO-REPOSITORY-YOU-CAN-DRAG-AND-DROP-IT]
    $ npm install
    ```

3) You're done! Next up, starting the application.


## Run/Start the Basic Application

1) From the Terminal, make sure you're in the downloaded repository directory and...
    ```bash
    $ npm start
    ```
    
    This should run the local development configuration. 
    