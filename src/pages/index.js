export function index(pinnedRepos) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="description" content="Mustafa Şen - Software Developer | Portfolio">
          <meta name="author" content="Mustafa Şen">
          <meta name="keywords" content="Mustafa Sen developer, Mustafa Sen software developer, Mustafa Sen web developer, Mustafa Sen frontend developer, Mustafa Şen">
          <meta name="robots" content="index, follow">
          <title>Mustafa Şen - Software Developer</title>
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
          <style>
              body {
                  font-family: Arial, Helvetica, sans-serif;
                  
                  margin: 0;
                  box-sizing: border-box;

                  display: flex;
                  flex-flow: column nowrap;

                  min-height: 100vh;
                  max-height: 100vh;

                  padding: 32px 32px 0 32px;

                  background-color: whitesmoke;
              }

              header {
                  flex-grow: 0;
                  flex-shrink: 1;
              }
              header h2 {
                  font-weight: normal;
                  color: grey;
              }

              hr {
                  opacity: 50%;  
              }

              main {
                  word-wrap: break-word;
                  flex-grow: 1;
                  flex-shrink: 0;
                  flex-basis: auto;
                  overflow-y: auto;
              }

              main em {
                  color: gray;
              }

              a {
                  color: inherit;
              }

              main li {
                  margin: 0 0 16px 0;
              }

              footer div{
                  padding: 16px 0;
              }
          </style>
      </head>
      <body>
          <header>
              <h1>Mustafa Şen</h1>
              <h2>Software Developer</h2>
              <hr/>
          </header>
          <main>
              <article>
                  <h3>Find me:</h3>
                  <ul>
                      <li><a href="mailto:mustafasen@tuta.io">E-Mail</a></li>
                      <li><a href="https://github.com/mustafashen">GitHub</a></li>
                      <li><a href="https://www.linkedin.com/in/mustafa--sen/">LinkedIn</a></li>
                  </ul>
              </article>
              <article>
                  <h3>Projects:</h3>
                  <ul>
                    ${pinnedRepos
                      .map((repo) => {
                        return `
                                <li>
                                    <a href="${repo.url}">${repo.name} ${repo.description ? `• ${repo.description}` : ''}
																				<br/>
                                        <em>${repo.languages.nodes.map(
                                          (language) =>
                                            `<span>${language.name}</span>`
                                        )}</em>
                                    </a>
                                </li>
                            `;
                      })
                      .join("")}
                  </ul>
              </article>
              <article>
                  <h3>Certificates:</h3>
                  <ul>
                      <li>
                          <a href="https://www.udemy.com/certificate/UC-50b914d8-0b90-43ff-bfbb-7c9e4517a5c5/">React Testing</a>
                      </li>
                      <li>
                          <a href="https://www.udemy.com/certificate/UC-55877d0b-37fc-4062-8a8b-34bcf3b2c144/">Javascript Data Structures Algorithms</a>
                      </li>
                      <li>
                          <a href="https://www.udemy.com/certificate/UC-b95da3a4-c6e2-43ee-96e4-4342942718dc/">Node.js</a>
                      </li>
                      <li>
                          <a href="https://www.udemy.com/certificate/UC-36b13059-48b6-466d-a703-5e359e83bd7e/">Python Computer Vision</a>
                      </li>
                      <li>
                          <span>NDG Linux Essentials</span>
                      </li>
                  </ul>
              </article>
          </main>
          <footer>
              <hr/>
              <div>
                  <span>Trabzon / Turkiye</span> •
                  <span id="current-year"></span> 
              </div>
          </footer>
          <script>
              const moment = new Date()
              document.getElementById('current-year').innerHTML = moment.getFullYear()
          </script>
      </body>
    </html>
  `;
}
