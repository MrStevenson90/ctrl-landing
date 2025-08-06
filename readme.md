CTRL Sports Production Services - Landing Page
A modern, responsive landing page for CTRL Sports showcasing AI-powered autonomous sports production technology. 🚀

Note: A live demo can be viewed at: http://ctrlsports.co

✨ Features
Responsive Design: Optimized for a seamless experience on desktop, tablet, and mobile devices.

Video Integration: Background videos autoplay on scroll, engaging users with dynamic content.

Interactive Image Slider: A touch-friendly, auto-advancing slider to showcase a portfolio.

Smooth Animations: Utilizes the Intersection Observer API for elegant, scroll-triggered animations.

Performance Optimized: Employs event throttling and efficient rendering for a smooth user experience.

🛠️ Technologies Used
📁 Project Structure
ctrl-sports-landing/
├── index.html              # Main HTML file
├── src/
│   ├── main.js             # Core JavaScript functionality
│   └── style.css           # All CSS styles
├── img/
│   ├── logo.png            # CTRL logo
│   └── 1.jpg - 6.jpg       # Slider images
├── vid/
│   ├── pro.mp4             # Hero video
│   ├── cv.mp4              # AI demonstration video
│   ├── cam.mp4             # Camera technology video
│   └── mini.mp4            # Footer video
└── README.md
🚀 Getting Started
Prerequisites
Node.js and npm

A modern web browser (Chrome, Firefox, Safari, etc.)

Installation & Setup
Clone the repository:

Bash

git clone https://github.com/your-username/ctrl-sports-landing.git
Navigate to the project directory:

Bash

cd ctrl-sports-landing
Install Vite (if not already installed globally):

Bash

npm install -g vite
Start the development server:

Bash

vite
Open your browser and navigate to http://localhost:5173 (or the port specified by Vite in your terminal).

🎨 Design System
Colors
Primary Background: #000 (Black)

Secondary Background: #111 (Dark Grey)

Primary Text: #fff (White)

Secondary Text: #ccc (Light Grey)

Accents: #333, #666

Typography
Font Family: Inter (from Google Fonts)

Weights: 300, 400, 500, 600, 700

Breakpoints
Mobile: ≤ 480px

Tablet: ≤ 768px

Desktop: > 768px

⚙️ Core JavaScript Features
Video Management
Smart Autoplay: Uses Intersection Observer to play videos only when they are visible in the viewport.

Performance: Videos are automatically paused when they scroll out of view to conserve system resources.

Error Handling: Includes graceful fallbacks for video elements that fail to load.

Interactive Image Slider
Touch Support: Native swipe gestures for navigation on mobile and tablet devices.

Auto-Advance: Slides automatically transition every 5 seconds.

Navigation: Clickable dots provide a visual indicator of the current slide and allow for direct navigation.

Animations
Scroll-Triggered Effects: Subtle fade-in and slide-up animations are triggered on scroll.

Parallax: A subtle parallax effect is applied to the hero video for added depth.

Smooth Scrolling: Anchor links provide a smooth, animated scrolling experience.

🚨 Troubleshooting
Videos Not Playing
File Path: Double-check that the video paths in your HTML are correct and that the files exist in the /vid/ folder.

File Format: Ensure videos are encoded in H.264 MP4 format for the best browser compatibility.

File Size: Very large files (>10MB) may time out. Compress videos for web delivery.

MIME Types: Ensure your server is correctly configured to serve .mp4 files with the video/mp4 MIME type.

Slider Issues
Image Count: Verify that the totalSlides variable in main.js matches the actual number of image slides in index.html.

Console Errors: Check the browser's developer console for any JavaScript errors that could be breaking the slider.

📊 Performance & Deployment
Performance Tips
Video Optimization: Compress all videos to reduce file size without significant quality loss.

Image Compression: Use modern formats like WebP and tools to compress images.

CDN: For production, serve static assets (images, videos, etc.) from a Content Delivery Network (CDN) for faster global delivery.

Production Deployment
Build the project:

Bash

vite build
Upload: Deploy the contents of the generated dist/ folder to your web server or hosting provider.

Test: Thoroughly test all functionality, especially video playback and mobile responsiveness, on the live production environment.

📞 Contact & License
Demo & Inquiries: tom@ctrl.vision

LinkedIn: linkedin.com/company/ctrl-vision

This project is proprietary to CTRL Sports Production Services.

Built with ❤️ for the future of sports broadcasting.
