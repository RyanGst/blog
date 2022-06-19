---
title: Configuração Ambiente React Native
published: true
datePublished: 1655655988000
author: Ryan Lucas
tags:
  - React Native
authorPhoto: /img/profile.png
bannerPhoto: /img/setup-rn.png
thumbnailPhoto: /img/setup-rn.png
canonicalUrl: https://ryangst.me/blog/configuracao-ambiente-rn
---

# Configuração Ambiente React Native no Linux

O objetivo desse documento é cobrir um passo a passo de como configurar as ferramentas de desenvolvimento e debug para React Native.

> Para configurar o seu sistema para executar aplicações React Native iOS é necessário um sistema com MacOS. **Não é possível configurar um ambiente IOS no Windows/Linux**


## Dependências

Para configurar o ambiente Android no Linux precisamos de três principais instalações

- Node.js >= 14
- JDK 11 (LTS)
- Android Studio e dependências (Android SDK).

### Instalando Node.js: 

```bash
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs
```

Também é possível gerencial múltiplas versões do node.js usando [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm#about)

```bash
node -v # >= 14.x.x
npm -v 
```

### Instalando JDK (Java Development Kit)

```bash
sudo add-apt-repository ppa:openjdk-r/ppa
sudo apt-get update
sudo apt-get install openjdk-11-jdk
```

Conferindo a instalação:

```bash
java -version # openjdk version "11.0.15"
```

### Android Studio

#### **Preparando o sistema para instalação:**


1. Crie uma pasta em um local desejado para instalação da SDK. 
   1. Ex:
`mkdir ~/Android/Sdk`

2. Mantenha o caminho de instalação da JDK:
   1. Ex: `/usr/lib/jvm/java-11-openjdk-amd64`

3. Com esses caminhos, precisamos configurar algumas variáveis ambiente em nosso sistema. Procure pelo `~/.bashrc`, e adicione essas seis linhas no arquivo:
   
```bash
export JAVA_HOME=CAMINHO_ANOTADO_COM_SUA_VERSÃO
export ANDROID_HOME=~/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

#### **Baixando e instalando Android Studio:**

##### **1. Configuração manual:**


Acesse a página do [Android Studi](https://developer.android.com/studio/) e clique no botão Download Android Studio (Versão que uso é `Android Studio Chipmunk | 2021.2.1 Patch 1 for Linux 64-bit`).

Vá até a pasta de download e abra o arquivo tar.gz que deve possuir uma pasta "android-studio" dentro. Extraia essa pasta em um local de preferência (Ex.: ~/ ou /opt/).

Após a extração, adicione a seguinte variável ambiente (assim como foi feito no passo anterior) no seu sistema:

```bash
export PATH=$PATH:/caminho-da-instalacao/bin
```

Isso permite a execução do Android Studio pelo terminal com o comando `studio.sh`.

Agora, atualize a sessão do terminal (fechando e abrindo novamente ou `source ~/.bashrc`) e execute o seguinte comando:

```bash
studio.sh
```

##### **2. Loja:**

Também é possível fazer a instalação do Android Studio via snap:

```bash
sudo snap install android-studio --classic
```

ou até mesmo via flatpack:

```bash
flatpak install flathub com.google.AndroidStudio
```


#### **Wizard de instalação:**

Os passos para instalação estão disponíveis em: https://developer.android.com/studio/videos/studio-install-linux.mp4?hl=pt-br