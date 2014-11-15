010php.nl
===================
This is the 010php main website repository. Many features are yet to be build.  Feel free to fork and help us out ;-).

----------
Prerequisites
-------------
Make sure you have the following tools installed:

 - Virtualbox version 4.3.10 or higher ([download](https://www.virtualbox.org/wiki/Downloads))
 - Vagrant 1.6.5 or higher ([download](https://www.vagrantup.com/downloads.html))
 - Ansible 1.7.2 or higher ([installation instructions](http://docs.ansible.com/intro_installation.html))
 - NFS tools (sudo apt-get install nfs-common) *

> *Windows does not support NFS. You could instead setup this box using other sharing options. We only share the /web folder since [Grunt](http://gruntjs.com/) will compile all output files into this directory.

Launching the development environment
-------
Since we are using Vagrant this should be as easy as using `vagrant up` after you cloned the repository.

Known issues
-------

**Error**

    GATHERING FACTS *************************************************************** 
    fatal: [192.168.33.100] => SSH encountered an unknown error during the connection. We recommend you re-run the command using -vvvv, which will enable SSH debugging output to help diagnose the issue
**Solution**
It may occur that Vagrant will try to provision the machine while the machine is not yet ready to recieve connections. Try running `vagrant provision`.