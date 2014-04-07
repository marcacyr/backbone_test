  // js/routers/router.js

  // Todo Router
  // ----------

  // var Workspace = Backbone.Router.extend({
  //   routes:{
  //     '*filter': 'setFilter'
  //   },

  //   setFilter: function( param ) {
  //     // Set the current filter to be used
  //     if (param) {
  //       param = param.trim();
  //     }
  //     app.TodoFilter = param || '';

  //     // Trigger a collection filter event, causing hiding/unhiding
  //     // of Todo view items
  //     app.Todos.trigger('filter');
  //   }
  // });

  // app.TodoRouter = new Workspace();
  // Backbone.history.start();

  /*global Backbone */
var app = app || {};

(function () {
  'use strict';

  // Todo Router
  // ----------
  var TodoRouter = Backbone.Router.extend({
    routes: {
      '*filter': 'setFilter'
    },

    setFilter: function (param) {
      // Set the current filter to be used
      app.TodoFilter = param || '';

      // Trigger a collection filter event, causing hiding/unhiding
      // of Todo view items
      app.todos.trigger('filter');
    }
  });

  app.TodoRouter = new TodoRouter();
  Backbone.history.start();
})();