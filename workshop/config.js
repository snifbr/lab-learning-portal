var google_analytics = `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-135921114-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-XXXXXXXXX-1');
</script>
`;

var config = {
    site_title: 'Hands-on Portal',

    // analytics: google_analytics,

    variables: [
        {
            name: 'name',
            content: 'value'
        }
    ]
};

module.exports = config;
