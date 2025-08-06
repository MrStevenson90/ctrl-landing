CTRL Sports Production Services - Landing Page
A modern, responsive landing page for CTRL Sports showcasing AI-powered autonomous sports production technology.
🚀 Features

Responsive Design - Optimized for desktop, tablet, and mobile
Video Integration - Autoplay videos with smooth scroll triggers
Interactive Image Slider - Touch/swipe support with auto-advance
Smooth Animations - Intersection Observer API for scroll-triggered effects
Performance Optimized - Throttled events and efficient rendering

📁 Project Structure
ctrl-sports-landing/
├── index.html              # Main HTML file
├── src/
│   ├── main.js             # JavaScript functionality
│   └── style.css           # CSS styles
├── img/
│   ├── logo.png            # CTRL logo
│   ├── 1.jpg - 6.jpg       # Slider images (excluding 4.jpg)
├── vid/
│   ├── pro.mp4             # Hero video
│   ├── cv.mp4              # AI demonstration video
│   ├── cam.mp4             # Camera technology video
│   └── mini.mp4            # Footer video
└── README.md               # This file
🛠 Setup Instructions
Prerequisites

Node.js and npm (for Vite)
Modern web browser

Installation

Clone/Download the project files
Install Vite if not already installed:
bashnpm install -g vite

Navigate to project directory
Start development server:
bashvite

Open browser to http://localhost:3000

File Requirements
Ensure all media files are in place:

Videos: Place .mp4 files in /vid folder
Images: Place logo.png and slider images in /img folder
Fonts: Inter font loaded via Google Fonts CDN

🎨 Design System
Colors

Primary Background: #000 (Black)
Secondary Background: #111 (Dark Grey)
Text Primary: #fff (White)
Text Secondary: #ccc (Light Grey)
Accents: #333, #666 (Grey variants)

Typography

Font Family: Inter (Google Fonts)
Weights: 300, 400, 500, 600, 700

Breakpoints

Mobile: ≤ 480px
Tablet: ≤ 768px
Desktop: > 768px

📱 Sections Overview

Hero Section - Full-screen video with overlay text
Autonomous Production - Feature list with emoji headers
AI Demo Video - Containerized autoplay video
Production Services - Cost reduction messaging
Camera Technology - Full-width background video
Full-Service Production - Service capabilities
Speed Advantage - Key differentiator message
Image Slider - Interactive portfolio showcase
Contact Footer - Business contact information
Mini Video - Closing video element

⚙️ JavaScript Features
Video Management

Intersection Observer - Autoplay on scroll into view
Performance Optimized - Pause when out of viewport
Error Handling - Graceful fallbacks for failed videos

Image Slider

Touch Support - Swipe gestures on mobile
Auto-advance - 5-second intervals
Navigation Dots - Visual position indicators
Responsive Controls - Adaptive button sizing

Animations

Scroll Triggered - Fade-in and slide-up effects
Parallax - Subtle hero video movement
Smooth Scrolling - Enhanced anchor navigation

🔧 Customization
Adding New Sections

Add HTML structure in index.html
Style in src/style.css
Add scroll observer if needed in src/main.js

Video Configuration
Update video paths in:

HTML <source> tags
JavaScript preload array
CSS responsive sizing

Slider Images

Add images to /img folder
Update totalSlides in main.js
Modify slider HTML structure

🚨 Troubleshooting
Videos Not Playing

Check file paths - Ensure videos exist in /vid folder
Verify formats - Use H.264 encoded MP4 files
File size - Large files may timeout (recommend < 10MB)
MIME types - Server should serve .mp4 as video/mp4

Slider Issues

Image count - Verify totalSlides matches actual images
Touch events - Test on actual mobile devices
Performance - Check for console errors

Mobile Problems

Viewport - Ensure meta viewport tag is present
Touch targets - Minimum 44px for buttons
Performance - Test on slower devices

📊 Performance Tips

Video optimization - Compress videos for web
Image compression - Use WebP format where supported
Lazy loading - Consider implementing for large galleries
CDN - Serve static assets from CDN in production

🌐 Browser Support

Chrome 60+
Firefox 55+
Safari 11+
Edge 79+
Mobile Safari iOS 11+
Chrome Mobile 60+

📈 Production Deployment

Build for production:
bashvite build

Upload dist/ folder to web server
Configure server for proper MIME types
Test all videos on production environment
Verify mobile responsiveness

📞 Contact & Support
Demo Contact: tom@ctrl.vision
LinkedIn: linkedin.com/company/ctrl-vision
📄 License
This project is proprietary to CTRL Sports Production Services.

Built with ❤️ for the future of sports broadcasting