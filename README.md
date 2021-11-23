<p align="center">
  <img src="https://user-images.githubusercontent.com/35788699/124201339-cab12c80-daa5-11eb-9e76-99ed1a626529.png" alt="Logo Cropped" width="256" height="256">
</p>
<p align="center">
  <a href="https://github.com/AgoraCloud/ui-edu/issues"><img src="https://img.shields.io/github/issues/AgoraCloud/ui-edu" alt="GitHub issues"></a> <a href="https://github.com/AgoraCloud/ui-edu/blob/main/LICENSE"><img src="https://img.shields.io/github/license/AgoraCloud/ui-edu" alt="GitHub license"></a> <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/AgoraCloud/ui-edu"> <img src="https://img.shields.io/github/release-date/AgoraCloud/ui-edu" alt="GitHub Release Date"> <img alt="Docker Pulls" src="https://img.shields.io/docker/pulls/agoracloud/ui-edu"> <img src="https://img.shields.io/github/workflow/status/AgoraCloud/ui-edu/main_versioned_push" alt="GitHub Workflow Status"> <img src="https://img.shields.io/github/contributors/AgoraCloud/ui-edu" alt="GitHub contributors"> <img src="https://img.shields.io/github/commit-activity/m/AgoraCloud/ui-edu" alt="GitHub commit activity">
</p>

AgoraCloud is an open source and self hosted cloud development platform that runs in Kubernetes.

This repository contains an alternative AgoraCloud UI that is tailored towards the education sector.

## Requirements

node version > 10

## Install

```bash
npm i
```

## Run Locally

Ensure that no other app is using port 3000

```bash
npm run start
```

## Build

```bash
npm run build
```

# Dev Server

Ensure docker and docker-compose are installed

Fill in the values in accordance with dev/docker-compose.yml

```bash
cd ./dev/ docker-compose up -d
```

## Proxy

To set the proxy target, set the `PROXY_TARGET` environment variable:

```bash
export PROXY_TARGET=https://agoracloud.mydomain.com
```

## Update Dev Server

```bash
docker system prune -a
```

## Remove Volumes

Incase you need to remove your account

```bash
docker-compose down
docker volume prune
```

# Testing

## Verify User

```bash
sudo docker exec -it <container_name> sh

use test

db.tokens.insertOne({"type": "VERIFY_ACCOUNT", "user": ObjectId(<USER ID>), "expiresAt": new Date("2021-01-31T20:47:03.468Z")})
```
