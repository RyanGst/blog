---
author: Ryan Machado
title: 🇺🇸 How to install Flutter correctly using ASDF
slug: installing-flutter-asdf
pubDatetime: 2025-06-06T19:00:00.000Z
modDatetime: 2025-06-06T19:00:00.000Z
featured: false
draft: false
tags:
  - flutter
  - dart
  - mobile
  - asdf
  - react-native
  - jdk
  - typescript
  - guia
description: A guide to installing Flutter correctly using ASDF. Ideal for developers coming from React Native and wanting to understand the differences and overcome the initial challenges with Flutter and Dart.
---

At my job at [Twiage](https://www.twiagemed.com/), we maintain a **Flutter project** called **STAT**, which is a complete rewrite of a native mobile application. To be honest, I was never a fan of **Flutter** or **Dart** — I always felt uncomfortable working with them.

Since 2020, I’ve been experimenting with both **Flutter** and **React Native**, and until very recently, **React Native** was my go-to choice for **cross-platform mobile development**. Flutter always felt clunky in comparison, and I used to write it off as "crappy."

What made me love React Native:

- Built-in support for **TypeScript**
- Huge and active **JavaScript community**
- Compatibility with 99% of existing JS libraries
- Simple and fast installation
- **Expo** makes life easier

I’ve had the chance to work with React Native up to version [0.72.0](https://github.com/facebook/react-native/commit/5ef5767c3c1423971558c87dfc63be9b7b354abe), and I’m always bragging about that 🥹

---

## Why I Initially Disliked Flutter

My frustration with **Flutter** mainly came from two things:

1. It directly competes with **React Native**.
2. It uses **Dart**, a language that’s not JavaScript and doesn’t even try to be.

---

## Dart: My Old Enemy

I’ll be honest — I held a grudge against **Dart** for trying to replace **JavaScript**. Dart isn’t backward-compatible with JS, nor does it share much of the syntax. It’s an entirely different beast, and for a long time, I just didn’t want to learn it.

![Dart compilation guide](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r4npcpl7xmsp1ssgad2n.png)

---

## Installing Flutter the Right Way (with ASDF)

Now that I’ve made peace with Flutter, let’s talk about how to install it **properly**. Installing Flutter can be frustrating, especially when dealing with **JDK version issues** and path configuration. That’s where **[asdf](https://asdf-vm.com/guide/introduction.html)** comes in — a version manager that saved me a ton of time and headaches.

Here’s a step-by-step guide for setting up **Flutter with ASDF**:

### Step 1: Install Flutter via ASDF

```bash
asdf plugin add flutter
asdf install flutter latest
```

### Step 2: Set Up the Correct JDK Version

You’ll likely run into a warning about the JDK version when running `flutter doctor`. Flutter expects a very specific JDK version — usually JDK 17.

```bash
asdf plugin add java
asdf install java adoptopenjdk-17.0.0+12
asdf local java adoptopenjdk-17.0.0+12
```

Now, point Flutter to the correct JDK directory:

```bash
flutter config --jdk-dir $(asdf where java)
```

### Step 3: Create and Run a Flutter Project

```bash
flutter create myapp
cd myapp
flutter run
```

---

## Final Thoughts

Despite my rocky start with **Flutter and Dart**, I’ve started to appreciate what they bring to the table. With the help of **asdf**, installing and managing Flutter and Java versions becomes way more manageable — especially in a multi-language development environment.

If you're coming from **React Native**, I get you. The transition can be frustrating. But tools like **asdf** make Flutter more approachable.

For more on `asdf`, check out their [official docs](https://asdf-vm.com/manage/versions.html). And if you have any questions or need help with your **mobile development setup**, feel free to reach out.

👉 [Connect with me on LinkedIn](https://www.linkedin.com/in/ryangst/)
