require.include('./module-a')

var page = 'subpageA'

if (page === 'subpageA') {
  import(/* webpackChunkName:'subpageA' */'./subpage-a').then(function(subPageA) {
    console.log(subpageA)
  })
} else if (page === 'subpageB') {
  import(/* webpackChunkName:'subpageA' */'./subpage-b').then(function(subPageB) {
    console.log(subpageB)
  })
}

require.ensure([], function() {
  var _ = require('lodash')
  _.join([1, 2, 3], ',')
}, 'vendor')

export default 'pageA'
