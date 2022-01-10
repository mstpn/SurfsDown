// From https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/parameter-reference1
twttr.widgets.createShareButton(
  "https:\/\/dev.twitter.com\/web\/tweet-button",
  document.getElementById("tweet-container"),
  {
    size: "large",
    text: "custom share text",
    hashtags: "example,demo",
    via: "twitterdev",
    related: "twitterapi,twitter"
  }
);