chrome.browserAction.onClicked.addListener(function(tab) {
  var redirectTo = 'https://push.dog';

  if (/^http/.test(tab.url)) {
    redirectTo = 'https://push.dog/subscribe?url=' + encodeURIComponent(tab.url);
  }

  chrome.tabs.update(tab.id,
    {
      url: redirectTo
    }
  );
});
