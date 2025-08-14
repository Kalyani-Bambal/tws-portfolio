# TWS Portfolio

A simple, fast, and fully static personal portfolio site built with **HTML**, **CSS**, and **JavaScript**.  
This project auto-deploys to an **Amazon S3** bucket using **GitHub Actions** whenever changes are pushed to the `main` branch.

---

## ✨ Features

- 🔧 Zero-framework static site: `index.html`, `style.css`, `script.js`
- 🚀 Continuous deployment to **S3** on every push to `main`
- 🌐 Optional S3 Static Website Hosting (public read)
- 🧪 Easy local development (just open `index.html` or run a tiny web server)

---

## 📁 Project Structure
```
📂 Folder Structure
├─ .github/
│ └─ workflows/
│ └─ main.yml # CI/CD workflow (see below)
├─ index.html # Main page
├─ style.css # Styles
├─ script.js # Client-side scripts
└─ README.md
```

## 🧰 Prerequisites

- A GitHub repository for this project
- An **AWS account** with permissions to create/use S3
- **AWS CLI** (optional for manual deploys)
- An **S3 bucket** (example in this README uses `tws-portfolio-1234` in `us-east-1`)

> You can rename the bucket and region—just keep the values in `main.yml` and your AWS setup in sync.

---

## 🧪 Run Locally (Dev)

You can simply open `index.html` in your browser, or start a tiny web server:

**Python 3**
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

---

☁️ One-Time AWS Setup

1) Create the S3 bucket

   aws s3 mb s3://tws-portfolio-1234 --region us-east-1

2) Simple public website (S3 Static Website Hosting)
   
   **Disable “Block all public access” on the bucket.

   **Add this Bucket Policy (read-only public access to objects):
   ---
   **{
       "Version": "2012-10-17",
       "Statement": [
         {
           "Sid": "PublicReadGetObject",
           "Effect": "Allow",
           "Principal": "*",
           "Action": ["s3:GetObject"],
           "Resource": ["arn:aws:s3:::tws-portfolio-1234/*"]
         }
       ]
      }
   ---

#  You’ll get a Website Endpoint like:
 ---
   http://tws-portfolio-1234.s3-website-us-east-1.amazonaws.com
 ---


🤖 CI/CD with GitHub Actions
  ---
  This repository uses the following workflow (in .github/workflows/main.yml):
  ---

#Add required GitHub Secrets
 ---
  In your repo settings → Secrets and variables → Actions:
    **AWS_ACCESS_KEY_ID
    **AWS_SECRET_ACCESS_KEY
 --- 

❗ Troubleshooting

---
#403 Forbidden on website endpoint
-Public access still blocked or bucket policy missing
-Wrong region website endpoint

#GitHub Actions fails with AccessDenied
-IAM user is missing s3:PutObject, s3:DeleteObject, or s3:ListBucket
-Secrets not configured or misspelled

#Bucket name already exists
-S3 bucket names are globally unique; pick a different one (e.g., tws-portfolio-<random>)
---

📜 License
---
MIT — feel free to use and adapt. If your project requires a different license, update this section.
---


✨Output Screenshot
# tws-portfolio

  <img width="1122" height="536" alt="image" src="https://github.com/user-attachments/assets/855448df-db74-4b93-a4ef-fe78d287d583" />
