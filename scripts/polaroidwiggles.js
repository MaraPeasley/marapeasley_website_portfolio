document.querySelector('.backpolaroid').addEventListener('mouseover', function () {
    this.style.transform = 'rotate(15deg)';
    this.style.zIndex = '100';
});

document.querySelector('.backpolaroid').addEventListener('mouseout', function () {
    this.style.transform = '';
    this.style.zIndex = '1';
});



document.querySelector('.frontpolaroid').addEventListener('mouseover', function () {
    this.style.transform = 'rotate(2deg)';
});

document.querySelector('.frontpolaroid').addEventListener('mouseout', function () {
    this.style.transform = '';
});



document.querySelector('.leftpostcard').addEventListener('mouseover', function () {
    this.style.transform = 'rotate(12deg)';
});

document.querySelector('.leftpostcard').addEventListener('mouseout', function () {
    this.style.transform = '';
});



document.getElementById('heropolaroid').addEventListener('mouseover', function () {
    this.style.transform = 'rotate(-15deg)';
});

document.getElementById('heropolaroid').addEventListener('mouseout', function () {
    this.style.transform = '';
});



document.querySelector('.detailscard').addEventListener('mouseover', function () {
    this.style.transform = 'rotate(-3deg)';
});

document.querySelector('.detailscard').addEventListener('mouseout', function () {
    this.style.transform = '';
});