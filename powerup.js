TrelloPowerUp.initialize({
  'board-buttons': function(t) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/1680/1680899.png',
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
