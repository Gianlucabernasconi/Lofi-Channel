# **Lofi Music Channel** 🎶

Hello! Welcome to Lofi Music Channel, a personal project I developed to deepen my web programming skills and share my passion for relaxing music. This site lets you explore the latest videos from some YouTube channels I enjoy, demonstrating my ability to integrate APIs and create responsive and attractive interfaces. With an adaptable design and features like dark mode, this project reflects my focus on user experience and the implementation of modern web development practices. I hope this work serves as an example of my commitment to quality and innovation in web development. 🎧🌱
Features 🚀

   ## Features 🚀

- **Automatic Video Updates**: Stay up-to-date with the latest Lofi music videos. 🔄
- **Responsive Design**: Access the site from any device. 📱💻
- **Dark Mode**: Switch between light and dark mode as you prefer. 🌗


Screenshot 📸

![firefox_F80KczbQHn](https://github.com/Gianlucabernasconi/Lofi-Channel/assets/109047412/2e1f7e27-a592-41c3-aa99-43dfc76b1af3)


## Technologies Used 🛠️

- **HTML5**: The structural foundation of our page.
- **Tailwind CSS**: For styling that's fast and responsive, with easy support for dark mode.
- **JavaScript**: Manages the logic behind video loading and theme handling.


## Dependencies 🔗

To get this project up and running, you will need:

   
- **tailwindcss**: Makes design responsive and theme management easy.
- **@tailwindcss/aspect-ratio**: Ensures that your videos always look perfect.
- **node-fetch**: Allows our site to communicate with the YouTube API.


# Compile styles with Tailwind CSS
```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```


# API Configuration 🔑

Don't forget to set up your RapidAPI key to access YouTube. Set your key in main.js like this:

🟨 javascript

```bash const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
```

I hope you enjoy exploring this small project as much as I enjoyed creating it! 🎵💻
