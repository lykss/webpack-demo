import * as _ from 'lodash'
var page = 'subpageA'

if (page === 'subpageA') {
  import(/* webpackChunkName:'subpageA' */'./subpage-a').then(function(subPageA) {
    console.log(subpageA)
  })
} else if (page === 'subpageB') {
  import(/* webpackChunkName:'subpageB' */'./subpage-b').then(function(subPageB) {
    console.log(subpageB)
  })
}

export default 'pageA'
