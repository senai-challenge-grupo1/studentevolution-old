// angular.module("StudentEvolution")
// .factory('userApi', function() {
//   return {
//     insert: function(user) {
//       $.ajax({
//         method: "POST",
//         url: "http://localhost:8000/api/usuarios",
//         cache: false,
//         data: user,
//         success: function(result) {
//           return result;
//         }
//       });
//     },

//     select: function() {
//       $.ajax({
//         method: "GET",
//         url: "http://localhost:8000/api/usuarios",
//         cache: false,
//         success: function(result) {
//           return result;
//         }
//       });
//     }
//   };
// });

// var mock, notify;
// beforeEach(module('StudentEvolution'));
// beforeEach(function() {
//   mock = {alert: jasmine.createSpy()};

//   module(function($provide) {
//     $provide.value('$window', mock);
//   });

//   inject(function($injector) {
//     notify = $injector.get('notify');
//   });
// });

// it('should not alert first two notifications', function() {
//   notify('one');
//   notify('two');

//   expect(mock.alert).not.toHaveBeenCalled();
// });

// it('should alert all after third notification', function() {
//   notify('one');
//   notify('two');
//   notify('three');

//   expect(mock.alert).toHaveBeenCalledWith("one\ntwo\nthree");
// });

// it('should clear messages after alert', function() {
//   notify('one');
//   notify('two');
//   notify('third');
//   notify('more');
//   notify('two');
//   notify('third');

//   expect(mock.alert.calls.count()).toEqual(2);
//   expect(mock.alert.calls.mostRecent().args).toEqual(["more\ntwo\nthird"]);
// });