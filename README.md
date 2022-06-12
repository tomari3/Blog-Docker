<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tomari3/Blog-Docker">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">MERN Multi-Blog</h3>

  <p align="center">
    multi user blog using the mern stack with support for posts, comments, sub comments, images, like, saves and more.
    <br />
    <a href="https://mern-blog-2.herokuapp.com/#/">View Demo</a>
    ·
    <a href="https://github.com/tomari3/Blog-Docker/issues">Report Bug</a>
    ·
    <a href="https://github.com/tomari3/Blog-Docker/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![MERNBlog][product-screenshot]](https://imgur.com/a/qhZaiEg)

This is a multi user / social network blogging platform with support for comments, posts, sub comments, tags, multiple images, profile page with images, description and like, saves and posts history.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [StyledComponents](https://styled-components.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/tomari3/Blog-Docker.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. For local development wrap the serve static logic in and if statement in sever/app.js, or remove entirely

```sh
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

[![posting][product-screenshot]](https://imgur.com/YP3Mp0c)
[![profile][product-screenshot]](https://imgur.com/3MLYo2M)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Dark Mode
- [ ] Search by Tag
- [ ] View profiles
  - [ ] by ratings
- [ ] View posts by user
  - [ ] by ratings

See the [open issues](https://github.com/tomari3/Blog-Docker/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Tom Ari - [@linkedin_handle](https://www.linkedin.com/in/tom-ari-72034122a/) - tom_ari@ymail.com

Project Link: [https://github.com/tomari3/Blog-Docker](https://github.com/tomari3/Blog-Docker)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
<!-- ## Acknowledgments

* []()
* []()
* []() -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/tomari3/Blog-Docker.svg?style=for-the-badge
[contributors-url]: https://github.com/tomari3/Blog-Docker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tomari3/Blog-Docker.svg?style=for-the-badge
[forks-url]: https://github.com/tomari3/Blog-Docker/network/members
[stars-shield]: https://img.shields.io/github/stars/tomari3/Blog-Docker.svg?style=for-the-badge
[stars-url]: https://github.com/tomari3/Blog-Docker/stargazers
[issues-shield]: https://img.shields.io/github/issues/tomari3/Blog-Docker.svg?style=for-the-badge
[issues-url]: https://github.com/tomari3/Blog-Docker/issues
[license-shield]: https://img.shields.io/github/license/tomari3/Blog-Docker.svg?style=for-the-badge
[license-url]: https://github.com/tomari3/Blog-Docker/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/tom-ari-72034122a/
[product-screenshot]: https://imgur.com/3MLYo2M
