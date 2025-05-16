# RepoSlicer

**GitHub Folder Downloader**

A sleek, client-side web app that lets you download a single folder from any public GitHub repository as a ZIP archive—no cloning or backend required.

🔗 **Live Demo:** [https://sultanahmmed.github.io/RepoSlicer/](https://sultanahmmed.github.io/RepoSlicer/)

---

## 🚀 Features

* **Instant Slicing**: Fetch and zip subdirectories on the fly.
* **Modern UI**: Responsive design with smooth animations and light/dark mode.
* **Pure Client-Side**: Powered by GitHub’s REST API and JSZip—zero server overhead.
* **Robust Error Handling**: User-friendly status updates and error highlights.
* **Device-Ready**: Optimized for desktop, tablet, and mobile.

---

## 📁 Project Structure

```bash
repo-slicer/
├── index.html      # Main HTML interface
├── style.css       # Theme, layout, and animations
├── app.js          # URL parsing, API calls, ZIP generation
└── manual.md       # User guide and troubleshooting
```

---

## ⚙️ Quick Start

1. **Clone the repo**

   ```bash
   git clone https://github.com/SultanAhmmed/RepoSlicer.git
   cd RepoSlicer
   ```

2. **(Optional) Serve locally**

   * Use a static server: `npx serve .` or `python -m http.server`.
   * **Live Server** extension: check [VeryEasy Live Server](https://github.com/SultanAhmmed/Scripts-for-daily-life/tree/main/Live%20Server%20for%20Coders).

3. **Launch**

   * Open `index.html` in your browser or visit `http://localhost:5000`.

---

## 🖥️ Usage

1. Paste a GitHub folder URL, e.g.:
   `https://github.com/owner/repo/tree/main/path/to/folder`
2. Click **Fetch My Folder** (or your custom button text).
3. Watch the download animation and status messages.
4. Save the ZIP when prompted.

---

## 🔧 Configuration

* **CSS Variables**: Customize colors, border-radius, shadows in `style.css` (`:root`).
* **Animations**: Edit or add keyframes at the end of `style.css`.
* **API Rate Limits**: To increase GitHub’s 60-requests/hour limit, prompt for a Personal Access Token in `app.js` fetch headers.

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork this repository.
2. Create a feature branch:
   `git checkout -b feature/YourFeature`
3. Commit your changes:
   `git commit -m "Add YourFeature"`
4. Push to your branch:
   `git push origin feature/YourFeature`
5. Open a Pull Request.

Review our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

---

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 📬 Contact

**Maintainer:** Sultan Ahmmed

* GitHub: [SultanAhmmed](https://github.com/SultanAhmmed)
* LinkedIn: [sultan-ahmmed](https://www.linkedin.com/in/sultan-ahmmed)

---

Happy slicing! 🎉
