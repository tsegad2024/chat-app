import { create } from "zustand";

export const useThemeStore = create((set) => ({
  // 1️⃣ Load saved theme from localStorage, or use "coffee" as default
  theme: localStorage.getItem("chat-theme") || "coffee",

  // 2️⃣ Function to update theme
  setTheme: (theme) => {
    // Save the new theme to localStorage
    localStorage.setItem("chat-theme", theme);

    // Update Zustand store state
    set({ theme });
  },
}));
