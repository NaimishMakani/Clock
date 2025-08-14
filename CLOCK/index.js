const digitPatterns =
{
    "0" : [1,1,1, 1,0,1, 1,0,1, 1,0,1, 1,1,1],
    "1" : [0,1,0, 1,1,0, 0,1,0, 0,1,0, 1,1,1],
    "2" : [1,1,1, 0,0,1, 1,1,1, 1,0,0, 1,1,1],
    "3" : [1,1,1, 0,0,1, 1,1,1, 0,0,1, 1,1,1],
    "4" : [1,0,1, 1,0,1, 1,1,1, 0,0,1, 0,0,1],
    "5" : [1,1,1, 1,0,0, 1,1,1, 0,0,1, 1,1,1],
    "6" : [1,1,1, 1,0,0, 1,1,1, 1,0,1, 1,1,1],
    "7" : [1,1,1, 0,0,1, 0,1,0, 1,0,0, 1,0,0],
    "8" : [1,1,1, 1,0,1, 1,1,1, 1,0,1, 1,1,1],
    "9" : [1,1,1, 1,0,1, 1,1,1, 0,0,1, 1,1,1]
};

function createDigitalElement(digit) 
{
    const pattern = digitPatterns[digit];
    const digitDiv = document.createElement('div');
    digitDiv.className = 'digit';

    pattern.forEach(cell => {
        const dot = document.createElement('div');
        dot.className = 'clock-dot' + (cell ? ' on' : '');
        digitDiv.appendChild(dot);
    });

    return digitDiv;
}

function updateClock() 
{
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB', { hour12: false }).replace(/:/g, '');

    const clockContainer = document.getElementById('Clock');
    clockContainer.innerHTML = '';

    for (let i = 0; i < timeStr.length; i++)
    {
        const digitEl = createDigitalElement(timeStr[i]);
        clockContainer.appendChild(digitEl);

        if (i === 1 || i === 3) 
        {
            const sep = document.createElement('div');
            sep.className = 'separator';
            sep.textContent = ':';
            clockContainer.appendChild(sep);
        }
    }
}

updateClock();
setInterval(updateClock, 1000);