// initial count
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")

var bdy = document.body;
var colorShades = ["#066877","#097F92","#0B8DA2","#0EA3BB","#11BAD5","#0AC5A3","#0CDF89","#0DC177","#0BA465","#0A7F4F","#07643E"];


btns.forEach(function (btn) {
	btn.addEventListener('click', function(e){
		const styles = e.currentTarget.classList;
		if(styles.contains('decrease')){
			count--;
		} 
		else
			if(styles.contains('increase')){
				count++;
			}
			else
				if(styles.contains('reset')){
					count = 0;
				}
		if(count < 0){
			value.style.color = "red";
		}
		else if(count > 0){
			value.style.color = "green";
		}
		else {
			value.style.color = "blue";
		}
		
		if(count == 0)
			bdy.style.backgroundColor = colorShades[5];
		else if(count < 0)
		{
				if(count > -5)
					bdy.style.backgroundColor = colorShades[4];
				else if(count > -10)
						bdy.style.backgroundColor = colorShades[3];
					else if(count > -15)
							bdy.style.backgroundColor = colorShades[2];
						else if(count > -20)
								bdy.style.backgroundColor = colorShades[1];
							else if(count > -25)
									bdy.style.backgroundColor = colorShades[0];
		}
			 else
				 if(count < 5)
					bdy.style.backgroundColor = colorShades[6];
				else if(count < 10)
						bdy.style.backgroundColor = colorShades[7];
					else if(count < 15)
							bdy.style.backgroundColor = colorShades[8];
						else if(count < 20)
								bdy.style.backgroundColor = colorShades[9];
							else if(count < 25)
									bdy.style.backgroundColor = colorShades[10];
		
		value.textContent = count;
	});
});