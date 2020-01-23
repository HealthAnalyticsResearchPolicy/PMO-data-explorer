var pmo = (function(){
  var returnData = function(){
    return [
      {
        "pmoID":1,
        "pmoName":"Cannabis Use",
        "description":"How often cannabis was used in the last year",
        "tags": ['Blaze','blunt','bong','cannabanoids','cannabis','cannabis brownies','cannabis candy','cannabis cookies','cannabis drink','cannabis food','cannabis tea','dabbing','grass','hash','hashish','joint','marijuana','pot','smoking','weed' ],
        "estimates": {
          "bySex": {
              "labels": [ 'Did not use','Once or twice','Three or more times' ],
              "series": [ { "name": "Durham Region Male", "data": [74,5,18], "cl": [[83,66],[7,2],[27,10]],"notes": [null,'Interpret with caution as the estimate has high sampling variability','Interpret with caution as the estimate has high sampling variability'] },{ "name": "Durham Region Female", "data": [82,7,10], "cl": [[88,77],[10,3],[14,6]],"notes": [null,'Interpret with caution as the estimate has high sampling variability','Interpret with caution as the estimate has high sampling variability'] },{ "name": "Ontario Male", "data": [79,5,15], "cl": [[82,76],[6,4],[16,13]],"notes": [null,null,null] },{ "name": "Ontario Female", "data": [81,7,11], "cl": [[84,79],[8,6],[13,9]],"notes": [null,null,null] } ]
          },
          "byGrade": {
              "labels": [ 'Did not use','Once or twice','Three or more times' ],
              "series": [ { "name": "Durham Region Grade 7", "data": [96,null,null], "cl": [[100,93],[null,null],[null,null]],"notes": [null,'Unreliable and not releasable','Unreliable and not releasable'] },{ "name": "Durham Region Grade 8", "data": [96,null,null], "cl": [[98,95],[null,null],[null,null]],"notes": [null,'Unreliable and not releasable','Unreliable and not releasable'] },{ "name": "Durham Region Grade 9", "data": [93,null,null], "cl": [[98,88],[null,null],[null,null]],"notes": [null,'Unreliable and not releasable','Unreliable and not releasable'] },{ "name": "Durham Region Grade 10", "data": [79,8,null], "cl": [[90,68],[13,3],[null,null]],"notes": [null,'Interpret with caution as the estimate has high sampling variability','Unreliable and not releasable'] },{ "name": "Durham Region Grade 11", "data": [66,8,22], "cl": [[78,53],[11,4],[34,10]],"notes": [null,'Interpret with caution as the estimate has high sampling variability','Interpret with caution as the estimate has high sampling variability'] },{ "name": "Durham Region Grade 12", "data": [53,11,35], "cl": [[65,41],[19,4],[51,20]],"notes": [null,'Interpret with caution as the estimate has high sampling variability','Interpret with caution as the estimate has high sampling variability'] },{ "name": "Ontario Grade 7", "data": [97,null,null], "cl": [[98,96],[null,null],[null,null]],"notes": [null,'Unreliable and not releasable','Unreliable and not releasable'] },{ "name": "Ontario Grade 8", "data": [96,1,null], "cl": [[98,95],[2,0],[null,null]],"notes": [null,'Interpret with caution as the estimate has high sampling variability','Unreliable and not releasable'] },{ "name": "Ontario Grade 9", "data": [89,4,5], "cl": [[91,87],[5,3],[7,3]],"notes": [null,'Interpret with caution as the estimate has high sampling variability',null] },{ "name": "Ontario Grade 10", "data": [80,7,13], "cl": [[82,77],[8,5],[15,10]],"notes": [null,null,null] },{ "name": "Ontario Grade 11", "data": [70,9,20], "cl": [[76,65],[12,6],[25,15]],"notes": [null,null,null] },{ "name": "Ontario Grade 12", "data": [61,9,29], "cl": [[66,56],[11,8],[34,24]],"notes": [null,null,null] } ],
          }
        }
      },
      {
        "pmoID":2,
        "pmoName":"Opioid Use",
        "description":"How often opioids were used in the past year",
        "tags": ['Codeine','OxyNeo','Percocet','Percodan','Tylenol 3','addiction','drug problem','heroin','opioids','pain relief pills' ],
        "estimates": {
          "bySex": {
              "labels": [ 'Did not use','Once or twice','Three or more times' ],
              "series": [ { "name": "Durham Region Male", "data": [90,null,4], "cl": [[94,85],[null,null],[5,2]],"notes": [null,'Unreliable and not releasable','Interpret with caution as the estimate has high sampling variability'] },{ "name": "Durham Region Female", "data": [91,4,5], "cl": [[93,88],[6,2],[6,3]],"notes": [null,'Interpret with caution as the estimate has high sampling variability','Interpret with caution as the estimate has high sampling variability'] },{ "name": "Ontario Male", "data": [89,4,6], "cl": [[91,88],[5,3],[7,5]],"notes": [null,null,null] },{ "name": "Ontario Female", "data": [88,5,6], "cl": [[90,87],[6,4],[7,5]],"notes": [null,null,null] } ]
          },
          "byGrade": {
              "labels": [ 'Did not use','Once or twice','Three or more times' ],
              "series": [ { "name": "Durham Region Grade 7", "data": [91,5,null], "cl": [[94,88],[8,2],[null,null]],"notes": [null,'Interpret with caution as the estimate has high sampling variability','Unreliable and not releasable'] },{ "name": "Durham Region Grade 8", "data": [93,4,null], "cl": [[96,91],[7,2],[null,null]],"notes": [null,'Interpret with caution as the estimate has high sampling variability','Unreliable and not releasable'] },{ "name": "Durham Region Grade 9", "data": [92,null,6], "cl": [[95,88],[null,null],[8,3]],"notes": [null,'Unreliable and not releasable','Interpret with caution as the estimate has high sampling variability'] },{ "name": "Durham Region Grade 10", "data": [90,null,null], "cl": [[96,83],[null,null],[null,null]],"notes": [null,'Unreliable and not releasable','Unreliable and not releasable'] },{ "name": "Durham Region Grade 11", "data": [91,null,null], "cl": [[98,83],[null,null],[null,null]],"notes": [null,'Unreliable and not releasable','Unreliable and not releasable'] },{ "name": "Durham Region Grade 12", "data": [86,null,5], "cl": [[95,77],[null,null],[7,2]],"notes": [null,'Unreliable and not releasable','Interpret with caution as the estimate has high sampling variability'] },{ "name": "Ontario Grade 7", "data": [91,4,4], "cl": [[94,88],[5,2],[5,2]],"notes": [null,'Interpret with caution as the estimate has high sampling variability','Interpret with caution as the estimate has high sampling variability'] },{ "name": "Ontario Grade 8", "data": [91,4,4], "cl": [[94,88],[6,2],[6,3]],"notes": [null,'Interpret with caution as the estimate has high sampling variability','Interpret with caution as the estimate has high sampling variability'] },{ "name": "Ontario Grade 9", "data": [89,6,5], "cl": [[91,86],[7,4],[7,4]],"notes": [null,null,'Interpret with caution as the estimate has high sampling variability'] },{ "name": "Ontario Grade 10", "data": [87,5,8], "cl": [[89,84],[7,3],[10,6]],"notes": [null,'Interpret with caution as the estimate has high sampling variability',null] },{ "name": "Ontario Grade 11", "data": [88,6,6], "cl": [[90,86],[7,4],[8,4]],"notes": [null,null,null] },{ "name": "Ontario Grade 12", "data": [89,5,6], "cl": [[91,86],[7,3],[8,4]],"notes": [null,'Interpret with caution as the estimate has high sampling variability',null] } ],
          }
        }
      },
    ]
  }
  return {
    getData: returnData
  };
})();
