#AI Chrome Extension – Text Autocomplete

Project Description
This project is a Chrome Extension that provides AI-powered text autocomplete on any website.  
It works like an AI copilot that suggests text completions while the user is typing in input fields or textareas.

---

Features
- Inline text autocomplete while typing
- Accept suggestion using TAB key
- Works across different websites
- Handles cursor position and text selection
- Minimal interference with website functionality

---
How It Works
The extension listens to user input in text fields and generates AI suggestions in real-time.  
When the user presses `Tab`, the suggestion is inserted into the text field.

---

Technologies Used
- JavaScript
- Chrome Extension APIs (Manifest V3)
- HTML & CSS

---

Project Structure
- background.js
- content.js
- popup.html
- popup.js
- manifest.json

---

Challenges Faced
- Handling cursor position correctly inside text fields
- Ensuring compatibility across multiple websites
- Maintaining low latency for suggestions
- Managing focus, scroll, and selection events

---

Future Improvements
- Integrate real AI API (like OpenAI)
- Improve suggestion accuracy
- Add settings panel for users
- Add keyboard shortcuts customization

---

Author
Noorhan Kusa