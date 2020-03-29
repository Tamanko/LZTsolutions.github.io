# networking-applications
> These applications should be installed globally on the host with the correct privileges (root/user/etc)

## Dependencies:
- SSL requires an API token from either Cloudflare, AWS or any other host.
- **API KEYS must be stored as Github Secrets**

## Github Actions
- In order to execute properly, a Github Action must check and verify that the key is there.

### Install NGINX
1. run `sudo apt install nginx`

### Install Certbot
2. run `sudo apt install certbot`
3. Install certbot plugins

#### Install Certbot Plugins
1. Make sure the righ

https://certbot-dns-cloudflare.readthedocs.io/en/stable/

### Generate wildcard SSL
> A wildcard SSL is needed because we will have multiple subdomians

#### OTHER APPS
- Trafik would go in here
