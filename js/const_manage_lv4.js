var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: '# of Tomatoes',
      data: [86, 14],
      backgroundColor: [
        '#FD6A51',
        '#E5E5E5'
      ],
      borderWidth: 2,
      weight: 100
    }]
  },
    options: {
        cutout: 55,
        elements: {
          center: {
            text: 'Red is 2/3 the total numbers',
            color: '#FF6384', // Default is #000000
            fontStyle: 'Arial', // Default is Arial
            sidePadding: 50, // Default is 20 (as a percentage)
            minFontSize: 50, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 50 // Default is 25 (in px), used for when text wraps
          }
        },
        borderWidth: 100
  }
}
);

