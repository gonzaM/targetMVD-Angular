const getErrorMessages = function() {
 return function(errors) {
   var messages = [];
   if (angular.isArray(errors)) {
     errors.map(function(e) {
       if (angular.isString(e)) {
         messages.push(e.replace(/_/g, ' '));
       } else {
         for (var key in e) {
           if (e[key].length > 0) {
             messages.push(key.replace(/_/g, ' ') + ' ' + e[key][0]);
           }
         }
       }
     });
   } else if (angular.isObject(errors)) {
     for (var key in errors) {
       if (errors[key].length > 0) {
         messages.push(key.replace(/_/g, ' ') + ' ' + errors[key][0]);
       }
     }
   } else if (angular.isString(errors)) {
     messages.push(errors);
   }
   return messages;
 };
}

export { getErrorMessages }
