Project: Modern Mobile-Only Treasure Hunt Microsite for Stag Do
Create a single-page, static mobile-only microsite for a stag do treasure hunt with 5 tasks. The site should have a premium, modern feel similar to high-end Webflow sites with smooth animations and engaging interactions. This is a mobile-only experience - no desktop/tablet versions needed.
Core Requirements:

Layout Structure:

Single page application optimized for mobile viewport (375-430px width)
Fixed mobile viewport - no responsive breakpoints needed
Hero section with event title and animated background
5 task cards that can be swiped through horizontally
Hidden info panel that slides down from top when triggered


Task Card Components:
Each card must include:

Task number (1-5) with stylized numbering
Task title
Detailed description
Clear action item (what to find/do)
Either an embedded map (using Leaflet or similar) OR an image hint
Progress dots showing current card position


Design Requirements:

Use Tailwind CSS for all styling (load from CDN)
Dark theme with neon accents using Tailwind colors
Custom CSS only for animations and effects Tailwind can't handle
Glassmorphism effects using backdrop-blur utilities
Modern typography (use Google Fonts with Tailwind's font-family utilities)
Full-height mobile experience (100vh with proper mobile viewport handling)


Animations & Interactions (GSAP + Tailwind):

Parallax scrolling effect on hero section
Smooth card transitions with swipe gestures
Touch-optimized interactions
Loading animation on page start
Confetti or celebration animation when viewing the final task
Stagger animations for UI elements on load
Combine Tailwind transitions with GSAP for complex animations


Info Panel Features:

Slides down from top with smooth GSAP animation
Contains: Event date, teams list, rules, contact info
Uses Tailwind's backdrop and overlay utilities
Touch-friendly close button


Technical Specifications:

Pure HTML/CSS/JavaScript (no framework required)
Tailwind CSS from CDN for styling
GSAP from CDN for animations
Mobile viewport only: 375-430px width range
Touch gestures for card swiping (no click arrows needed)
Prevent desktop access - redirect or show "mobile only" message
Use Tailwind's touch utilities for better mobile interactions


Special Features:

Countdown timer using Tailwind components
Haptic feedback triggers (vibration API) on interactions
Share button optimized for mobile sharing
Easter egg animation when all cards are viewed
Pull-to-refresh gesture for resetting the experience



Tailwind-Specific Styling Guidelines:

Use Tailwind's mobile-first utilities extensively
Custom colors in Tailwind config for brand colors
Leverage Tailwind's animation utilities where possible
Use space and size utilities for consistent spacing
Apply gradient utilities for backgrounds
Utilize transform and filter utilities for effects

Example Card Structure with Tailwind Classes:
html<div class="min-h-screen bg-gradient-to-br from-purple-900 to-black">
  <div class="relative h-screen overflow-hidden">
    <div class="swiper-container h-full">
      <div class="task-card bg-white/10 backdrop-blur-md rounded-3xl p-6 mx-4">
        <h2 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">01</h2>
        <h3 class="text-2xl font-bold text-white mt-4">The Golden Shot</h3>
        <p class="text-gray-200 mt-2">Find the bar with the golden door...</p>
        <div class="mt-6 p-4 bg-white/20 rounded-xl">
          <p class="text-yellow-400 font-semibold">📸 Take a team photo with the bartender</p>
        </div>
      </div>
    </div>
  </div>
</div>
Make it feel premium, exciting, and perfectly optimized for mobile devices. The site should build anticipation and make the treasure hunt feel like an exclusive, high-energy experience that works flawlessly on phones.