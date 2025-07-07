# AIAgency Backend 🚀

Backend API for **AIAgency** – an AI-powered competitor intelligence and automated content strategy engine for modern businesses.

---

## 🎯 Project Vision

AIAgency is built to empower marketing teams and agencies with intelligent automation. It does this by:

- Scraping competitor social profiles (Instagram, LinkedIn, Twitter)
- Analyzing high-performing content formats, hashtags, and engagement triggers
- Generating optimized content strategies tailored by niche and platform
- Automating scheduling, engagement, and performance adaptation

Our goal is to build the **first AI-native marketing engine** that replicates a full-stack digital strategist — scraping, thinking, writing, scheduling, adapting.

---

## 🚧 Current Progress (MVP Phase)

| Module                  | Status   | Description |
|------------------------|----------|-------------|
| User Input API         | ✅ Done   | Accepts business niche, platform, competitor URLs |
| MongoDB Integration    | ✅ Done   | Saves input data |
| Instagram Scraper      | ✅ MVP    | Scrapes top posts and captions using Puppeteer |
| LinkedIn Scraper       | 🟡 Pending | Planned via Playwright or SerpAPI |
| AI Caption Generator   | 🔜 Coming | GPT-4/OAI based niche-aware content generation |
| Content Scheduler      | 🔜 Coming | API-based multi-platform scheduler |
| Feedback + CRM Triggers| 🔜 Coming | Reacts to engagement data and captures warm leads |

---

## ⚙️ Tech Stack

- **Node.js** + Express.js (Backend API)
- **MongoDB** + Mongoose (Database)
- **Puppeteer** (Web scraping engine)
- **dotenv** (Environment config)
- **Postman** (Testing)
- *(Planned: OpenAI API, Playwright, Firebase, Redis)*

---

## 🧩 Architecture Overview

```text
[Postman / Frontend] → [Express.js API]
                                ↓
                      [Input Validation + Logging]
                                ↓
               ┌────────────[Scraper Engine]────────────┐
               │   Instagram | Twitter | LinkedIn       │
               └────────────────────────────────────────┘
                                ↓
                     [MongoDB: Save Structured Data]
                                ↓
         [AI Engine (OpenAI GPT/Claude)] → [Content Drafts]
                                ↓
         [Scheduler + Engagement Watcher] → [CRM / Retargeting]
📖 API Reference
POST /api/input
Submit a business profile and competitors to begin analysis.

Body:
json
Copy
Edit
{
  "niche": "Interior Design",
  "platforms": ["instagram"],
  "competitors": ["https://instagram.com/interiorinspo"]
}
Response:
json
Copy
Edit
{
  "message": "Input received successfully",
  "scraped": [ { "link": "...", "image": "...", "caption": "..." } ]
}
📈 Roadmap
 Setup Express.js backend

 Connect to MongoDB

 Add Instagram scraper

 Build LinkedIn/Twitter scraping logic

 Integrate OpenAI for caption & strategy generation

 Add scheduling + response monitoring

 Frontend dashboard (React/Next.js)

 CRM lead capture & notification system

 Dockerize for deployment

🛠️ Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/GitMercenary/aiagency-backend.git
cd aiagency-backend
2. Install dependencies
bash
Copy
Edit
npm install
3. Configure .env
env
Copy
Edit
MONGODB_URI=mongodb://localhost:27017/aiagency
PORT=5000
4. Start the server
bash
Copy
Edit
npm run dev
🧪 Test API with Postman
POST http://localhost:5000/api/input
Raw JSON Body:

json
Copy
Edit
{
  "niche": "Interior Design",
  "platforms": ["instagram"],
  "competitors": ["https://www.instagram.com/interiorinspo"]
}
🤝 Contributing
Want to help build the future of AI-powered marketing?
Feel free to fork, contribute, or open issues. Let's collaborate!

👨‍💻 Author
Mohamed Jaffar
Agency: Black Arrow Technologies
GitHub: @GitMercenary

📄 License
This project is licensed under the MIT License.

kotlin
Copy
Edit
MIT License

Copyright (c) 2025 Mohamed Jaffar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software...
✨ Credits
Instagram scraping: Puppeteer

API Testing: Postman

Backend inspiration: Node Express Boilerplate

