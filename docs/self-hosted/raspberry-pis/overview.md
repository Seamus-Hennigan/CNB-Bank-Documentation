# Raspberry Pis — Overview

## Table of Contents

- [Specs](#specs)
    - [Raspberry Pi 1](#raspberry-pi-1)
    - [Raspberry Pi 2](#raspberry-pi-2)
- [Diagram's](diagram.md)
- [Setup](setup.md)

## Specs

### Raspberry Pi 1

- **Model:** Raspberry Pi 5
- **RAM:** 16 GB
- **Storage:** 256 GB NVMe SSD (via M.2 HAT)
- **Role:** Main server — runs K3s, PostgreSQL, Prometheus/Grafana, and the backup job

### Raspberry Pi 2

- **Model:** Raspberry Pi 3 B+
- **RAM:** 1 GB
- **Storage:** microSD (stock, no additions)
- **Role:** Funnel node — Cloudflare Tunnel entry point and metrics forwarding to Pi 1
