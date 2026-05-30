# Mayuresh Sawant Portfolio Website

Animated, corporate, colorful portfolio website built for GitHub Pages with an optional Node.js backend for Hire Me leads.

## Files
- `index.html` — main animated portfolio website
- `admin.html` — admin dashboard for leads
- `assets/css/style.css` — complete styling
- `assets/js/main.js` — animations, charts, lead form
- `assets/js/admin.js` — admin dashboard logic
- `backend/server.js` — optional Express backend API
- `backend/package.json` — backend dependencies

## GitHub Pages Hosting
1. Upload all files except the `backend` folder to your GitHub repository.
2. Go to Repository Settings → Pages.
3. Select branch `main` and root folder.
4. Open your GitHub Pages URL.

## Important: Backend Admin Note
GitHub Pages is static hosting, so it cannot run Node.js backend code. The website still saves form leads in browser `localStorage` and shows them in `admin.html` on the same browser.

For real lead storage:
1. Deploy `backend/` on Render, Railway, VPS or any Node hosting.
2. Run:
   ```bash
   cd backend
   npm install
   npm start
   ```
3. Replace `API_ENDPOINT` in both:
   - `assets/js/main.js`
   - `assets/js/admin.js`
   with your deployed API URL, for example:
   `https://your-api.onrender.com/api/leads`

## Admin Login
Default password: `admin123`
Change it in `assets/js/admin.js` before publishing.

## Customization Tips
- Replace the initials avatar with a professional headshot if desired.
- Add LinkedIn URL in the contact section.
- Update report numbers whenever you want to showcase new campaigns.
