// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.pageAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('de-invisioning ' + tab.url + ' !');
  chrome.tabs.executeScript(tab.id, {
    file: 'content_hidenavs.js'
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url /* && tab.url.indexOf('https://projects.invisionapp.com/') === 0 */ ) {
        chrome.pageAction.show(tabId);
    }
});
