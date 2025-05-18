/* powerup.js */
window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: 'Importeer JSON',
      callback: function(t) {
        return t.popup({
          title: 'JSON import',
          url: 'index.html',
          height: 250
        });
      }
    }];
  }
});
