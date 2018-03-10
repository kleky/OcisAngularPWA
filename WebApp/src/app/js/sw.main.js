// register the service worker if available
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function (reg) {
    console.log('Successfully registered service worker', reg);
  }).catch(function (err) {
    console.warn('Error whilst registering service worker', err);
  });
}

window.addEventListener('online', function (e) {
  // re-sync data with server
  console.log("You are online");
  //  Page.hideOfflineWarning();
  //  Incidents.loadData();
}, false);

window.addEventListener('offline', function (e) {
  // queue up events for server
  console.log("You are offline");
  //  Page.showOfflineWarning();
}, false);


//Incidents.loadData(navigator.onLine);


// set knockout view model bindings
//ko.applyBindings(Page.vm);
