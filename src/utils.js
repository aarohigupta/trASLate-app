// Define a labelmap
const labelmap = {
    1: {name:'hello', color: 'red'},
    2: {name:'thank you', color: 'blue'},
    3: {name:'I love you', color: 'green'},
    4: {name:'yes', color: 'yellow'},
    5: {name:'no', color: 'pink'}
}

// define a drawing function
const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
    for (let i = 0; i <= boxes.length; i++) {
        if (boxes[i] && classes[i] && scores[i] > threshold) {
            const [y, x, height, width] = boxes[i]
            const text = classes[i]
            // Set styling
            ctx.strokeStyle = labelmap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '18px Arial'
            // Draw rectangles and text
            ctx.beginPath()
            ctx.fillText(labelmap[text]['name'] + ' - ' + Math.round(scores[i]*100) + '%', x * imgWidth, y * imgHeight - 5)
            ctx.rect(x * imgWidth, y * imgHeight, width * imgWidth / 2, height * imgHeight / 1.5)
            ctx.stroke()
        }
    }
}