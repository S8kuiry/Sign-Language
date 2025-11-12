🧠 SignTalk – Real-Time Sign Language Translator

Live App: https://sign-language-umber.vercel.app/

SignTalk is a modern sign language recognition web app built using Next.js, TensorFlow.js, and HandPose. It detects and translates hand gestures from live webcam input into readable text, bridging communication gaps between hearing and non-hearing individuals.

🚀 Features

🎥 Real-time hand detection using TensorFlow.js HandPose

🤟 Alphabet-based gesture recognition (A–Z)

💬 Dynamic word formation from detected signs

🧩 Custom UI with Chakra UI and React Icons

💡 Interactive gradient hero section

📸 Camera toggle controls for webcam

🧹 Delete, Space & Back editing options

⚡ Optimized canvas rendering for smooth performance

🌐 Deployed on Vercel

🧰 Tech Stack

Framework: Next.js

UI Library: Chakra UI

Machine Learning: TensorFlow.js HandPose

Gesture Recognition: Fingerpose

Icons: React Icons (Remix Icons)

Deployment: Vercel                  




# Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# Move into the project directory
cd <your-repo-name>

# Install dependencies
npm install

# Run the app
npm run dev

# Open http://localhost:3000 in your browser


#Folder Structure

├── components/
│   ├── DisplaySigns.jsx
│   ├── HeadLetter.jsx
│   ├── HeroSection.jsx
│   ├── WordShow.jsx
│   ├── handposeutil.js
│   ├── handsigns.js
│   └── metatags.js
│
├── pages/
│   └── index.jsx
│
├── public/
│   ├── icons/
│   ├── handimages/
│   └── assets/
│
├── styles/
│   └── globals.css
│
└── package.json




















