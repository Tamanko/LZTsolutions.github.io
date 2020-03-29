# applications-kutt
> `selfhosted-kutt-install.sh` should install kutt.
> `selfhosted-kutt-remove.sh` should remove kutt.

## Pre-requisites
For now, I'll point `kutt.selfhosted.com` to the IP.

## Steps:

1. Make sure server-setup has run in the past.
2. Make sure applications were run, so all dependencies are there.
3. Make sure NGINX is installed with a wildcard SSL.

4. Install Kutt in a container.
    - make sure no conflicts, etc.
    - restart nginx and any services where necessary

5. Make sure a separate script can remove Kutt.

### List in the scripts any additional requirements.
For example, "requires SMTP setup"
