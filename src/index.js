/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var triangles = 0;

  for (var i = 0; i < preferences.length; i++) {
    var l1 = preferences[i];
    var l2 = preferences[l1-1];
    var l3 = preferences[l2-1]

    if (i+1 == l3 && l1 != l2 && l2 != l3) {
      triangles += 1 ;
    }
  }

  return triangles/3;
};
