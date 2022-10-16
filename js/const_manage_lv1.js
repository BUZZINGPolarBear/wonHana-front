var ctx = document.getElementById("myChart").getContext('2d');
const bottomIconFirst = document.getElementById("bottom-icon-first")
const bottomIconSecond = document.getElementById("bottom-icon-second")
const bottomIconThird = document.getElementById("bottom-icon-third")

bottomIconFirst.onclick = () => {
  location.href = "/";
}

bottomIconSecond.onclick = () => {
location.href = "/cost-manage";
}

bottomIconThird.onclick = ()=>{
  location.href = "/bankruptcy-prevent"
}

var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: '# of Tomatoes',
      data: [15, 85],
      backgroundColor: [
        '#1DCB9D',
        '#E5E5E5'
      ],
      borderWidth: 2,
      weight: 100
    }]
  },
    options: {
        cutout: 55,
        borderWidth: 100
  }
}
);

