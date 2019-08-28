const salesForecast = fragmentElement.querySelector('.sales-forecast');

const salesForecastChart = bb.generate({
  data: {
    columns: [
      ['Sales', 12, 13, 8, 4, 13, 20, 15, 13, 10, 19, 15, 17],
      [
        'Projection',
        [7, 7, 7],
        [18, 18, 18],
        [11, 11, 11],
        [7, 7, 7],
        [10, 10, 10],
        [17, 17, 17],
        [15, 13, 10],
        [17, 15, 14],
        [15, 13, 10],
        [16, 15, 14],
        [20, 18, 15],
        [25, 23, 16]
      ]
    ],
    colors: {
      Sales: '#FF5F5F',
      Projection: '#AF78FF'
    },
    types: {
      Projection: 'area-line-range'
    }
  },
  axis: {
    x: {
      tick: {
        show: false
      },
      type: 'category',
      categories: [
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb'
      ]
    },
    y: {
      label: {
        text: '# of Cars Sold',
        position: 'outer-middle'
      },
      tick: {
        show: false,
        count: 5
      }
    }
  },
  grid: {
    y: {
      show: true
    }
  },
  legend: {
    padding: 4
  },
  regions: [
    {
      axis: "x",
      start: 5,
      end: 12
    }
  ],
  bindto: '#salesForecastChart'
});
