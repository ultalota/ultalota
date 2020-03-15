const year = new Date().getFullYear()

module.exports = {
  siteTitle: "UltaLota", // Site title.
  siteTitleAlt: "UltaLota", // Alternative site title for SEO.
  siteLogo: "/icons/icon-512x512.png", // Logo used for SEO and manifest.
  siteUrl: "https://ultalota.com", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-business/.
  siteDescription: "UltaLota is the personal blog of Raman Sharma.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml",
  googleTagManagerID: process.env.GTM_ID || "", // GTM tracking ID.
  disqusShortname: process.env.DISQUS_KEY || "ultalota", // Disqus shortname.
  userName: "Raman Sharma",
  userTwitter: "ulta_lota",
  userLocation: "Delhi NCR, India",
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/ulta_lota",
      iconClassName: "fab fa-twitter",
    },
  ],
  copyright: `Copyright © Ultalota ${year}. All Rights Reserved.`, // Copyright string for the footer of the website and RSS feed.
  themeColor: "#ff470f", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff", // Used for setting manifest background color.
}
