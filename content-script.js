alert("Content script loaded! This page is supported by the extension."); 



// content-script.js
document.addEventListener("keydown", (event) => {
  // Check if the pressed key is "/"
  if (event.key === "/") {
    // Try to find the DeepSeek textarea
    const deepseekTextarea = document.getElementById("chat-input");
    // Try to find the Groq textarea
    const groqTextarea = document.getElementById("chat");
    // Try to find the Gemini textarea (contenteditable div)
    const geminiTextarea = document.querySelector("rich-textarea .ql-editor");

    // Check which textarea exists and is not already focused
    if (deepseekTextarea && document.activeElement !== deepseekTextarea) {
      deepseekTextarea.focus(); // Focus on DeepSeek textarea
      event.preventDefault(); // Prevent the "/" from being typed
    } else if (groqTextarea && document.activeElement !== groqTextarea) {
      groqTextarea.focus(); // Focus on Groq textarea
      event.preventDefault(); // Prevent the "/" from being typed
    } else if (geminiTextarea && document.activeElement !== geminiTextarea) {
      geminiTextarea.focus(); // Focus on Gemini textarea
      event.preventDefault(); // Prevent the "/" from being typed
    }
  }
});
