angular.module('followerList').factory('APIservice', ['$resource',
  function($resource) {

    // console.log($resource);
    return $resource('', {}, {
      get_followers: { method: 'GET',isArray: true, url: 'https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/9667fc19a0f89193e894da7aaadf6a4b7758b45e/twubric.json' },
    





    });
  }
]);
  