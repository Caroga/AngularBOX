AngularBOX
===================
The goal of AngularBOX is to provide you with an easy set of tools and libraries already being used and compiled into your application. This way you can just launch your vagrant box and start development of your application. Below are all used libraries and tools.

Prerequisites
-------------
Make a new entry in your hosts file to ensure that your browser can resolve the development domain:

 - 192.168.33.100	dev.angularbox

Make sure you have the following tools installed:

 - Virtualbox version 4.3.10 or higher ([download](https://www.virtualbox.org/wiki/Downloads))
 - Vagrant 1.6.5 or higher ([download](https://www.vagrantup.com/downloads.html))
 - Ansible 1.7.2 or higher ([installation instructions](http://docs.ansible.com/intro_installation.html))
 - NodeJS 0.10.33 or higher (`sudo apt-get install nodejs` or [download](http://nodejs.org/))*
 - NPM 1.3.10 or higher (`sudo apt-get install npm` or [download](http://nodejs.org/))*
 - Bower and Grunt(-cli) (`npm install -g grunt-cli bower`)

> * Installing NodeJS might takes you to add the NodeSource repository for the **latest** releases. Simple follow these instructions: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server 

Optional

 - NFS tools (`sudo apt-get install nfs-common`)*

> * Windows does not support NFS. You could instead setup this box using other sharing options. We only share the /web folder since [Grunt](http://gruntjs.com/) will compile all output files into this directory.


Launching the development environment
-------
Since we are using Vagrant this should be as easy as using `vagrant up` after you cloned the repository.

Root directory structure
-------
 - **web**: contains built results, ready to be deployed in a target environment.
 - **src**: contains our application's source code.
 - **test**: contains accompanying automated tests.
 - **vendor**: contains third party dependencies.

Known issues
-------

**Error**

    GATHERING FACTS *************************************************************** 
    fatal: [192.168.33.100] => SSH encountered an unknown error during the connection. We recommend you re-run the command using -vvvv, which will enable SSH debugging output to help diagnose the issue
**Solution**
It may occur that Vagrant will try to provision the machine while the machine is not yet ready to recieve connections. Try running `vagrant provision`.