# Open Source Contribution Advisor Chatbot

OpenSourceGuru is an AI-powered advisor chatbot that helps developers find the best open-source projects to contribute to, tailored to their skills, interests, and goals. It uses real-time GitHub API integration, dynamic input parsing, and smart tool selection to guide users through meaningful contributions.

![Screenshot from 2025-04-14 23-37-16](https://github.com/user-attachments/assets/67365d0a-8de4-44d7-a5b9-5e67e3d59f6b)

---


## 🌟 Features

- 🔍 **Skill Matcher Tool** – Finds projects that match your technical stack.
- 🧠 **Contribution Comparator** – Compares guidelines across GitHub repos.
- 🪄 **Good First Issue Recommender** – Suggests beginner-friendly issues.
- 🔗 **Live GitHub API Integration** – Real-time project fetching.
- 💬 **Natural Language Chat UI** – Ask in plain English, get smart suggestions.
- 🧠 Powered by **LangChain**, **Groq/OpenAI**, and **Vector Memory**.
- 🌐 Clean UI built with **Next.js**, **Tailwind CSS**, and **React**.

---

## 🛠️ Tech Stack

| Frontend        | Backend        | AI/LLM | Tools       | Memory         |
|----------------|----------------|--------|-------------|----------------|
| Next.js + Tailwind | FastAPI / LangChain | Groq / OpenAI | GitHub REST API | Pinecone / pgvector |

---

## 🧪 Local Setup

### 1. Clone the repo

git clone https://github.com/Karthiswaran-R/Open-Source-Contribution-Advisor-Chatbot.git                                               

cd open-source-chatbot
### 2. Install Dependencies
First, you need to install the required dependencies for both the frontend and backend:

Frontend (Next.js) Dependencies:

Navigate to the frontend folder (if it's separate) or directly in the project root if there's no separation.

Run the following command to install all the necessary packages for the frontend:

bash
##### npm install
##### Backend (Python/Flask):

If the backend is Python-based (Flask, FastAPI, etc.), navigate to the backend folder (usually it will be a separate folder like backend or server).

Create a virtual environment:

bash
##### python -m venv venv
##### Activate the virtual environment:

For Windows:

bash
##### venv\Scripts\activate

For Mac/Linux:

bash
##### source venv/bin/activate
 Install the required Python dependencies:

bash

##### pip install -r requirements.txt

### 3. Configure Environment Variables (if applicable)
If there are any environment variables (like API keys, database URLs, etc.), you'll need to set them up.

Check for a .env or similar file in the root of the project.

If it’s missing, check the documentation for the environment variables needed (often these are mentioned in the README.md file or requirements.txt).

### 4. Start the Backend Server
In the backend folder, run the following to start the Flask server (or the relevant backend server you’re using):

bash
##### python app.py
or

bash
##### python server.py
If you’re using Flask, it should be accessible by default at http://localhost:5000.

If you’re using another backend framework (like FastAPI), refer to the project documentation to start it.

### 5. Start the Frontend Server
In the project root or frontend folder, run the following to start the Next.js app:

bash
##### npm run dev
This will start the frontend server, and you can access it by visiting http://localhost:3000 in your web browser.

### 6. Test the Application
Once both the frontend and backend servers are running:

Open http://localhost:3000 in your browser.

Interact with the chatbot on the frontend and check if it’s communicating properly with the backend.

You can check the browser console or the terminal for any error messages if something doesn’t work.

### 7. Contributing
We welcome contributions to this project. To contribute:

###### Fork this repository.

##### Create a new branch: git checkout -b feature-name

##### Commit your changes: git commit -m 'Add new feature'

##### Push to the branch: git push origin feature-name

 ##### Create a new Pull Request

 ## Demo Video

Here is a demo video of the Open Source Contribution Advisor Chatbot:

https://github.com/user-attachments/assets/f96ce6f2-2ff9-473b-a794-b882248037ba

## License
This project is licensed under the MIT License - see the LICENSE file for details.
## 🙌 Credits
Built with 💚 by Karthiswaran R
VLSI Engineer | Open Source Enthusiast | Creator of VLSI Design Hub
