const performance = fragmentElement.querySelector('.performance');

const closedSalesDonutChart = bb.generate({
  data: {
    columns: [['Sales Closed', 12 / 25], ['Sales Unclosed', (25 - 12) / 25]],
    colors: {
      'Sales Closed': '#FFB46E',
      'Sales Unclosed': '#FFE9D3'
    },
    order: 'asc',
    type: 'donut'
  },
  donut: {
    label: {
      show: false
    },
    width: 13
  },
  legend: {
    hide: true
  },
  bindto: '#closedSalesDonutChart'
});

const carsSoldDonutChart = bb.generate({
  data: {
    columns: [['Car Sold', 31 / 40], ['Car Unsold', (40 - 31) / 40]],
    colors: {
      'Car Sold': '#50D2A0',
      'Car Unsold': '#CBF1E3'
    },
    order: 'desc',
    type: 'donut'
  },
  donut: {
    label: {
      show: false
    },
    width: 13
  },
  legend: {
    hide: true
  },
  bindto: '#carsSoldDonutChart'
});
