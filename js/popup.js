var but = document.querySelector('button');
but.addEventListener("click",change);

function change() {


    var config = {
        mode: "fixed_servers",
        rules: {
          proxyForHttp: {
            scheme: "socks5",
            host: "1.2.3.4"
          },
          bypassList: ["foobar.com"]
        }
      };
      chrome.proxy.settings.set(
          {value: config, scope: 'regular'},
          function() {});

 }