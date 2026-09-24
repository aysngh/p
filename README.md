# Ayush Singh — Engineering Portfolio

[![GitHub Pages](https://img.shields.io/badge/Hosted_with-GitHub_Pages-222222?style=flat-square&logo=github)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> **Live Portfolio:** [https://ayushsingh.github.io](https://ayushsingh.github.io)  
> *Personal portfolio website for Ayush Singh — Vulnerability Management Engineer & Enterprise Linux Specialist.*

---

## 📌 Overview

This repository contains the source code for my personal portfolio website, featuring a modern **Bento Grid design**, dark/light mode theming, and an interactive presentation of enterprise vulnerability management and infrastructure engineering work.

### Key Highlights
- **Role Focus**: Vulnerability Assessment & Management (VAM), Risk-Based Prioritization, and CTEM.
- **Enterprise Scale**: Administering and securing 50,000+ Linux/Unix servers (RHEL, CentOS, Ubuntu).
- **Tooling**: Rapid7 InsightVM, CrowdStrike Falcon, ServiceNow VRM, VMware ESXi, Ansible.

---

## ✨ Features

- **🎨 Modern Design System**: Inspired by high-conversion Bento Grid layouts with frosted glassmorphism and subtle glow accents.
- **🌓 Dark & Light Mode**: Smooth theme toggling with automatic `localStorage` preference persistence.
- **📱 Fully Responsive**: Tailored layouts for desktops, tablets, and smartphones with mobile drawer navigation.
- **⚡ Performant & Vanilla**: Zero bulky external frontend frameworks — pure semantic HTML5, modern modular CSS3, and lightweight vanilla JavaScript.
- **📊 Interactive Metrics**: Animated counting statistics and simulated exposure dashboards.
- **📬 Contact Integration**: One-click clipboard copy utility for direct contact and an interactive message form.

---

## 📁 Repository Structure

```text
├── assets/
│   ├── css/
│   │   └── style.css            # Design tokens, responsive grid, animations, and themes
│   └── js/
│       └── main.js              # Theme switcher, scroll reveal, counters, and form handler
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated deployment workflow to GitHub Pages
├── .gitignore                   # Standard ignore rules for OS and editor artifacts
├── index.html                   # Semantic markup and content structure
├── LICENSE                      # MIT Open Source License
├── README.md                    # Project documentation
├── robots.txt                   # Crawler indexing directives
└── sitemap.xml                  # Search engine sitemap
```

---

## 🚀 Local Development

No package manager or build step is required! You can run and preview the site locally in any of the following ways:

### Option 1: Direct File Opening
Double-click `index.html` or open it with your browser:
```bash
# Windows PowerShell
Start-Process index.html
```

### Option 2: Using Python HTTP Server
```bash
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

### Option 3: VS Code Live Server
1. Open the folder in **VS Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 🌐 Deploying to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Branch**, select `main` (or `master`) and directory `/ (root)`.
4. Click **Save**. Your site will be published at `https://<username>.github.io/<repository-name>`.

---

## 📬 Contact & Connect

- **Email:** [ayushsingh.zip@gmail.com](mailto:ayushsingh.zip@gmail.com)
- **LinkedIn:** [linkedin.com/in/ayushp-singh](https://linkedin.com/in/ayushp-singh)
- **Location:** Greater Noida, India

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
