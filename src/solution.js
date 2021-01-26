const experimentData = [
  {
    vesselId: 3,
    vesselVolume: 250,
    cellDensity: 10,
    cellDensityUnits: 'cells/ml',
    time: '2020-03-05 19:00:00+00',
  },
  {
    vesselId: 2,
    vesselVolume: 600,
    cellDensity: 10,
    cellDensityUnits: 'cells/ml',
    time: '2020-03-05 20:00:00+00',

  },
  {
    vesselId: 9,
    vesselVolume: 800,
    cellDensity: 10,
    cellDensityUnits: 'cells/ml',
    time: '2020-03-05 18:00:00+00',
  }
];

function solution(data) {

    let newData = {}

    for (obj of data) {
        let newKey = obj['vesselId']
        let time = obj.time
        let cellCount = (obj.vesselVolume * obj.cellDensity)
        let values = [ {
            time: time,
            cellCount: cellCount
            }
        ]
        newData[newKey] = values;
    }
    return newData;
}

solution(experimentData);
