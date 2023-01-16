# Link In Bio Template

## Getting Started

You can run the app in dev mode with the following command:

```
npm run dev
```

Additionally, you can create a production build by running:

```
npm run build
```

## Config

The config has the following properties:

### Links (required)

An array of `Link` objects. Each link must contain an `href` and `title` property, like so:

```js
{
  links: [
    {
      href: "https://tiktok.com",
      title: "Follow me on TikTok",
    },
  ];
}
```

### `avatarUrl` (required)

The URL to profile picture.

### `siteName` (required)

The name of your site. This will be used if you do not specify a logo, and in the site's `<title>` if `siteTitle` is not specified.

### `siteTitle`

Used for the site's `<title>`

### `siteDescription`

Used for the site's mete description

### `logoLightUrl`

The URL for the light mode logo (Please note the `logoWidth` and `logoHeight` are required to specify a logo)

### `logoDarkUrl`

The URL for the dark mode logo (Please note the `logoWidth` and `logoHeight` are required to specify a logo)

### `logoWidth`

The width you want to set for the logo. This is used to prevent Cumulative Layout Shift.

### `logoHeight`

The height you want to set for the logo. This is used to prevent Cumulative Layout Shift.

### `showLinkFavicons`

A boolean to indicate if you want the link's favicon to display next to the text.
