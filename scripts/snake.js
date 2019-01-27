class Snake {
    constructor() {
        //The tail is the beginning of the array, head is at the end of the array
        this.position = []
        this.turnPoints = []
        
    }

    initSnake() {
        let block = {
            
        }
        this.position.push(block)
    }

    //Getter
    get position() {
        return this.position
    }

    get length() {
        return this.position.length
    }

    addTurnpoint(turnPoint) {
        this.turnPoints.push(turnPoint)
    }

    //Setter
    set position(position) {
        this.position = position
    }

    /**
     * Snake should grow by one
     */
    eatFood() {
        
    }


    moveSnake() {
        for (let i = 0; i<this.position.length; i++) {
            let block = this.position[i]
            
        }
    }

    moveBlock(block, direction) {
        let i = block.position.i
        let j = block.position.j
        switch(direction) {
            case 'left':
                i -= 1
            case 'right':
                i += 1
            case 'up':
                j += 1
            case 'down':
                j -= 1
        }
        block.position.parsedPosition = "i" + i + "j" + j
    }

    /**
     * Returns true if snake hits its tail
     */

    

    
}