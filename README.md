<div align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
  <h1>Accessible Gatsby Site Example</h1>
  <h2>Built with Narative's Novela Theme</h2>
</div>

With minimal styling and maximum features — including multiple homepage layouts, built-in social sharing and dark mode — [Novela](https://github.com/narative/gatsby-starter-novela) makes it easy to start publishing beautiful articles and stories with Gatsby.

## Additional features in this repo

- [Cypress](https://cypress.io/) and [Cypress-axe](https://github.com/avanslaars/cypress-axe) set up for accessibility testing
- [Chakra-UI](https://chakra-ui.com/) component library

### Accessibility resources

- [Gatsby Accessibility Workshop materials](https://github.com/marcysutton/gatsby-a11y-workshop)
- [Making Your Gatsby Site Accessible](https://www.gatsbyjs.org/docs/making-your-site-accessible/)
- [End-to-End Testing in Gatsby](https://www.gatsbyjs.org/docs/end-to-end-testing/)
- [React Accessibility Docs](https://reactjs.org/docs/accessibility.html)
- [Additional Accessibility Resources](https://marcysutton.com/web-accessibility-resources/)

## Using this starter

This guide will take you through setting up Novela with Gatsby Starter Novela.

### Step 1: Starter installation

##### With `gatsby-cli`:

```sh
gatsby new novela-site https://github.com/narative/gatsby-starter-novela
```

##### With `git clone`:

```sh
git clone git@github.com:narative/gatsby-starter-novela.git novela-site

cd novela-site

yarn
```

### Step 2: Develop & Build

Once installed or cloned locally and all packages are installed you can begin developing your site.

```sh
# Run localhost
yarn dev

# Build your Gatsby site
yarn build
```

If wanting to use Netlify CMS as the content editor, then you need to be run the proxy in another terminal tab. Then visit
http://localhost:8000/admin to view the editor.
```sh
# Run proxy
yarn proxy
```

### Step 3: Run tests

Run end-to-end accessibility tests with Cypress.

```sh
yarn run test:e2e
```

Tests can also be run in a continuous integration environment without the Cypress UI:

```sh
yarn run test:e2e:ci
```

### Novela help

If you don't have *yarn* installed follow the [yarn getting started guide](https://classic.yarnpkg.com/en/docs/getting-started) 

For more information visit the original [Theme repository](https://github.com/narative/gatsby-theme-novela)

