# applications-asciinema
> `selfhosted-asciinema-install.sh` should install asciinema.
> `selfhosted-asciinema-remove.sh` should remove asciinema.

## Pre-requisites
For now, I'll point `asciinema.selfhosted.com` to the IP.

## Steps:

1. Make sure server-setup has run in the past.
2. Make sure applications were run, so all dependencies are there.
3. Make sure NGINX is installed with a wildcard SSL.

4. Install asciinema in a container.
    - make sure no conflicts, etc.
    - restart nginx and any services where necessary

5. Make sure a separate script can remove Kutt.

### List in the scripts any additional requirements.
For example, "requires SMTP setup"

### List what was done, or any issues or hiccups. 
For example

#### Issue: recordings will not play.
Make sure that you have ______ 

![Asciinema Error](./gifs/asciinema-error-wont-play.gif)
