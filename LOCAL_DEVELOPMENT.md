# Local Development Guide

## Quick Start

### Option 1: Python HTTP Server (Recommended - Already Installed)

```bash
# Navigate to project directory
cd /Users/tushar/Documents/GitHub/dyslexiabuddy-website

# Start server on port 8000
python3 -m http.server 8000
```

Then open: **http://localhost:8000**

### Option 2: Node.js HTTP Server

If you have Node.js installed:

```bash
# Install http-server globally (one time)
npm install -g http-server

# Start server
http-server -p 8000
```

Then open: **http://localhost:8000**

### Option 3: PHP Built-in Server

If you have PHP installed:

```bash
php -S localhost:8000
```

Then open: **http://localhost:8000**

### Option 4: VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Running the Server

### Start Server (Python)

```bash
cd /Users/tushar/Documents/GitHub/dyslexiabuddy-website
python3 -m http.server 8000
```

### Access the Site

Open your browser and navigate to:
- **http://localhost:8000**
- **http://127.0.0.1:8000**

### Stop the Server

Press `Ctrl + C` in the terminal where the server is running.

## Development Tips

### Hot Reload

For automatic reloading on file changes, use:

**Option A: VS Code Live Server**
- Automatically reloads when you save files

**Option B: Browser-sync (Node.js)**
```bash
npm install -g browser-sync
browser-sync start --server --files "*.html, css/*.css, assets/js/*.js"
```

### Testing Different Ports

If port 8000 is busy, use a different port:

```bash
# Python
python3 -m http.server 3000

# Node.js http-server
http-server -p 3000
```

Then access: **http://localhost:3000**

## File Structure

Make sure your file structure looks like this:

```
dyslexiabuddy-website/
├── index.html              # Main file
├── css/
│   └── styles.css
├── assets/
│   ├── js/
│   │   └── script.js
│   └── images/
└── ...
```

## Troubleshooting

### Issue: "Address already in use"

**Solution**: Use a different port:
```bash
python3 -m http.server 3000
```

### Issue: Assets not loading

**Solution**: 
- Make sure you're accessing via `http://localhost:8000` (not `file://`)
- Check browser console for 404 errors
- Verify file paths are correct (relative paths)

### Issue: Changes not showing

**Solution**:
- Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Clear browser cache
- Check if server is still running

## Quick Commands

```bash
# Start server (Python)
python3 -m http.server 8000

# Start server on different port
python3 -m http.server 3000

# Start server with directory listing (for debugging)
python3 -m http.server 8000 --bind 127.0.0.1
```

## Next Steps

1. Start the server using one of the methods above
2. Open http://localhost:8000 in your browser
3. Make changes to files
4. Refresh browser to see changes
5. Test all features (demo controls, mobile menu, etc.)

