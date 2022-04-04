const reference = document.getElementById('thermomter-id');
reference.innerHTML = '&#xf2cb';
reference.style.color = 'white';
const data = [
	{
		innerHtml: '&#xf2ca',
		timing: 1000,
	},
	{
		innerHtml: '&#xf2c9',
		timing: 2000,
	},
	{
		innerHtml: '&#xf2c8',
		timing: 3000,
	},
	{
		innerHtml: '&#xf2c7',
		timing: 4000,
		className: '#d63031',
	},
];
const runTimeOut = () => {
	data.map(({ innerHtml, timing, className }) => {
		setTimeout(() => {
			reference.innerHTML = innerHtml;
			reference.style.color = className || '#f8b627';
		}, timing);
	});
};
runTimeOut();
setInterval(runTimeOut, 5000);
