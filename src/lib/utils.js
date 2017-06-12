export const formatDigits = (number, length=2)=> {
	return number >= 10 ** (length-1)
		? number
		: `0${number}`
}

export const getFormattedDate = (date)=> {
	if(typeof date === 'string') date = new Date(date)
	return `${formatDigits(date.getDate())}/${formatDigits(date.getMonth())}/${date.getFullYear()}` +
			` ${formatDigits(date.getHours())}:${formatDigits(date.getMinutes())}`;
}


export const getSiblingIndex=(elem)=>{
	let index = 0;
	let prevElement = elem.previousSibling;
	while (prevElement){
		prevElement = prevElement.previousSibling;
		index++;
	}

	return index;
}