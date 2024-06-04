// Nomad Class
class Nomad {
  constructor() {
  }
}

class Watcher extends Nomad {
}

/**
 * Self Invoked Function
 */
(function(){
  var nomad = new Nomad();
  var watcher = new Watcher();
})();
