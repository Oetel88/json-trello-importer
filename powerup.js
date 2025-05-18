TrelloPowerUp.initialize({
  'board-buttons': function(t) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/1680/1680899.png',
      text: 'Import JSON',
      callback: function(t) {
        return t.modal({
          url: 'import.html',
          accentColor: '#0079BF',
          height: 600,
          fullscreen: false,
          title: 'JSON Import'
        });
      }
    }];
  }
});
