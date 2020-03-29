# servers-networking-digitalocean-firewall

## Dependencies
- Requires DOCTL https://github.com/digitalocean/doctl

## Keys
- Requires a Digital Ocean Access Token https://www.digitalocean.com/docs/apis-clis/api/create-personal-access-token/

### Settings
- All ports are closed, except for: 22, 80 and 443


### Manual Install
1. Go to [Digital Ocean Firewalls](https://cloud.digitalocean.com/networking/firewalls)
2. Set these rules

**INBOUND RULES:**

|  Type | Protocol | Port Range |        Sources         |
|-------|----------|------------|------------------------|
| SSH   | TCP      |         22 | `All IPv4`, `All IPv6` |
| HTTP  | TCP      |         80 | `All IPv4`, `All IPv6` |
| HTTPS | TCP      |        443 | `All IPv4`, `All IPv6` |

**OUTBOUND RULES:**

|   Type  | Protocol | Port Range |        Sources         |
|---------|----------|------------|------------------------|
| ICMP    | ICMP     |            | `All IPv4`, `All IPv6` |
| All TCP | TCP      | All ports  | `All IPv4`, `All IPv6` |
| All UDP | TCP      | All ports  | `All IPv4`, `All IPv6` |
